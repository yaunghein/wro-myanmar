<script lang="ts">
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { twMerge as twm } from 'tailwind-merge';
	import gsap from 'gsap';
	import Pattern from '$lib/components/Pattern.svelte';

	let isCompetitionsOpen = false;
	let isContactOpen = false;
	let isMobileCompetitionsOpen = false;
	let isMobileContactOpen = false;

	let menuTl: any;
	const navAnimation = (node: HTMLElement) => {
		const trigger = document.querySelector('#mobile-menu-trigger');
		const links = node.querySelectorAll('.mobile-menu-link');
		menuTl = gsap.timeline({
			onComplete() {
				trigger!.textContent = 'Close';
			},
			onReverseComplete() {
				trigger!.textContent = 'Menu';
			}
		});
		menuTl
			.set('body', { overflow: 'hidden' })
			.to(node, { height: '100%', ease: 'expo.inOut', duration: 1.2 })
			.fromTo(links, { opacity: 0 }, { opacity: 1, stagger: 0.05, ease: 'power4.inOut' }, '<75%')
			.to('.mobile-menu-pattern', { width: '100%', ease: 'expo.inOut', duration: 1.2 }, '<-50%')
			.reverse();

		const handleClick = () => (menuTl.reversed() ? menuTl.restart() : menuTl.reverse());
		trigger?.addEventListener('click', handleClick);

		return {
			destroy() {
				trigger?.removeEventListener('click', handleClick);
			}
		};
	};

	const dropdownToggleAnimation = (node: HTMLElement) => {
		const trigger = node.querySelector('button');
		const links = node.querySelectorAll('a');
		const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.inOut' } });
		tl.to(node, { height: 'auto' })
			.fromTo(links, { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, stagger: 0.05 }, '<20%')
			.reverse();

		const handleClick = () => (tl.reversed() ? tl.restart() : tl.reverse());
		trigger?.addEventListener('click', handleClick);

		return {
			destroy() {
				trigger?.removeEventListener('click', handleClick);
			}
		};
	};
</script>

