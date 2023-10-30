import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist',
		lib: {
			name: 'Javascript Common Functions Library',
			entry: {
				index: './functions/index.js',
			},
			formats: ['es'],
		},
	},
});
