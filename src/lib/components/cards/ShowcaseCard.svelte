<script>
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/';
	export let imageDirection = 'vertical';
	export let colorStyle = 'bg-amber-400 dark:bg-amber-600';
	export let ringStyle = 'group-hover:ring-amber-400 dark:group-hover:ring-amber-600';

	import DisplayMedium from '$lib/components/typography/DisplayMedium.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<a {href}>
	<div class="group relative z-30 h-60 md:h-96">
		<!--		Background-->
		<div
			class="absolute top-0 bottom-0 left-0 right-0 overflow-clip rounded-3xl shadow transition-all group-hover:top-1 group-hover:bottom-1 group-hover:left-1 group-hover:right-1">
			<div
				class="glass-ring absolute -z-10 h-full w-full rounded-3xl ring-inset backdrop-blur-2xl transition-all {ringStyle}" />
			<!--			Color blur-->
			<div
				class="absolute -top-2/3 -right-4 -left-1/2 bottom-32 -z-20 mx-auto rounded-[80%] opacity-5 dark:opacity-10 transition-all group-hover:opacity-20 dark:group-hover:opacity-30 max-sm:left-2 max-sm:right-2 max-sm:bottom-2 {colorStyle}" />

			<!--Right side-->
			{#if $$slots.image}
				<div class="absolute right-0 h-full w-1/3 md:w-2/5">
					<!--Image group-->
					<div
						class="absolute w-[105%] transition-all
						{imageDirection === 'vertical' ? 'top-12' : '-bottom-4 mt-20'}">
						<!--Color blur-->
						<div
							class="absolute -top-40 left-0 -z-10 h-full w-full -rotate-12 rounded-b-full opacity-5 blur-3xl transition dark:opacity-10 dark:group-hover:opacity-20" />

						<!--Glass behind image-->
						<div
							class="glass absolute -top-3 left-3 -z-10 h-full w-full overflow-clip rounded-t-2xl" />

						<!--Image-->
						<div class="glass-ring overflow-clip rounded-2xl">
							<slot name="image" />
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!--		Left side-->
		<div class="w-2/3 space-y-4 px-6 py-8 md:w-3/5 md:space-y-6 md:px-10 md:py-12">
			<!--			Logo-->
			<div class="w-8 overflow-clip rounded-lg md:w-12">
				<slot name="logo" />
			</div>

			<!--			Text-->
			<div class="flex flex-col space-y-1 md:space-y-3">
				<DisplayMedium class="line-clamp-2">{title}</DisplayMedium>
				<Body class="line-clamp-3">{subtitle}</Body>
			</div>
		</div>
	</div>
</a>
