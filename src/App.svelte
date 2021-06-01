<script lang="ts">
  import type { ImageDataObject } from './lib/types'

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

    const storedImages: ImageDataObject[] = await localforage.getItem('images') || []

    for (const image of storedImages) {
      image.objectURL = URL.createObjectURL(image.blob)
    }

    $images = storedImages

    images.subscribe(async (updatedImages) => {
      await localforage.setItem('images', updatedImages)
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
