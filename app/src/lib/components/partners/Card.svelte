<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { cleanText } from '$lib/utils';
	import type { Partner } from '$lib/sanity/queries';
	import parallaxImage from '$lib/utils/parallaxImage';

	export let partner: Partner;

	const themes = {
		premium: 'bg-accent-three text-white',
		gold: 'bg-gradient-robomission text-black',
		silver: 'bg-off-white-dark text-white',
		school: 'bg-gradient-primary text-white'
	};
</script>

<div class="flex w-full shrink-0 flex-col items-start gap-4 sm:w-96">
	<h3 class="font-black text-[2rem] leading-none tracking-tight sm:text-5xl">{partner.name}</h3>
	<div class="overflow-hidden">
		<img
			use:parallaxImage
			src={urlFor(partner.image.image).url()}
			alt={cleanText(partner.image.caption)}
			class="aspect-[1.33/1] w-full object-cover"
		/>
	</div>
	<p class="leading-tight">{partner.description}</p>
	<a
		target="_black"
		href={partner.link}
		class="mt-3 px-6 py-4 font-black uppercase leading-none tracking-tight {themes[partner.type]}"
	>
		{partner.label}
	</a>
</div>
