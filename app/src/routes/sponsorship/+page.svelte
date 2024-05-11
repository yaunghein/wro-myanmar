<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import SectionSponsorForm from '$lib/components/contact/SectionSponsorForm.svelte';
	import SectionJumbotron from '$lib/components/contact/SectionJumbotron.svelte';
	import type { JoinUsPage } from '$lib/sanity/types';

	export let data: any;

	$: q = useQuery<JoinUsPage>({ query: data.joinUsPageQuery, options: data.joinUsOptions });
	$: ({ data: joinUsPage } = $q);
</script>

<SectionSponsorForm />
<SectionJumbotron {joinUsPage} />
