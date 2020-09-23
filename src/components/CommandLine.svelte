<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { autofocus } from '../actions/autofocus';

  const dispatch = createEventDispatcher<{ command: string }>();

  let command = '';

  function handleSubmit() {
    dispatch('command', command);
    command = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    <div>What you gonna do?</div>
    <input type="text" bind:value={command} use:autofocus />
  </label>
  <button type="submit" disabled={!command}>Try</button>
</form>
