<script lang="ts">
	import { cleanText } from '$lib/utils';
	import PatternWhite from '$lib/components/PatternWhite.svelte';
	import type { HomePage } from '$lib/sanity/types';

	export let homePage: HomePage;
</script>

<section class="relative">
	<div class="padding-global">
		<div class="flex items-center justify-center py-9 sm:py-40">
			<div class="mx-auto flex max-w-[32rem] flex-col gap-9">
				<h2 class="sr-only">
					{cleanText(homePage.categoryTitleOne)}
					{cleanText(homePage.categoryTitleTwo)}
				</h2>
				<div class="mt-32 sm:mt-0">
					<div
						class="flex items-center justify-center gap-2 text-center sm:justify-start sm:text-left"
					>
						<div
							class="shrink-0 bg-gradient-primary bg-clip-text font-black text-[2rem] leading-none tracking-tight text-transparent sm:text-5xl"
						>
							{cleanText(homePage.categoryTitleOne)}
						</div>
						<div class="hidden grow overflow-hidden sm:block"><PatternWhite /></div>
					</div>

					<div class="flex items-center justify-center gap-[0.65rem] sm:justify-start">
						<div class="hidden grow overflow-hidden sm:block"><PatternWhite /></div>
						<div
							class="shrink-0 bg-gradient-primary bg-clip-text font-black text-[2rem] leading-none tracking-tight text-transparent sm:text-5xl"
						>
							{cleanText(homePage.categoryTitleTwo)}
						</div>
					</div>
				</div>

				<p class="text-center text-sm leading-tight sm:text-base">
					{cleanText(homePage.categoryDescription)}
				</p>

				<div class="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a
						href="/"
						class="tracking-tigh w-full bg-gradient-robomission px-6 py-4 text-center font-black text-sm uppercase leading-none text-black sm:w-auto sm:text-base"
					>
						{cleanText(homePage.categoryBtnOneLabel)}
					</a>
					<a
						href="/"
						class="w-full bg-gradient-future px-6 py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-auto sm:text-base"
					>
						{cleanText(homePage.categoryBtnTwoLabel)}
					</a>
				</div>
			</div>
		</div>
	</div>

	<img
		src="/images/shape-red.webp"
		alt=""
		class="absolute right-0 top-0 aspect-square w-48 sm:w-[22.75rem]"
	/>

	<img
		src="/images/shape-red.webp"
		alt=""
		class="absolute bottom-0 left-0 aspect-square w-48 rotate-180 sm:w-[22.75rem]"
	/>
</section>
