<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import A from '$lib/components/navigation/A.svelte';
	import Section from '$lib/components/layouts/Section.svelte';
	import ColorSchemeSelect from '$lib/components/controls/ColorSchemeSelect.svelte';

	const footerLinks = {
		landing: {
			title: 'Quan Do',
			href: '/#landing',
			ariaLabel: 'Link to Home page',
			subLinks: null
		},
		work: {
			title: 'Work',
			href: '/#work',
			ariaLabel: 'Link to Work section',
			subLinks: {
				grove: {
					title: 'GroveHR',
					href: '/work/grove',
					target: null,
					ariaLabel: 'Link to GroveHR Case Study page',
					subLinks: null
				},
				ux_projects: {
					title: 'Case studies',
					href: '/#Case studies',
					target: null,
					ariaLabel: 'Link to UX Project section',
					subLinks: null
				},
				concept: {
					title: 'Concept D.S.',
					href: '/work/concept',
					target: null,
					ariaLabel: 'Link to Concept Design System Case Study page',
					subLinks: null
				},
				external_projects: {
					title: 'External projects',
					href: '/#External projects',
					target: null,
					ariaLabel: 'Link to External Project section',
					subLinks: null
				}
			}
		},
		about: {
			title: 'About',
			href: '/#about',
			ariaLabel: 'Link to About section',
			subLinks: null
		},
		contact: {
			title: 'Contact',
			href: '/#contact',
			ariaLabel: 'Link to Contact section',
			subLinks: {
				email: {
					title: 'Email',
					href: 'mailto:work@quanhoangdo.com',
					target: '_blank',
					ariaLabel: 'Link to emailing work@quanhdo.com',
					subLinks: null
				},
				github: {
					title: 'GitHub',
					href: 'https://github.com/alohaquando',
					target: '_blank',
					ariaLabel: `Link to Quân's GitHub`,
					subLinks: null
				},
				linkedin: {
					title: 'LinkedIn',
					href: 'https://www.linkedin.com/in/quanhoangdo',
					target: '_blank',
					ariaLabel: `Link to Quân's LinkedIn`,
					subLinks: null
				}
			}
		},
		resume: {
			title: 'Resume',
			href: '#',
			ariaLabel: `Link to download resume`,
			subLinks: null
		}
	};

	let root: HTMLElement;

	onMount(() => {
		root = document.body.parentNode as HTMLElement;
	});

	function scrollTop() {
		root.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	import { colorSchemePreference } from '$lib/data/colorScheme';
	import Logo from '$lib/components/iconography/Logo.svelte';
	import { onMount } from 'svelte';
</script>

<footer>
	<Section
		id="footer"
		class="relative my-6 md:mb-2 md:mt-18">
		<!-- Divider -->
		<div class="mx-6 flex h-px grow bg-gray-900/10 dark:bg-white/10 md:mx-10 lg:mx-32" />
		<!-- /Divider -->

		<!-- Elements -->
		<div class="flex flex-col place-content-between gap-10 px-6 py-20 sm:flex-row md:gap-18 md:px-10 lg:px-32">
			<!-- Left container -->
			<div class="flex flex-col place-content-between gap-10">
				<!-- Logo -->
				<A
					class="sm:order-2"
					href={footerLinks.landing.href}
					ariaLabel={footerLinks.landing.ariaLabel}>
					<Logo class="py-1" />
				</A>
				<!-- /Logo -->

				<!-- Function group -->
				<div class="flex flex-col gap-8 max-sm:contents">
					<!-- Change colorScheme -->
					<ColorSchemeSelect
						bind:value={$colorSchemePreference}
						name="colorSchemePreference"
						id="colorSchemePreference" />
					<!-- /Change colorScheme -->
					<!-- Back to top -->
					<Button on:click={() => scrollTop()}>
						<Icon
							name="arrow_up"
							stroke_width="1.75" />
						<Body class="whitespace-nowrap py-2 font-medium">Back to top</Body>
					</Button>
					<!-- /Back to top -->
				</div>
				<!-- /Function group -->
			</div>
			<!-- /Left container -->

			<!--	Right container	-->
			<div class="grid max-w-screen-md grow place-content-between gap-12 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Link group -->
				{#each Object.values(footerLinks) as link, i}
					{#if Object.keys(footerLinks)[i] !== 'landing'}
						<ul class="flex grow flex-col gap-4">
							<!-- Heading link -->
							<li>
								<A
									href={link.href}
									ariaLabel={link.ariaLabel}>
									<Body>{link.title}</Body>
								</A>
							</li>
							<!-- /Heading link -->

							<!-- Sub link group -->
							{#if link.subLinks}
								{#each Object.values(link.subLinks) as subLink}
									<li>
										<A
											href={subLink.href}
											ariaLabel={subLink.ariaLabel}
											target={subLink.target}
											class="group">
											<Body class="whitespace-nowrap opacity-70 transition-all group-hover:opacity-100 ">{subLink.title}</Body>
										</A>
									</li>
								{/each}
							{/if}
							<!-- /Sub link group -->
						</ul>
					{/if}
				{/each}
				<!-- /Link group -->
			</div>
		</div>
	</Section>
</footer>
