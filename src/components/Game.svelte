<script lang="ts">
  import { gameStore } from '../stores/game';
  import { playerStore } from '../stores/player';
  import Room from './Room.svelte';
  import CommandLine from './CommandLine.svelte';

  let currentRoom = gameStore.getCurrentRoom();

  function handlePlayerCommand({ detail: command }: CustomEvent<string>) {
    console.log(`Player ${$playerStore.name} entered:
      ${command}`);
  }
</script>

{#await currentRoom}
  ... moving into next room ...
{:then { description }}
  <Room {description} />
  <CommandLine on:command={handlePlayerCommand} />
{/await}
