export default {
	base: '/',
	build: {
		minify: 'terser',
		outDir: 'dist',
		sourcemap: false,
	},
	define: {
		__DEBUG__: false,
	},
}
