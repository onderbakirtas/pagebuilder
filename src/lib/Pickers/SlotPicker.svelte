<script>
	import ComponentPicker from '$lib/ComponentPicker.svelte';

	export let slots;
	export let name;

	const components = slots.find((el) => el.name === name)?.components;
</script>

{#if components && components.length > 0}
	{#each components as component}
		<ComponentPicker element={component} />
	{/each}
{/if}
