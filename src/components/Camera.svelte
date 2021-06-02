<script lang='ts'>
  import { nanoid } from 'nanoid'
  import { stagedImage } from '../lib/stores'
  import { utils } from '../lib/utils'

  const handleInputChange = async (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files[0]

    if (file === undefined) {
      return
    }

    const blob = await utils.fileToBlob(file)

    $stagedImage = {
      blob,
      id: nanoid(),
      datetime: utils.readableDate(),
      objectURL: URL.createObjectURL(blob),
      group: '',
      notes: '',
      annotations: [],
      temp: true
    }
    
    target.value = ''
  }
</script>

<label for='image-upload'>
  <button title='upload image' class='icon-camera' />
</label>

<input
  id='image-upload'
  type='file'
  accept='image/*'
  capture
  on:change={handleInputChange}
/>

<style lang='scss'>
  #image-upload {
    display: none;
  }

  label, button {
    height: 60px;
    width: 60px;
  }

  label {
    cursor: pointer;
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  button {
    pointer-events: none;
    border-radius: 100%;
    background-color: var(--dark-green);
    font-size: 1.5rem;
    padding: 8px;
    color: white;
    border: none;
    box-shadow: -2px 5px 157px -18px rgba(0,0,0,0.75);
  }
</style>