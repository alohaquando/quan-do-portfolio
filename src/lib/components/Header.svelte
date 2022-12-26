<script>
	import Icon from '$lib/assets/icons/Icon.svelte';

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

<div
	class="fixed bottom-0 w-full bg-gradient-to-t from-white via-white/70 py-4 dark:from-zinc-900 dark:via-zinc-900/80 sm:sticky sm:top-0 sm:from-transparent">
	<nav
		class="z-10 mx-6 flex rounded-full border bg-white/70 px-6 py-2 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/90 sm:mx-auto sm:w-fit sm:px-6">
		<ul class="flex w-full place-content-between text-xs font-medium sm:space-x-4 sm:text-base">
			{#each navLinks as link}
				<li>
					<a
						href={link.a}
						class="group flex w-16 flex-col place-content-center items-center  transition hover:text-amber-500/80 sm:w-auto border-b-0 {activeSection ===
						link.title
							? 'text-amber-500'
							: 'text-zinc-400'}">
						<div
							class="sm:hidden mb-1.5 py-0.5 px-3.5 rounded-full  group-hover:bg-stone-100/80 dark:group-hover:bg-stone-800/50 transition {activeSection ===
							link.title
								? 'bg-stone-100/90 dark:bg-stone-800/90'
								: ''}">
							<Icon
								name={link.icon}
								class="mx-auto group-hover:stroke-amber-500/80 dark:group-hover:stroke-white/80 {activeSection ===
								link.title
									? 'stroke-amber-500 dark:stroke-amber-600'
									: 'stroke-zinc-400'}" />
						</div>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
