// compress.js
const fs = require("fs")
const archiver = require("archiver")

const output = fs.createWriteStream("dist.zip")
const archive = archiver("zip", {
  zlib: { level: 9 }, // Sets the compression level.
})

output.on("close", function () {
  console.log(archive.pointer() + " total bytes")
  console.log(
    "Archiver has been finalized and the output file descriptor has closed."
  )
})

archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    console.warn(err)
  } else {
    throw err
  }
})

archive.on("error", function (err) {
  throw err
})

archive.pipe(output)
archive.directory("dist/", false)
archive.finalize()
