<script lang="ts">
	import Input from './Input.svelte';
	import Success from './Success.svelte';
	import getPartnerSenderEmailTemplate from '$lib/utils/email/partner/sender';
	import getPartnerWroEmailTemplate from '$lib/utils/email/partner/wro';
	import { PUBLIC_PARTNER_EMAIL } from '$env/static/public';
	// import { cleanText } from '$lib/utils';
	// import type { ContactPage } from '$lib/sanity/types';
	// export let contactPage: ContactPage;

	const initialFormData: Record<string, string> = {
		name: '',
		position: '',
		phone: '',
		email: '',
		organization: '',
		address: ''
	};
	let formData = initialFormData;
	let isSubmitting = false;
	let isSuccess = false;

	const handleSubmit = async () => {
		isSubmitting = true;

		try {
			const preparedData = Object.keys({ ...formData }).map((key) =>
				formData[key] === '' ? (formData[key] = '-') : formData[key]
			);
			const sheetResp = await fetch('/api/save-in-sheet', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					values: [[new Date().toLocaleString(), ...preparedData]], // the payload format google sheet needs
					range: 'Partners'
				})
			});
			if (!sheetResp.ok) {
				throw await sheetResp.json();
			}

			const wroResp = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					subject: `Join as Partner: ${formData.name}`,
					sender: { name: formData.name, email: formData.email },
					to: [{ name: 'WRO Myanmar', email: PUBLIC_PARTNER_EMAIL }],
					htmlContent: getPartnerWroEmailTemplate(formData)
				})
			});
			if (!wroResp.ok) {
				throw await wroResp.json();
			}

			const senderResp = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					subject: `Join as Partner Submission from ${formData.name} Received.`,
					sender: { name: 'WRO Myanmar', email: PUBLIC_PARTNER_EMAIL },
					to: [{ name: formData.name, email: formData.email }],
					htmlContent: getPartnerSenderEmailTemplate(formData.name)
				})
			});
			if (!senderResp.ok) {
				throw await senderResp.json();
			}

			formData = initialFormData;
			isSuccess = true;
			window.scrollTo(0, 0);
		} catch (error) {
			console.log(error);
		}

		isSubmitting = false;
	};
</script>

<svelte:head>
	<title>Partner Registration - WRO Myanmar</title>
</svelte:head>
<section class="relative">
	<div class="padding-global">
		<div
			class="mx-auto flex max-w-[36.8rem] flex-col items-center gap-9 pb-9 pt-9 sm:pb-16 sm:pt-32"
		>
			{#if isSuccess}
				<div class="h-full sm:pb-12">
					<Success
						description="We will get back to you in 1 or 2 business day. For now, you can join our viber community for the up-to-date information about competitions, events and future updates."
					/>
				</div>
			{:else}
				<h1
					class="bg-gradient-primary bg-clip-text text-center font-black text-[2.5rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
				>
					<!-- {cleanText(contactPage.title)} -->
					Partner Registration
				</h1>

				<form
					on:submit|preventDefault={handleSubmit}
					class="flex w-full flex-col items-center gap-6 sm:mt-12 sm:gap-9"
				>
					<Input label="Name of Contact Person*" on:change={(e) => (formData.name = e.detail)} />
					<Input label="Position*" on:change={(e) => (formData.position = e.detail)} />
					<Input label="Phone Number*" on:change={(e) => (formData.phone = e.detail)} />
					<Input label="Email*" on:change={(e) => (formData.email = e.detail)} />
					<Input
						label="School/Organization Name*"
						on:change={(e) => (formData.organization = e.detail)}
					/>
					<Input label="ADDRESS*" on:change={(e) => (formData.address = e.detail)} />

					<button
						class="w-full bg-gradient-primary px-3 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto sm:px-6"
					>
						{isSubmitting ? 'Submitting...' : 'SUBMIT'}
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
