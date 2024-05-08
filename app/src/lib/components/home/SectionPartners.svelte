<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import type { HomePage } from '$lib/sanity/types';
	import parallaxImage from '$lib/utils/parallaxImage';

	export let homePage: HomePage;
</script>

<section class="relative sm:aspect-[2.77/1]">
	<div class="absolute inset-0 h-full w-full overflow-hidden">
		<img
			use:parallaxImage
			src={urlFor(homePage.partnerImage.image).url()}
			alt="Students"
			class="h-full w-full object-cover"
		/>
	</div>
	<div
		class="padding-global relative flex h-full flex-col items-center justify-center gap-6 py-16 text-center text-black sm:gap-9 sm:py-0"
	>
		<h2
			class="max-w-[24rem] font-black text-[2rem] uppercase leading-none tracking-tight sm:text-5xl"
		>
			{cleanText(homePage.partnerTitle)}
		</h2>
		<p class="mb-1 max-w-[30rem] text-sm leading-tight sm:mb-3 sm:text-base">
			{cleanText(homePage.partnerDescription)}
		</p>
		<a
			href="/join-as-partner"
			class="w-full bg-gradient-primary px-6 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto"
		>
			{cleanText(homePage.partnerBtnLabel)}
		</a>
	</div>
	<!-- <div class="absolute inset-0 bottom-auto h-[5.5rem] w-full border-b border-black" />
	<div class="absolute inset-0 top-auto h-[5.5rem] w-full border-t border-black" /> -->
</section>
