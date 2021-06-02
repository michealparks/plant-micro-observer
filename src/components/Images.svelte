<script lang='ts'>
  import type { PlantData } from 'src/lib/types'
  import { filteredImages, stagedImage } from '../lib/stores'

</script>

<section>
  {#each $filteredImages as image (image.id)}
    <div on:click={() => { $stagedImage = image }}>
      <img loading='lazy' alt='Plant' src={image.objectURL} />
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
    margin: 15px 10px;
    border-radius: 5px;
    background-color: var(--light-green);
  }
</style>