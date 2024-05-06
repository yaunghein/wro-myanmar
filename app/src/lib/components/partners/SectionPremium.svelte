<script lang="ts">
	import Card from '$lib/components/partners/Card.svelte';
	import type { Partner } from '$lib/sanity/queries';

	export let partners: Partner[];
</script>

{#if partners.length > 0}
	<section class="relative bg-white text-black">
		<div class="padding-global pb-20 pt-32">
			<h2
				class="max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight text-accent-three"
			>
				Premium partners
			</h2>

			{#if partners.length === 1}
				<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-center">
					<Card partner={partners[0]} />
				</div>
			{:else}
				<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-between">
					<div class="flex flex-col items-start gap-32">
						{#each partners.filter((_, i) => i % 2 === 0) as partner}
							<Card {partner} />
						{/each}
					</div>
					<div class="mt-56 flex flex-col items-start gap-32">
						{#each partners.filter((_, i) => i % 2 !== 0) as partner}
							<Card {partner} />
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<img
			src="/images/circuit-blue.webp"
			alt=""
			class="absolute right-0 top-0 aspect-[1.52/1] w-[25rem]"
		/>
	</section>
{/if}
