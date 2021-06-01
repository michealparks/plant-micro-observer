<script lang='ts'>
  import { images } from './stores'
  import { utils } from './utils'

  const handleInputChange = async (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files[0]

    if (file === undefined) {
      return
    }
  
    const blob = await utils.fileToBlob(file)

    $images = [...$images, {
      blob,
      objectURL: URL.createObjectURL(blob)
    }]

    target.value = ''
  }

</script>

<input
  type='file'
  accept='image/*'
  capture
  on:change={handleInputChange}
/>
