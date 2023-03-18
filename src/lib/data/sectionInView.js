import { writable } from 'svelte/store';

export let sectionInView = writable('landing');
export let prevSectionInView = writable('landing');
