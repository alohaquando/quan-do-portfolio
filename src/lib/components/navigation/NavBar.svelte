<script lang="ts">
	// Imports
	import NavBlock from '$lib/components/navigation/NavBlock.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import Logo from '$lib/components/iconography/Logo.svelte';

	// Auto hide
	import { innerHeight, scrollY } from '$lib/data/window.js';
	import lodash from 'lodash';
	const { throttle, debounce } = lodash;

	// Highlight section in view
	import { sectionInView } from '$lib/data/sectionInView.js';

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

	let showNav: boolean;
	let navInteracting = false;
	let prevY = 0;
	let showNavShadow: boolean;

	const handleNavVisibility = throttle(
		() => {
			showNav = navInteracting || $scrollY <= 0 || $scrollY - prevY < 0;
			showNavShadow = $scrollY > $innerHeight / 5;
			prevY = $scrollY;
		},
		100,
		{ leading: true }
	);

	$: $scrollY, handleNavVisibility();

	function handleNavInteractStart() {
		navInteracting = true;
		handleNavInteractEnd();
	}

	const handleNavInteractEnd = debounce(() => {
		navInteracting = false;
	}, 1000);
</script>

<nav
	class="{showNav ? '' : 'translate-y-[220%] md:-translate-y-[180%]'} max-md:pb-safe
 fixed bottom-0 left-0 right-0 z-50 transform-gpu transition-all duration-500 ease-in-out md:top-0 md:h-fit md:p-10 lg:px-24"
	on:mouseover={handleNavInteractStart}
	on:mousemove={handleNavInteractStart}
	on:focus={handleNavInteractStart}
	on:touchstart={handleNavInteractStart}
	on:touchmove={handleNavInteractStart}>
	<!-- Foreground -->
	<div class="{showNav ? '' : 'blur max-sm:opacity-0'} flex transform-gpu transition-all md:place-content-between">
		<!-- Logo -->
		<NavBlock class="max-md:hidden ">
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
	<div class="{showNavShadow ? 'opacity-100' : 'md:opacity-0'} pointer-events-none absolute -top-20 -bottom-1 left-0 right-0 -z-20 touch-none transition-all md:top-0 md:-bottom-12">
		<div
			class="blur-fix absolute h-full w-full backdrop-blur-lg [mask-image:linear-gradient(to_top,black,black,transparent)] dark:backdrop-brightness-75
		md:backdrop-blur-xl md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)] " />
		<div
			class="absolute bottom-0 -z-10 h-[105%] w-full bg-gradient-to-t from-zinc-100/80 via-zinc-100/60 backdrop-brightness-110 backdrop-saturate-150 dark:backdrop-saturate-200 [mask-image:linear-gradient(to_top,black,black,transparent)] dark:from-zinc-700/50 dark:backdrop-brightness-100 dark:backdrop-saturate-200 md:top-0 md:bg-gradient-to-b md:from-white md:via-white/80 md:backdrop-brightness-100 md:[mask-image:linear-gradient(to_bottom,black,black,black,transparent)]  " />
	</div>
	<!-- /Background -->
</nav>
