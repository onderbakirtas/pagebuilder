<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		try {
			const action = await fetch('http://localhost:4000/pages');
			const res = await action.json();
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	});
</script>

<slot />
