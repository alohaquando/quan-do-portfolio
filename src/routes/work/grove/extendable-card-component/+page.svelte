<script>
	import IMG_Hero from '$lib/assets/images/extendable-card-component/hero.svelte';
	import IMG_1 from '$lib/assets/images/extendable-card-component/1st-iteration-designs.svelte';
	import IMG_2 from '$lib/assets/images/extendable-card-component/1st-iteration-idea.svelte';
	import IMG_3 from '$lib/assets/images/extendable-card-component/1st-iteration-problems.svelte';
	import IMG_4 from '$lib/assets/images/extendable-card-component/2nd-iteration.svelte';
	import IMG_5 from '$lib/assets/images/extendable-card-component/3rd-iteration.svelte';
	import IMG_6 from '$lib/assets/images/extendable-card-component/final-card-component.svelte';
	import IMG_7 from '$lib/assets/images/extendable-card-component/final-iteration.svelte';
	import IMG_8 from '$lib/assets/images/extendable-card-component/final-version-design.svelte';
	import IMG_9 from '$lib/assets/images/extendable-card-component/iteration-process-component.svelte';
	import IMG_10 from '$lib/assets/images/extendable-card-component/iteration-process-screen.svelte';
	import IMG_11 from '$lib/assets/images/extendable-card-component/more-reason-to-update.svelte';
	import IMG_12 from '$lib/assets/images/extendable-card-component/update-to-new-design.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import CaseStudyPage from '$lib/components/layout/CaseStudyPage.svelte';
</script>

<CaseStudyPage
	title="Extendable Card Component"
	headline="Display complex data in an easily scannable and actionable component">
	<IMG_Hero eager slot="hero_image" class="max-h-[30vh]" />
		<Title>Heading</Title>
		<Body>
			The web has evolved a lot since it started. While designing for the web used to involve a
			single screen, in today’s world it means anything but. The reality of today’ web is tons of
			devices, with all different systems, screen sizes, input types, and form factors. Not only
			that, websites and mobile applications are even beginning to merge. What this all means is
			that the previous idea of a static web page just isn’t practical anymore.
		</Body>
		<IMG_1
			alt="The design of the 1st iteration. Showing the differences between the employee's view and the manager's view. Manager's view contains more information and actions." />
		<IMG_2 />
		<IMG_3 />
		<IMG_4 />
		<IMG_5 />
		<IMG_6 />
		<IMG_7 />
		<IMG_8 />
		<IMG_9 />
		<IMG_10 />
		<IMG_11 />
		<IMG_12 />
</CaseStudyPage>
