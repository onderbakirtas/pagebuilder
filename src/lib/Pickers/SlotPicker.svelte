<script>
	import { page } from '$app/stores'
	import Button from '$lib/Button.svelte'
	import ComponentPicker from '$lib/Pickers/ComponentPicker.svelte'

	export let slots
	export let name
	export let pageId

	$: inAdmin = $page.path.includes('/admin/')

	const components = slots.find((el) => el.name === name)?.components

	let editing = false

	const toggleEditing = (status) => (editing = status)
</script>

{pageId}

{#if components && components.length > 0}
	{#each components as component}
		<ComponentPicker element={component} />
	{/each}
	{#if inAdmin}
		{#if !editing}
			<Button text="Yeni Bileşen" block on:click={() => toggleEditing(true)} />
		{:else}
			<Button text="İptal Et" block on:click={() => toggleEditing(false)} />
		{/if}
	{/if}
{/if}
