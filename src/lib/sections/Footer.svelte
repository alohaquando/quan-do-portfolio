<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Section from '$lib/components/layouts/Section.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import A from '$lib/components/navigation/A.svelte';

	let footerLinks = {
		landing: {
			title: 'Quan Do',
			href: '/#'
		},
		work: {
			title: 'work',
			href: '/#work',
			subLinks: {
				grove: {
					title: 'groveHR',
					href: '/work/grove'
				},
				ux_projects: {
					title: 'ux projects',
					href: '/#Case studies'
				},
				concept: {
					title: 'concept',
					href: '/work/concept'
				},
				external_projects: {
					title: 'external projects',
					href: '/#External projects'
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

	let scrollY;
</script>

<svelte:window bind:scrollY />

<Section class="relative my-24 sm:mt-64">
	<!-- Divider -->
	<div class="mx-6 flex h-px grow bg-white/10 md:mx-10 lg:mx-32" />
	<!-- /Divider -->

	<!-- Elements -->
	<div class="flex flex-col place-content-between gap-10 px-6 py-24 sm:flex-row md:gap-24 md:px-10 lg:px-32">
		<!-- Left container -->
		<div class="flex flex-col place-content-between gap-10">
			<!-- Top Left -->
			<div class="flex flex-col">
				<A href={footerLinks.landing.href}>
					<Body class="whitespace-nowrap py-2 font-medium">{footerLinks.landing.title}</Body>
				</A>
			</div>

			<!-- Back to top -->
			<Button
				on:click={() => {
					scrollY = 0;
				}}>
				<Body class="whitespace-nowrap py-2 font-medium">Back to top</Body>
				<Icon
					name="arrow_up"
					type="outline"
					stroke_width="1.75" />
			</Button>
			<!-- /Back to top -->
		</div>

		<!--	Right container	-->
		<div class="grid  max-w-screen-md grow place-content-between gap-12 sm:grid-cols-2 md:grid-cols-4">
			<!-- Link group -->
			{#each Object.values(footerLinks) as link, i}
				{#if Object.keys(footerLinks)[i] !== 'landing'}
					<ul class="flex grow flex-col gap-4">
						<!-- Heading link -->
						<li>
							<A href={link.href}>
								<Body>{link.title}</Body>
							</A>
						</li>
						<!-- /Heading link -->

						<!-- Sub link group -->
						{#if link.subLinks}
							<ul class="flex flex-col gap-2">
								{#each Object.values(link.subLinks) as subLink, i}
									<li>
										<A
											href={subLink.href}
											class="group">
											<Body class="opacity-50 transition-all group-hover:opacity-100">{subLink.title}</Body>
										</A>
									</li>
								{/each}
							</ul>
						{/if}
						<!-- /Sub link group -->
					</ul>
				{/if}
			{/each}
			<!-- /Link group -->
		</div>
	</div>
</Section>