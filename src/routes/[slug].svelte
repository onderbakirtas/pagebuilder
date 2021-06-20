<script>
	import { page } from '$app/stores';
	import LayoutPicker from '$lib/Pickers/LayoutPicker.svelte';
	import { pagesConfig } from '$stores/pages';

	$: layout = $pagesConfig.find((p) => p.route === $page.params.slug)?.layout;
</script>

<LayoutPicker {layout} />
