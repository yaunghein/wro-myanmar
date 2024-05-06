<script>
	import Card from '$lib/components/partners/Card.svelte';
</script>

<section class="relative bg-white text-black">
	<div class="padding-global pb-20 pt-32">
		<div class="pl-[44rem]">
			<h2
				class="max-w-[24rem] bg-gradient-robomission bg-clip-text font-black text-[4rem] uppercase leading-none tracking-tight text-transparent"
			>
				Gold partners
			</h2>
		</div>

		<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-center">
			<Card type="gold" />
		</div>
	</div>

	<img
		src="/images/circuit-gold.webp"
		alt=""
		class="absolute left-0 top-0 aspect-[1.52/1] w-[25rem]"
	/>
</section>
