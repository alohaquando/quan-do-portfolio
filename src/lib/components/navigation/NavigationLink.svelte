<script>
	let className;
	export { className as class };
	export let href = '/#';
	export let title = 'title';
	export let active = false;
</script>

<li class="group flex w-full place-content-center text-[1.25rem] max-sm:relative [&_span]:transition-all {className}">
	<a
		{href}
		class="flex grow place-content-center items-center sm:px-6"
	>
		<p class="{active ? 'opacity-100' : 'opacity-80'} flex place-content-center px-2 py-2 group-hover:opacity-100 sm:relative font-light">
			{title}
			<span class="{active ? 'opacity-100 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-50'} absolute bottom-0 h-[1px] w-full rounded-full bg-white opacity-0 " />
		</p>
	</a>
</li>
