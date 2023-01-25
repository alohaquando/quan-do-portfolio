<script>
	import DisplayXL from '$lib/components/typography/display/DisplayXL.svelte';
	import HomeCard from '$lib/components/cards/HomeCard.svelte';
	import TopColorBar from '$lib/components/visuals/TopColorBar.svelte';

	const links = {
		work: {
			href: '#work',
			title: 'Work',
			icon: 'rectangle_stack',
			color: 'rose',
			colorOpacity: 'high'
		},
		about: {
			href: '#about',
			title: 'About',
			icon: 'face_smile',
			color: 'purple'
		},
		resume: {
			href: '#resume',
			title: 'Resume',
			icon: 'document_text',
			color: 'blue'
		},
		contact: {
			href: '#contact',
			title: 'Contact',
			icon: 'chat_bubble_left',
			color: 'indigo'
		}
	};
</script>

<header class="min-safe-h-screen flex flex-col place-content-between items-center">
	<!--Visual-->
	<div class="pointer-events-none contents">
		<TopColorBar />
		<div class="absolute bottom-0 top-0 left-0 right-0 -z-50 h-[30vh] select-none">
			<div class="blur-fix absolute -top-[90%] bottom-2/3 left-12 right-0 rounded-[90%] bg-gradient-to-r from-red-300 opacity-30 blur-3xl dark:from-red-700" />
			<div class="blur-fix absolute -top-1/2 bottom-1/2 left-0 right-0 rounded-[50%] bg-gradient-radial from-purple-300 opacity-5 blur-3xl dark:from-purple-700" />
			<div class="blur-fix absolute -top-1/2 bottom-1/2 left-0 right-12 rounded-[80%] bg-gradient-to-l from-blue-300 opacity-20 blur-3xl dark:from-blue-700" />
		</div>
	</div>

	<!--Title-->
	<div class="relative mx-6 flex h-[30vh] items-center text-center sm:mx-32">
		<DisplayXL class="z-20">
			<span class="font-semibold">Quân</span>
			Đô
			<span class="inline-block -indent-5 sm:-indent-7 md:-indent-10 lg:-indent-12">&#x303;</span>
		</DisplayXL>
	</div>

	<!--Links-->
	<div class="grid grow gap-3 self-stretch p-6 pt-0 max-lg:grid-cols-2 max-lg:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">
		<HomeCard
			{...links.work}
			class="row-span-2 first:items-end max-lg:col-span-2 lg:col-span-2" />
		<HomeCard {...links.about} />
		<HomeCard {...links.resume} />
		<HomeCard
			{...links.contact}
			class="col-span-2" />
	</div>
</header>
