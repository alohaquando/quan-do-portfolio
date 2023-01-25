
<script>
  import DisplayMedium from "$lib/components/typography/display/DisplayMedium.svelte";

  let scrollY;
  let pageBackgroundCondition;
  let hasBeenToTop =false;
  $:  if (scrollY > 1) {
    hasBeenToTop = true}
  $: pageBackgroundCondition = scrollY > 20 && hasBeenToTop;

  const max_w_outer_page = ' sm:mx-auto sm:max-w-[85rem]';

</script>

<div class="contents">
  <div class="{pageBackgroundCondition ?  'bg-white shadow-sm ring-zinc-900/5 dark:bg-zinc-900 sm:ring-1 sm:dark:ring-white/10' : 'bg-white/0 dark:bg-black/0'} {max_w_outer_page} fixed top-0 left-0 right-0 bottom-0 z-10 px-6 transition duration-300 lg:px-px" />

  <div class="{pageBackgroundCondition ? 'border-b border-zinc-900/10 bg-white/80 dark:bg-zinc-900/80' : 'bg-white/0 dark:bg-black/0'} {max_w_outer_page} blur-fix fixed top-0 left-0 right-0 z-50 flex py-2.5 backdrop-blur-lg transition dark:border-white/10">
    <div class="max-w-brand-style flex grow place-content-center items-center ">
      <a href="/">
        <DisplayMedium class="z-20 font-medium opacity-90">
          <span>Quân</span>
          Đô
          <span class="inline-block -indent-1.5 sm:-indent-2 md:-indent-2 lg:-indent-2 xl:-indent-2.5">&#x303;</span>
        </DisplayMedium>
      </a>
    </div>
  </div>

  <div class="{pageBackgroundCondition ? 'bg-white dark:bg-zinc-900 ': ''} {max_w_outer_page} fixed top-0 bottom-0 left-0 right-0 z-20 flex h-8 py-2  " />
</div>

<svelte:window bind:scrollY />
