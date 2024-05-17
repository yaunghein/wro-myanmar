<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import { cleanText } from '$lib/utils';
	import PatternWhite from '$lib/components/PatternWhite.svelte';
	import type { HomePage } from '$lib/sanity/types';
	import { PortableText } from '@portabletext/svelte';

	export let homePage: HomePage;

	let isRoboOpen = false;
	let isInnovatorOpen = false;

	const lock = (_: HTMLElement) => {
		document.body.style.overflow = 'hidden';
		return {
			destroy() {
				document.body.style.overflow = 'unset';
			}
		};
	};
</script>

<section class="relative">
	<div class="padding-global">
		<div class="flex items-center justify-center py-16 sm:py-40">
			<div class="mx-auto flex max-w-[32rem] flex-col gap-9">
				<h2 class="sr-only">
					{cleanText(homePage.categoryTitleOne)}
					{cleanText(homePage.categoryTitleTwo)}
				</h2>
				<div>
					<div
						class="flex items-center justify-center gap-2 text-center sm:justify-start sm:text-left"
					>
						<div
							class="shrink-0 bg-gradient-primary bg-clip-text font-black text-[2rem] leading-none tracking-tight text-transparent sm:text-5xl"
						>
							{cleanText(homePage.categoryTitleOne)}
						</div>
						<div class="hidden grow overflow-hidden sm:block"><PatternWhite /></div>
					</div>

					<div class="flex items-center justify-center gap-[0.65rem] sm:justify-start">
						<div class="hidden grow overflow-hidden sm:block"><PatternWhite /></div>
						<div
							class="shrink-0 bg-gradient-primary bg-clip-text font-black text-[2rem] leading-none tracking-tight text-transparent sm:text-5xl"
						>
							{cleanText(homePage.categoryTitleTwo)}
						</div>
					</div>
				</div>

				<p class="rich-text text-center text-sm leading-tight sm:text-base">
					<PortableText components={{}} value={homePage.categoryDescription} />
				</p>

				<div class="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<button
						on:click={() => (isRoboOpen = true)}
						class="tracking-tigh w-full bg-gradient-robomission px-6 py-4 text-center font-black text-sm uppercase leading-none text-black sm:w-auto sm:text-base"
					>
						{cleanText(homePage.categoryBtnOneLabel)}
					</button>
					<button
						on:click={() => (isInnovatorOpen = true)}
						class="w-full bg-gradient-future px-6 py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-auto sm:text-base"
					>
						{cleanText(homePage.categoryBtnTwoLabel)}
					</button>
				</div>
			</div>
		</div>
	</div>

	<img
		src="/images/shape-red.webp"
		alt=""
		class="absolute right-0 top-0 aspect-square w-48 sm:w-[22.75rem]"
	/>

	<img
		src="/images/shape-red.webp"
		alt=""
		class="absolute bottom-0 left-0 aspect-square w-48 rotate-180 sm:w-[22.75rem]"
	/>

	{#if isRoboOpen}
		<div
			role="button"
			tabindex="0"
			use:lock
			on:click={() => (isRoboOpen = false)}
			on:keypress={() => (isRoboOpen = false)}
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 150 }}
			class="fixed inset-0 z-50 grid h-full w-full place-items-center bg-brand bg-opacity-85"
		>
			<div
				role="button"
				tabindex="0"
				on:click|stopPropagation
				on:keypress|stopPropagation
				in:scale={{ start: 0.9, duration: 300, easing: backOut }}
				out:scale={{ start: 0.9, duration: 300, easing: backIn }}
				class="relative aspect-[16/9] w-[90%] bg-brand sm:w-[56rem]"
			>
				<iframe
					class="absolute inset-0 h-full w-full"
					src="https://www.youtube.com/embed/xaxI51WSZJ4?autoplay=1"
					title="World Robot Olympiad | RoboMission Category Facts | 2023"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	{/if}

	{#if isInnovatorOpen}
		<div
			role="button"
			tabindex="0"
			use:lock
			on:click={() => (isInnovatorOpen = false)}
			on:keypress={() => (isInnovatorOpen = false)}
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 150 }}
			class="fixed inset-0 z-50 grid h-full w-full place-items-center bg-brand bg-opacity-85"
		>
			<div
				role="button"
				tabindex="0"
				on:click|stopPropagation
				on:keypress|stopPropagation
				in:scale={{ start: 0.9, duration: 300, easing: backOut }}
				out:scale={{ start: 0.9, duration: 300, easing: backIn }}
				class="relative aspect-[16/9] w-[90%] bg-brand sm:w-[56rem]"
			>
				<iframe
					class="absolute inset-0 h-full w-full"
					src="https://www.youtube.com/embed/6tBOA-oNK6M?autoplay=1"
					title="World Robot Olympiad | RoboMission Category Facts | 2023"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	{/if}
</section>
