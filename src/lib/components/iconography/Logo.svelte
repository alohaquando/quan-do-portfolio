<script lang="ts">
	const logo = {
		iconForeground: {
			height: `24`,
			width: `24`,
			path: `<path fill="#fff" d="M17.293 13.217 11.931 10l-5.362 3.217 1.172 1.955 4.19-2.514 4.19 2.514 1.172-1.955ZM11.76 17c-3.11 0-5.592 2.357-5.752 5.4.772.445 1.597.807 2.465 1.073a3.936 3.936 0 0 1-.073-.761c0-2.016 1.464-3.504 3.456-3.528 1.968.024 3.456 1.512 3.456 3.528 0 .296-.032.581-.093.851.83-.23 1.625-.548 2.373-.943v-5.356h-2.28v.912C14.328 17.408 13.08 17 11.76 17Z"/>`
		},
		iconBackground: {
			height: `24`,
			width: `24`,
			path: `<circle cx="12" cy="12" r="12"/>`
		},
		text: {
			height: `26`,
			width: `83`,
			path: `<path d="M15.637 12.953c0-4.04-3.2-7.2-7.28-7.2-4.1 0-7.28 3.16-7.28 7.2s3.18 7.2 7.28 7.2c1.2 0 2.32-.28 3.3-.76l1.3 1.54h2.38l-2.16-2.54c1.52-1.32 2.46-3.24 2.46-5.44Zm-7.28 5.16c-2.92 0-5.06-2.28-5.06-5.16 0-2.88 2.14-5.16 5.06-5.16 2.92 0 5.06 2.28 5.06 5.16 0 1.52-.6 2.88-1.6 3.82l-1.96-2.32h-2.34l2.76 3.3c-.58.24-1.22.36-1.92.36ZM21.724 20.173c2.7 0 4.02-1.88 4.02-4.16v-5.14h-1.9v5.18c0 1.4-.82 2.3-2.12 2.3-1.32 0-2.12-.9-2.12-2.3v-5.18h-1.9v5.14c0 2.28 1.3 4.16 4.02 4.16ZM35.516 11.633c-.82-.64-1.86-.98-2.96-.98-2.68 0-4.8 2.1-4.8 4.76 0 2.68 2.12 4.76 4.8 4.76 1.1 0 2.14-.34 2.96-.96v.74h1.9v-9.08h-1.9v.76Zm-2.88 6.7c-1.66 0-2.88-1.24-2.88-2.92s1.22-2.92 2.88-2.94c1.64.02 2.88 1.26 2.88 2.94s-1.24 2.92-2.88 2.92ZM42.091 19.953v-5.14c0-1.46.94-2.38 2.2-2.38 1.28 0 2.08.9 2.08 2.2v5.32h1.9v-5.72c0-2.02-1.46-3.58-3.6-3.58-1.42 0-2.36.72-2.7 1.26v-1.04h-1.78v9.08h1.9ZM56.745 5.953v6.08h-1.36v1.62h1.36v6.3h5.06a6.99 6.99 0 0 0 7.02-7.02c0-3.84-3.1-6.98-7.02-6.98h-5.06Zm2.1 12.06v-4.36h3.72v-1.62h-3.72v-4.14h2.62c2.88 0 5.14 1.96 5.14 5.04 0 3.1-2.26 5.08-5.14 5.08h-2.62ZM75.488 20.173c2.78 0 4.88-2.06 4.88-4.76 0-2.7-2.1-4.76-4.88-4.76-2.76 0-4.88 2.06-4.88 4.76 0 2.7 2.12 4.76 4.88 4.76Zm0-1.84c-1.66 0-2.88-1.24-2.88-2.92s1.22-2.92 2.88-2.94c1.64.02 2.88 1.26 2.88 2.94s-1.24 2.92-2.88 2.92Z"/><path fill-rule="evenodd" d="M74.624 2.702a1.062 1.062 0 0 0-1.296.224l-.857.954-1.399-1.257.858-.954a2.942 2.942 0 0 1 3.59-.62l1.03.559c.364.197.81.165 1.143-.084l1.185-.889 1.128 1.505-1.186.888c-.92.69-2.156.78-3.166.232l-1.03-.558ZM32.873 4.716l4.434 2.66-.97 1.617-3.464-2.08-3.464 2.08-.97-1.617 4.434-2.66ZM75.518 4.716l4.434 2.66-.97 1.617-3.464-2.08-3.465 2.08-.97-1.617 4.435-2.66Z" clip-rule="evenodd"/>`
		}
	};

	let className = '';
	export { className as class };
</script>

<div class="flex gap-2.5 {className}">
	<div class="h-[24px] w-[24px] rounded-full [background:linear-gradient(128.34deg,#EBA864_0%,#E25412_50.66%,#B22259_103.22%)]">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 {logo.iconForeground.width} {logo.iconForeground.height}"
			width={logo.iconForeground.width}
			height={logo.iconForeground.height}>
			{@html logo.iconForeground.path}
		</svg>
	</div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 {logo.text.width} {logo.text.height}"
		width={logo.text.width}
		height={logo.text.height}
		class="translate-y-[0.075rem] fill-black transition-all duration-500 dark:fill-white">
		{@html logo.text.path}
	</svg>
</div>
