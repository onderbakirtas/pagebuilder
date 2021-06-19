<script>
	export let model;
</script>

<nav>
	{#each model as item}
		<a href={item.link}>{item.title}</a>
	{:else}
		<span>menu itemi yok</span>
	{/each}
</nav>
