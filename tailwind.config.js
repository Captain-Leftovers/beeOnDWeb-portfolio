/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--mont)'],
			},
			fontWeight: {},
			colors: {
				text: {
					DEFAULT: '#220701',
					dark: '#fafafa',
				},
				background: {
					DEFAULT: '#fff7f5',
					dark: '#0b090b',
				},
				primary: {
					DEFAULT: '#8e76f9',
					dark: '#73806f',
				},
				secondary: {
					DEFAULT: '#d6f6d5',
					dark: '#000000',
				},
				accent: {
					DEFAULT: '#76f98e',
					dark: '#41062c',
				},
			

				}
			},
			animation: {
				'spin-slower':
					'spin-reversed 14s linear infinite',
			},
			keyframes: {
				'spin-reversed': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': {
						transform: 'rotate(-360deg)',
					},
				},
			},
		},
	}

// 'text': '#fbeedf',
// 'background': '#170d03',
// 'primary-button': '#f4ca9a',
// 'secondary-button': '#050301',
// 'accent': '#f6d6b1',

// think how to put the colors in
