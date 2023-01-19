<script>
	import DisplayXL from '$lib/components/typography/DisplayXL.svelte';
	import DisplayMedium from '$lib/components/typography/DisplayMedium.svelte';

	const links = {
		work: {
			href: '#work',
			title: 'Work',
			icon: ''
		},
		about: {
			href: '#about',
			title: 'About',
			icon: ''
		},
		contact: {
			href: '#contact',
			title: 'Contact',
			icon: ''
		}
	};
</script>

<header
	class="flex h-screen flex-col place-content-between items-center max-sm:[height:-webkit-fill-available]">
	<!--Title-->
	<div class="flex h-[30vh] items-center px-6 text-center sm:px-32">
		<DisplayXL>Quân Đỗ</DisplayXL>
	</div>

	<!--Links-->
	<div
		class="grid flex-grow gap-4 self-stretch max-sm:grid-rows-4 sm:grid-flow-col sm:grid-rows-2 sm:gap-6">
		<div
			class="glass-light flex place-content-center items-center rounded-3xl max-sm:row-span-2 sm:row-span-2">
			<DisplayMedium>Work</DisplayMedium>
		</div>
		<div class="glass-light flex place-content-center items-center rounded-3xl">
			<DisplayMedium>Work</DisplayMedium>
		</div>
		<div class="glass-light flex place-content-center items-center rounded-3xl">
			<DisplayMedium>Work</DisplayMedium>
		</div>
	</div>
</header>
