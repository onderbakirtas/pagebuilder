<script>
	import Carda from './components/carda.svelte';
	import Cardb from './components/cardb.svelte';

	export let element;

	$: component = (el) => {
		let str;
		switch (el.name) {
			case 'carda':
				str = Carda;
				break;
			case 'cardb':
				str = Carda;
				break;
			default:
				str = Carda;
		}
		return str;
	};
</script>

<svelte:component this={component(element)} />
