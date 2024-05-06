<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';

	import MetaData from '$lib/components/MetaData.svelte';
	import SectionHero from '$lib/components/home/SectionHero.svelte';
	import SectionCategories from '$lib/components/home/SectionCategories.svelte';
	import SectionRoboMission from '$lib/components/home/SectionRoboMission.svelte';
	import SectionInnovators from '$lib/components/home/SectionInnovators.svelte';
	import SectionPartners from '$lib/components/home/SectionPartners.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: homePage } = $q);
</script>

<MetaData metaData={homePage.metaData} />
<SectionHero {homePage} />
<SectionCategories {homePage} />
<SectionRoboMission {homePage} />
<SectionInnovators {homePage} />
<SectionPartners {homePage} />
