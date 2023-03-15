<script>
	// Data
	import Logo from '$lib/components/iconography/Logo.svelte';
	// Imports
	import NavBlock from '$lib/components/navigation/NavBlock.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';

	// Auto hide
	import { innerHeight, scrollY } from '$lib/data/window.js';
	import { readerMode, colorScheme } from '$lib/data/colorScheme.js';
	// Highlight section in view
	import { sectionInView } from '$lib/data/sectionInView.js';
	import { debounce } from 'lodash';

	let navLinks = {
		landing: {
			title: 'Home',
			href: '/#landing',
			icon: 'home',
			ariaLabel: 'Link to Home page'
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

	let showNav;
	let forceShowNav;
	let navInteracting = false;
	let prevY = 0;
	let showNavShadow;

	$: {
		forceShowNav = getNavInteraction();
		showNav = forceShowNav || $scrollY <= 0 || ($scrollY - prevY < 0);
		// showNav = forceShowNav || $scrollY <= 0 || ($scrollY - prevY < 0 && $userScroll);
		showNavShadow = !$readerMode || $scrollY > $innerHeight / 3;
		prevY = $scrollY;
	}

	function getNavInteraction() {
		return navInteracting;
	}

	function handleNavInteractStart() {
		navInteracting = true;
	}

	const handleNavInteractEnd = debounce(() => {
		navInteracting = false;
	}, 1000);
</script>

<nav
	class="{showNav ? '' : 'translate-y-[180%] md:-translate-y-[180%]'} fixed
 bottom-0 left-0 right-0 z-50 transform-gpu transition-all duration-500 ease-in-out max-md:[padding-bottom:max(env(safe-area-inset-bottom)+12px,12px)] md:top-0 md:h-fit md:p-10 lg:px-24"
	on:mouseenter={handleNavInteractStart}
	on:mouseleave={handleNavInteractEnd}
	on:touchmove={handleNavInteractStart}
	on:touchstart={handleNavInteractStart}
	on:touchend={handleNavInteractEnd}>
	<!-- Foreground -->
	<div class="{showNav ? '' : 'blur max-sm:opacity-0'} transition-all transform-gpu flex md:place-content-between">
		<!-- Logo -->
		<NavBlock class="max-md:hidden">
			<NavLink
				class="font-medium [&_p]:hidden"
				{...navLinks.landing}>
				<Logo />
			</NavLink>
		</NavBlock>
		<!-- /Logo -->

		<!-- Links Bar -->
		<NavBlock class="transform-gpu">
			{#each Object.values(navLinks) as link, i}
				<NavLink
					{...link}
					class="md:group-first-of-type:hidden md:group-last-of-type:hidden"
					active={Object.keys(navLinks)[i] === $sectionInView} />
			{/each}
		</NavBlock>
		<!-- /Links Bar -->

		<!-- Resume -->
		<NavBlock class="max-md:hidden">
			<NavLink {...navLinks.resume} />
		</NavBlock>
		<!-- /Resume -->
	</div>
	<!-- /Foreground -->

	<!-- Background -->
	<div class="{showNavShadow ? 'opacity-100' : 'md:opacity-0'} pointer-events-none absolute -top-20 bottom-0 left-0 right-0 -z-20 touch-none transition-all md:top-0 md:-bottom-12">
		<div
			class="blur-fix absolute h-full w-full backdrop-blur [mask-image:linear-gradient(to_top,black,black,transparent)]
		md:backdrop-blur-xl md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)]" />
		<div class="absolute h-full w-full bg-gradient-to-t {$colorScheme === 'light' ? 'from-white via-white/70' : 'md:bg-gradient-to-b dark:from-black/40'} " />
	</div>
	<!-- /Background -->
</nav>
