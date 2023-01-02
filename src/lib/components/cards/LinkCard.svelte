<script>
	export let title = 'Title';
	export let body = 'Body';
	export let href = '/';
	export let imageDirection = 'vertical';

	import DisplayMedium from '$lib/components/typography/DisplayMedium.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<a {href}>
	<div
		class="group relative z-20 flex h-60 place-content-between overflow-clip rounded-3xl bg-white shadow ring-1 ring-stone-900/10 transition-all dark:bg-zinc-900 dark:ring-zinc-50/10 md:h-96">
		<!--		Left side-->
		<div class="w-4/5 space-y-4 px-6 py-8 md:w-3/5 md:space-y-6 md:px-10 md:py-12">
			<!--			Logo-->
			<div class="w-8 overflow-clip rounded-lg md:w-12">
				<slot name="logo" />
			</div>

			<!--			Text-->
			<div class="flex flex-col space-y-1 md:space-y-3">
				<DisplayMedium class="line-clamp-2">{title}</DisplayMedium>
				<Body class="line-clamp-3">{body}</Body>
			</div>
		</div>

		<!--Right side-->
		{#if $$slots.image}
			<div class="relative right-0 h-full w-1/2 md:w-2/5">
				<!--Image group-->
				<div
					class="absolute w-[105%] transition-all
				{imageDirection === 'vertical' ? 'top-12 group-hover:top-10' : '-bottom-4  group-hover:-bottom-2 mt-20'}">
					<!--Color blur-->
					<div
						class="absolute -top-40 left-0 -z-10 h-full w-full -rotate-12 rounded-b-full opacity-5 blur-3xl transition dark:opacity-10 dark:group-hover:opacity-20" />

					<!--Glass behind image-->
					<div class="glass absolute -top-3 left-3 -z-10 h-full w-full overflow-clip rounded-t-2xl" />

					<!--Image-->
					<div class="glass-ring overflow-clip rounded-2xl">
						<slot name="image" />
					</div>
				</div>
			</div>
			{/if}
	</div>
</a>
