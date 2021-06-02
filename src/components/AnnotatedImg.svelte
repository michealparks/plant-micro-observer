<script lang='ts'>
	import { nanoid } from 'nanoid'
	import Annotation from './Annotation.svelte'
	import { stagedImage } from '../lib/stores'

	let img: HTMLImageElement

	const handleAddAnnotation = (e: MouseEvent) => {
		const rect = img.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
	
		$stagedImage.annotations = [...$stagedImage.annotations, {
			id: nanoid(),
			x,
			y,
			text: ''
		}]
	}
</script>

{#if $stagedImage !== undefined}
<section>
	<img
		bind:this={img}
		alt=''
		loading='lazy'
		src={$stagedImage.objectURL}
		on:click={handleAddAnnotation}
	/>

	{#each $stagedImage.annotations as annotation (annotation.id)}
		<Annotation
			x={annotation.x}
			y={annotation.y}
			bind:text={annotation.text} />
	{/each}
</section>
{/if}

<style>
	section {
		position: relative;
	}

	img {
		user-select: none;
		-webkit-user-select: none;
		-webkit-user-drag: none;
    width: 100%;
    margin-bottom: 5px;
  }
</style>