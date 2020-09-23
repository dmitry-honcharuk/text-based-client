<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { autofocus } from '../actions/autofocus';
  import Box from './Box.svelte';

  const dispatch = createEventDispatcher<{
    gameStart: { playerName: string };
  }>();

  let playerName = '';

  function handleGameStart() {
    dispatch('gameStart', { playerName });

    playerName = '';
  }
</script>

<style src="./ss.css">
</style>

<Box>
  <h1>Start a game</h1>
</Box>
<div class="root">
  <div class="column">
    <h2>Create a new game</h2>
    <footer><button class="action">Create</button></footer>
  </div>
  <div class="separator" />
  <div class="column">
    <h2>Connect to existing one</h2>
    <form on:submit|preventDefault={handleGameStart}>
      <div>
        <label>
          Player name <input type="text" bind:value={playerName} use:autofocus />
        </label>
      </div>
      <footer>
        <button
          class="action"
          type="submit"
          disabled={!playerName}>Connect</button>
      </footer>
    </form>
  </div>
</div>
