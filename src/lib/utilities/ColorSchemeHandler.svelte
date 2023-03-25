<script lang="ts">
	import { colorScheme, colorSchemePreference, readerMode } from '$lib/data/colorScheme';
	import { colorSchemeColors } from '$lib/data/Colors';
	import { browser } from '$app/environment';

	let root: HTMLElement;

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
			root?.classList.remove('dark', colorSchemeColors.dark.bg, colorSchemeColors.dark.readerBG);
		} else {
			root?.classList.remove('light', colorSchemeColors.light.bg, colorSchemeColors.light.readerBG);
		}
		root?.classList.add($colorScheme);
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
		root = document.getElementsByTagName('html')[0] as HTMLElement;
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setColorScheme, { passive: true });
	}

	$: $colorSchemePreference, setColorScheme();

	$: $colorScheme, setTailwindColorScheme(), setBG();

	$: $readerMode, setBG();
</script>
