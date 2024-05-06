<script lang="ts">
	import '../app.css';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Pattern from '$lib/components/Pattern.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LiveMode from '$lib/components/LiveMode.svelte';
	import PreviewLabel from '$lib/components/PreviewLabel.svelte';
</script>

<svelte:head>
	<link href="/favicon-small.png" rel="shortcut icon" type="image/x-icon" />
	<link href="/favicon-large.png" rel="apple-touch-icon" />
</svelte:head>

<div class="page-wrapper flex min-h-[100dvh] flex-col">
	<Navbar />
	<Pattern />
	<main>
		<slot />
	</main>
	<Footer />
</div>

{#if $isPreviewing}
	<PreviewLabel />
	<VisualEditing />
	<LiveMode />
{/if}
