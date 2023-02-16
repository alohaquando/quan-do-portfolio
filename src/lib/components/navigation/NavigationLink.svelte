<script>
	import Body from '$lib/components/typography/Body.svelte';

	let className = '';
	export { className as class };
	export let href = '/#';
	export let title = 'title';
	export let active = false;
</script>

<li class="{className} group flex w-full place-content-center max-sm:relative md:px-6 [&_span]:transition-all">
	<a
		{href}
		class="flex grow">
			<Body class="{active ? 'opacity-100' : 'opacity-80'} relative py-2 group-hover:opacity-100">
				{title}
				<span class="{active ? 'opacity-100 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-50'} absolute bottom-0 -left-2 -right-2 h-[1px] rounded-full bg-white opacity-0 " />
			</Body>
	</a>
</li>
