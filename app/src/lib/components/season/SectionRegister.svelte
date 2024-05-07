<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import type { SeasonPage } from '$lib/sanity/types';

	export let seasonPage: SeasonPage;
</script>

<section
	id="register"
	class="bg-white text-black"
	data-use-in-view
	data-name={cleanText(seasonPage.registrationLabel)}
>
	<div class="grid grid-cols-1 sm:grid-cols-2">
		<div class="padding-global flex flex-col items-start gap-9 py-9 sm:py-16 sm:!pr-24">
			<h2
				class="bg-gradient-primary bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:text-left sm:text-5xl"
			>
				{cleanText(seasonPage.registerTitle)}
			</h2>
			<p class="text-center text-sm leading-tight sm:mb-2 sm:text-left sm:text-base">
				{cleanText(seasonPage.registerDescription)}
			</p>
			<a
				href="/register"
				class="w-full bg-gradient-primary px-6 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto"
			>
				{cleanText(seasonPage.registerBtnLabel)}
			</a>
		</div>
		<div>
			<img
				src={urlFor(seasonPage.registerImage?.image).url()}
				alt={cleanText(seasonPage.registerImage?.caption)}
				class="aspect-square h-full w-full object-cover sm:aspect-auto"
			/>
		</div>
	</div>
</section>
