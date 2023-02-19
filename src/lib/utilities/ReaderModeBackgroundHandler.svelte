<script>
  // Setting :root color on load
  import { onMount } from 'svelte';
  import { beforeNavigate } from '$app/navigation';

  const readerModeDarkBG = 'dark:bg-zinc-900'
  const readerModeLightBG = 'bg-zinc-100'

  let root;
  onMount(() => {
    root = document.getElementsByTagName('body')[0];
    root?.classList.remove('dark:bg-black');
    root?.classList.remove('bg-white');
    root?.classList.add(readerModeLightBG);
    root?.classList.add(readerModeDarkBG);
  });
  beforeNavigate(() => {
    root?.classList.remove(readerModeDarkBG);
    root?.classList.remove(readerModeLightBG);
    root?.classList.add('bg-white');
    root?.classList.add('dark:bg-black');
  });
</script>