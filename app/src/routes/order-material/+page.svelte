<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import SectionOrderForm from '$lib/components/contact/SectionOrderForm.svelte';
	import SectionJumbotron from '$lib/components/contact/SectionJumbotron.svelte';
	// import MetaData from '$lib/components/MetaData.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: q = useQuery(data);
	$: ({ data: contactPage } = $q);
</script>

<SectionOrderForm />
<SectionJumbotron />
