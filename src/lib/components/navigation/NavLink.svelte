<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';

	export let href = '/#';
	export let title = '';
	export let icon = 'home';
	export let ariaLabel = `Link to ${title} section of Home page`;
	export let active = false;

	let className = '';
	export { className as class };
</script>

<a
	{href}
	aria-label={ariaLabel}
	class="group contents">
	<div class="{className} relative flex basis-full flex-col place-content-center items-center gap-0.5 sm:flex-row sm:gap-2.5 sm:px-4 sm:py-1.5">
		<!-- Icon and Icon BG -->
		<div class="relative px-3 py-0.5 sm:p-0 md:hidden">
			<Icon
				name={icon}
				class="md:hidden w-[1.2rem] {active ? 'opacity-100' : 'opacity-70'} " />
			<!-- Active and Hover BG mobile-only -->
			<div
				class="{active
					? 'opacity-100 ring-opacity-100'
					: 'opacity-0 ring-opacity-0'} absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-full bg-white/20 ring-1 ring-inset ring-gray-900/20 backdrop-saturate-200 transition-all group-hover:opacity-100 dark:ring-white/30 sm:hidden" />
			<!-- /Active and Hover BG mobile-only -->
		</div>
		<!-- /Icon and Icon BG -->
		<slot />

		<!-- Text -->
		<p class="{active ? 'font-medium opacity-100' : 'opacity-90'} -text-3x md:text-1x pointer-events-none z-50 group-hover:font-medium group-hover:opacity-100 dark:group-hover:font-normal">
			{title}
		</p>
		<!-- /Text -->

		<!-- Active BG -->
		<div
			class="{active
				? 'bg-white shadow-lg ring-1 backdrop-saturate-200 dark:bg-white/0'
				: 'opacity-70 '}  absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-full ring-gray-900/20 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 dark:ring-white/30 dark:group-hover:bg-transparent dark:group-hover:ring-opacity-0 max-sm:hidden" />
		<!-- /Active BG -->

		<!-- Hover BG -->
		<HoverGlow class="rounded-full max-sm:hidden " />
		<!-- /Hover BG -->
	</div>
</a>
