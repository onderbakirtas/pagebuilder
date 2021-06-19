<script>
	import SlotPicker from '$lib/Pickers/SlotPicker.svelte';

	export let slots;
</script>

<h1>Layout B</h1>

{JSON.stringify(slots)}

<div class="row">
	<div class="col">
		<SlotPicker name="slotX" {slots} />
	</div>
	<div class="col">
		<SlotPicker name="slotY" {slots} />
	</div>
	<div class="col">
		<SlotPicker name="slotZ" {slots} />
	</div>
	<div class="col">
		<SlotPicker name="slotT" {slots} />
	</div>
</div>

<style>
	.row {
		width: 100%;
		border: 1px solid red;
		display: flex;
	}

	.col {
		flex: 0 0 25%;
		border: 3px solid green;
	}
</style>
