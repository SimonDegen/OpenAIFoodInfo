<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { foodInfo } from '../store';

	const pros = ['test', 'test2', 'test3'];
	let value: number = 0;
	if ($foodInfo) {
		value = $foodInfo.healthRating * 10;
	}
</script>

{#if $foodInfo}
	<div class="flex justify-center flex-row gap-8">
		<div class="variant-ghost-primary p-8 rounded flex-col flex">
			<h2>Benefits of the food</h2>
			<ul>
				{#each $foodInfo.pros as pro}
					<li>
						{pro}
					</li>
				{/each}
			</ul>
		</div>
		<div class="variant-ghost-error p-8 rounded flex-col flex">
			<h2>Negatives of the food</h2>
			<ul>
				{#each $foodInfo.cons as con}
					<li>
						{con}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="variant-ghost-warning p-8 rounded flex-col flex">
		<h2>Possible diseases that can be affected by the food</h2>
		<ul>
			{#each $foodInfo.diseases as dis}
				<li>
					{dis}
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-col align-middle justify-center items-center gap-4">
		Health score:
		<ProgressRadial {value}>{value}%</ProgressRadial>
	</div>
{/if}
