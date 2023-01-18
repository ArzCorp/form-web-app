/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				light: '#EFF5FF',
				border: '#D6D9E6',
				denim: '#022959',
				grey: '#9699AA',
				'light-blue': '#ABBCFF',
				'light-grey': '#D6D9E6',
				orange: '#FFAF7E',
				pink: '#F9818E',
				purple: '#483EFF',
				'red-error': '#EE374A',
				'sky-blue': '#BEE2FD',
				'very-light-grey': '#F8F9FF',
				white: '#FFFFFF',
			},
			fontSize: {
				'heading-l': ['2rem', 'auto'],
				'heading-m': ['1.5rem', '1.724rem'],
				'body-xl': ['1rem', '1.563rem'],
				'body-l': ['0.938rem', '1.078rem'],
				'body-m': ['0.875rem', 'auto'],
				'body-s': ['0.75rem', 'auto'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
