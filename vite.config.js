import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist',
		lib: {
			name: 'Anthill Component Library',
			entry: {
				index: './functions/index.js',
			},
			formats: ['es'],
		},
	},
});
