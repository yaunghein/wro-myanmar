<script lang="ts">
	import Swiper from 'swiper';
	import { EffectCards, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/effect-cards';
	import { cleanText } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import type { HomePage } from '$lib/sanity/types';
	import parallaxImage from '$lib/utils/parallaxImage';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { PortableText } from '@portabletext/svelte';

	export let homePage: HomePage;

	const swiper = (node: HTMLDivElement) => {
		new Swiper(node, {
			modules: [EffectCards, Autoplay],
			effect: window.innerWidth < 640 ? 'slide' : 'cards',
			grabCursor: true,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				reverseDirection: true
			}
		});
	};

	const robotParallax = (image: HTMLImageElement) => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.create({
			trigger: image,
			start: 'top bottom',
			end: 'bottom top',
			scrub: 1,
			animation: gsap.fromTo(image, { y: '60%' }, { y: '-50%' })
		});
	};
</script>

<section class="relative bg-white">
	<div class="padding-global overflow-hidden">
		<div class="grid grid-cols-1 items-center py-9 pb-0 sm:grid-cols-2 sm:py-16 sm:pb-16">
			<div class="flex max-w-[35rem] flex-col items-start text-black">
				<h1 class="font-black text-[2.5rem] uppercase leading-none tracking-tight sm:text-[4rem]">
					{cleanText(homePage.heroTitle)}
				</h1>
				<p class="rich-text mt-6 text-sm leading-tight sm:text-base">
					<PortableText components={{}} value={homePage.heroSubTitle} />
				</p>

				<div class="mb-9 mt-9 flex gap-8 sm:mb-12 sm:mt-11 sm:grid sm:grid-cols-2 sm:gap-10">
					<div class="grid gap-2">
						<div class="text-4xl font-bold leading-none text-accent-two sm:text-5xl">
							{cleanText(homePage.highlightTeamNumber)}
						</div>
						<div class="text-2xl font-bold leading-none">
							{cleanText(homePage.highlightTeamLabel)}
						</div>
					</div>
					<div class="grid gap-2">
						<div class="text-4xl font-bold leading-none text-accent-two sm:text-5xl">
							{cleanText(homePage.highlightCountryNumber)}
						</div>
						<div class="text-2xl font-bold leading-none">
							{cleanText(homePage.highlightCountryLabel)}
						</div>
					</div>
				</div>

				<a
					href="/register"
					class="w-full bg-gradient-primary px-6 py-4 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-auto sm:text-base"
				>
					{cleanText(homePage.heroBtnLabel)}
				</a>
			</div>

			<div class="-mx-9 mt-9 aspect-[1.63/1] sm:mt-0 sm:aspect-auto">
				<div use:swiper class="swiper wro-transition relative h-full w-full !overflow-visible">
					<div class="swiper-wrapper h-full">
						{#if homePage.sliderImages}
							{#each homePage.sliderImages as image}
								<div class="swiper-slide h-full w-full overflow-hidden">
									<img
										use:parallaxImage
										src={urlFor(image.image).url()}
										alt={cleanText(image.caption)}
										class="h-full w-full object-cover"
									/>
								</div>
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<img
		use:robotParallax
		src="/images/wro-floating-robot-cropped.gif"
		alt="WRO Floating Mascot"
		class="pointer-events-none absolute -bottom-32 left-1/2 z-10 aspect-[0.72/1] w-[52vw] -translate-x-1/2 -scale-x-[1] sm:-bottom-24 sm:w-60"
	/>
</section>
