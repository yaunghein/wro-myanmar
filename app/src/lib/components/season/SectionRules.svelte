<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { urlForPDF } from '$lib/sanity/pdf';
	import type { SeasonPage } from '$lib/sanity/types';
	import { PortableText } from '@portabletext/svelte';

	export let seasonPage: SeasonPage;

	const rules = [
		{
			title: cleanText(seasonPage.roboRules?.elementaryRules?.title),
			rules: seasonPage.roboRules?.elementaryRules?.rules?.map((rule) => ({
				...rule,
				pdf: urlForPDF(rule.pdf)
			}))
		},
		{
			title: cleanText(seasonPage.roboRules?.juniorRules?.title),
			rules: seasonPage.roboRules?.juniorRules?.rules?.map((rule) => ({
				...rule,
				pdf: urlForPDF(rule.pdf)
			}))
		},
		{
			title: cleanText(seasonPage.roboRules?.seniorRules?.title),
			rules: seasonPage.roboRules?.seniorRules?.rules?.map((rule) => ({
				...rule,
				pdf: urlForPDF(rule.pdf)
			}))
		}
	];
</script>

<section id="rules" data-use-in-view data-name={cleanText(seasonPage.rulesLabel)}>
	<div class="padding-global">
		<div class="py-9 sm:py-16">
			<div class="flex flex-col items-center gap-9">
				<h2
					class="bg-gradient-primary bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
				>
					{cleanText(seasonPage.ruleTitle)}
				</h2>

				<p class="rich-text max-w-[33rem] text-center text-sm leading-tight sm:text-base">
					<PortableText components={{}} value={seasonPage.ruleDescription} />
				</p>
			</div>

			<div class="my-9 sm:my-14">
				<h3
					class="mb-6 text-center font-black text-2xl uppercase leading-none tracking-tight sm:text-2.5xl"
				>
					{cleanText(seasonPage.roboRules?.generalRules?.title)}
				</h3>
				<div class="flex items-start justify-center gap-14">
					{#each seasonPage.roboRules?.generalRules?.rules as rule}
						<a
							target="_blank"
							href={urlForPDF(rule.pdf)}
							class="w-full bg-gradient-robomission px-4 py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-black sm:w-80 sm:text-base"
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
								{cleanText(rule.title)}
							</h4>
							<div class="flex w-full flex-col gap-3 sm:w-auto">
								{#each rule.rules as item}
									<a
										target="_blank"
										href={item.pdf}
										class="w-full bg-gradient-robomission px-4 py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-black sm:w-80 sm:text-base"
									>
										{cleanText(item.label)}
									</a>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h3
					class="mb-6 text-center font-black text-2xl uppercase leading-none tracking-tight sm:text-2.5xl"
				>
					{cleanText(seasonPage.innovatorRules.title)}
				</h3>
				<div class="flex flex-col items-start justify-center gap-3 sm:flex-row sm:gap-14">
					<a
						target="_black"
						href={urlForPDF(seasonPage.innovatorRules?.generalRules?.pdf)}
						class="w-full bg-gradient-future py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-80 sm:text-base"
					>
						{cleanText(seasonPage.innovatorRules?.generalRules?.label)}
					</a>
					<a
						target="_black"
						href={urlForPDF(seasonPage.innovatorRules?.seasonChallenge?.pdf)}
						class="w-full bg-gradient-future py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-80 sm:text-base"
					>
						{cleanText(seasonPage.innovatorRules?.seasonChallenge?.label)}
					</a>
					<a
						target="_black"
						href={urlForPDF(seasonPage.innovatorRules?.teamInfo?.pdf)}
						class="w-full bg-gradient-future py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-80 sm:text-base"
					>
						{cleanText(seasonPage.innovatorRules?.teamInfo?.label)}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
