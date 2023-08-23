// vite.config.js
import { defineConfig } from 'vite';
export default defineConfig({
	build: {
		outDir: 'dist',
		lib: {
			entry: 'index.js',
			name: '@tareqnmd/jscf',
			fileName: 'index',
		},
		formats: ['es', 'cjs'],
	},
});
