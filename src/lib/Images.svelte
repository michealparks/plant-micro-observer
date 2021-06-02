<script lang='ts'>
  import { images, stagedImage } from './stores'
</script>

<section>
  {#each $images as image (image.id)}
    <div on:click={() => { $stagedImage = image }}>
      <img loading='lazy' alt='' src={image.objectURL} />
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
    overflow: hidden;
    margin: 10px 0;
    box-shadow: 2px 20px 61px -31px rgba(0,0,0,0.75);
    border-radius: 8px;
  }

  img {
    
    width: 105%;
    margin: 0;
    
  }
</style>