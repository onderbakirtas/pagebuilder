<script>
	import { pagesConfig } from '$stores/pages'
</script>

<aside>
	<h3>Sayfalar</h3>
	{#each $pagesConfig as page}
		<a href={`/admin/${page.route}`}>{page.title}</a>
	{/each}
</aside>

<style>
	aside {
		position: sticky;
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 12rem;
		flex: 0 0 12rem;
		background: #fff;
		border-right: 1px solid #ccc;
		padding: 3rem 1rem;
	}
</style>
