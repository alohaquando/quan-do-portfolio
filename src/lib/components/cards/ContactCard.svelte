<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
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

<a
	href={contactData[data].href}
	class={className}>
	<!-- Card BG & layout -->
	<div class=" bg-glass-gradient flex flex-col gap-8 py-10 px-8 md:gap-12 md:py-12 md:px-10">
		<!-- Elements -->

		<div class="flex h-12 w-12 place-content-center items-center rounded-xl bg-white/10 p-2 md:h-14 md:w-14">
			<Icon
				name={contactData[data].icon}
				type="fill"
				size="w-7 md:w-8" />
		</div>
		<!-- Text elements -->
		<div class="flex flex-col">
			<!-- Title -->
			<Title class="flex gap-2 items-center">
				{contactData[data].title}
				<Icon
					name="arrow_up_right"
					stroke_width="1.5"
					size="w-7 md:w-8"
					class="inline-block mb-0.5" />
			</Title>
			<!-- Subtitle -->
			<Body class="opacity-50">{contactData[data].subtitle}</Body>
		</div>
	</div>
</a>
