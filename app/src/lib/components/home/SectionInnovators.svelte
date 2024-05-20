<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { urlForPDF } from '$lib/sanity/pdf';
	import type { HomePage } from '$lib/sanity/types';
	import { PortableText } from '@portabletext/svelte';
	import parallaxImage from '$lib/utils/parallaxImage';

	export let homePage: HomePage;

	const items = [
		{ label: 'Age', description: homePage.innovator?.age },
		{ label: 'Team size', description: homePage.innovator?.teamSize },
		{ label: 'Hardware', description: homePage.innovator?.hardware },
		{ label: 'Software', description: homePage.innovator?.software },
		{ label: 'Maximum size', description: homePage.innovator?.maximumSize },
		{ label: 'Characteristics', description: homePage.innovator?.characteristics }
	];
</script>

<section id="future-innovators">
	<div class="w-full overflow-hidden">
		<img
			use:parallaxImage
			src={urlFor(homePage.innovator?.featuredImage?.image).url()}
			alt={cleanText(homePage.innovator?.imageOne?.caption)}
			class="aspect-square w-full object-cover sm:aspect-[2.77/1]"
		/>
	</div>
	<div class="padding-global py-9 sm:py-16">
		<div
			class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start sm:gap-32"
		>
			<img
				src={urlFor(homePage.innovator?.imageOne?.image).url()}
				alt={cleanText(homePage.innovator?.imageOne?.caption)}
				class="aspect-[1.09/1] w-24 sm:w-44"
			/>

			<div>
				<h2 class="sr-only">
					{cleanText(homePage.innovator?.titleThin)}
					{cleanText(homePage.innovator?.titleBold)}
				</h2>
				<div class="text-[2rem] leading-none tracking-tight sm:text-5xl">
					{cleanText(homePage.innovator?.titleThin)}
					<span class="font-black">
						{cleanText(homePage.innovator?.titleBold)}
					</span>
				</div>

				<div class="my-9 flex max-w-[28.5rem] flex-col gap-3 text-sm sm:text-base">
					{#each items as item}
						<div class="flex gap-1">
							<div
								class="shrink-0 bg-gradient-future bg-clip-text font-bold leading-tight tracking-tight text-transparent"
							>
								{item.label}:
							</div>
							<p class="leading-tight tracking-tight">{cleanText(item.description)}</p>
						</div>
					{/each}
				</div>

				<div
					class="rich-text flex max-w-[28.5rem] flex-col gap-6 text-sm leading-tight tracking-tight sm:text-base"
				>
					<PortableText components={{}} value={homePage.innovator?.moreInfo} />
				</div>
			</div>
			<img
				src={urlFor(homePage.innovator?.imageTwo?.image).url()}
				alt={cleanText(homePage.innovator?.imageTwo?.caption)}
				class="hidden aspect-square w-44 sm:block"
			/>
		</div>

		<div class="my-9 h-[1px] bg-gradient-future sm:my-14" />

		<h3
			class="mb-6 text-center font-black text-2xl uppercase leading-none tracking-tight sm:text-2.5xl"
		>
			{cleanText(homePage.innovatorRules.title)}
		</h3>
		<div class="flex w-full flex-col items-start justify-center gap-3 sm:flex-row sm:gap-14">
			<a
				target="_black"
				href={urlForPDF(homePage.innovatorRules?.generalRules?.pdf)}
				class="tracking-tigh w-full bg-gradient-future py-4 text-center font-black text-sm uppercase leading-none text-white sm:w-80 sm:text-base"
			>
				{cleanText(homePage.innovatorRules?.generalRules?.label)}
			</a>
			<a
				target="_black"
				href={urlForPDF(homePage.innovatorRules?.seasonChallenge?.pdf)}
				class="tracking-tigh w-full bg-gradient-future py-4 text-center font-black text-sm uppercase leading-none text-white sm:w-80 sm:text-base"
			>
				{cleanText(homePage.innovatorRules?.seasonChallenge?.label)}
			</a>
			<a
				target="_black"
				href={urlForPDF(homePage.innovatorRules?.teamInfo?.pdf)}
				class="tracking-tigh w-full bg-gradient-future py-4 text-center font-black text-sm uppercase leading-none text-white sm:w-80 sm:text-base"
			>
				{cleanText(homePage.innovatorRules?.teamInfo?.label)}
			</a>
		</div>
	</div>
</section>
