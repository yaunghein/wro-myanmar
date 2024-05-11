<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import SectionRegisterForm from '$lib/components/contact/SectionRegisterForm.svelte';
	import SectionJumbotron from '$lib/components/contact/SectionJumbotron.svelte';
	import type { JoinUsPage } from '$lib/sanity/types';

	export let data: any;

	$: q = useQuery<JoinUsPage>({ query: data.joinUsPageQuery, options: data.joinUsOptions });
	$: ({ data: joinUsPage } = $q);
</script>

<SectionRegisterForm />
<SectionJumbotron {joinUsPage} />
