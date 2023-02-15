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
	let y = 0;
	let prevY = 0;

	$: {
		hideNav = !usedNav && y > 0 && y - prevY > 0;
		prevY = y;
	}

	$: if (usedNav) {
		setTimeout(() => {
			usedNav = false;
		}, 800);
	}

	// Highlight section in view
	import { sectionInView } from '$lib/stores/sectionInView.js';
	import Body from '$lib/components/typography/Body.svelte';

	// Color choice
	export let readerMode = false;
</script>

<svelte:window bind:scrollY={y} />

<nav class="fixed bottom-0 left-0 right-0 z-50 flex h-14 transition-all duration-500 ease-in-out md:top-0 md:h-fit md:place-content-between md:p-10 lg:px-28 {hideNav ? 'translate-y-[180%] md:-translate-y-[180%]' : ''}">
	<!-- Foreground elements -->
	<div class="z-50 contents [&_a]:z-50">
		<!-- Logo	-->
		<a href="/#">
			<Body class="whitespace-nowrap font-medium max-md:hidden md:py-2 md:px-6">Quan Do</Body>
		</a>

		<!-- Links -->
		<ul
			class="flex w-full place-content-between md:w-fit"
			on:click={() => (usedNav = true)}>
			{#each Object.values(navLinks) as link, i}
				<NavigationLink
					class="md:first-of-type:hidden"
					{...link}
					active={Object.keys(navLinks)[i] === $sectionInView} />
			{/each}
		</ul>
	</div>

	<!-- Blur and darken BG -->
	<div class="absolute -top-12 bottom-0 left-0 right-0 md:top-0 md:-bottom-12">
		<div
			class="blur-fix absolute h-full w-full backdrop-blur-xl backdrop-brightness-90
		[mask-image:linear-gradient(to_top,black,black,transparent)]
		md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)]" />
		<div class="absolute bottom-0 md:top-0 h-[1px] w-full bg-black"></div>
	</div>
</nav>
