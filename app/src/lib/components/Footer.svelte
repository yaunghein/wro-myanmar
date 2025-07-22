<script>
	import Pattern from '$lib/components/Pattern.svelte';
	import Facebook from '$lib/svgs/Facebook.svelte';
	import Instagram from '$lib/svgs/Instagram.svelte';
	import LinkedIn from '$lib/svgs/LinkedIn.svelte';
</script>

<footer class="relative mt-auto">
	<Pattern />
	<div class="padding-global">
		<div class="flex items-end justify-start gap-20">
			<img
				src="/images/footer-robot.webp"
				alt="WRO Robot"
				class="mt-9 hidden aspect-[0.83/1] w-[15rem] shrink-0 sm:static sm:block"
			/>
			<img
				src="/images/footer-robot-mobile.webp"
				alt="WRO Robot"
				class="absolute right-5 top-20 mt-9 aspect-[0.41/1] w-32 sm:hidden"
			/>

			<div class="flex grow flex-col gap-9 pb-9 sm:gap-14">
				<div
					class="mt-9 flex flex-col items-start justify-start gap-[1.75rem] sm:mt-0 sm:flex-row sm:justify-between sm:gap-12"
				>
					<div class="w-40 sm:w-32">
						<div class="mb-3 text-sm font-black leading-tight tracking-tight sm:mb-6 sm:text-base">
							ADDRESS
						</div>
						<div class="flex flex-col gap-2">
							<a
								target="_blank"
								href="https://maps.app.goo.gl/DNHLkZg6b82xg6XY9"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								Shophouse No.215, Times City, Kamayut, Yangon, Myanmar.
							</a>
						</div>
					</div>
					<div>
						<div class="mb-3 text-sm font-black leading-tight tracking-tight sm:mb-6 sm:text-base">
							COMPETITIONS
						</div>
						<div class="flex flex-col gap-2">
							<a
								href="/season-this-year"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								{new Date().getFullYear()} Season
							</a>
							<a
								href="/register"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								Register Now
							</a>
						</div>
					</div>
					<div class="">
						<div class="mb-3 text-sm font-black leading-tight tracking-tight sm:mb-6 sm:text-base">
							RESOURCES
						</div>
						<div class="flex flex-col gap-2">
							<a
								href="/materials"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								Materials
							</a>
							<a
								href="/news"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								News
							</a>
						</div>
					</div>
					<div class="">
						<div class="mb-3 text-sm font-black leading-tight tracking-tight sm:mb-6 sm:text-base">
							INFORMATION
						</div>
						<div class="flex flex-col gap-2">
							<a
								href="/contact"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								General Inquiry
							</a>
							<a
								href="/register"
								class="wro-transition hover:text-accent-100 whitespace-nowrap text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								Register for Competition
							</a>
							<a
								href="/join-as-partner"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								Join as Our Partner
							</a>
							<a
								href="/sponsorship"
								class="wro-transition hover:text-accent-100 text-xs leading-none tracking-tight sm:text-sm sm:leading-tight"
							>
								Sponsorship
							</a>
						</div>
					</div>
					<div class="">
						<div
							class="mb-3 whitespace-nowrap text-sm font-black leading-tight tracking-tight sm:mb-6 sm:text-base"
						>
							SOCIAL MEDIA
						</div>
						<div class="flex gap-5">
							<a
								target="_blank"
								href="https://www.facebook.com/profile.php?id=61557750792097&mibextid=LQQJ4d"
								class="wro-transition hover:text-accent-100 aspect-square w-5"
							>
								<Facebook />
								<span class="sr-only">Facebook</span>
							</a>
							<a
								target="_blank"
								href="/"
								class="wro-transition hover:text-accent-100 pointer-events-none aspect-square w-5 opacity-50"
							>
								<Instagram />
								<span class="sr-only">Instagram</span>
							</a>
							<a
								target="_blank"
								href="/"
								class="wro-transition hover:text-accent-100 pointer-events-none aspect-square w-5 opacity-50"
							>
								<LinkedIn />
								<span class="sr-only">LinkedIn</span>
							</a>
						</div>
					</div>
				</div>

				<p
					class="wro-transition hover:text-accent-100 max-w-[43rem] text-xs leading-tight tracking-tight sm:text-sm"
				>
					World Robot Olympiad™ Association is an independent non-profit organization. All revenue
					from sponsorships and fees is invested in support of our mission, which is to promote
					robotics in STEM education worldwide.
				</p>
			</div>
		</div>
	</div>
</footer>
