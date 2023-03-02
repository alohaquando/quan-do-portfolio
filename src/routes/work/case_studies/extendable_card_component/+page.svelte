<script>
  import ReaderPage from "$lib/components/layouts/ReaderPage.svelte";
  import IMGHero from '$lib/assets/images/bg/demo-extendable-card-component.svelte'
  import WIP from "$lib/components/_extras/WIP.svelte";

  const data = {
    title: 'Extendable Card Component',
    subtitle: 'An interesting tagline.',
    color: 'blue',
    pathBack: "/#Case studies"
  };
</script>

<ReaderPage {...data}>
  <IMGHero
    eager
    slot="hero_img"
    class="max-h-[32rem] h-12 h-full w-auto" />
  <WIP/>
</ReaderPage>