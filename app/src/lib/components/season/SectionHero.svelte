<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { cleanText } from '$lib/utils';
	import type { SeasonPage } from '$lib/sanity/types';

	export let seasonPage: SeasonPage;
</script>

<section class="relative bg-white">
	<div class="padding-global overflow-hidden">
		<div class="flex flex-col items-center gap-9 py-9 sm:flex-row sm:gap-0 sm:py-16">
			<div class="flex grow flex-col items-start text-black">
				<h1 class="sr-only">
					{cleanText(seasonPage.heroTitleNormal)}
					{cleanText(seasonPage.heroTitleGradient)}
				</h1>
				<div
					class="max-w-[45rem] font-black text-[2.5rem] uppercase leading-none tracking-tight sm:text-[4rem]"
				>
					{cleanText(seasonPage.heroTitleNormal)}
					<span class="bg-gradient-primary bg-clip-text text-transparent">
						{cleanText(seasonPage.heroTitleGradient)}
					</span>
				</div>
				<p class="my-9 text-2xl font-bold leading-none sm:my-12">
					{cleanText(seasonPage.heroSubTitle)}
				</p>
				<p class="max-w-[34rem] text-sm leading-tight sm:text-base">
					{cleanText(seasonPage.heroSubDescription)}
				</p>
			</div>

			<img
				src={urlFor(seasonPage.heroImage.image).url()}
				alt=""
				class="aspect-[1.43/1] w-[30rem]"
			/>
		</div>
	</div>
</section>
