<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { formatMMK, cleanText } from '$lib/utils';
	import { twMerge as twm } from 'tailwind-merge';
	import { type Material } from '$lib/sanity/types';
	// import parallaxImage from '$lib/utils/parallaxImage';

	export let material: Material;
	export let bg: 'bg-white' | 'bg-off-white' = 'bg-off-white';
</script>

<div class="group flex flex-col {bg} p-3">
	<div class="mb-3 overflow-hidden bg-white">
		<img
			src={urlFor(material.image.image).url()}
			alt={cleanText(material.image.caption)}
			class="aspect-[2.02/1] w-full object-cover"
		/>
	</div>
	<h2 class="font-black text-sm uppercase leading-tight tracking-tight sm:text-2xl">
		{material.name}
	</h2>
	<div class="my-6 flex flex-wrap items-center sm:flex-nowrap sm:pr-20">
		<div
			class={twm(
				'mb-2 w-full text-sm font-bold sm:mb-0 sm:w-auto sm:text-base',
				cleanText(material.availability) === 'In Stock'
					? 'text-accent-four'
					: 'text-black opacity-50'
			)}
		>
			{cleanText(material.availability)}
		</div>
		<div class="ml-0 text-sm font-bold sm:ml-auto sm:mr-9 sm:text-base">Price</div>
		<div class="ml-auto font-black text-sm sm:ml-0 sm:text-base">{formatMMK(material.price)}</div>
	</div>
	<a
		href="/materials/{material.slug.current}"
		class="flex items-center justify-center bg-white px-6 py-4"
	>
		<span
			class="bg-gradient-primary bg-clip-text font-black text-sm uppercase leading-none tracking-tight text-transparent sm:text-base"
		>
			View Details
		</span>
	</a>
</div>
