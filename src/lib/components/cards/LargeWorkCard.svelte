<script>
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';

	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/#work';
</script>

<div class="flex h-screen w-full ">
	<a
		{href}
		class="contents">
		<div class="m-6 flex w-full place-content-start items-end rounded-[2.5rem] bg-zinc-900 px-12 py-16 md:px-20 md:py-24">
			<div class="flex flex-col">
				<DisplaySmall>{title}</DisplaySmall>
				<BodyLarge class="opacity-80">{subtitle}</BodyLarge>
			</div>
		</div>
	</a>
</div>
