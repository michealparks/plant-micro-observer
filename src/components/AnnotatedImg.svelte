<script lang='ts'>
	import type { AnnotationData } from '../lib/types'
	import { nanoid } from 'nanoid'
	import Annotation from './Annotation.svelte'
	import { stagedImage } from '../lib/stores'

	export let annotations: AnnotationData[] = []

	const handleAddAnnotation = (e: MouseEvent) => {
		annotations = [...annotations, {
			id: nanoid(),
			x: e.clientX,
			y: e.clientY,
			text: ''
		}]
	}
</script>

<section>
	<img alt='' src={$stagedImage.objectURL} />
	<button on:click={handleAddAnnotation} class='icon-write' />

	{#each annotations as annotation (annotation.id)}
		<Annotation {...annotation} />
	{/each}
</section>

<style>
	section {
		position: relative;
	}

	img {
    width: 100%;
    margin-bottom: 5px;
  }

	button {
		position: absolute;
		bottom: 0;
		left: 10px;
	}
</style>