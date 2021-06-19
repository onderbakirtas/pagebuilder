<script>
	import LayoutA from './layouts/LayoutA.svelte';
	import LayoutB from './layouts/LayoutB.svelte';
	import LayoutC from './layouts/LayoutC.svelte';

	export let layout;

	$: component = (el) => {
		console.log(el);
		let str;
		switch (el.name) {
			case 'LayoutA':
				str = LayoutA;
				break;
			case 'LayoutB':
				str = LayoutB;
				break;
			case 'LayoutC':
				str = LayoutC;
				break;
			default:
				str = LayoutA;
		}
		return str;
	};
</script>

<svelte:component this={component(layout)} slots={layout.slots} />
