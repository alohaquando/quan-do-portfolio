<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';
	export let data = 'email';
	let className = undefined;
	export { className as class };

	const contactData = {
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

<Animate class="{className}">
	<a
		href={contactData[data].href}
		target="_blank"
		rel="noopener noreferrer"
		class="contents">
		<!-- Card BG & layout -->
		<div class="bg-glass-gradient relative flex flex-col gap-8 py-10 px-8 md:gap-12 md:py-12 md:px-10">
			<!-- Icon -->
			<div class="bg-glass pointer-events-none z-10 flex h-12 w-12 place-content-center items-center rounded-xl p-2 md:h-14 md:w-14">
				<Icon
					name={contactData[data].icon}
					size="w-7 md:w-8" />
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
						size="w-7 md:w-8"
						class="mb-0.5 inline-block" />
				</Title>
				<!-- /Title -->

				<!-- Subtitle -->
				<Body class="opacity-50">{contactData[data].subtitle}</Body>
				<!-- /Subtitle -->
			</div>
			<!-- /Text elements -->

			<!-- Glow on hover -->
			<HoverGlow class="rounded-[2.5rem]" />
			<!-- /Glow on hover -->
		</div>
		<!-- /Card BG & layout -->
	</a>
</Animate>
