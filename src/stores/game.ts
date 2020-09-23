import { writable } from 'svelte/store';
import { sleep } from '../utils/sleep';

type Room = {
  id: string;
  description: string;
};

type Game = {
  isStarted: boolean;
  currentRoom?: Room;
};

const initialState: Game = {
  isStarted: false,
};

const { subscribe, update } = writable(initialState);

function startGame() {
  update((state) => ({ ...state, isStarted: true }));
}

async function getCurrentRoom() {
  await sleep(300);

  const room = {
    id: 'lobby',
    description: 'You find yourself inside a big, dark and empty lobby.',
  };

  update((state) => ({
    ...state,
    currentRoom: room,
  }));

  return room;
}

export const gameStore = {
  subscribe,
  startGame,
  getCurrentRoom,
};
