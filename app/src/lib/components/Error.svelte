<script lang="ts">
	export let text = '';
	export let error = false;
</script>

<section class="relative">
	<div
		class="padding-global mx-auto flex min-h-[calc(100vh-31.1rem)] max-w-[64rem] flex-col items-center justify-center gap-9 py-20 sm:flex-row"
	>
		<div class="flex flex-col gap-6">
			<div
				class="text-center font-black text-2xl uppercase leading-tight tracking-tight sm:text-left sm:text-5xl"
			>
				<span class="text-accent-two">Sorry...</span>
				{text}
			</div>
			{#if error}
				<p class="max-w-[27rem] leading-tight">
					Please contact at <a class="font-bold underline" href="mailto:wrowebsite@gmail.com">
						wrowebsite@gmail.com
					</a> to report this issue if you have some time.
				</p>
			{/if}
		</div>
		<img
			src="/images/error-robot.png"
			alt="WRO Myanmar Robot"
			class="aspect-[0.73/1] w-48 shrink-0 sm:w-[17.5rem]"
		/>
	</div>

	<img
		src="/images/contact-shape-register.webp"
		alt=""
		class="absolute bottom-9 left-0 hidden aspect-[4.73/1] w-[28.7rem] sm:block"
	/>

	<img
		src="/images/contact-shape-join-one.webp"
		alt=""
		class="absolute right-0 top-9 hidden aspect-[3.18/1] w-[16.7rem] sm:block"
	/>
</section>
