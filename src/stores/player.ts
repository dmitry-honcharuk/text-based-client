import { writable } from 'svelte/store';

const { update, subscribe } = writable({ name: '' });

function setPlayerName(name: string) {
  update((p) => ({ ...p, name }));
}

export const playerStore = {
  subscribe,
  setPlayerName,
};
