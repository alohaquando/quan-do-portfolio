import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['png', 'jpg', 'jpeg'];

/** @type {import("vite").UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension,
						blur: '100;0',
						quality: '50; 100',
						width: '300; 600; 900; 2000',
						picture: true
					});
				}
				return new URLSearchParams();
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
