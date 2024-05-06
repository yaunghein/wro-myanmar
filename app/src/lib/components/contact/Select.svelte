<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = '';
	export let required = true;
	export let options: string[] = [];

	let value = false;
</script>

<label class="grid w-full gap-3">
	<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
		{label}
	</span>
	<div class="relative w-full">
		<select
			{required}
			bind:value
			on:change={(e) => dispatch('change', value)}
			name="team-members"
			class="realtive w-full appearance-none rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
		>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>

		<div
			class="pointer-events-auto absolute right-2 top-1/2 aspect-square w-6 -translate-y-1/2 sm:right-[0.9rem]"
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask
					id="mask0_500_6703"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="24"
					height="24"
				>
					<rect width="24" height="24" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_500_6703)">
					<path d="M12 15L7 10H17L12 15Z" fill="white" fill-opacity="0.25" />
				</g>
			</svg>
		</div>
	</div>
</label>
