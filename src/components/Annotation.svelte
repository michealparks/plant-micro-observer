<script lang='ts'>
	export let x: number
	export let y: number
	export let text: string

	let dragging = false

	const handleClick = (e: MouseEvent) => {
		e.stopPropagation()
	}
</script>

<div
	class='dot' 
	style='transform: translate({x}px, {y}px);'
	on:click={handleClick}
>
	<div class='arm' />
	<input bind:value={text} />
</div>

<style lang='scss'>
	.dot {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		background-color: var(--light-blue);
		border-radius: 100%;
	}

	.arm {
		position: absolute;
		left: calc(50% - 2.5px);
		top: -120%;
		width: 5px;
		height: 40px;
		background-color: var(--light-blue);
	}

	input {
		position: absolute;
		background-color: var(--light-blue);
		border: 0;
		border-radius: 5px;
		padding: 10px;
		top: -200%;
		width: 20ch;
	}
</style>