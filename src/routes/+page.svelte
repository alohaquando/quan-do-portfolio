<script>
	import Landing from '$lib/components/layout/Landing.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import DisplayMedium from '$lib/components/typography/display/DisplayMedium.svelte';
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';
	import WIP from '$lib/components/_extras/WIP.svelte';
</script>

<Landing />

<PageLayout title="Quân Đỗ's Portfolio">
	<div class="flex flex-col gap-40 pt-20">
		<section class="flex flex-col gap-32 sm:gap-48 ">
			<DisplayMedium>
				I'm Quân Đô.
				<span class="inline-block -indent-4">&#x303;</span>
			</DisplayMedium>
			<DisplayMedium>
				I've been designing intuitive user-first interfaces for two years.
			</DisplayMedium>
			<DisplayMedium>
				Capable with tech, I can design experiences that both look good and work well.
			</DisplayMedium>
		</section>

		<section
			id="work"
			class="h-[50vh] pt-8">
			<DisplayLarge>Designs that work</DisplayLarge>
			<WIP />
		</section>

		<section
			id="about"
			class="h-[50vh] pt-8">
			<DisplayLarge>A bit about me</DisplayLarge>
			<WIP />
		</section>

		<section
			id="contact"
			class="h-[50vh] pt-8">
			<DisplayLarge>Let's get in touch</DisplayLarge>
			<WIP />
		</section>
	</div>
</PageLayout>
