<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '$lib/components/partners/Card.svelte';
	import type { Partner } from '$lib/sanity/queries';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: partnersData } = $q);
	$: partners = partnersData?.reduce<Record<string, Partner[]>>(
		(acc, partner) => {
			acc[partner.type].push(partner);
			return acc;
		},
		{
			school: [],
			premium: [],
			gold: [],
			silver: []
		}
	);

	const shapes: Record<string, Record<string, string>> = {
		school: { image: '/images/circuit-red.webp', position: 'left-0 top-0' },
		premium: { image: '/images/circuit-blue.webp', position: 'right-0 top-0' },
		gold: { image: '/images/circuit-gold.webp', position: 'left-0 top-0' },
		silver: { image: '/images/circuit-silver.webp', position: 'right-0 top-0' }
	};

	const headers: Record<string, Record<string, string>> = {
		school: { color: 'bg-gradient-primary text-transparent bg-clip-text', padding: 'pl-[44rem]' },
		premium: { color: 'text-accent-three', padding: '' },
		gold: { color: 'bg-gradient-robomission text-transparent bg-clip-text', padding: 'pl-[44rem]' },
		silver: { color: 'text-off-white-dark', padding: '' }
	};
</script>

<h1 class="sr-only">Partners</h1>
{#each Object.keys(partners) as key}
	{#if partners[key].length > 0}
		<section class="relative bg-white text-black">
			<div class="padding-global pb-20 pt-32">
				{#if headers[key].padding}
					<div class={headers[key].padding}>
						<h2
							class="{headers[key]
								.color} max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight"
						>
							{key} partners
						</h2>
					</div>
				{:else}
					<h2
						class="{headers[key]
							.color} max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight"
					>
						{key} partners
					</h2>
				{/if}

				{#if partners[key].length === 1}
					<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-center">
						<Card partner={partners[key][0]} />
					</div>
				{:else}
					<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-between">
						<div class="flex flex-col items-start gap-32">
							{#each partners[key].filter((_, i) => i % 2 === 0) as partner}
								<Card {partner} />
							{/each}
						</div>
						<div class="mt-56 flex flex-col items-start gap-32">
							{#each partners[key].filter((_, i) => i % 2 !== 0) as partner}
								<Card {partner} />
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<img
				src={shapes[key].image}
				alt=""
				class="absolute {shapes[key].position} aspect-[1.52/1] w-[25rem]"
			/>
		</section>
	{/if}
{/each}
