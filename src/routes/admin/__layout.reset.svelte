<script>
	import Sidebar from '$lib/admin/Sidebar.svelte';
</script>

<div class="app">
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		min-height: 100vh;
		position: relative;
		width: 100%;
		background: #ddd;
	}
</style>
