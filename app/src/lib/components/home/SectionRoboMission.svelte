<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { urlForPDF } from '$lib/sanity/pdf';
	import type { HomePage } from '$lib/sanity/types';
	import { PortableText } from '@portabletext/svelte';
	import parallaxImage from '$lib/utils/parallaxImage';

	export let homePage: HomePage;

	const items = [
		{ label: 'Age', description: homePage.robo?.age },
		{ label: 'Team size', description: homePage.robo?.teamSize },
		{ label: 'Hardware', description: homePage.robo?.hardware },
		{ label: 'Software', description: homePage.robo?.software },
		{ label: 'Maximum size', description: homePage.robo?.maximumSize },
		{ label: 'Characteristics', description: homePage.robo?.characteristics }
	];

	const rules = [
		{
			title: cleanText(homePage.roboRules?.elementaryRules?.title),
			rules: homePage.roboRules?.elementaryRules?.rules?.map((rule) => ({
				...rule,
				pdf: urlForPDF(rule.pdf)
			}))
		},
		{
			title: cleanText(homePage.roboRules?.juniorRules?.title),
			rules: homePage.roboRules?.juniorRules?.rules?.map((rule) => ({
				...rule,
				pdf: urlForPDF(rule.pdf)
			}))
		},
		{
			title: cleanText(homePage.roboRules?.seniorRules?.title),
			rules: homePage.roboRules?.seniorRules?.rules?.map((rule) => ({
				...rule,
				pdf: urlForPDF(rule.pdf)
			}))
		}
	];
</script>

<section id="robomission">
	<div class="w-full overflow-hidden">
		<img
			use:parallaxImage
			src={urlFor(homePage.robo?.featuredImage?.image).url()}
			alt={cleanText(homePage.robo?.featuredImage?.caption)}
			class="aspect-square w-full object-cover sm:aspect-[2.77/1]"
		/>
	</div>
	<div class="padding-global py-9 sm:py-16">
		<div
			class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start sm:gap-32"
		>
			<img
				src={urlFor(homePage.robo?.imageOne?.image).url()}
				alt={cleanText(homePage.robo?.imageOne?.caption)}
				class="aspect-[1.09/1] w-24 sm:w-44"
			/>

			<div>
				<h2 class="sr-only">
					{cleanText(homePage.robo?.titleThin)}
					{cleanText(homePage.robo?.titleBold)}
				</h2>
				<div class="text-[2rem] leading-none tracking-tight sm:text-5xl">
					{cleanText(homePage.robo?.titleThin)}<span class="font-black">
						{cleanText(homePage.robo?.titleBold)}
					</span>
				</div>

				<div class="my-9 flex max-w-[28.5rem] flex-col gap-3 text-sm sm:text-base">
					{#each items as item}
						<div class="flex gap-1">
							<div
								class="shrink-0 bg-gradient-robomission bg-clip-text font-bold leading-tight tracking-tight text-transparent"
							>
								{cleanText(item.label)}:
							</div>
							<p class="leading-tight tracking-tight">{cleanText(item.description)}</p>
						</div>
					{/each}
				</div>

				<div
					class="rich-text flex max-w-[28.5rem] flex-col gap-6 text-sm leading-tight tracking-tight sm:text-base"
				>
					<PortableText components={{}} value={homePage.robo?.moreInfo} />
				</div>
			</div>
			<img
				src={urlFor(homePage.robo?.imageTwo?.image).url()}
				alt={cleanText(homePage.robo?.imageTwo?.caption)}
				class="hidden aspect-square w-44 sm:block"
			/>
		</div>

		<div class="my-9 h-[1px] bg-gradient-robomission sm:my-14" />

		<h3
			class="mb-6 text-center font-black text-2xl uppercase leading-none tracking-tight sm:text-2.5xl"
		>
			{cleanText(homePage.roboRules?.generalRules?.title)}
		</h3>
		<div class="flex items-start justify-center gap-14">
			{#each homePage.roboRules?.generalRules?.rules as rule}
				<a
					target="_blank"
					href={urlForPDF(rule.pdf)}
					class="tracking-tigh w-full bg-gradient-robomission py-4 text-center font-black text-sm uppercase leading-none text-black sm:w-80 sm:text-base"
				>
					{cleanText(rule.label)}
				</a>
			{/each}
		</div>

		<div class="mt-9 flex flex-col items-start justify-center gap-9 sm:flex-row sm:gap-14">
			{#each rules as rule}
				<div class="flex w-full flex-col items-center gap-6">
					<h4
						class="text-center font-black text-2xl uppercase leading-none tracking-tight sm:text-2.5xl"
					>
						{rule.title}
					</h4>
					<div class="flex w-full flex-col items-center gap-3">
						{#each rule.rules as item}
							<a
								target="_blank"
								href={item.pdf}
								class="tracking-tigh w-full bg-gradient-robomission p-4 text-center font-black text-sm uppercase leading-none text-black sm:w-80 sm:text-base"
							>
								{item.label}
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
