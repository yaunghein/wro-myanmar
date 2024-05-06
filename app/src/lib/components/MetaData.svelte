<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import type { MetaData } from '$lib/sanity/types';
	export let metaData: Partial<MetaData> | undefined;

	const keywords =
		'World Robot Olympiad Myanmar, WRO competition Myanmar, Robotics competition in Myanmar, International robotics contest Myanmar, STEM events Myanmar, WRO age categories Myanmar, Robotics education Myanmar, Educational robotics Myanmar, WRO national team Myanmar, WRO registration Myanmar, Robotics kits Myanmar, WRO finals Myanmar, WRO winners Myanmar, Learn robotics Myanmar, Youth robotics Myanmar, WRO updates Myanmar, Robot building competition Myanmar, WRO regional events Myanmar, WRO sponsors Myanmar, WRO 2024 Myanmar';
</script>

<!-- favicon htae ya oo ml -->
<!-- layout svelte htae htae -->
<svelte:head>
	<title>{cleanText(metaData?.pageTitle)}</title>
	<meta name="title" content={cleanText(metaData?.title)} />
	<meta name="description" content={cleanText(metaData?.description)} />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="keywords" content={keywords} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={cleanText(metaData?.title)} />
	<meta property="og:description" content={cleanText(metaData?.description)} />
	<meta property="og:image" content={urlFor(metaData?.ogImage).url()} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={cleanText(metaData?.title)} />
	<meta property="twitter:description" content={cleanText(metaData?.description)} />
	<meta property="twitter:image" content={urlFor(metaData?.ogImage).url()} />
</svelte:head>
