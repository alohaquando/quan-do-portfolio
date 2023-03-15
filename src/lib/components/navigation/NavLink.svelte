<script>
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';

	export let href = '/#';
	export let title = undefined;
	export let icon = 'home';
	export let ariaLabel = `Link to ${title} section of Home page`;
	export let active = false;

	let className = undefined;
	export { className as class };
</script>

<a
	{href}
	aria-label={ariaLabel}
	class="group contents">
	<div class="{className} relative flex basis-full flex-col place-content-center items-center gap-0.5 sm:flex-row sm:gap-3 sm:py-2 sm:px-5">
		<!-- Icon and Icon BG -->
		<div class="relative px-3.5 py-1 sm:p-0 md:hidden">
			<Icon
				name={icon}
				class="{active ? 'opacity-100' : 'opacity-70'} md:hidden" />
			<!-- Active and Hover BG mobile-only -->
			<div
				class="{active
					? 'opacity-100 ring-opacity-100'
					: 'opacity-0 ring-opacity-0'} absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-full bg-white/20 ring-1 ring-inset ring-gray-900/20 backdrop-saturate-200 transition-all group-hover:opacity-100 group-hover:opacity-100 dark:ring-white/30 sm:hidden" />
			<!-- /Active and Hover BG mobile-only -->
		</div>
		<!-- /Icon and Icon BG -->
		<slot />

		<!-- Text -->
		<p class="{active ? 'font-medium opacity-100' : 'opacity-90'} text-extra-small md:text-1x pointer-events-none z-50 group-hover:font-medium group-hover:opacity-100 dark:group-hover:font-normal">
			{title}
		</p>
		<!-- /Text -->

		<!-- Active BG -->
		<div
			class="{active
				? 'bg-white shadow-lg ring-1 backdrop-saturate-200 dark:bg-white/0'
				: 'opacity-70 '}  absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-full ring-gray-900/20 transition-all group-hover:shadow-xl group-hover:ring-1 dark:ring-white/30 dark:group-hover:ring-opacity-0 max-sm:hidden" />
		<!-- /Active BG -->

		<!-- Hover BG -->
		<HoverGlow class="rounded-full max-sm:hidden " />
		<!-- /Hover BG -->
	</div>
</a>
