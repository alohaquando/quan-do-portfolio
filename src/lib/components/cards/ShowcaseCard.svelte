<script>
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/';
	export let colorStyle = 'bg-amber-400 dark:bg-amber-600';
	export let ringStyle = 'group-hover:ring-amber-400 dark:group-hover:ring-amber-600';

	import DisplayMedium from '$lib/components/typography/DisplayMedium.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<a {href}>
	<div class="group relative z-30 h-52 sm:h-80">
		<!--		Background-->
		<div
			class="absolute top-0 bottom-0 left-0 right-0 overflow-clip rounded-3xl shadow transition-all group-hover:top-1 group-hover:bottom-1 group-hover:left-1 group-hover:right-1">
			<div
				class="glass absolute -z-10 h-full w-full rounded-3xl ring-inset backdrop-blur-2xl transition-all {ringStyle}" />
			<!--			Color blur-->
			<div
				class="absolute -top-2/3 -right-4 -left-1/2 bottom-32 -z-20 mx-auto rounded-[80%] opacity-[3%] transition-all group-hover:opacity-20 dark:group-hover:opacity-30 max-sm:left-2 max-sm:right-2 max-sm:bottom-2 {colorStyle}" />

			<!--Right side-->
			<div class="absolute right-0 h-full w-1/3 md:w-2/5">
				<!--Image group-->
				<div class="absolute -bottom-4 top-12 w-[105%] transition-all">
					<!--Glass behind image-->
					<div
						class="glass-light absolute -top-3 left-3 -z-10 h-full w-full overflow-clip rounded-t-2xl" />
					<!--Image-->
					<div
						class="glass-ring-light overflow-clip rounded-2xl h-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
						<slot name="image" />
					</div>
				</div>
			</div>
		</div>

		<!--		Left side-->
		<div class="w-2/3 space-y-4 px-6 py-8 sm:w-3/5 sm:space-y-6 sm:py-12 md:px-10">
			<!--			Logo-->
			<div class="w-8 overflow-clip rounded-lg sm:w-12 [&_img]:w-full [&_img]:h-full">
				<slot name="logo" />
			</div>

			<!--			Text-->
			<div class="flex flex-col space-y-1 sm:gap-2">
				<DisplayMedium class="line-clamp-2">{title}</DisplayMedium>
				<Body class="line-clamp-2">{subtitle}</Body>
			</div>
		</div>
	</div>
</a>
