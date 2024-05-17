<script lang="ts">
	import { cleanText } from '$lib/utils';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import parallaxImage from '$lib/utils/parallaxImage';
	import type { JoinUsPage } from '$lib/sanity/types';

	export let joinUsPage: JoinUsPage | undefined;
</script>

{#if joinUsPage}
	<section class="bg-white text-black">
		<div class="flex flex-col gap-0 py-0 sm:gap-16 sm:py-16">
			<div class="relative grid grid-cols-1 items-center sm:grid-cols-2">
				<div class="padding-global flex flex-col items-start gap-9 py-9 sm:py-16 sm:!pr-24">
					<h2
						class="bg-gradient-primary bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:text-left sm:text-5xl"
					>
						{cleanText(joinUsPage.registerTitle)}
					</h2>
					<div
						class="rich-text mb-2 flex flex-col gap-6 text-center text-sm leading-tight sm:text-left sm:text-base"
					>
						<PortableText components={{}} value={joinUsPage.registerDescription} />
					</div>
					<a
						href="/register"
						class="w-full bg-gradient-primary px-6 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto"
					>
						{cleanText(joinUsPage.registerBtn)}
					</a>
				</div>
				<div class="">
					<div class="overflow-hidden sm:pr-[7.5rem]">
						<img
							use:parallaxImage
							src={urlFor(joinUsPage.registerImage).url()}
							alt=""
							class="aspect-square w-full object-cover"
						/>
					</div>
				</div>

				<img
					src="/images/contact-shape-register.webp"
					alt=""
					class="absolute bottom-0 left-0 hidden aspect-[4.73/1] w-[28.7rem] sm:block"
				/>
			</div>

			<div class="relative flex flex-col-reverse items-center sm:grid sm:grid-cols-2">
				<div>
					<div class="overflow-hidden sm:pl-[7.5rem]">
						<img
							use:parallaxImage
							src={urlFor(joinUsPage.partnerImage).url()}
							alt=""
							class="aspect-square w-full object-cover"
						/>
					</div>
				</div>
				<div class="padding-global flex flex-col items-start gap-9 py-9 sm:py-16 sm:!pl-24">
					<h2
						class="bg-gradient-robomission bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:text-left sm:text-5xl"
					>
						{cleanText(joinUsPage.partnerTitle)}
					</h2>
					<div
						class="rich-text mb-2 flex flex-col gap-6 text-center text-sm leading-tight sm:text-left sm:text-base"
					>
						<PortableText components={{}} value={joinUsPage.partnerDescription} />
					</div>
					<a
						href="/join-as-partner"
						class="w-full bg-gradient-robomission px-6 py-4 text-center font-black uppercase leading-none tracking-tight text-black sm:w-auto"
					>
						{cleanText(joinUsPage.partnerBtn)}
					</a>
				</div>

				<img
					src="/images/contact-shape-join-one.webp"
					alt=""
					class="absolute -top-10 right-0 hidden aspect-[3.18/1] w-[16.7rem] sm:block"
				/>
				<img
					src="/images/contact-shape-join-two.webp"
					alt=""
					class="absolute bottom-0 right-0 hidden aspect-[3.39/1] w-[22.44rem] sm:block"
				/>
			</div>

			<div class="relative grid grid-cols-1 items-center sm:grid-cols-2">
				<div class="padding-global flex flex-col items-start gap-9 py-9 sm:py-16 sm:!pr-24">
					<h2
						class="bg-accent-three bg-clip-text text-center font-black text-[2rem] uppercase leading-none tracking-tight text-transparent sm:text-left sm:text-5xl"
					>
						{cleanText(joinUsPage.sponsorTitle)}
					</h2>
					<div
						class="rich-text mb-2 flex flex-col gap-6 text-center text-sm leading-tight sm:text-left sm:text-base"
					>
						<PortableText components={{}} value={joinUsPage.sponsorDescription} />
					</div>
					<a
						href="/sponsorship"
						class="w-full bg-accent-three px-6 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto"
					>
						{cleanText(joinUsPage.sponsorBtn)}
					</a>
				</div>
				<div>
					<div class="overflow-hidden sm:pr-[7.5rem]">
						<img
							use:parallaxImage
							src={urlFor(joinUsPage.sponsorImage).url()}
							alt=""
							class="aspect-square w-full object-cover"
						/>
					</div>
				</div>

				<img
					src="/images/contact-shape-sponsor.webp"
					alt=""
					class="absolute bottom-0 left-0 hidden aspect-[4.51/1] w-[16.63rem] sm:block"
				/>
			</div>
		</div>
	</section>
{/if}
