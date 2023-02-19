<script>
	import { colorScheme, colorSchemePreference, readerMode, systemColorScheme } from '$lib/data/colorScheme.js';

	import { colorSchemeColors } from '$lib/data/Colors.js';

	function handleSystemColorSchemeChange() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			systemColorScheme.set('dark');
		} else {
			systemColorScheme.set('light');
		}
		setColorScheme();
	}

	function setColorScheme() {
		if ($colorSchemePreference === 'system') {
			colorScheme.set($systemColorScheme);
		} else {
			colorScheme.set($colorSchemePreference);
		}
		setTailwindColorScheme();
	}

	let root;
	export function setTailwindColorScheme() {
		root = document.getElementsByTagName('html')[0];
		root?.classList.remove('dark');
		root?.classList.remove(colorSchemeColors.light.text);
		root?.classList.remove(colorSchemeColors.light.bg);
		root?.classList.remove(colorSchemeColors.light.readerBG);
		root?.classList.remove(colorSchemeColors.dark.text);
		root?.classList.remove(colorSchemeColors.dark.bg);
		root?.classList.remove(colorSchemeColors.dark.readerBG);

		switch ($colorScheme) {
			case 'dark': {
				root?.classList.add('dark');
				root?.classList.add(colorSchemeColors.dark.text);
				if ($readerMode) {
					root?.classList.add(colorSchemeColors.dark.readerBG);
				} else {
					root?.classList.add(colorSchemeColors.dark.bg);
				}
				break;
			}
			case 'light': {
				root?.classList.add(colorSchemeColors.light.text);
				if ($readerMode) {
					root?.classList.add(colorSchemeColors.light.readerBG);
				} else {
					root?.classList.add(colorSchemeColors.light.bg);
				}
				break;
			}
		}
	}

	import { browser } from '$app/environment';

	if (browser) {
		handleSystemColorSchemeChange();
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemColorSchemeChange);
	}

	$: browser && ($readerMode || !$readerMode) && setTailwindColorScheme();

	$: $colorSchemePreference && setColorScheme();
</script>
