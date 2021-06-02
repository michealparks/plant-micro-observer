const intl = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'long'
})

const fileToBlob = async (file: File) => {
  const buffer = await file.arrayBuffer()
  return new Blob([new Uint8Array(buffer)], { type: file.type })
}

const readableDate = () => {
  return intl.format(new Date())
}

export const utils = {
  fileToBlob,
  readableDate
}
