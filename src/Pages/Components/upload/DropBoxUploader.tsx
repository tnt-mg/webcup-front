import React, { useCallback, useRef, useState } from "react"
import { FileDrop } from "react-file-drop"
import "./upload.scss"

interface DropBoxUploaderProps {
  onDrop: (file: File) => void
  icon: React.ReactNode
  label: string
  accept: string
}

export const DropBoxUploader: React.FC<Partial<DropBoxUploaderProps>> = ({
  onDrop,
  icon,
  label,
  accept,
}) => {
  const fileInputRef = useRef<any>(null)
  const [file, setFile] = useState<File | null>(null)
  const onFileInputChange = ({ target }: any) => {
    handleFileAdded(target.files)
  }
  const onTargetClick = () => {
    if (fileInputRef.current) fileInputRef.current!.click()
  }
  const handleFileAdded = useCallback(
    (files: FileList) => {
      // console.log("file here", files)
      setFile(files[0])
      if (onDrop) {
        onDrop(files[0]!!)
      }
    },
    [onDrop]
  )
  return (
    <div className="w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
      <input
        onChange={onFileInputChange}
        ref={fileInputRef}
        type="file"
        accept={accept ?? "*/*"}
        hidden
      />
      <FileDrop
        // onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
        // onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
        // onFrameDrop={(event) => console.log('onFrameDrop', event)}
        // onDragOver={(event) => console.log('onDragOver', event)}
        // onDragLeave={(event) => console.log('onDragLeave', event)}
        targetClassName="absolute top-0 left-0 w-full flex flex-col items-center  text-center"
        draggingOverTargetClassName="shadow-lg  text-accent bg-gray-200" // TODO afaka ovaina  ho tsaratsara kokoa
        onTargetClick={onTargetClick}
        onDrop={(files, event) => handleFileAdded(files!!)}
      >
        <div className="mt-3">{icon}</div>

        {!file && (
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">
              {label ?? "Glissez-deposez vos fichier ici"}
            </span>
            <br />
            <span>ou</span>
            <br />
            <span>Cliquez pour choisir</span>
          </p>
        )}
        <div className="text-gray-500">{file && <div>{file.name}</div>}</div>
      </FileDrop>
    </div>
  )
}
