import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

export const newScore: Writable<[number, number, number, number]> = localStorageStore(
	'newStore',
	[0, 0, 0, 0]
);
