export type AnnotationData = {
  id: string,
  x: number,
  y: number,
  text: string
}

export type PlantData = {
  id: string
  datetime: number
  blob: Blob
  objectURL: string
  group: string
  notes: string
  annotations: AnnotationData[]
  temp: boolean | undefined
}
