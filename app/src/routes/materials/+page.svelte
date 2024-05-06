<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '$lib/components/materials/Card.svelte';
	import Error from '$lib/components/Error.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: materials } = $q);
</script>

{#if materials?.length === 0}
	<div class="bg-white text-black">
		<Error text="I think we don’t have any materials." />
	</div>
{:else}
	<section class="relative bg-white text-black">
		<div class="padding-global">
			<div class="flex flex-col pb-9 pt-9 sm:pb-16 sm:pt-32">
				<h1 class="font-black text-[2rem] uppercase leading-none tracking-tight sm:text-[4rem]">
					Materials
				</h1>
				<div class="mt-9 grid grid-cols-1 gap-3 sm:mt-24 sm:grid-cols-2 sm:gap-5">
					{#each materials as material}
						<Card {material} />
					{/each}
				</div>
			</div>
		</div>

		<img
			src="/images/circuit-silver.webp"
			alt=""
			class="absolute right-0 top-0 hidden aspect-[1.52/1] w-[25rem] sm:block"
		/>
	</section>
{/if}
