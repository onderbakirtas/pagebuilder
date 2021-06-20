<script>
	export let text;
	export let block = false;
</script>

<button class:block on:click>{text}</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		height: 2.25rem;
		padding: 0 1.5rem;
		border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
		font-family: inherit;
		font-weight: bold;
		font-size: 0.875rem;
		line-height: 1.25rem;
		background: transparent;
		color: royalblue;
		box-shadow: inset 0 0 0 1px royalblue;
	}

	button:hover {
		background: rgba(65, 105, 225, 0.2);
	}

	button.block {
		width: 100%;
    text-align: center;
    justify-content: center;
	}
</style>
