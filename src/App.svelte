<script lang="ts">
  import StartingScreen from './components/StartingScreen.svelte';
  import Game from './components/Game.svelte';
  import { gameStore } from './stores/game';
  import { playerStore } from './stores/player';

  function handleGameStart({ detail }: CustomEvent<{ playerName: string }>) {
    playerStore.setPlayerName(detail.playerName);
    gameStore.startGame();
  }
</script>

<main>
  {#if !$gameStore.isStarted}
    <StartingScreen on:gameStart={handleGameStart} />
  {:else}
    <Game />
  {/if}
</main>
