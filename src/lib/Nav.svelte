<nav>
  <button title='search' class='icon-search' />
  <input id='search-input' type='search' placeholder="search" />
  <button title='settings' class='icon-cog' />
</nav>

<style lang='scss'>
  nav {
    position: sticky;
    top: 0;
    display: grid;
    place-items: center;
    grid-template-columns: 60px 1fr 60px;
    background-color: var(--blue-grey);
  }

  button {
    height: 60px;
    font-size: 1.5rem;
    padding: 8px;
    color: white;
    background: transparent;
    border: none;
  }

  input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: white;
    font-weight: inherit;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid white;
    font-size: 1.1rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
</style>