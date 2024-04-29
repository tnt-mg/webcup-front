export interface DreamType {
  topic: string
  year: number | string
  value: string
  image: string
}

export interface DreamTypeProps {
  item: DreamType
  watermark: string
}
