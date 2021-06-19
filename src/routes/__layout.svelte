<script>
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<div class="app">
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
	}

	.app {
		display: flex;
		min-height: 100vh;
		position: relative;
		width: 100%;
		background: #ddd;
	}
</style>
