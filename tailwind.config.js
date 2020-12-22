module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			fontSize: ['rfs'],
			lineHeight: ['rfs'],
			padding: ['rfs'],
			margin: ['rfs'],
			gap: ['rfs'],
			space: ['rfs'],
			width: ['rfs'],
			minWidth: ['rfs'],
			maxWidth: ['rfs'],
			height: ['rfs'],
			minHeight: ['rfs'],
			maxHeight: ['rfs'],
			borderRadius: ['rfs'],
			inset: ['rfs'],
			translate: ['rfs'],
		},
	},
	plugins: [require('tailwindcss-rfs')],
}
