<script>
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';
	import ContactCard from '$lib/components/cards/ContactCard.svelte';

	let contactLinks = {
		email: {
			href: 'mailto:work@quanhdo.com',
			icon: 'envelope',
			title: 'Email',
			subtitle: 'work@quanhdo.com',
			// colorStyle: 'bg-amber-400 dark:bg-amber-600',
			// ringStyle: 'group-hover:ring-amber-400 dark:group-hover:ring-amber-600'
		},
		github: {
			href: 'https://github.com/alohaquando',
			icon: 'github',
			title: 'GitHub',
			subtitle: '@alohaquando',
			// colorStyle: 'bg-violet-400 dark:bg-violet-600',
			// ringStyle: 'group-hover:ring-violet-400 dark:group-hover:ring-violet-600'
		},
		linkedin: {
			href: 'https://linkedin.com/in/quanhoangdo',
			icon: 'linkedin',
			title: 'LinkedIn',
			subtitle: '/quanhoangdo',
			// colorStyle: 'bg-blue-400 dark:bg-blue-600',
			// ringStyle: 'group-hover:ring-blue-400 dark:group-hover:ring-blue-600'
		}
	};
</script>

<ShowcasePage title="Contact">
	<div class="grid grid-flow-row grid-cols-2 grid-rows-2 gap-6">
		{#each Object.values(contactLinks) as link}
			<ContactCard
				href={link.href}
				title={link.title}
				body={link.subtitle}
				colorStyle={link.colorStyle}
				ringStyle={link.ringStyle}
				icon={link.icon}
				class="first:col-span-2" />
		{/each}
	</div>
</ShowcasePage>
