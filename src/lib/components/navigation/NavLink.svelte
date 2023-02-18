<script>
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';

	export let href = '/#';
	export let title = 'title';
	export let icon = 'home';
	export let active = false;

	let className = undefined;
	export { className as class };
</script>

<a
	{href}
	class="contents group">
	<div class="{className} relative flex basis-full flex-col place-content-center items-center gap-0.5 sm:flex-row sm:gap-3 sm:py-2 sm:px-5">
		<!-- Icon and Icon BG -->
		<div class="relative px-3.5 py-1 sm:p-0 md:hidden">
			<Icon
				name={icon}
				class="{active ? 'opacity-100' : 'opacity-70'} md:hidden" />
			<!-- Active and Hover BG mobile-only -->
			<div class="{active ? 'opacity-100 ring-1 ring-inset ring-white/30' : 'opacity-0'} absolute top-0 left-0 right-0 bottom-0 rounded-full backdrop-brightness-150 bg-white/20 backdrop-saturate-200 transition-all group-hover:opacity-100 group-hover:opacity-100 sm:hidden" />
			<!-- /Active and Hover BG mobile-only -->
		</div>
		<!-- /Icon and Icon BG -->

		<!-- Text -->
		<p class="{active ? 'font-medium opacity-100' : 'opacity-90'} text-extra-small md:text-1x group-hover:opacity-100">
			{title}
		</p>
		<!-- /Text -->

		<!-- Active BG -->
		<div class="{active ? 'ring-1 ring-inset ring-white/30 backdrop-brightness-150 backdrop-saturate-200' : 'opacity-70 '} absolute top-0 left-0 right-0 bottom-0 rounded-full transition-all max-sm:hidden" />
		<!-- /Active BG -->

		<!-- Hover BG -->
		<HoverGlow class="rounded-full max-sm:hidden" />
		<!-- /Hover BG -->
	</div>
</a>
