<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge as twm } from 'tailwind-merge';
	import { formatMMK, cleanText } from '$lib/utils';
	import { useQuery } from '@sanity/svelte-loader';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import Card from '$lib/components/materials/Card.svelte';
	import Error from '$lib/components/Error.svelte';
	import type { PageServerData } from './$types';
	import Swiper from 'swiper';
	import { Autoplay } from 'swiper/modules';
	import parallaxImage from '$lib/utils/parallaxImage';
	import MetaData from '$lib/components/MetaData.svelte';

	import 'swiper/css';

	export let data: PageServerData;
	$: qSingle = useQuery(data.materialSingleQuery);
	$: ({ data: material } = $qSingle);

	$: q = useQuery(data.materialsOthersQuery);
	$: ({ data: materials } = $q);

	onMount(() => {
		new Swiper('.swiper', {
			modules: [Autoplay],
			grabCursor: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			rewind: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			}
		});
	});
</script>

<MetaData
	metaData={{
		pageTitle: `${material.name} - WRO Myanmar`,
		title: material.name,
		description: '',
		ogImage: material.images[0].image
	}}
/>
<section class="overflow-hidden bg-white text-black">
	<div class="padding-global py-9 sm:py-16">
		<h1 class="max-w-[60rem] font-black text-2xl uppercase leading-none tracking-tight sm:text-5xl">
			{cleanText(material.name)}
		</h1>

		<div
			class="swiper my-9 aspect-[1.32/1] w-full !overflow-visible sm:my-16 sm:aspect-auto sm:h-[27.63rem] sm:w-auto"
		>
			<div class="swiper-wrapper flex h-full">
				{#each material.images as image}
					<div class="swiper-slide h-full w-full shrink-0 overflow-hidden sm:!w-[36.88rem]">
						<img
							use:parallaxImage
							src={urlFor(image.image).url()}
							alt={cleanText(image.caption)}
							class="h-full w-full object-cover"
						/>
					</div>
				{/each}
			</div>
		</div>

		<div class="mx-auto grid max-w-[36rem] gap-6">
			<h3 class="font-black text-sm uppercase sm:text-2xl">description</h3>
			<div class="rich-text -mt-3 text-sm leading-tight sm:mt-0 sm:text-base">
				<PortableText components={{}} value={material.description} />
			</div>

			<div class="tracking-tigh my-3 grid gap-3 text-sm leading-none sm:my-6 sm:text-base">
				<div class="flex">
					<div class="w-28 shrink-0 sm:w-36">Availibility:</div>
					<div
						class={twm(
							'font-black',
							cleanText(material.availability) === 'In Stock'
								? 'text-accent-four'
								: 'text-black opacity-50'
						)}
					>
						{cleanText(material.availability)}
					</div>
				</div>
				<div class="flex">
					<div class="w-28 shrink-0 sm:w-36">Price:</div>
					<div class="font-black">{cleanText(material.price)}</div>
				</div>
				<div class="flex">
					<div class="w-28 shrink-0 sm:w-36">Delivery Fees:</div>
					<div class="font-black">{material.deliveryFees}</div>
				</div>
			</div>

			<a
				href="/order-material?itemName={encodeURIComponent(cleanText(material.name))}"
				class="bg-gradient-future px-6 py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:text-base"
			>
				Order NOW
			</a>
		</div>
	</div>
</section>

{#if materials?.length === 0}
	<!-- <div class="bg-off-white text-black">
		<Error text="I think we don’t have any other materials." />
	</div> -->
{:else}
	<section class="relative bg-off-white text-black">
		<div class="padding-global">
			<div class="flex flex-col py-9 sm:py-16">
				<h1 class="font-black text-[2rem] uppercase leading-none tracking-tight sm:text-[4rem]">
					Other Materials
				</h1>
				<div class="mt-9 grid grid-cols-2 gap-5 sm:mt-16">
					{#each materials as material}
						<Card {material} bg="bg-white" />
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}
