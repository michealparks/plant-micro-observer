<script lang="ts">
  import localforage from 'localforage'
  import { onMount } from 'svelte'
  import Images from './lib/Images.svelte'
  import Camera from './lib/Camera.svelte'
  import { images } from './lib/stores'

  onMount(async () => {
    localforage.config({
      name: 'Plant Micro Observer',
      driver: localforage.INDEXEDDB
    })

    $images = await localforage.getItem('images') || []

    images.subscribe(async (update) => {
      await localforage.setItem('images', update)
    })
  })
</script>

<main>
  <Images />
  <Camera />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
