<script>
  import ReaderPage from "$lib/components/layouts/ReaderPage.svelte";
  import WIP from "$lib/components/_extras/WIP.svelte";

  const data = {
    title: 'movieNow',
    subtitle: 'An interesting tagline.',
    color: 'blue',
    pathBack: "/#External projects"
  };
</script>

<ReaderPage {...data}>
  <WIP/>
</ReaderPage>