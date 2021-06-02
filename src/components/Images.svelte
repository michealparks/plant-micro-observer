<script lang='ts'>
  import type { ImageDataObject } from 'src/lib/types'
  import { images, searchFilter, stagedImage } from '../lib/stores'

  const imageFilter = (image: ImageDataObject) => {
    return JSON.stringify(image).includes($searchFilter)
  }

  const getImages = () => {
    if ($searchFilter === '') {
      return $images
    }

    return $images.filter(imageFilter)
  }
</script>

<section>
  {#each getImages() as image (image.id)}
    <div on:click={() => { $stagedImage = image }}>
      <img loading='lazy' alt='' src={image.objectURL} />
      <p>{image.group}</p>
    </div>
  {/each}
</section>

<style lang='scss'>
  section {
    width: 100vw;
    display: grid;
    padding: 20px;
  }

  div {
    position: relative;
    margin: 10px 0;
  }

  img {
    width: 100%;
    margin: 0;
    box-shadow: 2px 20px 61px -31px rgba(0,0,0,0.75);
    border-radius: 8px;
  }

  p {
    position: absolute;
    bottom: 0;
    padding: 8px;
    background-color: var(--light-green-2);
    color: white;
  }
</style>