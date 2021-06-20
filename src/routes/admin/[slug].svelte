<script>
	import { page } from '$app/stores'
	import LayoutPicker from '$lib/Pickers/LayoutPicker.svelte'
	import { pagesConfig } from '$stores/pages'

	$: thisPage = $pagesConfig.find((p) => p.route === $page.params.slug)

	console.log(thisPage)
</script>

<LayoutPicker layout={thisPage.layout} pageId={thisPage.id} />
