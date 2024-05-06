<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import SectionForm from '$lib/components/contact/SectionForm.svelte';
	import SectionJumbotron from '$lib/components/contact/SectionJumbotron.svelte';
	import MetaData from '$lib/components/MetaData.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: contactPage } = $q);
</script>

<MetaData metaData={contactPage.metaData} />
<SectionForm {contactPage} />
<SectionJumbotron />
