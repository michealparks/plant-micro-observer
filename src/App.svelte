<script lang='ts'>
  import type { PlantData } from './lib/types'

  import localforage from 'localforage'
  import { onMount } from 'svelte'
  import { images } from './lib/stores'
  import Nav from './components/Nav.svelte'
  import Images from './components/Images.svelte'
  import Camera from './components/Camera.svelte'
  import EditModal from './components/Modals/Edit.svelte'

  onMount(async () => {
    localforage.config({
      name: 'Plant Micro Observer',
      driver: localforage.INDEXEDDB
    })

    const storedImages: PlantData[] = await localforage.getItem('images') || []

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

