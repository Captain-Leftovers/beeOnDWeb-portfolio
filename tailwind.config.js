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
					dark: '#f5f5f5',
				},
				background: {
					DEFAULT: '#fff7f5',
					dark: '#121211',
				},
				primary: {
					DEFAULT: '#8e76f9',
					dark: '#484b4a',
				},
				secondary: {
					DEFAULT: '#d6f6d5',
					dark: '#121112',
				},
				accent: {
					DEFAULT: '#76f98e',
					dark: '#7a7577',
				},
			},
		},
		animation: {
			'spin-one': 'spin-big-small 3s ease-in-out  forwards ',
			'spin-two': 'spin-small-big 3s ease-in-out  forwards ',
		},
		keyframes: {
	
			
			'spin-big-small': {
				'0%': { transform: 'rotate(0deg) scale(1) ' },

				'100%': {
					transform: 'rotate(90deg) scale(0.2) ',
				},
			},
			'spin-small-big': {
				'0%': { transform: 'rotate(0deg) scale(0.2)  ' },

				'100%': {
					transform: 'rotate(45deg) scale(1) translate(55%, -55%) ',
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
