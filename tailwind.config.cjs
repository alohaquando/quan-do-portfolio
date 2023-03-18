const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		fontFamily: {
			sans: ['Strawford, system-ui', { fontFeatureSettings: '"calt", "case", "ss01", "ss03", "cv11"' }],
			reader: ['Inter, system-ui']
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-to-tr-alt': 'linear-gradient(10deg, var(--tw-gradient-stops))'
			}
		}
	},

	plugins: [require('@tailwindcss/line-clamp')]
};

module.exports = config;
