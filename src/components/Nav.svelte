<script lang='ts'>
  import { searchFilter } from '../lib/stores'

  const handleSearch = (e: Event) => {
    const target = e.target as HTMLInputElement
    $searchFilter = target.value.trim()
  }
</script>

<nav>
  <button
    title='search'
    class='icon-search'
  />
  <input
    id='search-input'
    type='search'
    placeholder="search"
    on:change={handleSearch}
  />
  <button
    title='settings'
    class='icon-cog'
  />
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
</style>