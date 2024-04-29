module.exports = {
  // this will check Typescript files
  // "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",

  // This will lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    `pnpm rome format ${filenames.join(" ")} --write`,
  ],

  // this will Format MarkDown and JSON and YAML
  "**/*.(md|json|yaml|yml)": (filenames) =>
    `pnpm prettier --write ${filenames.join(" ")}`,
}
