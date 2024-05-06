<script>
	import Card from '$lib/components/partners/Card.svelte';
</script>

<section class="relative bg-white text-black">
	<div class="padding-global pb-20 pt-32">
		<div class="pl-[44rem]">
			<h2
				class="max-w-[24rem] bg-gradient-primary bg-clip-text font-black text-[4rem] uppercase leading-none tracking-tight text-transparent"
			>
				Partnered schools
			</h2>
		</div>

		<div class="mx-auto mt-16 flex max-w-[62rem] items-start justify-between">
			<div class="flex flex-col items-start gap-32">
				<Card type="school" />
			</div>
			<div class="mt-56 flex flex-col items-start gap-32">
				<Card type="school" />
			</div>
		</div>
	</div>

	<img
		src="/images/circuit-red.webp"
		alt=""
		class="absolute left-0 top-0 aspect-[1.52/1] w-[25rem]"
	/>
</section>
