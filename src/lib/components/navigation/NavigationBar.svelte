<script>
	// Imports child components
	import NavigationLink from '$lib/components/navigation/NavigationLink.svelte';

	// Data
	let navLinks = {
		landing: {
			title: 'home',
			href: '/#'
		},
		work: {
			title: 'work',
			href: '/#work'
		},
		about: {
			title: 'about',
			href: '/#about'
		},
		contact: {
			title: 'contact',
			href: '/#contact'
		},
		resume: {
			title: 'resume',
			href: '#'
		}
	};

	// Auto hide Navigation Bar
	let hideNav, usedNav;
	let scrollY = 0;
	let prevY = 0;

	//  TODO: Fix broken active highlight on iPad
	//	TODO: Fix link not working on mobile when in child pages
	$: {
		hideNav = !usedNav && scrollY > 0 && scrollY - prevY > 0;
		prevY = scrollY;
	}

	$: if (usedNav) {
		setTimeout(() => {
			usedNav = false;
		}, 800);
	}

	// Highlight section in view
	import { sectionInView } from '$lib/data/sectionInView.js';
	import Body from '$lib/components/typography/Body.svelte';
	import { beforeNavigate } from '$app/navigation';

	// Color choice

	import { readerMode } from '$lib/data/colorScheme.js';

	beforeNavigate(() => {
		sectionInView.set('');
	});

	let innerHeight = 0;
</script>

<svelte:window
	bind:scrollY
	bind:innerHeight />

<nav class="fixed bottom-0 left-0 right-0 z-50 flex px-2 py-10 transition-all duration-500 ease-in-out md:top-0 md:h-fit md:place-content-between md:px-10 md:py-10 lg:px-32 {hideNav ? 'translate-y-[180%] md:-translate-y-[180%]' : ''} [padding-bottom:env(safe-area-inset-bottom)]">
	<!-- Foreground elements -->
	<div class="z-50 contents [&_a]:z-50">
		<!-- Logo -->
		<a href="/#">
			<Body class="whitespace-nowrap font-medium max-md:hidden md:py-2 ">Quan Do</Body>
		</a>
		<!-- /Logo -->

		<!-- Links -->
		<ul
			class="z-50 flex w-full place-content-between md:w-fit"
			on:click={() => (usedNav = true)}>
			{#each Object.values(navLinks) as link, i}
				<!-- TODO: Fix spacing on small mobile -->
				<NavigationLink
					class="md:first-of-type:hidden [&_a]:place-content-center"
					{...link}
					active={Object.keys(navLinks)[i] === $sectionInView} />
			{/each}
		</ul>
		<!-- /Links -->
	</div>
	<!-- /Foreground elements -->

	<!-- Blur and darken BG -->
	<div class="pointer-events-none absolute -top-12 bottom-0 left-0 right-0 touch-none md:top-0 md:-bottom-12">
		<div
			class=" {scrollY < innerHeight / 2 ? '' : 'backdrop-brightness-90'}  blur-fix absolute h-full w-full backdrop-blur-xl
		[mask-image:linear-gradient(to_top,black,black,transparent)] md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)]" />
		<div class="{$readerMode ? 'from-zinc-900/20' : 'from-black/20'} {scrollY < innerHeight / 2 ? 'opacity-0' : 'opacity-100'} blur-fix absolute h-full w-full bg-gradient-to-t md:bg-gradient-to-b transition-all" />
		<!--	TODO: Fix weird color blur line in Edge	-->
	</div>
	<!-- /Blur and darken BG -->
</nav>
