<script lang="ts">
	import { goto } from '$app/navigation';
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '$lib/components/news/Card.svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import Error from '$lib/components/Error.svelte';
	import { cleanText } from '$lib/utils';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: qPage = useQuery(data.newsPageQuery);
	$: ({ data: newsPage } = $qPage);

	$: q = useQuery(data.newsQuery);
	$: ({ data: news } = $q);
</script>

<MetaData metaData={newsPage.metaData} />
{#if news?.length === 0}
	<div class="bg-white text-black">
		<Error text="I think we don’t have any news." />
	</div>
{:else}
	<section class="relative bg-white text-black">
		<div class="padding-global relative ">
			<div class="flex flex-col pb-9 pt-9 sm:pb-16 sm:pt-32">
				<h1 class="z-10 font-black text-[2.5rem] uppercase leading-none tracking-tight sm:text-[4rem]">
					{cleanText(newsPage.title)}
				</h1>

				<div class="mb-3 mt-3 flex flex-col divide-y divide-off-white sm:mb-11 sm:mt-24">
					{#each news as news}
						<Card {news} />
					{/each}
				</div>

				{#if news?.length > 0 && data.totalNews > news.length}
					<button
						on:click={() => goto(`?from=0&to=${news.length + 5}`, { noScroll: true })}
						class="wro-transition bg-off-white px-6 py-4 text-center font-black text-sm uppercase leading-none tracking-tight hover:bg-gradient-primary hover:text-white sm:text-base"
					>
						SEE MORE News
					</button>
				{/if}
			</div>
		</div>

		<img
			src="/images/circuit-silver.webp"
			alt=""
			class="absolute right-0 top-0 hidden aspect-[1.52/1] w-[25rem] sm:block"
		/>
	</section>
{/if}
