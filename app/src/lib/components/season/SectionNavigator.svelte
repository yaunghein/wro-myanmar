<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { cleanText } from '$lib/utils';
	import type { SeasonPage } from '$lib/sanity/types';

	export let seasonPage: SeasonPage;

	let activeTab = '';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		for (const section of gsap.utils.toArray('[data-use-in-view]')) {
			const el = section as HTMLElement;
			ScrollTrigger.create({
				trigger: el,
				start: 'top 50%',
				end: 'bottom 50%',
				onEnter: () => (activeTab = el.dataset.name!),
				onEnterBack: () => (activeTab = el.dataset.name!),
				onLeaveBack: () => (activeTab = '')
			});
		}
	});
</script>

<nav
	class="sticky top-28 z-10 hidden bg-off-white font-black uppercase leading-none text-black sm:block"
	aria-label="Season 2024 Page Sections"
>
	<div
		class={twm(
			'wro-transition padding-global flex items-center justify-center gap-32',
			!!activeTab ? 'py-4' : 'py-8'
		)}
	>
		<a
			class={twm(
				activeTab === cleanText(seasonPage.timelineLabel) &&
					'bg-gradient-primary bg-clip-text text-transparent'
			)}
			href="#timeline"
		>
			{cleanText(seasonPage.timelineLabel)}
		</a>
		<a
			class={twm(
				activeTab === cleanText(seasonPage.calendarLabel) &&
					'bg-gradient-primary bg-clip-text text-transparent'
			)}
			href="#calendar"
		>
			{cleanText(seasonPage.calendarLabel)}
		</a>
		<a
			class={twm(
				activeTab === cleanText(seasonPage.rulesLabel) &&
					'bg-gradient-primary bg-clip-text text-transparent'
			)}
			href="#rules"
		>
			{cleanText(seasonPage.rulesLabel)}
		</a>
		<a
			class={twm(
				activeTab === cleanText(seasonPage.registrationLabel) &&
					'bg-gradient-primary bg-clip-text text-transparent'
			)}
			href="#register"
		>
			{cleanText(seasonPage.registrationLabel)}
		</a>
	</div>
</nav>
