<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	export let data = 'email';
	let className = '';
	export { className as class };

	interface Contact {
		[key: string]: {
			subtitle: string;
			icon: string;
			href: string;
			title: string;
		};
	}

	const contactData: Contact = {
		email: {
			title: 'Email',
			subtitle: 'work@quanhdo.com',
			href: 'mailto:work@quanhdo.com',
			icon: 'envelope'
		},
		github: {
			title: 'GitHub',
			subtitle: '@alohaquando',
			href: 'https://github.com/alohaquando',
			icon: 'github'
		},
		linkedin: {
			title: 'LinkedIn',
			subtitle: '@quanhoangdo',
			href: 'https://www.linkedin.com/in/quanhoangdo',
			icon: 'linkedin'
		}
	};
</script>

<Animate class={className}>
	<a
		href={contactData[data].href}
		target="_blank"
		rel="noopener noreferrer"
		class="contents">
		<!-- Card BG & layout -->
		<div class="bg-glass-gradient relative flex flex-col gap-6 px-5 py-6 md:gap-8 md:px-8 md:py-8">

			<!--<editor-fold desc="Noise overlay">-->
			<Noise class="dark:!opacity-[10%] !opacity-[20%] rounded-3xl" />
			<!--</editor-fold>-->

			<!-- Icon -->
			<div class="bg-glass pointer-events-none z-10 flex h-10 w-10 place-content-center items-center rounded-xl p-2 md:h-12 md:w-12">
				<Icon
					name={contactData[data].icon}
					size="w-6 md:w-7" />
			</div>
			<!-- /Icon -->

			<!-- Text elements -->
			<div class="pointer-events-none z-10 flex flex-col">
				<!-- Title -->
				<Title class="flex items-center gap-2">
					{contactData[data].title}
					<Icon
						name="arrow_up_right"
						stroke_width="1.5"
						size="w-7 md:w-7"
						class="mb-0.5 inline-block" />
				</Title>
				<!-- /Title -->

				<!-- Subtitle -->
				<Body class="opacity-50">{contactData[data].subtitle}</Body>
				<!-- /Subtitle -->
			</div>
			<!-- /Text elements -->

			<!-- Glow on hover -->
			<HoverGlow class="rounded-3xl" />
			<!-- /Glow on hover -->
		</div>
		<!-- /Card BG & layout -->
	</a>
</Animate>
