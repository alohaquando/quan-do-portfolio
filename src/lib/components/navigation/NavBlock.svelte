<script>
	export let showNavBG;

	let className = undefined;
	export { className as class };
</script>

<div class="{className} relative flex w-full place-content-between py-3 px-5 transition-all sm:gap-2 sm:p-2 md:p-1.5 md:w-fit">
	<slot />
	<div class="{showNavBG ? 'opacity-0' : 'opacity-0'} blur-fix absolute top-0 right-0 left-0 bottom-0 -z-10 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-lg backdrop-brightness-75 transition-all" />
</div>
