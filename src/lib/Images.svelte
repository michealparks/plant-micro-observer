<script lang='ts'>
  import { images } from './stores'
</script>

<section>
  {#each $images as image}
    <div style='background-image:url({image.objectURL})' />
  {/each}
</section>

<style lang='scss'>
  div {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
  }
</style>