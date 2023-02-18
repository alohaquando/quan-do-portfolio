<script>
	let m = { x: 0, y: 0 };
	let mouseX;
	let mouseY;

	function trackMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		m.x = Math.round(event.clientX - rect.x);
		m.y = Math.round(event.clientY - rect.y);
	}

  $: {
    mouseX = m.x + 'px';
    mouseY = m.y + 'px';
  }
</script>

<div
	on:mousemove={trackMouse}
  class="rounded-full border border-white/30 bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] transition-all duration-300 opacity-0 [mask-image:radial-gradient(180px_at_var(--mouseX)_var(--mouseY),white,transparent)] hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
  style="--mouseX: {mouseX}; --mouseY: {mouseY}">
  {mouseX} {mouseY}
</div>
