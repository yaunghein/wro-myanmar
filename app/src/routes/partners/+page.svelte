<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '$lib/components/partners/Card.svelte';
	import type { Partner } from '$lib/sanity/queries';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: partnersData } = $q);
	$: console.log(partnersData);
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

<svelte:head>
	<title>Partners - WRO Myanmar</title>
</svelte:head>
<h1 class="sr-only">Partners</h1>
<div class="flex flex-col gap-16 bg-white py-14 text-black sm:block sm:py-0">
	{#each Object.keys(partners) as key}
		{#if partners[key].length > 0}
			<section class="relative">
				<div class="padding-global sm:pb-20 sm:pt-32">
					{#if headers[key].padding}
						<div class={headers[key].padding}>
							<h2
								class="{headers[key]
									.color} hidden max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight sm:block"
							>
								{key} partners
							</h2>
						</div>
					{:else}
						<h2
							class="{headers[key]
								.color} hidden max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight sm:block"
						>
							{key} partners
						</h2>
					{/if}
					<h2
						class="{headers[key]
							.color} text-left font-black text-[2.5rem] uppercase leading-none tracking-tight sm:hidden"
					>
						{key} partners
					</h2>

					<div class="hidden sm:block">
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

					<div class="sm:hidden">
						<div class="mx-auto mt-9 flex max-w-[62rem] flex-col items-start justify-center gap-9">
							{#each partners[key] as partner}
								<Card {partner} />
							{/each}
						</div>
					</div>
				</div>

				<img
					src={shapes[key].image}
					alt=""
					class="absolute {shapes[key].position} hidden aspect-[1.52/1] w-[25rem] sm:block"
				/>
			</section>
		{/if}
	{/each}
</div>
