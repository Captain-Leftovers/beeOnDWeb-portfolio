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
					dark: '#cefdda',
				},
				background: {
					DEFAULT: '#fff7f5',
					dark: '#02220a',
				},
				primary: {
					DEFAULT: '#8e76f9',
					dark: '#067a5d',
				},
				secondary: {
					DEFAULT: '#d6f6d5',
					dark: '#000405',
				},
				accent: {
					DEFAULT: '#76f98e',
					dark: '#065d7a',
				},
			},
		},
		animation: {
			'spin-slower': 'spin-reversed 14s linear infinite',
			'spin-one': 'spin-big-small 3s ease-in-out  forwards ',
			'spin-two': 'spin-small-big 3s ease-in-out  forwards ',
		},
		keyframes: {
			'spin-reversed': {
				'0%': { transform: 'rotate(0deg)' },
				'100%': {
					transform: 'rotate(-360deg)',
				},
			},
			'spin-big-small': {
				'0%': { transform: 'rotate(0deg) scale(1) ' },
				
				'100%': {
					transform: 'rotate(90deg) scale(0.2) ',
				},
			},
			'spin-small-big': {
				'0%': { transform: 'rotate(0deg) scale(0.2)  ' },
				
				'100%': {
					transform: 'rotate(45deg) scale(1) translate(50%, -60%) ',
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
