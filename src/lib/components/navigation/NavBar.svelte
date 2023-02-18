<script>
	let navLinks = {
		landing: {
			title: 'Home',
			href: '/#',
			icon: 'home'
		},
		work: {
			title: 'Work',
			href: '/#work',
			icon: 'rectangle_stack'
		},
		about: {
			title: 'About',
			href: '/#about',
			icon: 'face_smile'
		},
		contact: {
			title: 'Contact',
			href: '/#contact',
			icon: 'chat_bubble_left'
		},
		resume: {
			title: 'Resume',
			href: '#',
			icon: 'document'
		}
	};

	import NavBlock from '$lib/components/navigation/NavBlock.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';

	// Auto hide Navigation Bar
	let hideNav, usedNav;
	let scrollY = 0;
	let prevY = 0;
	let innerWidth = 0;
	let showNavBG;

	// TODO: FIX HIGHLIGHT!!!
	$: {
		hideNav = !usedNav && scrollY > 0 && scrollY - prevY > 0;
		showNavBG = scrollY > 100 || innerWidth < 768;
		prevY = scrollY;
	}

	function handleNavUse() {
		usedNav = true;
		setTimeout(() => {
			usedNav = false;
		}, 500);
	}

	// Highlight section in view
	import { sectionInView } from '$lib/data/sectionInView.js';
	import { beforeNavigate } from '$app/navigation';

	beforeNavigate(() => {
		sectionInView.set('');
	});
</script>

<svelte:window bind:scrollY bind:innerWidth />

<nav
	class="{showNavBG ? '[padding-bottom:max(env(safe-area-inset-bottom),24px)] max-sm:[padding-bottom:max(env(safe-area-inset-bottom)+12px,12px)]' : '[padding-bottom:env(safe-area-inset-bottom)]'}
{hideNav ? 'translate-y-[180%] md:-translate-y-[180%]' : ''} fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out sm:px-4 md:top-0 md:h-fit md:px-10 md:py-10 lg:px-32">
	<!-- Foreground -->
	<div class="flex md:place-content-between" on:click={handleNavUse}>
		<!-- Logo -->
		<NavBlock
			{showNavBG}
			class="max-md:hidden">
			<NavLink
				title="Quan Do"
				href="/"
				class="font-medium" />
		</NavBlock>
		<!-- /Logo -->

		<!-- Links Bar -->
		<NavBlock {showNavBG}>
			{#each Object.values(navLinks) as link, i}
				<NavLink
					{...link}
					class="md:group-first-of-type:hidden md:group-last-of-type:hidden"
					active={Object.keys(navLinks)[i] === $sectionInView} />
			{/each}
		</NavBlock>
		<!-- /Links Bar -->

		<!-- Resume -->
		<NavBlock
			{showNavBG}
			class="max-md:hidden">
			<NavLink
				{...navLinks.resume}
				class=""
				active={$sectionInView === 'resume'} />
		</NavBlock>
		<!-- /Resume -->
	</div>
	<!-- /Foreground -->

	<!-- Background -->
	<div class="{showNavBG ? 'opacity-100' : 'md:opacity-0'} pointer-events-none absolute -top-20 bottom-0 left-0 right-0 -z-20 touch-none md:top-0 md:-bottom-12">
		<div
			class="blur-fix absolute h-full w-full backdrop-blur backdrop-brightness-50 sm:backdrop-brightness-75 md:backdrop-blur-xl
		[mask-image:linear-gradient(to_top,black,black,transparent)] md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)]" />
	</div>
	<!-- /Background -->
</nav>

