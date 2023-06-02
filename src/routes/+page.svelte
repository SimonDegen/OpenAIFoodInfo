<script>
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { errorMessage, foodInfo } from '../store';
	import Form from '../components/form.svelte';
	import FoodInfoCards from '../components/foodInfoCards.svelte';

	let loading = false;
	console.log($errorMessage);
	$: formVisable = $errorMessage === undefined && $foodInfo === undefined && loading === false;
	const reset = ()=>{
		foodInfo.set(undefined);
		errorMessage.set(undefined);
	}
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center align-middle">
	<div class="space-y-5">

		{#if formVisable}
			<Form bind:loading />
		{/if}
		{#if $errorMessage}
			<div class="alert alert-error">You must write a valid food item</div>
		{/if}
		{#if $foodInfo}
			<FoodInfoCards/>
		{/if}
		{#if loading }
			<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		{/if}
		{#if !formVisable && !loading}
		<button class="btn variant-filled-primary" on:click={reset}>Reset</button>
		{/if}
	</div>
</div>
