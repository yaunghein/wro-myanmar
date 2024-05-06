<script lang="ts">
	import { cleanText } from '$lib/utils';
	import type { SeasonPage } from '$lib/sanity/types';

	export let seasonPage: SeasonPage;
</script>

<nav
	class="sticky top-28 z-10 hidden bg-off-white font-black uppercase leading-none text-black sm:block"
	aria-label="Season 2024 Page Sections"
>
	<div class="padding-global flex items-center justify-center gap-32 py-8">
		<a class="wro-transition bg-gradient-primary bg-clip-text text-transparent" href="#timeline">
			{cleanText(seasonPage.timelineLabel)}
		</a>
		<a class="" href="#calendar">{cleanText(seasonPage.calendarLabel)}</a>
		<a class="" href="#rules">{cleanText(seasonPage.rulesLabel)}</a>
		<a class="" href="#registration">{cleanText(seasonPage.registrationLabel)}</a>
	</div>
</nav>
