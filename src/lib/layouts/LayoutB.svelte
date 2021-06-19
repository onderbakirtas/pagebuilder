<script>
	import ComponentPicker from '$lib/ComponentPicker.svelte';

	export let slots;
</script>

<h1>Layout B</h1>

{JSON.stringify(slots)}

<div class="row">
	{#each slots as item}
		<div class="col">
			{#each item.components as component}
				<ComponentPicker element={component} />
			{/each}
		</div>
	{/each}
</div>

<style>
	.row {
		width: 100%;
		border: 1px solid red;
		display: flex;
	}

	.col {
		flex: 0 0 25%;
		border: 3px solid green;
	}
</style>
