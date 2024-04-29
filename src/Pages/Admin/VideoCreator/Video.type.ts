export interface VideoType {
  id?: string
  name: string
  templateName: string
  status: string
  renderId?: string
  url?: string
  metadata: any
  inputProps?: any
  files?: FileExportType
}

export interface FileExportType {
  audio: File | null
  video: File | null
  watermark: File | null
}
