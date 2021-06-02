<script lang='ts'>
  import { fade, fly } from 'svelte/transition'
  import AnnotatedImg from '../AnnotatedImg.svelte'
  import Select from '../Select.svelte'
  import { PLANT_GROUPS, REQUIRED_DATA } from '../../lib/constants'
  import { images, stagedImage } from '../../lib/stores'

  const handleSubmit = (e: Event) => {
    for (const { key, message } of REQUIRED_DATA) {
      const data = $stagedImage[key]
      if (data === '' || data === null || data === undefined) {
        return alert(message)
      }
    }

    if ($stagedImage.temp === true) {
      delete $stagedImage.temp
      $images = [$stagedImage, ...$images]
    } else {
      $images = $images
    }

    $stagedImage = undefined
  }

  const handleGroupSelect = (e) => {
    $stagedImage.group = e.detail
  }

  const handleDiscard = (e: MouseEvent) => {
    if ($stagedImage.temp !== true) {
      const { id } = $stagedImage
      const index = $images.findIndex(item => item.id === id)
      $images.splice(index, 1)
      $images = $images
    }

    $stagedImage = undefined
  }
</script>

{#if $stagedImage !== undefined}
  <div
    transition:fade={{ duration: 300 }}
    class='background'
  >
    <section
      transition:fly={{ y: 20, duration: 300 }}
      class='modal'
    >
      <AnnotatedImg />

      <div class='metadata'>
        <div>
          <small class='icon-write' />
          <small>Tap image to add annotations</small>
        </div>
        <small>{$stagedImage.datetime}</small>
      </div>

      <div class='inputs'>
        

        <Select
          selectedOption={$stagedImage.group}
          options={PLANT_GROUPS}
          on:select={handleGroupSelect}
        />

        <textarea
          placeholder='Notes'
          bind:value={$stagedImage.notes}
        />

        <div class='actions'>
          <button class='submit' on:click={handleSubmit}>
            <span class='icon-up' />
            {$stagedImage.temp ? 'Upload' : 'Update'}
          </button>

          <button class='cancel' on:click={handleDiscard}>
            <span class='icon-cross' />
            Delete
          </button>
        </div>

      </div>
    </section>
  </div>
{/if}


<style lang='scss'>
  .background {
    position: fixed;
    z-index: 2;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: white;
  }

  .metadata {
    padding: 5px 20px 0;

    div {
      margin-bottom: 10px;
    }
  }

  .inputs {
    padding: 10px 20px;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 8px 12px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .actions {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
  }

  .submit,
  .cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    font-size: 1rem;
    text-align: center;
    border: 0;
    border-radius: 20px;
    color: white;

    span {
      margin-right: 5px;
    }
  }

  .cancel {
    background-color: var(--red);
  }

  .submit {
    background-color: var(--dark-green);
  }
</style>