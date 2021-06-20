<script>
	import { pagesConfig } from '$stores/pages'

	import { onMount } from 'svelte'

	onMount(async () => {
		try {
			const action = await fetch('http://localhost:4000/pages')
			const res = await action.json()
			console.log(res)
			$pagesConfig = res
		} catch (error) {
			console.error(error)
		}
	})
</script>

<nav>
	<a href="/">index</a>
	<a href="/admin/anasayfa">admin anasayfa</a>
	{#each $pagesConfig as page}
		<a href={`/${page.route}`}>{page.title}</a>
	{/each}
</nav>

<slot />

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background: #ddd;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
