<script>
	// Data
	import Logo from '$lib/components/iconography/Logo.svelte';

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

	// Imports
	import NavBlock from '$lib/components/navigation/NavBlock.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';

	// Auto hide
	import { scrollY, userScroll } from '$lib/data/window.js';
	import { readerMode } from '$lib/data/colorScheme.js';
	import { debounce } from 'lodash';
	let hideNav;
	let usedNav = false;
	let prevY = 0;
	let showNavShadow;

	$: {
		hideNav = (!$userScroll && $scrollY > 0) || (!usedNav && $scrollY - prevY > 0);
		showNavShadow = $scrollY > 100;
		prevY = $scrollY;
	}

	function handleNavUse() {
		usedNav = true;
		resetNavUse();
	}

	const resetNavUse = debounce(() => {
		usedNav = false;
	}, 800);

	// Highlight section in view
	import { sectionInView } from '$lib/data/sectionInView.js';
</script>

<nav
	on:mouseenter={() => {
		usedNav = true;
	}}
	on:mouseleave={() => {
		usedNav = false;
	}}
	on:touchmove={handleNavUse}
	on:touchstart={handleNavUse}
	class="{hideNav ? 'translate-y-[180%] md:-translate-y-[180%]' : ''} fixed
 bottom-0 left-0 right-0 z-50 transform-gpu transition-all duration-500 ease-in-out max-md:[padding-bottom:max(env(safe-area-inset-bottom)+12px,12px)] md:top-0 md:h-fit md:p-10 lg:px-24">
	<!-- Foreground -->
	<div
		class="flex md:place-content-between"
		on:click={handleNavUse}
		on:keypress={handleNavUse}>
		<!-- Logo -->
		<NavBlock class="{hideNav ? 'blur' : ''} transform-gpu max-md:hidden">
			<NavLink
				href="/"
				class="font-medium"><Logo /></NavLink>
		</NavBlock>
		<!-- /Logo -->

		<!-- Links Bar -->
		<NavBlock class="{hideNav ? 'blur' : ''} transform-gpu">
			{#each Object.values(navLinks) as link, i}
				<NavLink
					{...link}
					class="md:group-first-of-type:hidden md:group-last-of-type:hidden"
					active={Object.keys(navLinks)[i] === $sectionInView} />
			{/each}
		</NavBlock>
		<!-- /Links Bar -->

		<!-- Resume -->
		<NavBlock class="{hideNav ? 'blur' : ''} transform-gpu max-md:hidden">
			<NavLink {...navLinks.resume} />
		</NavBlock>
		<!-- /Resume -->
	</div>
	<!-- /Foreground -->

	<!-- Background -->
	<div class="{showNavShadow ? 'opacity-100' : 'md:opacity-0'} pointer-events-none absolute -top-20 bottom-0 left-0 right-0 -z-20 touch-none md:top-0 md:-bottom-12">
		<div
			class="blur-fix absolute h-full w-full backdrop-blur [mask-image:linear-gradient(to_top,black,black,transparent)]
		md:backdrop-blur-xl md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)]" />
		<div class=" absolute h-full w-full bg-gradient-to-t  md:bg-gradient-to-b from-white via-white/70  {$readerMode ? 'dark:from-zinc-900/70 dark:via-zinc-900/70' : 'dark:from-black/70 dark:via-black/70'}" />
	</div>
	<!-- /Background -->
</nav>
