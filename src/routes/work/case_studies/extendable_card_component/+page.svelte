<script>
  import ReaderPage from "$lib/components/layouts/ReaderPage.svelte";
  import WIP from "$lib/components/_extras/WIP.svelte";

  const data = {
    title: 'Extendable Card Component',
    subtitle: 'An interesting tagline.',
    color: 'blue',
    pathBack: "/#Case studies"
  };
</script>

<ReaderPage {...data}>
  <WIP/>
</ReaderPage>