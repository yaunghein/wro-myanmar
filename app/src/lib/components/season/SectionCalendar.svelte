<script lang="ts">
	import { cleanText } from '$lib/utils';
	import type { SeasonPage } from '$lib/sanity/types';
	import { PortableText } from '@portabletext/svelte';

	export let seasonPage: SeasonPage;

	const eventCalendar =
		seasonPage.eventCalendar?.sort(
			(a, b) => new Date(a.date as string).getTime() - new Date(b.date as string).getTime()
		) || [];

	const formatDate = (date: string = '') => {
		const formatter = new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
		return formatter.format(new Date(date));
	};
</script>

<section
	id="calendar"
	class="bg-white text-black"
	data-use-in-view
	data-name={cleanText(seasonPage.calendarLabel)}
>
	<div class="padding-global">
		<div class="pt-9 sm:pt-16">
			<div class=" flex flex-col items-center gap-9">
				<h2
					class="bg-gradient-primary bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
				>
					{cleanText(seasonPage.calendarTitle)}
				</h2>

				<div class="rich-text max-w-[31rem] text-center text-sm leading-tight sm:text-base">
					<PortableText components={{}} value={seasonPage.calendarDescription} />
				</div>
			</div>
		</div>
	</div>

	<div class="py-9 pb-3 sm:py-10 sm:pb-10">
		{#each eventCalendar as event}
			<div
				class="padding-global grid grid-cols-1 items-start border-t border-off-white py-6 text-sm font-bold leading-tight sm:grid-cols-calendar sm:text-base"
			>
				<div>
					<div class="mb-2 font-normal uppercase opacity-50 sm:mb-[2px] sm:opacity-100">
						{formatDate(event.date)}
					</div>
					<div class="font-normal uppercase sm:font-bold">{cleanText(event.status)}</div>
				</div>
				<div class="mt-2 font-black uppercase sm:mt-0">{cleanText(event.title)}</div>
				{#if event.mapLink}
					<a target="_blank" href={cleanText(event.mapLink)} class="mt-9 block font-normal sm:mt-0">
						{cleanText(event.address)}
					</a>
				{/if}
			</div>
		{/each}
	</div>
</section>
