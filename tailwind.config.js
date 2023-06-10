/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	// darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--mont)'],
			},
			fontWeight: {},
			colors: {
				text: '#000000',
				background: '#ffffff',
				primary: '#30d556',
				secondary: '#fbeaf7',
				accent: '#9effb5',
			},
			animation: {
				'spin-slower': 'spin-reversed 14s linear infinite',
			},
			keyframes: {
				'spin-reversed': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' },
			} },
		},
	},
	plugins: [],
}


// 'text': '#fbeedf',
// 'background': '#170d03',
// 'primary-button': '#f4ca9a',
// 'secondary-button': '#050301',
// 'accent': '#f6d6b1',
