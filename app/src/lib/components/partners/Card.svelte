<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { cleanText } from '$lib/utils';
	import type { Partner } from '$lib/sanity/queries';
	// import parallaxImage from '$lib/utils/parallaxImage';

	export let partner: Partner;

	const themes = {
		premium: 'bg-accent-three text-white',
		gold: 'bg-gradient-robomission text-black',
		silver: 'bg-off-white-dark text-white',
		school: 'bg-gradient-primary text-white'
	};

	const sponsorTextThemes: Record<string, Record<string, string>> = {
		school: { color: 'bg-gradient-primary text-transparent bg-clip-text' },
		premium: { color: 'text-accent-three' },
		gold: { color: 'bg-gradient-robomission text-transparent bg-clip-text' },
		silver: { color: 'text-off-white-dark' }
	};
</script>

<div class="flex h-full w-full shrink-0 flex-col items-start gap-6">
	<div
		class="font-black text-sm uppercase leading-none tracking-tight sm:text-base {sponsorTextThemes[
			partner.type
		].color}"
	>
		{cleanText(partner.sponsor)}
	</div>

	<div class="-mb-3 -mt-[1.1rem] h-[1px] w-full shrink-0 sm:-mt-[1.35rem] {themes[partner.type]}" />

	<div class="aspect-[1.33/1] w-full overflow-hidden bg-off-white">
		<img
			src={urlFor(partner.image.image).url()}
			alt={cleanText(partner.image.caption)}
			class="h-full w-full object-cover"
		/>
	</div>
	<h3 class="font-black text-2xl uppercase leading-none tracking-tight sm:text-[1.75rem]">
		{cleanText(partner.name)}
	</h3>
	<p class="mb-3 text-sm leading-tight sm:text-base">{cleanText(partner.description)}</p>
	<a
		target="_black"
		href={cleanText(partner.link)}
		class="mt-auto w-full px-6 py-4 text-center font-black text-sm uppercase leading-none tracking-tight sm:text-base {themes[
			partner.type
		]}"
	>
		Visit Website
	</a>
</div>
