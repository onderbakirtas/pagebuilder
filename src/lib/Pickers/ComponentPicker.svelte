<script>
	import Carda from '$lib/components/carda.svelte';
	import Cardb from '$lib/components/cardb.svelte';

	export let element;

	$: component = (el) => {
		let str;
		switch (el.name) {
			case 'carda':
				str = Carda;
				break;
			case 'cardb':
				str = Cardb;
				break;
			default:
				str = Carda;
		}
		return str;
	};
</script>

<svelte:component this={component(element)} model={element.data} />
