<script>
	import { enhance } from '$app/forms';
	import { errorMessage, foodInfo } from '../store';
	export let loading;
</script>

<form
	action="?/checkFood"
	method="POST"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			if (result.data.json.error) {
				foodInfo.set(undefined);
				errorMessage.set(result.data.json.error);
			} else {
				errorMessage.set(undefined);
				foodInfo.set(result.data.json);
			}
			loading = false;
		};
	}}
>
	<div class="flex flex-col justify-center align-middle gap-4">
		<label class="label">
			<span>Enter the food</span>
			<input class="input" type="text" placeholder="Food" name="foodInfo" />
		</label>
		<button class="btn variant-filled-primary" type="submit">Submit</button>
	</div>
</form>
