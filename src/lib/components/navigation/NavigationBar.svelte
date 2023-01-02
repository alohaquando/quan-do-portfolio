<script>
	import Icon from '$lib/components/iconography/Icon.svelte';

	let navLinks = [
		{ a: '/', icon: 'home', title: 'Home' },
		{ a: '/work', icon: 'rectangle_stack', title: 'Work' },
		{ a: '/about', icon: 'face_smile', title: 'About' },
		{ a: '/contact', icon: 'chat_bubble_left', title: 'Contact' }
	];

	import { page } from '$app/stores';

	let activeSection;

	$: if ($page.url.pathname === '/') {
		activeSection = 'Home';
	} else if ($page.url.pathname.includes('work')) {
		activeSection = 'Work';
	} else if ($page.url.pathname.includes('about')) {
		activeSection = 'About';
	} else if ($page.url.pathname.includes('contact')) {
		activeSection = 'Contact';
	}
</script>

<!--	Navigation bar-->
<nav
	class="fixed z-50 mx-6 rounded-full border bg-white/70 px-4 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/90 sm:mx-auto sm:w-fit">
	<ul class="flex place-content-between text-xs sm:text-base">
		<!--			Links-->
		{#each navLinks as link}
			<li class="contents">
				<!--Text-->
				<a
					href={link.a}
					class="group flex flex-1 flex-col place-content-center items-center border-b-0 py-2 font-display font-medium font-medium transition hover:text-amber-500/80 dark:hover:text-amber-400 sm:px-4 {activeSection ===
					link.title
						? 'text-amber-500'
						: 'text-zinc-400'}">
					<!--Selection block-->
					<div
						class="mb-1.5 rounded-full py-0.5 px-3.5 transition group-hover:bg-amber-100/30 dark:group-hover:bg-amber-900/20 sm:hidden {activeSection ===
						link.title
							? 'bg-amber-100/50 dark:bg-amber-900/30'
							: ''}">
						<!--Icon-->
						<Icon
							name={link.icon}
							class="mx-auto group-hover:stroke-amber-500/80 dark:group-hover:stroke-amber-400"
							color={activeSection === link.title
								? 'stroke-amber-500 dark:stroke-amber-600'
								: 'stroke-zinc-400'} />
					</div>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>
