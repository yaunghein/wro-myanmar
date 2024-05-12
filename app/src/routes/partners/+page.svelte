<script lang="ts">
	import { Swiper } from 'swiper';
	import { Autoplay } from 'swiper/modules';
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '$lib/components/partners/Card.svelte';
	import type { Partner } from '$lib/sanity/queries';
	import type { PageServerData } from './$types';

	import 'swiper/css';

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
		school: { image: '/images/circuit-red.webp', classes: '-scale-x-[1]' },
		premium: { image: '/images/circuit-blue.webp', classes: '' },
		gold: { image: '/images/circuit-gold.webp', classes: '-scale-x-[1]' },
		silver: { image: '/images/circuit-silver.webp', classes: '' }
	};

	const headers: Record<string, Record<string, string>> = {
		school: { color: 'bg-gradient-primary text-transparent bg-clip-text' },
		premium: { color: 'text-accent-three' },
		gold: { color: 'bg-gradient-robomission text-transparent bg-clip-text' },
		silver: { color: 'text-off-white-dark' }
	};

	const swiper = (node: HTMLDivElement, index: number) => {
		new Swiper(node, {
			modules: [Autoplay],
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 16,
			loop: true,
			speed: 300,
			grabCursor: true,
			autoHeight: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			breakpoints: {
				640: {
					slidesPerView: 4,
					slidesPerGroup: 2,
					spaceBetween: 20
				}
			}
		});
	};
</script>

<h1 class="sr-only">Partners</h1>
<div class="flex flex-col gap-14 bg-white py-9 text-black sm:block sm:gap-16 sm:py-0">
	{#each Object.keys(partners) as key, index}
		{#if partners[key].length > 0}
			<section class="relative overflow-hidden">
				<div class="padding-global sm:pb-16 sm:pt-32">
					<h2
						class="{headers[key]
							.color} hidden max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight sm:block"
					>
						{key} partners
					</h2>
					<h2
						class="{headers[key]
							.color} text-left font-black text-[2.5rem] uppercase leading-none tracking-tight sm:hidden"
					>
						{key} partners
					</h2>

					<!-- <div class="hidden sm:block"> -->
					<div use:swiper={index} class="mt-9 sm:mt-16">
						<div class="swiper-wrapper my-9 mb-0 flex sm:mb-9 sm:mt-16">
							{#each partners[key] as partner}
								<div class="swiper-slide !h-full">
									<Card {partner} />
								</div>
							{/each}
						</div>
						<!-- {#if partners[key].length === 1}
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
						{/if} -->
					</div>

					<!-- <div class="sm:hidden">
						<div class="mx-auto mt-9 flex max-w-[62rem] flex-col items-start justify-center gap-9">
							{#each partners[key] as partner}
								<Card {partner} />
							{/each}
						</div>
					</div> -->
				</div>

				<img
					src={shapes[key].image}
					alt=""
					class="absolute right-0 top-0 hidden aspect-[1.52/1] w-[25rem] sm:block {shapes[key]
						.classes}"
				/>
			</section>
		{/if}
	{/each}
</div>
