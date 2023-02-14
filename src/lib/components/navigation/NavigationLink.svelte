<script>
	let className;

	export { className as class };
	export let href = '/#';
	export let title = 'title';
	export let active = false;
</script>

<li class="group flex w-full place-content-center max-sm:relative [&_span]:transition-all {className}">
	<a
		{href}
		class=" flex grow place-content-center items-center sm:px-6">
		<p class="flex place-content-center px-2 py-2 sm:relative ">
			{title}
			<span class="{active ? 'opacity-100' : 'opacity-0'} absolute bottom-0 h-[2px] w-full rounded-full bg-white group-hover:opacity-100" />
		</p>
	</a>
</li>
