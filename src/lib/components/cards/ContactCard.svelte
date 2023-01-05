<script>
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let title = 'Title';
	export let body = 'Body';
	export let href = '/';
	export let colorStyle = 'bg-amber-400 dark:bg-amber-600';
	export let ringStyle = 'group-hover:ring-amber-400 dark:group-hover:ring-amber-600';
	export let icon = 'sparkles';

	let className;
	// noinspection ReservedWordAsName
	export { className as class };

	import DisplayMedium from '$lib/components/typography/DisplayMedium.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<a
	{href}
	class="{className} noselect">
	<div class="group relative z-30">
		<!--		Background-->
		<div
			class="absolute top-0 bottom-0 left-0 right-0 overflow-clip rounded-3xl shadow transition-all group-hover:top-1 group-hover:bottom-1 group-hover:left-1 group-hover:right-1">
			<div
				class="glass absolute backdrop-blur-2xl -z-10 h-full w-full rounded-3xl ring-inset transition-all {ringStyle}" />
			<div
				class="absolute -top-2/3 -left-4 -right-4 mx-auto bottom-32 max-sm:left-2 max-sm:right-2 max-sm:bottom-2 -z-20 rounded-[50%] opacity-[3%] transition-all group-hover:opacity-20 dark:group-hover:opacity-30 {colorStyle}" />
		</div>
		<!--		Elements-->
		<div class="flex w-full flex-col space-y-6 py-8 md:px-10 md:py-12">
			<!--			Icons-->
			<div
				class="glass-ring mx-auto flex h-16 w-16 place-content-center items-center rounded-full bg-white shadow-inner shadow-sm transition-all dark:bg-zinc-800/50 {ringStyle}">
				<Icon
					name={icon}
					size="w-10"
					stroke_width="0"
					class="fill-stone-900 dark:fill-zinc-300" />
			</div>
			<!--			Text-->
			<div class="mx-auto flex flex-col items-center space-y-1 md:space-y-3">
				<DisplayMedium class="line-clamp-1">{title}</DisplayMedium>
				<Body class="line-clamp-1 max-sm:text-sm">{body}</Body>
			</div>
		</div>
	</div>
</a>
