<script>
	let testSections = ['landing', 'work', 'about', 'contact'];
	import { inview } from 'svelte-inview';
	import { sectionInView } from '$lib/stores/sectionInView.js';
	let prevSectionInView = $sectionInView;
</script>

{#each testSections as section, i}
	<section
		use:inview={{ threshold: 0.1 }}
		on:enter={() => {
			prevSectionInView = $sectionInView;
			sectionInView.set(section);
		}}
		on:leave={() => {
			if (section !== prevSectionInView) {
				sectionInView.set(prevSectionInView);
			}
		}}
		id={section}
		class="min-h-screen-safe flex flex-col place-content-center items-center gap-24 overflow-x-clip border-b-2 border-white bg-zinc-900 pt-40 pb-24 text-center text-[3rem] font-light">
		{section.charAt(0).toUpperCase() + section.slice(1)}
		<br />
		With a knack for making designs that works

		<div class="flex max-w-3xl flex-col gap-12 px-6 text-left font-reader text-[1.25rem] font-normal leading-[1.75] text-white/70 sm:px-16">
			<p>
				Google appears to be testing a feature that would let Chromebook users set custom keyboard shortcuts throughout the OS (via Ars Technica). While it doesn’t currently work, About Chromebooks’ Kevin Tofel found a keyboard shortcut editor in the ChromeOS 111 beta that can be accessed by
				enabling flags with names like “enable-shortcut-customization-app” and “improved-keyboard-shortcuts.”
			</p>
			<p>
				The screen, which is accessible through the settings app, shows you the list of shortcuts that are available in different parts of the OS and apps, as well as the default keybindings for them. The experimental version lets you add alternative shortcuts, according to Tofel and Ars Technica,
				though they unfortunately don’t seem to work — you can set shortcuts, but pressing those keys won’t do what you want. The screen also has options to reset the defaults for both specific shortcuts and for all the shortcuts.
			</p>
			<p>
				The screen, which is accessible through the settings app, shows you the list of shortcuts that are available in different parts of the OS and apps, as well as the default keybindings for them. The experimental version lets you add alternative shortcuts, according to Tofel and Ars Technica,
				though they unfortunately don’t seem to work — you can set shortcuts, but pressing those keys won’t do what you want. The screen also has options to reset the defaults for both specific shortcuts and for all the shortcuts.
			</p>
		</div>
	</section>
{/each}
