<script>
  import Display from '$lib/components/typography/Display.svelte';
  import BodyLarge from "$lib/components/typography/BodyLarge.svelte";

  export let title = 'Title';
  export let subtitle = 'Subtitle';
  export let href = '/#work';
</script>

<div class="h-screen flex w-full ">
	<a {href} class="contents">
    <div class="m-4 w-full bg-zinc-900 rounded-[2.5rem] flex items-end place-content-start px-20 py-24">
      <div class="flex flex-col">
        <Display>{title}</Display>
        <BodyLarge class="opacity-80">{subtitle}</BodyLarge>
      </div>
    </div>
  </a>
</div>
