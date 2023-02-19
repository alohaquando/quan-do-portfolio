// TODO: Make color-scheme detection work
// TODO: Light - dark switcher

import { writable } from 'svelte/store';
export let colorSchemePreference = writable('system')
export let systemColorScheme = writable('');
export let colorScheme = writable('');
