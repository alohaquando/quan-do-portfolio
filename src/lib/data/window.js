import { writable } from 'svelte/store';

export let scrollY = writable(0);
export let innerHeight = writable(0);
export let innerWidth = writable(0);
export let scrollYBottom = writable(0);
