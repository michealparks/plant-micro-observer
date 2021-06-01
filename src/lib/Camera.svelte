<script lang='ts'>
  import { images } from './stores'

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files[0]

    $images = [...$images, {
      file,
      objectURL: URL.createObjectURL(file)
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
