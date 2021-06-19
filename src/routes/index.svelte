<script>
	import Component from '$lib/ComponentPicker.svelte';
	import Selection from '$lib/Selection.svelte';

	let items = [
		{
			link: '/',
			title: 'Ana sayfa'
		},
		{
			link: '/about',
			title: 'Hakkinda'
		},
		{
			link: '/contact',
			title: 'Iletisim'
		}
	];

	let cardContent = 'title is heress';

	let componetsList = [
		{
			name: 'card',
			props: cardContent
		},
		{
			name: 'navbar',
			props: items
		}
	];

	let selectedComponent = 'card';

	const handleSelection = (val) => {
		console.log(val.detail);
		selectedComponent = val.detail;
		componetsList = [...componetsList, { name: selectedComponent }];
	};
	let page = {
		url: '/',
		layout: 'asd',
		components: [
			{
				slot: 'slotb',
				name: 'comp1',
				data: {}
			},
			{
				slot: 'slota',
				name: 'comp2',
				data: {}
			}
		]
	};
</script>

<!-- <Selection on:selection={handleSelection} />
<hr />

{#each componetsList as comp}
	<Component element={comp.name} model={comp.props} />
{/each} -->
