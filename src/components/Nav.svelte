<script lang='ts'>
	import { searchFilter } from '../lib/stores'

	let searchValue = ''

	const handleSearch = () => {
		$searchFilter = searchValue.trim()
	}

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			const target = e.target as HTMLInputElement
			handleSearch()
			target.blur()
		}
	}

	const handleClearSearch = () => {
		$searchFilter = ''
		searchValue = ''
	}
</script>

<nav>
	<button
		title='search'
		class='icon-search'
		on:click={handleSearch}
	/>
	<div class='search'>
		<input
			id='search-input'
			type='search'
			placeholder="search"
			bind:value={searchValue}
			on:keypress={handleKeyPress}
		/>
		{#if searchValue.length > 0}
			<button
				title='clear search'
				class='icon-cross'
				on:click={handleClearSearch}
			/>
		{/if}
	</div>
</nav>

<style lang='scss'>
	nav {
		position: sticky;
		z-index: 1;
		top: 0;
		display: grid;
		place-items: center;
		grid-template-columns: 60px 1fr 60px;
		background-color: var(--neutral);
	}

	button {
		height: 60px;
		width: 60px;
		font-size: 1.5rem;
		padding: 8px;
		background: transparent;
		border: none;
	}

	input {
		width: 100%;
		height: 40px;
		padding-left: 0;
		background-color: transparent;
		font-weight: inherit;
		border: 0;
		border-radius: 0;
		border-bottom: 2px solid;
		border-color: var(--primary-dark);
		font-size: 1.1rem;
	}

	.search {
		position: relative;
		width: 100%;
	}

	.icon-cross {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: auto;
		padding: 0;
	}
</style>