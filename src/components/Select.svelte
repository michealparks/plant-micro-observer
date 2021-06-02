<script lang='ts'>
	import { createEventDispatcher } from 'svelte'

	export let options = []
	export let selectedOption = ''

	const dispatch = createEventDispatcher()
	
	const handleSelect = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement
	
		selectedOption = target.textContent.trim()

		dispatch('select', selectedOption)
	}
</script>

<section>
	{#each options as option (option)}
		<button
			id={option}
			class:selected={selectedOption === option}
			on:click={handleSelect}
		>
			{option}
		</button>
	{/each}
</section>

<style lang='scss'>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		margin: 10px 0;
	}

	button {
		padding: 8px;
		background-color: var(--light-green);
		border: 0;
		border-radius: 5px;

		&.selected {
			color: white;
			background-color: var(--dark-green);
		}
	}
</style>
