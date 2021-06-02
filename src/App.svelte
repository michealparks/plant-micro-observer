<script lang='ts'>
  import type { ImageDataObject } from './lib/types'

  import localforage from 'localforage'
  import { onMount } from 'svelte'
  import { images } from './lib/stores'
  import Nav from './lib/Nav.svelte'
  import Images from './lib/Images.svelte'
  import Camera from './lib/Camera.svelte'
  import EditModal from './lib/Modals/Edit.svelte'

  onMount(async () => {
    localforage.config({
      name: 'Plant Micro Observer',
      driver: localforage.INDEXEDDB
    })

    if (process.env.NODE_ENV === 'development') {
      localforage.clear()
    }

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
  <Nav />
  <Images />
  <Camera />
  <EditModal />
</main>

