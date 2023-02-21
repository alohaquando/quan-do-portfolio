<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import AboutCard from '$lib/components/cards/AboutCard.svelte';

	const aboutData = {
		me: {
			title: 'Quan Do',
			class: 'md:min-h-[30rem] min-h-[20rem] items-end'
		},
		experience: {
			title: 'Experienced',
			subtitle: 'In designing app and web interfaces.',
			class: 'md:min-h-[40rem] min-h-[30rem] sm:w-1/2'
		},
		career: {
			title: 'UI/UX Designer',
			subtitle: 'With an emphasis on UX Design.',
			class: 'md:min-h-[40rem] min-h-[30rem] sm:w-1/2'
		},
		languages: {
			tagline: 'Fluent in',
			title: 'English',
			secondary: {
				tagline: 'Native speaker of',
				title: 'Vietnamese'
			},
			class: 'md:min-h-[15rem] min-h-[12rem] items-center'
		},
		specialty: {
			tagline: 'Strong suit',
			title: 'Integrating design with Operating System',
			subtitle: 'I can design apps that fully utilizes the feature set of whatever system they’re on, like Adaptive Icon on Android to Focus Modes on iOS.',
			class: 'md:min-h-[40rem] min-h-[40rem] sm:min-h-[30rem] items-end'
		},
		resume: {
			title: 'My resume',
			class: 'md:min-h-[30rem] min-h-[20rem]',
			href: '/'
		}
	};
</script>

<Section
	id="about"
	class=" flex flex-col items-center items-stretch gap-20 pb-16 pt-[6rem] md:gap-40 md:pt-[14rem]">
	<!-- Section title -->
	<Display class="text-center">A bit about me</Display>

	<!-- Cards -->
	<div class="mx-auto flex w-full max-w-screen-md flex-col gap-6 px-6">
		<AboutCard {...aboutData.me} />
		<div class="flex flex-col gap-6 self-stretch sm:flex-row [&_div]:grow">
			<AboutCard {...aboutData.experience} />
			<AboutCard {...aboutData.career} />
		</div>
		<AboutCard {...aboutData.languages} />
		<AboutCard {...aboutData.specialty} />
		<AboutCard {...aboutData.resume} />
	</div>
</Section>
