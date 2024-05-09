const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Arial', 'sans-serif'],
			black: ['Arial Black', 'sans-serif']
		},
		extend: {
			colors: {
				black: '#333333',
				brand: '#161026',
				accent: {
					// pink
					100: '#DF234F',
					25: 'rgba(223, 35, 79, 0.25)'
				},
				'accent-two': '#FF3333', // orangy
				'accent-three': '#006699', // blue
				'accent-four': '#009933', //green
				'off-white': '#EDEDED',
				'off-white-dark': '#7D7D7D'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(to right, #E62243, #C1267D)',
				'gradient-robomission': 'linear-gradient(to right, #FF9933, #FFFF00)',
				'gradient-future': 'linear-gradient(to right, #FF3333, #FF0099)'
			},
			fontSize: {
				'2.5xl': '1.75rem'
			},
			gridTemplateColumns: {
				timeline: '1.5fr 5fr 0.9fr',
				calendar: '1fr 1.5fr 1fr'
			}
		}
	},
	plugins: []
};
