<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = '';
	export let type = 'text';
	export let required = true;
	export let placeholder = 'Type here';
</script>

<label class="grid w-full gap-3">
	<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
		{label}
	</span>
	<input
		{required}
		{type}
		{placeholder}
		on:change={(e) => dispatch('change', e.target.value)}
		class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
	/>
</label>
