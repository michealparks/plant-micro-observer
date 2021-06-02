const fileToBlob = async (file: File) => {
  const buffer = await file.arrayBuffer()
  return new Blob([new Uint8Array(buffer)], { type: file.type })
}

export const utils = {
  fileToBlob
}
