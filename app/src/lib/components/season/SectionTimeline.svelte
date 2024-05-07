<script lang="ts">
	import PatternWhite from '$lib/components/PatternWhite.svelte';
	import { cleanText } from '$lib/utils';
	import type { SeasonPage, Event } from '$lib/sanity/types';
	import { twMerge as twm } from 'tailwind-merge';

	export let seasonPage: SeasonPage;

	// 🤢
	const prepareEvents = (events: Event[]) => {
		const currentDate = new Date();
		let foundComingUp = false;

		events.forEach((event) => {
			const eventDate = new Date(event.date as string);
			const eventYearMonth = new Date(eventDate.getFullYear(), eventDate.getMonth());
			const currentYearMonth = new Date(currentDate.getFullYear(), currentDate.getMonth());

			if (eventYearMonth < currentYearMonth) {
				event.status = 'Done';
			} else if (eventYearMonth > currentYearMonth) {
				if (!foundComingUp) {
					event.status = 'Coming up';
					foundComingUp = true;
				} else {
					event.status = 'Soon';
				}
			} else {
				event.status = 'Happening';
			}
		});

		return events.sort(
			(a, b) => new Date(a.date as string).getTime() - new Date(b.date as string).getTime()
		);
	};

	const formatDate = (date: string = '') => {
		const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
		return formatter.format(new Date(date));
	};

	const eventTimeline = prepareEvents(seasonPage.eventTimeline || []);
</script>

<section
	class="relative"
	data-use-in-view
	data-name={cleanText(seasonPage.timelineLabel)}
	id="timeline"
>
	<div class="padding-global">
		<div class="pt-9 sm:pt-16">
			<div class="flex flex-col items-center gap-9">
				<h2 class="sr-only">
					{cleanText(seasonPage.seasonTitleOne)}
					{cleanText(seasonPage.seasonTitleTwo)}
				</h2>
				<div class="max-w-[27.4rem]">
					<div class="flex items-center gap-2">
						<div
							class="w-full shrink-0 whitespace-nowrap bg-gradient-primary bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:w-auto sm:text-left sm:text-5xl"
						>
							{cleanText(seasonPage.seasonTitleOne)}
						</div>
						<div class="hidden grow overflow-hidden sm:block"><PatternWhite /></div>
					</div>

					<div class="flex items-center gap-[0.4rem]">
						<div class="hidden grow overflow-hidden sm:block"><PatternWhite /></div>
						<div
							class="w-full shrink-0 bg-gradient-primary bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:w-auto sm:text-left sm:text-5xl"
						>
							{cleanText(seasonPage.seasonTitleTwo)}
						</div>
					</div>
				</div>

				<p class="max-w-[30rem] text-center text-sm leading-tight sm:text-base">
					{cleanText(seasonPage.seasonDescription)}
				</p>

				<a
					href="/register"
					class="bg-gradient-primary px-6 py-4 font-black text-sm uppercase leading-none tracking-tight text-white sm:text-base"
				>
					{cleanText(seasonPage.seasonBtnLabel)}
				</a>
			</div>
		</div>
	</div>

	<div class="my-9 mb-3 sm:my-10 sm:mb-10">
		{#each eventTimeline as event}
			<div
				class={twm(
					'padding-global grid grid-cols-1 items-center border-t border-white border-opacity-25 py-6 text-2xl font-bold uppercase leading-none sm:grid-cols-timeline'
				)}
			>
				<div
					class={twm(
						event.status === 'Happening' && 'bg-gradient-primary bg-clip-text text-transparent',
						event.status === 'Done' && 'opacity-20'
					)}
				>
					{formatDate(event.date)}
				</div>
				<div
					class={twm(
						'mb-9 mt-2 font-black sm:mb-0 sm:mt-0',
						event.status === 'Happening' && 'bg-gradient-primary bg-clip-text text-transparent ',
						event.status === 'Done' && 'opacity-20'
					)}
				>
					{event.title}
				</div>
				<div
					class={twm(
						event.status === 'Done' && 'opacity-20',
						event.status === 'Happening' && 'bg-gradient-primary bg-clip-text text-transparent'
					)}
				>
					{event.status}
				</div>
			</div>
		{/each}
	</div>

	<img
		src="/images/shape-red.webp"
		alt=""
		class="absolute right-0 top-0 aspect-square w-48 sm:w-[22.75rem]"
	/>
</section>
