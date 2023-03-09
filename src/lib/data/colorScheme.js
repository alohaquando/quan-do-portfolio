import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let colorSchemePreference = writable('dark');
export let colorScheme = writable('dark');
export let readerMode = writable(false);

if (browser) {
	colorSchemePreference.set(localStorage.getItem('colorSchemePreference') || 'dark');
	colorSchemePreference.subscribe((value) => localStorage.setItem('colorSchemePreference', value));
}

// colorSchemePreference.set(localStorage.getItem('colorSchemePreference') || 'system');

