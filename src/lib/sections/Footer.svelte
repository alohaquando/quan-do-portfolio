<script>
	import Body from '$lib/components/typography/Body.svelte';
	import NavigationLink from '$lib/components/navigation/NavigationLink.svelte';
	import Section from "$lib/components/layouts/Section.svelte";

	let footerLinks = {
		landing: {
			title: 'Quan Do',
			href: '/#'
		},
		to_top: {
			title: 'Back to top',
			href: '/#'
		},
		work: {
			title: 'work',
			href: '/#work',
			subLinks: {
				grove: {
					title: 'groveHR',
					href: '/work/grovehr'
				},
				ux_projects: {
					title: 'ux projects',
					href: '/#ux_projects'
				},
				concept: {
					title: 'concept',
					href: '/work/concept'
				},
				external_projects: {
					title: 'external projects',
					href: '/#external_projects'
				}
			}
		},
		about: {
			title: 'about',
			href: '/#about'
		},
		contact: {
			title: 'contact',
			href: '/#contact',
			subLinks: {
				email: {
					title: 'email',
					href: 'mailto:work@quanhdo.com'
				},
				github: {
					title: 'github',
					href: 'https://github.com/alohaquando'
				},
				linkedin: {
					title: 'linkedin',
					href: 'https://www.linkedin.com/in/quanhoangdo'
				}
			}
		},
		resume: {
			title: 'resume',
			href: '#'
		}
	};
</script>

<Section class="relative mt-24 sm:mt-64">
	<div class="mx-6 flex h-px grow bg-white/10 md:mx-10 lg:mx-32" />

	<!-- Elements -->
	<div class="flex flex-col place-content-between gap-10 px-6 py-24 sm:flex-row md:gap-24 md:px-10 lg:px-32">
		<!-- Left container -->
		<div class="flex flex-col place-content-between gap-10">
			<!-- Top Left -->
			<div class="flex flex-col">
				<a href={footerLinks.landing.href}>
					<Body class="whitespace-nowrap py-2 font-medium">{footerLinks.landing.title}</Body>
				</a>
			</div>

			<!-- Bottom Left -->
			<a href={footerLinks.to_top.href}>
				<Body class="whitespace-nowrap py-2 font-medium">{footerLinks.to_top.title}</Body>
			</a>
			<!--	TODO: Add icon -->
		</div>

		<!--	Right container	-->
		<div class="grid max-w-screen-md grow place-content-between gap-12 sm:grid-cols-2 md:grid-cols-4">
			{#each Object.values(footerLinks) as link, i}

				<!--	Individual link group	-->
				{#if Object.keys(footerLinks)[i] !== 'landing' && Object.keys(footerLinks)[i] !== 'to_top'}
					<div class="flex grow flex-col">
						<NavigationLink
							class="place-content-start [&_p]:opacity-100"
							{...link} />

						<!--	Sub-links	-->
						{#if link.subLinks}
							<div>
								{#each Object.values(link.subLinks) as subLink, i}
									<NavigationLink
										class="place-content-start [&_p]:opacity-50"
										{...subLink} />
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</Section>
