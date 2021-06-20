<script>
	import LayoutError from '$lib/layouts/LayoutError.svelte';

	import LayoutA from '../layouts/LayoutA.svelte';
	import LayoutB from '../layouts/LayoutB.svelte';
	import LayoutC from '../layouts/LayoutC.svelte';

	export let layout;

	$: component = (el) => {
		let layoutComponent;
		switch (el?.name) {
			case 'LayoutA':
				layoutComponent = LayoutA;
				break;
			case 'LayoutB':
				layoutComponent = LayoutB;
				break;
			case 'LayoutC':
				layoutComponent = LayoutC;
				break;
			default:
				layoutComponent = LayoutError;
		}
		return layoutComponent;
	};
</script>

<svelte:component this={component(layout)} slots={layout?.slots} />
