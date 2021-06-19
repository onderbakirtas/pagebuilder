<script>
	import { page } from '$app/stores';
	import LayoutPicker from '$lib/LayoutPicker.svelte';
	import { pageConfig } from '../../config';

	$: layout = pageConfig.pages.find((p) => p.route === $page.params.slug).layout;
</script>

<LayoutPicker {layout} />
