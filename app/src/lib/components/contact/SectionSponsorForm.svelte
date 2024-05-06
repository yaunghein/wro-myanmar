<script lang="ts">
	// import { cleanText } from '$lib/utils';
	// import type { ContactPage } from '$lib/sanity/types';
	// export let contactPage: ContactPage;

	const initialFormData = {
		name: '',
		position: '',
		phone: '',
		email: '',
		organization: '',
		address: ''
	};
	let formData = initialFormData;
	let isSubmitting = false;

	const handleSubmit = async () => {
		isSubmitting = false;
		try {
			const resp = await fetch('/api/save-in-sheet', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ data: formData, range: 'Sponsorship' })
			});
			const data = await resp.json();
			console.log(data);
		} catch (error) {
			console.log({ error });
		}
		isSubmitting = false;
	};
</script>

<svelte:head>
	<title>Sponsorship Inquiry - WRO Myanmar</title>
</svelte:head>
<section class="relative">
	<div class="padding-global">
		<div
			class="mx-auto flex max-w-[36.8rem] flex-col items-center gap-9 pb-9 pt-9 sm:pb-16 sm:pt-32"
		>
			<h1
				class="bg-gradient-primary bg-clip-text text-center font-black text-[2.5rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
			>
				<!-- {cleanText(contactPage.title)} -->
				Sponsorship Inquiry
			</h1>

			<form
				on:submit|preventDefault={handleSubmit}
				class="flex w-full flex-col items-center gap-6 sm:mt-12 sm:gap-9"
			>
				<label class="grid w-full gap-3">
					<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
						Name of Contact Person*
					</span>
					<input
						type="text"
						name="name"
						placeholder="Type here"
						bind:value={formData.name}
						class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
					/>
				</label>

				<label class="grid w-full gap-3">
					<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
						Position*
					</span>
					<input
						type="text"
						name="position"
						placeholder="Type here"
						bind:value={formData.position}
						class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
					/>
				</label>

				<label class="grid w-full gap-3">
					<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
						Phone Number*
					</span>
					<input
						type="text"
						name="phone"
						placeholder="Type here"
						bind:value={formData.phone}
						class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
					/>
				</label>

				<label class="grid w-full gap-3">
					<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
						Email*
					</span>
					<input
						type="email"
						name="email"
						placeholder="Type here"
						bind:value={formData.email}
						class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
					/>
				</label>

				<label class="grid w-full gap-3">
					<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
						School/Organization Name*
					</span>
					<input
						type="text"
						name="organization"
						placeholder="Type here"
						bind:value={formData.organization}
						class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
					/>
				</label>

				<label class="grid w-full gap-3">
					<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
						ADDRESS*
					</span>
					<input
						type="text"
						name="address"
						placeholder="Type here"
						bind:value={formData.address}
						class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
					/>
				</label>

				<button
					class="w-full bg-gradient-primary px-3 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto sm:px-6"
				>
					{isSubmitting ? 'Submitting...' : 'SUBMIT'}
				</button>
			</form>
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
