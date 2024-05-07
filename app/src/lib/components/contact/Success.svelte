<script>
	export let message = 'Your submission has been received.';
	export let description =
		'Please join the viber community by clicking the button below for more info about the competitions and future updates.';
	export let ctaBtn = {
		label: 'Join the Community',
		link: 'https://invite.viber.com/?g2=AQAg%2Fq%2Bs3t8Cs1LRxSwHUpZs5aONq%2BCFkjwlJ8Eclng%2BhQf%2FIWRb51dVW6nrSh0J'
	};
	export let secondBtn = { label: 'Go Home', link: '/' };
</script>

<div class="grid w-full place-items-center">
	<div class="flex flex-col items-center gap-9">
		<h1
			class="bg-gradient-primary bg-clip-text text-center font-black text-[2.5rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
		>
			Thank you. <br />{message}
		</h1>
		<p class="max-w-[27rem] text-center text-sm leading-tight sm:text-base">
			{description}
		</p>
		<a
			href={ctaBtn.link}
			target="_black"
			class="w-full bg-gradient-primary px-3 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto sm:px-6"
		>
			{ctaBtn.label}
		</a>

		<a href={secondBtn.link} class="wro-transition text-sm underline opacity-30 hover:opacity-100">
			{secondBtn.label}
		</a>
	</div>
</div>
