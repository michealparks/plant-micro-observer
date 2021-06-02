<script lang='ts'>
  import { fade, fly } from 'svelte/transition'
  import { PLANT_GROUPS } from '../constants'
  import { images, stagedImage } from '../stores'

  const clearStaged = () => {
    $stagedImage = undefined
  }

  const handleAddImage = () => {
    $images = [...$images, $stagedImage]
    clearStaged()
  }

  const handleBackgroundClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      clearStaged()
    }
  }
</script>

{#if $stagedImage !== undefined}
  <div
    transition:fade={{ duration: 300 }}
    on:click={handleBackgroundClick}
    class='background'
  >
    <button
      title='exit'
      class='icon-cross'
      on:click={clearStaged}
    />

    <section
      transition:fly={{ y: 20, duration: 300 }}
      class='modal'
    >
      <img alt='' src={$stagedImage.objectURL} />

      <input
        list='plant-group-list'
        type='text'
        placeholder='Plant Group'
      />
      <datalist id='plant-group-list'>
        {#each PLANT_GROUPS as group}
          <option>{group}</option>
        {/each}
      </datalist>

      <textarea placeholder="Notes" />

      <button class='submit' on:click={handleAddImage}>
        Upload
        <span class='icon-up' />
      </button>
    </section>
  </div>
{/if}


<style lang='scss'>
  .background {
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(4px);
  }

  .icon-cross {
    background: transparent;
    border: none;
    font-size: 2rem;
    position: fixed;
    top: 15px;
    right: 15px;
    color: white;
    font-weight: 100;
  }

  .modal {
    background: white;
    padding: 20px;
    margin: 60px 20px;
    border-radius: 10px;
  }

  img {
    width: 100%;
  }

  input, textarea {
    width: 100%;
    padding: 8px 12px;
    font-size: 1.1rem;
    margin: 10px 0;
  }

  .submit {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    padding: 10px 30px;
    border: 0;
    border-radius: 20px;
    color: white;
    background-color: var(--light-blue);

    span {
      margin-left: 5px;
    }
  }
</style>