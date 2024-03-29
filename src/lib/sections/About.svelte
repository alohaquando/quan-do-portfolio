<script lang="ts">
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import AboutCard from '$lib/components/cards/AboutCard.svelte';
	import Resume from '$lib/assets/files/Quan-Hoang-Do-Resume.pdf';

	interface AboutData {
		[key: string]: {
			title: string;
			tagline?: string;
			subtitle?: string;
			href?: string;
			class?: string;
			image?: string;
			bg?: string;
			secondary?: {
				tagline: string;
				title: string;
			};
			illustration?: string;
			illustrationGroupClass?: string;
			illustrationClass?: string;
			illustrationSecondary?: string;
			illustrationSecondaryClass?: string;
		};
	}

	const aboutData: AboutData = {
		me: {
			title: 'Quân Đỗ',
			class: 'md:min-h-[20rem] min-h-[16rem] items-end',
			bg: 'profile_picture'
		},
		experience: {
			title: 'Experienced',
			subtitle: 'In designing app and web interfaces.',
			class: 'md:min-h-[28rem] min-h-[22rem] sm:w-1/2 flex-col',
			illustration: 'experience',
			illustrationGroupClass: 'max-w-[18rem] px-8 mx-auto sm:max-w-[unset] sm:px-10 pb-8 sm:pb-0'
		},
		career: {
			title: 'UI/UX Designer',
			subtitle: 'With an emphasis on UX Design.',
			class: 'md:min-h-[28rem] min-h-[22rem] sm:w-1/2 flex-col',
			illustration: 'flowchart',
			illustrationGroupClass: 'max-w-[23rem] px-6 mx-auto sm:max-w-[unset] sm:translate-x-12 pb-12'
		},
		languages: {
			tagline: 'Fluent in',
			title: 'English',
			secondary: {
				tagline: 'Native speaker of',
				title: 'Vietnamese'
			},
			class: 'md:min-h-[8rem] min-h-[6rem] items-center'
		},
		specialty: {
			tagline: 'Strong suit',
			title: 'Integrating design with Operating System',
			subtitle: 'I can design apps that fully utilizes the feature set of whatever system they’re on, like Adaptive Icon on Android to Focus Modes on iOS.',
			class: 'md:min-h-[28rem] min-h-[32rem] items-end flex-col sm:flex-row',
			illustration: 'icon',
			illustrationGroupClass: 'basis-full h-full flex sm:flex-col place-content-between my-10 max-w-[26rem] mx-auto sm:m-auto sm:px-0 sm:gap-0',
			illustrationClass: 'rotate-[15deg] px-4 -translate-y-6 translate-x-4 sm:translate-y-0 sm:-translate-x-12 sm:pt-12 sm:px-0',
			illustrationSecondary: 'focus',
			illustrationSecondaryClass: 'rotate-[-10deg]  px-4 translate-y-10 scale-95 sm:translate-x-12 sm:translate-y-0 sm:px-0'
		},
		resume: {
			title: 'My resume',
			class: 'md:min-h-[24rem] min-h-[14rem] flex-col',
			href: Resume,
			image: 'resume'
		}
	};
</script>

<Section
	id="about"
	class="max-w- relative flex flex-col items-stretch gap-20 pb-16 pt-[6rem] md:gap-40 md:pt-[14rem]">
	<!-- Section title -->
	<Display class="bg-gradient-to-r from-zinc-900 to-[#fb923c_70.53%] bg-clip-text text-center !text-transparent dark:from-white dark:via-white dark:to-[#fb923c_70.53%]">A bit about me</Display>

	<!-- Cards -->
	<div class="mx-auto flex w-full max-w-screen-md flex-col gap-4 sm:gap-6 px-5 md:px-8">
		<AboutCard {...aboutData.me} />
		<div class="flex flex-col gap-3 sm:gap-5 sm:flex-row [&_div]:grow">
			<AboutCard {...aboutData.experience} />
			<AboutCard {...aboutData.career} />
		</div>
		<AboutCard {...aboutData.languages} />
		<AboutCard {...aboutData.specialty} />
		<AboutCard
			{...aboutData.resume}
			download="Quan Hoang Do Portfolio"
			target="_blank" />
	</div>
</Section>
