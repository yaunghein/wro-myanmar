<script lang="ts">
	// import { cleanText } from '$lib/utils';
	// import type { ContactPage } from '$lib/sanity/types';
	// export let contactPage: ContactPage;
	import Success from './Success.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import getRegisterSenderEmailTemplate from '$lib/utils/email/register/sender';
	import getRegisterWroEmailTemplate from '$lib/utils/email/register/wro';

	const numbers: Record<number, string> = {
		1: 'one',
		2: 'two',
		3: 'three'
	};
	const initialFormData: Record<string, string> = {
		teamName: '',
		email: '',
		teamMembers: '',
		category: '',
		region: '',
		oneFullName: '',
		oneNickname: '',
		oneAge: '',
		oneBirthday: '',
		oneSchool: '',
		oneAddress: '',
		onePhone: '',
		oneParent: '',
		oneParentPhone: '',
		twoFullName: '',
		twoNickname: '',
		twoAge: '',
		twoBirthday: '',
		twoSchool: '',
		twoAddress: '',
		twoPhone: '',
		twoParent: '',
		twoParentPhone: '',
		threeFullName: '',
		threeNickname: '',
		threeAge: '',
		threeBirthday: '',
		threeSchool: '',
		threeAddress: '',
		threePhone: '',
		threeParent: '',
		threeParentPhone: ''
	};
	let formData = initialFormData;
	let haveReadRules = false;
	$: if (haveReadRules) formData = { ...formData, readRule: 'Yes' };

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
				range: 'Registrations'
			})
		}).catch((error) => console.log(error));

		await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Registrations: ${formData.teamName}`,
				sender: { name: formData.teamName, email: formData.email },
				to: [{ name: 'WRO Myanmar', email: 'wrowebsite@gmail.com' }],
				htmlContent: getRegisterWroEmailTemplate(formData)
			})
		}).catch((error) => console.log(error));

		await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Registrations Received from ${formData.teamName}.`,
				sender: { name: 'WRO Myanmar', email: 'wrowebsite@gmail.com' },
				to: [{ name: formData.teamName, email: formData.email }],
				htmlContent: getRegisterSenderEmailTemplate(formData.teamName)
			})
		}).catch((error) => console.log(error));

		formData = initialFormData;
		isSuccess = true;
		isSubmitting = false;
		window.scrollTo(0, 0);
	};
</script>

<svelte:head>
	<title>Register Now - WRO Myanmar</title>
</svelte:head>
<section class="relative">
	<div class="padding-global">
		<div
			class="mx-auto flex max-w-[36.8rem] flex-col items-center gap-9 pb-9 pt-9 sm:pb-16 sm:pt-32"
		>
			{#if isSuccess}
				<div class="h-full sm:pb-16">
					<Success />
				</div>
			{:else}
				<h1
					class="bg-gradient-primary bg-clip-text text-center font-black text-[2.5rem] uppercase leading-none tracking-tight text-transparent sm:text-5xl"
				>
					World Robot Olympiad Myanmar Regional Championship
				</h1>
				<form
					on:submit|preventDefault={handleSubmit}
					class="flex w-full flex-col items-center gap-6 sm:mt-12 sm:gap-9"
				>
					<Input label="Team Name*" on:change={(e) => (formData.teamName = e.detail)} />
					<Input label="Email*" type="email" on:change={(e) => (formData.email = e.detail)} />
					<Select
						label="How Many team members?*"
						on:change={(e) => (formData.teamMembers = e.detail)}
						options={['2', '3']}
					/>
					<Select
						label="Which Category would you join?*"
						on:change={(e) => (formData.category = e.detail)}
						options={[
							'Robomission Elementary (8-12 Years old)',
							'Robomission Junior (11-15 Years old)',
							'Robomission Senior (14-19 Years old)',
							'Future Innovators Elementary (8-12 Years old)',
							'Future Innovators Junior (11-15 Years old)',
							'Future Innovators Senior (14-19 Years old)'
						]}
					/>
					<Select
						label="Which Region would you like to compete in?*"
						on:change={(e) => (formData.region = e.detail)}
						options={['Yangon', 'Mandalay', 'Nay Pyi Taw', 'Mawlamyaing', 'Taunggyi']}
					/>

					{#if formData.teamMembers && Number(formData.teamMembers) > 0}
						<div class="mb-5 h-[1px] w-full bg-white opacity-25" />

						<h2
							class="mb-5 text-center font-black text-[2.5rem] uppercase leading-none tracking-tight sm:text-5xl"
						>
							Participants Information
						</h2>

						{#each [...Array(Number(formData.teamMembers)).keys()] as index}
							<h3
								class="bg-gradient-primary bg-clip-text text-center font-black text-xl uppercase leading-none tracking-tight text-transparent sm:text-2xl"
							>
								PARTICIPANT {numbers[index + 1]}
							</h3>

							<Input
								label="FULL NAME*"
								on:change={(e) => (formData[`${numbers[index + 1]}FullName`] = e.detail)}
							/>
							<Input
								label="NICKNAME*"
								on:change={(e) => (formData[`${numbers[index + 1]}Nickname`] = e.detail)}
							/>
							<Input
								type="text"
								label="AGE*"
								on:change={(e) => (formData[`${numbers[index + 1]}Age`] = e.detail)}
							/>
							<Input
								label="DATE OF BIRTH*"
								placeholder="DD/MM/YYYY"
								on:change={(e) => (formData[`${numbers[index + 1]}Birthday`] = e.detail)}
							/>
							<Input
								label="SCHOOL*"
								on:change={(e) => (formData[`${numbers[index + 1]}School`] = e.detail)}
							/>
							<Input
								label="ADDRESS*"
								on:change={(e) => (formData[`${numbers[index + 1]}Address`] = e.detail)}
							/>
							<Input
								label="PHONE NUMBER*"
								on:change={(e) => (formData[`${numbers[index + 1]}Phone`] = e.detail)}
							/>
							<Input
								label="PARENT NAME*"
								on:change={(e) => (formData[`${numbers[index + 1]}Parent`] = e.detail)}
							/>
							<Input
								label="PARENT PHONE NUMBER*"
								on:change={(e) => (formData[`${numbers[index + 1]}ParentPhone`] = e.detail)}
							/>
						{/each}
					{/if}

					<label class="flex w-full items-center gap-2">
						<input
							type="checkbox"
							name="read-rules"
							placeholder="Type here"
							bind:value={haveReadRules}
							required
							class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
						/>
						<span class="text-sm">I have read all the rules.</span>
					</label>

					<button
						class="w-full bg-gradient-primary px-3 py-4 text-center font-black uppercase leading-none tracking-tight text-white sm:w-auto sm:px-6"
					>
						{isSubmitting ? 'Registering...' : 'Register'}
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
