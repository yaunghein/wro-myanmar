<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import MetaData from '$lib/components/MetaData.svelte';
	import SectionHero from '$lib/components/season/SectionHero.svelte';
	import SectionNavigator from '$lib/components/season/SectionNavigator.svelte';
	import SectionTimeline from '$lib/components/season/SectionTimeline.svelte';
	import SectionCalendar from '$lib/components/season/SectionCalendar.svelte';
	import SectionRules from '$lib/components/season/SectionRules.svelte';
	import SectionRegister from '$lib/components/season/SectionRegister.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: seasonPage } = $q);
</script>

<MetaData metaData={seasonPage.metaData} />
<SectionHero {seasonPage} />
<div class="relative">
	<SectionNavigator {seasonPage} />
	<SectionTimeline {seasonPage} />
	<SectionCalendar {seasonPage} />
	<SectionRules {seasonPage} />
	<SectionRegister {seasonPage} />
</div>
