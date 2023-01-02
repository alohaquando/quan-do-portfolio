<script>
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';
	import ContactCard from "$lib/components/cards/ContactCard.svelte";

	let contactLinks = [
		{ href: 'mailto:work@quanhdo.com', icon: 'rectangle_stack', title: 'Email', subtitle: 'work@quanhdo.com' },
		{ href: '/about', icon: 'face_smile', title: 'GitHub', subtitle: '@alohaquando' },
		{ href: '/contact', icon: 'at_symbol', title: 'LinkedIn', subtitle: '@' }
	];
</script>

<ShowcasePage title="Contact">
	{#each contactLinks as link}
		<ContactCard href={link.href} title={link.title} body={link.subtitle} />
	{/each}
</ShowcasePage>
