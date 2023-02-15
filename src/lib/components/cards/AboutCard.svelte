<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Tagline from '$lib/components/typography/Tagline.svelte';
	export let data;

	const aboutData = {
		me: {
			title: 'Quan Do',
			className: 'md:min-h-[30rem] min-h-[20rem] items-end'
		},
		experience: {
			title: 'Experienced',
			subtitle: 'In designing app and web interfaces.',
			className: 'md:min-h-[40rem] min-h-[30rem] sm:w-1/2'
		},
		career: {
			title: 'UI/UX Designer',
			subtitle: 'With an emphasis on UX Design.',
			className: 'md:min-h-[40rem] min-h-[30rem] sm:w-1/2'
		},
		languages: {
			tagline: 'Fluent in',
			title: 'English',
			secondary: {
				tagline: 'Native speaker of',
				title: 'Vietnamese'
			},
			className: 'md:min-h-[15rem] min-h-[12rem] items-center'
		},
		specialty: {
			tagline: 'Strong suit',
			title: 'Integrating design with Operating System',
			subtitle: 'I can design apps that fully utilizes the feature set of whatever system they’re on, like Adaptive Icon on Android to Focus Modes on iOS.',
			className: 'md:min-h-[40rem] min-h-[40rem] sm:min-h-[30rem] items-end'
		},
		resume: {
			title: 'My resume',
			className: 'md:min-h-[30rem] min-h-[20rem]'
		}
	};
</script>

<!-- Card BG & layout -->
<div class="{aboutData[data].className} flex rounded-xl bg-gradient-to-b from-[#0E101B] to-[#25262F] py-10 px-8 md:py-16 md:px-14">
	<!-- Text elements -->
	<div class={aboutData[data].secondary ? 'grid grow gap-12 sm:gap-4 grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2' : 'contents'}>
		<!-- Main text elements -->
		<div class="flex flex-col md:w-1/2 ">
			<!-- Tagline -->
			{#if aboutData[data].tagline}
				<Tagline>{aboutData[data].tagline}</Tagline>
			{/if}
			<!-- Title -->
			<Title>{aboutData[data].title}</Title>
			<!-- Subtitle -->
			{#if aboutData[data].subtitle}
				<Body class="opacity-50">{aboutData[data].subtitle}</Body>
			{/if}
		</div>

		<!-- Secondary text elements -->
		{#if aboutData[data].secondary}
			<div>
				<Tagline>{aboutData[data].secondary.tagline}</Tagline>
				<Title>{aboutData[data].secondary.title}</Title>
			</div>
		{/if}
	</div>
</div>
