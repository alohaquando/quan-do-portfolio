<script>
	import { colorScheme, colorSchemePreference, readerMode } from '$lib/data/colorScheme.js';
	import { colorSchemeColors } from '$lib/data/Colors.js';
	import { browser } from '$app/environment';

	let root;

	function setColorScheme() {
		if ($colorSchemePreference === 'system') {
			if (window.matchMedia('(prefers-color-scheme: light)').matches) {
				colorScheme.set('light');
			} else {
				colorScheme.set('dark');
			}
		} else {
			colorScheme.set($colorSchemePreference);
		}
	}

	function setTailwindColorScheme() {
		if ($colorScheme === 'light') {
			root?.classList.remove('dark', colorSchemeColors.dark.text, colorSchemeColors.dark.bg, colorSchemeColors.dark.readerBG);
		} else {
			root?.classList.remove('light', colorSchemeColors.light.text, colorSchemeColors.light.bg, colorSchemeColors.light.readerBG);
		}
		root?.classList.add($colorScheme, colorSchemeColors[$colorScheme].text);
	}

	function setBG() {
		if ($readerMode) {
			root?.classList.remove(colorSchemeColors[$colorScheme].bg);
			root?.classList.add(colorSchemeColors[$colorScheme].readerBG);
		} else {
			root?.classList.remove(colorSchemeColors[$colorScheme].readerBG);
			root?.classList.add(colorSchemeColors[$colorScheme].bg);
		}
	}

	if (browser) {
		root = document.getElementsByTagName('html')[0];
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setColorScheme);
	}

	$: setColorScheme() || $colorSchemePreference;

	$: setTailwindColorScheme() || setBG() || $colorScheme;

	$: setBG() || $readerMode;
</script>
