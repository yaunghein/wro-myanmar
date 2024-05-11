<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import Card from '$lib/components/news/Card.svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import Error from '$lib/components/Error.svelte';
	import parallaxImage from '$lib/utils/parallaxImage';

	import type { PageServerData } from './$types';
	import type { ImageAsset } from '@sanity/types';

	export let data: PageServerData;
	$: qSingle = useQuery(data.newsSingleQuery);
	$: ({ data: singleNews } = $qSingle);
	$: mainImage = singleNews.mainImage as ImageAsset;

	$: q = useQuery(data.newsOthersQuery);
	$: ({ data: news } = $q);
</script>

<MetaData
	metaData={{
		pageTitle: `${singleNews.title} - WRO Myanmar`,
		title: singleNews.title,
		description: singleNews.excerpt,
		ogImage: singleNews.mainImage
	}}
/>
<section class="bg-white text-black">
	<div class="padding-global py-9 sm:py-16">
		<h1 class="font-black text-2xl uppercase leading-none tracking-tight sm:text-5xl">
			{cleanText(singleNews.title)}
		</h1>
		<div class="mt-6 text-xs sm:mt-9 sm:text-base">{formatDate(singleNews._createdAt)}</div>
		<div class="my-3 h-[1px] w-full bg-off-white sm:my-6" />
		<div class="mb-6 mt-4 overflow-hidden sm:mb-16 sm:mt-6">
			<img
				use:parallaxImage
				src={urlFor(mainImage).url()}
				alt="Cover image for {cleanText(singleNews.title)}"
				class="aspect-[4/3] w-full object-cover sm:aspect-[2.4/1]"
			/>
		</div>

		<div class="mx-auto max-w-[50rem] text-sm leading-tight sm:text-base">
			<PortableText components={{}} value={singleNews.body} />
		</div>
	</div>
</section>

{#if news?.length === 0}
	<!-- <div class="bg-off-white text-black">
		<Error text="I think we don’t have any other news." />
	</div> -->
{:else}
	<section class="relative bg-off-white text-black">
		<div class="padding-global">
			<div class="flex flex-col py-9 sm:py-16">
				<h1 class="font-black text-[2.5rem] uppercase leading-none tracking-tight sm:text-[4rem]">
					Other News
				</h1>

				<div class="mb-3 mt-3 flex flex-col divide-y divide-white sm:mb-11 sm:mt-16">
					{#each news as news}
						<Card {news} />
					{/each}
				</div>

				<a
					href="/news"
					class="wro-transition bg-white px-6 py-4 text-center font-black uppercase leading-none tracking-tight hover:bg-gradient-primary hover:text-white"
				>
					SEE All News
				</a>
			</div>
		</div>
	</section>
{/if}
