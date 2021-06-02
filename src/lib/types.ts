export type Annotation = {
  x: number,
  y: number,
  text: string
}

export type ImageDataObject = {
  id: string
  datetime: number
  blob: Blob
  objectURL: string
  group: string
  notes: string
  annotations: Annotation[]
  temp: boolean | undefined
}
