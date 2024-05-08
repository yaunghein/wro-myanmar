<script lang="ts">
	import { cleanText, formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import parallaxImage from '$lib/utils/parallaxImage';

	import { type News } from '$lib/sanity/queries';
	import type { ImageAsset, Slug } from '@sanity/types';

	export let news: Partial<News>;
	$: mainImage = news.mainImage as ImageAsset;
	$: slug = news.slug as Slug;
	$: date = formatDate(news._createdAt as string);
</script>

<a href="/news/{slug.current}" class="group grid grid-cols-1 items-center py-6 sm:grid-cols-2">
	<div class="flex max-w-[30rem] flex-col gap-3">
		<div>
			<div class="mb-3 text-sm sm:mb-6 sm:text-base">{date}</div>
			<h2
				class="font-black text-2xl uppercase leading-none group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent"
			>
				{cleanText(news.title)}
			</h2>
		</div>
		<p class="text-sm leading-tight sm:text-base">{cleanText(news.excerpt)}</p>
	</div>
	<div class="mt-6 overflow-hidden bg-off-white sm:mt-0">
		<img
			use:parallaxImage
			src={urlFor(mainImage).url()}
			alt="Cover image for {news.title}"
			class="aspect-[4/3] w-full object-cover sm:aspect-[2.42/1]"
		/>
	</div>
</a>
