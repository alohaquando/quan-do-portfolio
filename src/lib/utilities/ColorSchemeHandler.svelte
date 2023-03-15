<script>
	import { colorScheme, colorSchemePreference, readerMode } from '$lib/data/colorScheme.js';

	import { colorSchemeColors } from '$lib/data/Colors.js';

	let systemColorScheme;

	function handleSystemColorSchemeChange() {
    console.log("handleSystemColorSchemeChange");
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			systemColorScheme = 'dark';
		} else {
			systemColorScheme = 'light';
		}
		setColorScheme();
	}

	function setColorScheme() {
    console.log('setColorScheme');
    if ($colorSchemePreference === 'system') {
			colorScheme.set(systemColorScheme);
		} else {
			colorScheme.set($colorSchemePreference);
		}
		if (browser) {
      setTailwindColorScheme();
    }
	}

	let root;
	export function setTailwindColorScheme() {
    console.log('setTailwindColorScheme');
		root = document.getElementsByTagName('html')[0];
		root?.classList.remove('dark', colorSchemeColors.light.text, colorSchemeColors.light.bg, colorSchemeColors.light.readerBG, colorSchemeColors.dark.text, colorSchemeColors.dark.bg, colorSchemeColors.dark.readerBG);

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
    console.log("Browser ready");
		handleSystemColorSchemeChange();
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemColorSchemeChange);
	}

	$: browser && ($readerMode || !$readerMode) && setTailwindColorScheme();

	$: $colorSchemePreference && setColorScheme();
</script>
