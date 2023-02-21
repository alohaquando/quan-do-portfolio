import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let colorSchemePreference = writable('');
export let colorScheme = writable('');
export let readerMode = writable(false);

if (browser) {
	colorSchemePreference.set(localStorage.getItem('colorSchemePreference') || 'system');
	colorSchemePreference.subscribe((value) => localStorage.setItem('colorSchemePreference', value));
}
