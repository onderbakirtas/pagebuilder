import adapter from '@sveltejs/adapter-static'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$stores: path.resolve('./src/stores'),
				},
			},
		},
		prerender: {
			enabled: true,
			pages: ['*'],
			crawl: true,
		},
	},
}

export default config
