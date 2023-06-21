// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	declare module '*as=meta:width;height&imagetools' {
		export const width: number, height: number;
	}

	declare module '*&imagetools' {
		export default out;
	}
}
