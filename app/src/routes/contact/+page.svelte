<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import SectionGeneralForm from '$lib/components/contact/SectionGeneralForm.svelte';
	import SectionJumbotron from '$lib/components/contact/SectionJumbotron.svelte';
	import MetaData from '$lib/components/MetaData.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: contactPage } = $q);

	import type { JoinUsPage } from '$lib/sanity/types';

	$: jq = useQuery<JoinUsPage>({ query: data.joinUsPageQuery, options: data.joinUsOptions });
	$: ({ data: joinUsPage } = $jq);
</script>

<MetaData metaData={contactPage.metaData} />
<SectionGeneralForm {contactPage} />
<SectionJumbotron {joinUsPage} />
