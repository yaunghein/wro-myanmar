<script lang="ts">
	import { page } from '$app/stores';
	import Success from './Success.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import getOrderSenderEmailTemplate from '$lib/utils/email/order/sender';
	import getOrderWroEmailTemplate from '$lib/utils/email/order/wro';
	// import { cleanText } from '$lib/utils';
	// import type { ContactPage } from '$lib/sanity/types';
	// export let contactPage: ContactPage;

	const itemName = $page.url.searchParams.get('itemName') as string;
	const initialFormData: Record<string, string> = {
		itemName,
		name: '',
		email: '',
		phone: '',
		school: '',
		address: '',
		quantity: ''
	};
	let formData = initialFormData;
	let isSubmitting = false;
	let isSuccess = false;

	const handleSubmit = async () => {
		isSubmitting = true;

		const preparedData = Object.keys({ ...formData }).map((key) =>
			formData[key] === '' ? (formData[key] = '-') : formData[key]
		);
		await fetch('/api/save-in-sheet', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				values: [[new Date().toLocaleString(), ...preparedData]], // the payload format google sheet needs
				range: 'Material Orders'
			})
		});

		await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Material Order: ${formData.name}`,
				sender: { name: formData.name, email: formData.email },
				to: [{ name: 'WRO Myanmar', email: 'wrowebsite@gmail.com' }],
				htmlContent: getOrderWroEmailTemplate(formData)
			})
		});

		await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Order from ${formData.name} for ${formData.quantity} ${formData.itemName} Received.`,
				sender: { name: 'WRO Myanmar', email: 'wrowebsite@gmail.com' },
				to: [{ name: formData.name, email: formData.email }],
				htmlContent: getOrderSenderEmailTemplate(formData.name, formData.itemName)
			})
		});

		formData = initialFormData;
		isSuccess = true;
		isSubmitting = false;
		window.scrollTo(0, 0);
	};
</script>

<svelte:head>
	<title>Materials Order - WRO Myanmar</title>
</svelte:head>
<section class="relative">
	<div class="padding-global">
		<div
			class="mx-auto flex max-w-[36.8rem] flex-col items-center gap-9 pb-9 pt-9 sm:pb-16 sm:pt-32"
		>
			{#if isSuccess}
				<div class="h-full sm:pb-16">
					<Success
						message="Your order has been received."
						description="We will contact you soon to proceed the purchasing process. For now, you can join our viber community for the up-to-date information about competitions, events and future updates."
						secondBtn={{ label: 'Go to Materials', link: '/materials' }}
					/>
				</div>
			{:else}
				<h1
					class="max-w-[20rem] bg-gradient-primary bg-clip-text text-center font-black text-[2.5rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
				>
					Materials Order
				</h1>

				<form
					on:submit|preventDefault={handleSubmit}
					class="flex w-full flex-col items-center gap-6 sm:mt-12 sm:gap-9"
				>
					<label class="grid w-full gap-3">
						<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
							Item Name
						</span>
						<input
							type="text"
							name="item-name"
							placeholder={itemName}
							disabled
							class="cursor-not-allowed rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
						/>
					</label>

					<Input label="Name*" on:change={(e) => (formData.name = e.detail)} />
					<Input label="Email*" type="email" on:change={(e) => (formData.email = e.detail)} />
					<Input label="Phone Number*" on:change={(e) => (formData.phone = e.detail)} />
					<Input label="School*" on:change={(e) => (formData.school = e.detail)} />
					<Input label="Address*" on:change={(e) => (formData.address = e.detail)} />
					<Input
						label="How many items you want to order?*"
						placeholder="e.g. 1 or 2 or 3"
						on:change={(e) => (formData.quantity = e.detail)}
					/>

					<button
						class="w-full bg-gradient-primary px-3 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto sm:px-6"
					>
						{isSubmitting ? 'Ordering...' : 'Order'}
					</button>
				</form>
			{/if}
		</div>
	</div>

	<img
		src="/images/circuit-silver.webp"
		alt=""
		class="absolute right-0 top-0 hidden aspect-[1.52/1] w-[25rem] sm:block"
	/>
	<img
		src="/images/circuit-silver.webp"
		alt=""
		class="absolute bottom-12 left-0 hidden aspect-[1.52/1] w-[25rem] scale-x-[-1] sm:block"
	/>
</section>
