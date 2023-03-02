<script>
  import ReaderPage from "$lib/components/layouts/ReaderPage.svelte";
  import IMGHero from '$lib/assets/images/bg/demo-movieNow.svelte'
  import WIP from "$lib/components/_extras/WIP.svelte";

  const data = {
    title: 'movieNow',
    subtitle: 'An interesting tagline.',
    color: 'blue',
    pathBack: "/#External projects"
  };
</script>

<ReaderPage {...data}>
  <IMGHero
    eager
    slot="hero_img"
    class="max-h-[32rem] min-h-px h-full w-auto" />
  <WIP/>
</ReaderPage>