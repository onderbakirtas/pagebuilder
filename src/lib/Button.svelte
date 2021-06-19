<script>
	export let text;
	export let block = false;
</script>

<button class:block>{text}</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		height: 2.5rem;
		padding: 0 1rem;
    border-radius: 0.4rem;
    border: none;
    outline: none;
    cursor: pointer;
	}

	button:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	button.block {
		width: 100%;
    text-align: center;
    justify-content: center;
	}
</style>
