<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let options = [
		{
			value: 'navbar',
			text: 'Navbar'
		},
		{
			value: 'card',
			text: 'Card'
		}
	];

	let selected;

	const handleSelect = () => {
		dispatch('selection', selected);
	};
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select bind:value={selected} on:change={handleSelect}>
	{#each options as option}
		<option value={option.value}>{option.text}</option>
	{/each}
</select>
