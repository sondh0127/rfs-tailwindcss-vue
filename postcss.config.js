module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		rfs: {
			baseValue: 20, // Default: 20 (which is 1.25rem)
			unit: 'rem', // Default: rem
			breakpoint: 1920, // Default: 1200
			breakpointUnit: 'px', // Default: px
			factor: 20, // Default: 10
			remValue: 16, // Default: 16
			twoDimensional: false, // Default: false
			class: false, // Default: false
			safariIframeResizeBugFix: false, // Default: false
			unitPrecision: 5, // Default: 5
			functionName: 'rfs', // Default: rfs
			enableRfs: true, // Default: true
			mode: 'min-media-query', // Default: min-media-query
		},
	},
}
