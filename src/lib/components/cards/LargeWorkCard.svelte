<script>
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';

	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/#work';
</script>

<div class="flex h-screen w-full p-4 md:p-6">
	<a
		{href}
		class="contents">
		<div class="flex w-full flex-col place-content-between items-start rounded-[2.5rem] bg-zinc-900  ">
			<!-- TODO: Add mouse drag scrolling or left right button	-->
			<!-- TODO: Maybe add snap?	-->
			<!-- Secondary cards -->
			<div class="relative h-1/2 w-full ">
				<div class="scrollbar-none absolute top-0 bottom-0 -left-4 -right-4 w-screen gap-6 overflow-y-clip px-16 pt-16 max-lg:flex max-lg:overflow-x-scroll lg:left-0 lg:right-0 lg:grid lg:w-full lg:auto-cols-fr lg:grid-flow-col lg:gap-8 lg:px-20 lg:pt-24 isolate">
					<slot />
				</div>
			</div>
			<!-- /Secondary cards -->

			<div class="flex flex-col px-12 py-16 md:px-20 md:py-24">
				<DisplaySmall>{title}</DisplaySmall>
				<BodyLarge class="opacity-80">
					{subtitle}
				</BodyLarge>
			</div>
		</div>
	</a>
</div>