<header class="sticky top-0 z-20 bg-brand">
	<div class="padding-global relative z-10 bg-brand">
		<div class="flex items-center justify-between py-8">
			<a on:click={() => menuTl?.reverse()} href="/" class="shrink-0">
				<span class="sr-only">Go Home</span>
				<img src="/images/logo.webp" alt="WRO Myanmar Logo" class="h-6 w-28 sm:h-12 sm:w-52" />
			</a>

			<nav class="hidden items-center justify-end gap-14 sm:flex">
				<a href="/" class="wro-transition group relative leading-tight hover:text-accent-100">
					<span>Home</span>
					<div
						class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
					/>
				</a>
				<div
					role="region"
					class="relative"
					on:mouseenter={() => (isCompetitionsOpen = true)}
					on:mouseleave={() => (isCompetitionsOpen = false)}
				>
					<button
						class="wro-transition group relative flex items-center leading-tight hover:text-accent-100"
					>
						<span>Competitions</span>
						<div class="aspect-square w-6">
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_198_3662"
									style="mask-type:alpha"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="24"
									height="24"
								>
									<rect width="24" height="24" fill="#D9D9D9" />
								</mask>
								<g mask="url(#mask0_198_3662)">
									<path d="M12 15L7 10H17L12 15Z" fill="currentColor" />
								</g>
							</svg>
						</div>
						<div
							class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-[80%] bg-accent-100 opacity-0 group-hover:opacity-100"
						/>
					</button>
					{#if isCompetitionsOpen}
						<div
							in:scale={{ start: 0.9, easing: backOut }}
							out:scale={{ start: 0.9 }}
							class="absolute left-1/2 top-5 -translate-x-1/2 pt-5"
						>
							<div class="flex flex-col gap-6 border-2 border-accent-100 bg-brand p-6">
								<div class="font-black uppercase">competitions</div>
								<div class="flex flex-col items-start gap-2">
									<a
										on:click={() => (isCompetitionsOpen = !isCompetitionsOpen)}
										href="/season-2024"
										class="wro-transition group relative leading-tight hover:text-accent-100"
									>
										<span class="whitespace-nowrap">2024 Season</span>
										<div
											class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
										/>
									</a>
									<a
										on:click={() => (isCompetitionsOpen = !isCompetitionsOpen)}
										href="/register"
										class="wro-transition group relative leading-tight hover:text-accent-100"
									>
										<span class="whitespace-nowrap">Register Now</span>
										<div
											class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
										/>
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<a
					href="/partners"
					class="wro-transition group relative leading-tight hover:text-accent-100"
				>
					<span>Partners</span>
					<div
						class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
					/>
				</a>
				<a
					href="/materials"
					class="wro-transition group relative leading-tight hover:text-accent-100"
				>
					<span>Materials</span>
					<div
						class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
					/>
				</a>
				<a href="/news" class="wro-transition group relative leading-tight hover:text-accent-100">
					<span>News</span>
					<div
						class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
					/>
				</a>
				<a
					href="/register"
					class="w-full bg-gradient-primary px-6 py-3 text-center font-black text-sm uppercase leading-none tracking-tight text-white sm:w-auto sm:text-base"
				>
					Join Us
				</a>
				<!-- <div
					role="region"
					class="relative"
					on:mouseenter={() => (isContactOpen = true)}
					on:mouseleave={() => (isContactOpen = false)}
				>
					<button
						class="wro-transition group relative flex items-center leading-tight hover:text-accent-100"
					>
						<span>Contact</span>
						<div class="aspect-square w-6">
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_198_3662"
									style="mask-type:alpha"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="24"
									height="24"
								>
									<rect width="24" height="24" fill="#D9D9D9" />
								</mask>
								<g mask="url(#mask0_198_3662)">
									<path d="M12 15L7 10H17L12 15Z" fill="currentColor" />
								</g>
							</svg>
						</div>
						<div
							class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-[80%] bg-accent-100 opacity-0 group-hover:opacity-100"
						/>
					</button>
					{#if isContactOpen}
						<div
							in:scale={{ start: 0.9, easing: backOut }}
							out:scale={{ start: 0.9 }}
							class="absolute left-1/2 top-5 -translate-x-1/2 pt-5"
						>
							<div class="flex flex-col gap-6 border-2 border-accent-100 bg-brand p-6 pr-8">
								<div class="font-black uppercase">Contact</div>
								<div class="flex flex-col items-start gap-2">
									<a
										on:click={() => (isContactOpen = !isContactOpen)}
										href="/contact"
										class="wro-transition group relative leading-tight hover:text-accent-100"
									>
										<span class="whitespace-nowrap">General Inquiry</span>
										<div
											class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
										/>
									</a>
									<a
										on:click={() => (isContactOpen = !isContactOpen)}
										href="/register"
										class="wro-transition group relative leading-tight hover:text-accent-100"
									>
										<span class="whitespace-nowrap">Register for Competition</span>
										<div
											class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
										/>
									</a>
									<a
										on:click={() => (isContactOpen = !isContactOpen)}
										href="/join-as-partner"
										class="wro-transition group relative leading-tight hover:text-accent-100"
									>
										<span class="whitespace-nowrap">Join as Our Partner</span>
										<div
											class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
										/>
									</a>
									<a
										on:click={() => (isContactOpen = !isContactOpen)}
										href="/sponsorship"
										class="wro-transition group relative leading-tight hover:text-accent-100"
									>
										<span class="whitespace-nowrap">Sponsorship</span>
										<div
											class="wro-transition absolute inset-0 top-auto h-[0.1rem] w-full bg-accent-100 opacity-0 group-hover:opacity-100"
										/>
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div> -->
			</nav>
			<button id="mobile-menu-trigger" class="leading-tight sm:hidden">Menu</button>
		</div>
	</div>

	<nav
		use:navAnimation
		class="hide-scrollbar fixed inset-0 -bottom-1 top-auto h-0 w-full overflow-hidden bg-brand sm:hidden"
	>
		<div class="py-[5.5rem]">
			<a
				on:click={() => menuTl?.reverse()}
				href="/"
				class="mobile-menu-link wro-transition padding-global group relative block border-y border-white border-opacity-25 py-4 leading-tight"
			>
				<span>Home</span>
			</a>
			<div
				use:dropdownToggleAnimation
				class="mobile-menu-link h-[3.55rem] overflow-hidden border-b border-white border-opacity-25 py-4"
			>
				<button
					on:click={() => (isMobileCompetitionsOpen = !isMobileCompetitionsOpen)}
					class={twm(
						'wro-transition padding-global group relative flex w-full items-center justify-between text-left leading-tight',
						isMobileCompetitionsOpen && 'text-accent-100'
					)}
				>
					<span>Competitions</span>
					<div
						class={twm(
							'wro-transition aspect-square w-6',
							isMobileCompetitionsOpen && 'rotate-180'
						)}
					>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_198_3662"
								style="mask-type:alpha"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="24"
								height="24"
							>
								<rect width="24" height="24" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_198_3662)">
								<path d="M12 15L7 10H17L12 15Z" fill="currentColor" />
							</g>
						</svg>
					</div>
				</button>

				<div class="flex flex-col gap-4 pt-9">
					<a
						on:click={() => menuTl?.reverse()}
						href="/season-2024"
						class="wro-transition padding-global group relative block leading-tight"
					>
						<span>2024 Season</span>
					</a>
					<a
						on:click={() => menuTl?.reverse()}
						href="/register"
						class="wro-transition padding-global group relative block leading-tight"
					>
						<span>Register Now</span>
					</a>
				</div>
			</div>
			<a
				on:click={() => menuTl?.reverse()}
				href="/partners"
				class="mobile-menu-link wro-transition padding-global group relative block border-b border-white border-opacity-25 py-4 leading-tight"
			>
				<span>Partners</span>
			</a>
			<a
				on:click={() => menuTl?.reverse()}
				href="/materials"
				class="mobile-menu-link wro-transition padding-global group relative block border-b border-white border-opacity-25 py-4 leading-tight"
			>
				<span>Materials</span>
			</a>
			<a
				on:click={() => menuTl?.reverse()}
				href="/news"
				class="mobile-menu-link wro-transition padding-global group relative block border-b border-white border-opacity-25 py-4 leading-tight"
			>
				<span>News</span>
			</a>
			<div
				use:dropdownToggleAnimation
				class="mobile-menu-link h-[3.55rem] overflow-hidden border-b border-white border-opacity-25 py-4"
			>
				<button
					on:click={() => (isMobileContactOpen = !isMobileContactOpen)}
					class={twm(
						'wro-transition padding-global group relative flex w-full items-center justify-between text-left leading-tight',
						isMobileContactOpen && 'text-accent-100'
					)}
				>
					<span>Contact</span>
					<div class={twm('wro-transition aspect-square w-6', isMobileContactOpen && 'rotate-180')}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_198_3662"
								style="mask-type:alpha"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="24"
								height="24"
							>
								<rect width="24" height="24" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_198_3662)">
								<path d="M12 15L7 10H17L12 15Z" fill="currentColor" />
							</g>
						</svg>
					</div>
				</button>

				<div class="flex flex-col gap-4 pt-9">
					<a
						on:click={() => menuTl?.reverse()}
						href="/contact"
						class="wro-transition padding-global group relative block leading-tight"
					>
						<span>General Inquiry</span>
					</a>
					<a
						on:click={() => menuTl?.reverse()}
						href="/register"
						class="wro-transition padding-global group relative block leading-tight"
					>
						<span>Register for Competition</span>
					</a>
					<a
						on:click={() => menuTl?.reverse()}
						href="/join-as-partner"
						class="wro-transition padding-global group relative block leading-tight"
					>
						<span>Join as Our Partner</span>
					</a>
					<a
						on:click={() => menuTl?.reverse()}
						href="/sponsorship"
						class="wro-transition padding-global group relative block leading-tight"
					>
						<span>Sponsorship</span>
					</a>
				</div>
			</div>

			<div class="padding-global mt-9">
				<a
					on:click={() => menuTl?.reverse()}
					href="/register"
					class="mobile-menu-link wro-transition padding-global group relative block bg-gradient-primary py-4 text-center leading-tight"
				>
					<span class="font-black uppercase">Join Us</span>
				</a>
			</div>
		</div>

		<div class="mobile-menu-pattern fixed bottom-0 left-0 w-0 overflow-hidden bg-brand">
			<Pattern />
		</div>
	</nav>
</header>
