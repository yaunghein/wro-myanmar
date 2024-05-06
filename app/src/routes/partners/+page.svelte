<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import SectionPremium from '$lib/components/partners/SectionPremium.svelte';
	import SectionGold from '$lib/components/partners/SectionGold.svelte';
	import SectionSilver from '$lib/components/partners/SectionSilver.svelte';
	import SectionSchools from '$lib/components/partners/SectionSchools.svelte';

	import type { Partner } from '$lib/sanity/queries';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: partnersData } = $q);

	$: partners = partnersData?.reduce<Record<string, Partner[]>>((acc, partner) => {
		(acc[partner.type] = acc[partner.type] || []).push(partner);
		return acc;
	}, {});
</script>

<h1 class="sr-only">Partners</h1>
<SectionPremium partners={partners.premium || []} />
<!-- <SectionGold />
<SectionSilver />
<SectionSchools /> -->
