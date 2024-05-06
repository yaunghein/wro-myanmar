<script>
	import Card from '$lib/components/partners/Card.svelte';
</script>

<section class="relative bg-white text-black">
	<div class="padding-global pb-20 pt-32">
		<h2
			class="text-off-white-dark max-w-[24rem] font-black text-[4rem] uppercase leading-none tracking-tight"
		>
			SILVER PARTNERS
		</h2>

		<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-between">
			<div class="flex flex-col items-start gap-32">
				<Card type="silver" />
				<Card type="silver" />
			</div>
			<div class="mt-56 flex flex-col items-start gap-32">
				<Card type="silver" />
			</div>
		</div>
	</div>

	<img
		src="/images/circuit-silver.webp"
		alt=""
		class="absolute right-0 top-0 aspect-[1.52/1] w-[25rem]"
	/>
</section>
