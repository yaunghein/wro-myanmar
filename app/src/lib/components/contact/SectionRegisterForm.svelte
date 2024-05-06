<script lang="ts">
	// import { cleanText } from '$lib/utils';
	// import type { ContactPage } from '$lib/sanity/types';
	// export let contactPage: ContactPage;
	import Success from './Success.svelte';

	const numbers: Record<number, string> = {
		1: 'one',
		2: 'two',
		3: 'three'
	};
	const initialFormData: Record<string, string> = {
		teamInfo: '',
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
	let isSubmitting = false;
	let isSuccess = false;

	const handleSubmit = async () => {
		isSubmitting = true;
		try {
			const resp = await fetch('/api/save-in-sheet', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ data: formData, range: 'Registrations' })
			});
			const data = await resp.json();
			console.log({ data });
		} catch (error) {
			console.log({ error });
		}
		isSubmitting = false;
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
					<!-- {cleanText(contactPage.title)} -->
					World Robot Olympiad Myanmar Regional Championship
				</h1>
				<form
					on:submit|preventDefault={handleSubmit}
					class="flex w-full flex-col items-center gap-6 sm:mt-12 sm:gap-9"
				>
					<label class="grid w-full gap-3">
						<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
							Team Information*
						</span>
						<input
							type="text"
							name="team-information"
							placeholder="Type here"
							bind:value={formData.teamInfo}
							class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
						/>
					</label>

					<label class="grid w-full gap-3">
						<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
							How Many team members?*
						</span>
						<select
							bind:value={formData.teamMembers}
							on:change={() => {
								if (formData.teamMembers === '0') {
									formData.teamMembers = '2';
								}
							}}
							name="team-members"
							class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
						>
							<option value="0"></option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</label>

					<label class="grid w-full gap-3">
						<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
							Which Category would you join?*
						</span>
						<select
							bind:value={formData.category}
							name="category"
							class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
						>
							<option value=""></option>
							<option value="Option One">Option One</option>
							<option value="Option Two">Option Two</option>
						</select>
					</label>

					<label class="grid w-full gap-3">
						<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
							Which Region would you like to compete in?*
						</span>
						<select
							bind:value={formData.region}
							name="region"
							class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
						>
							<option value=""></option>
							<option value="Option One">Option One</option>
							<option value="Option Two">Option Two</option>
						</select>
					</label>

					{#if Number(formData.teamMembers) > 0}
						<div class="mb-5 h-[1px] w-full bg-white opacity-25" />

						<h2
							class="mb-5 text-center font-black text-[2.5rem] uppercase leading-none tracking-tight sm:text-5xl"
						>
							ParticipantS Information
						</h2>

						{#each [...Array(Number(formData.teamMembers)).keys()] as index}
							<h3
								class="bg-gradient-primary bg-clip-text text-center font-black text-xl uppercase leading-none tracking-tight text-transparent sm:text-2xl"
							>
								PARTICIPANT {numbers[index + 1]}
							</h3>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									FULL NAME*
								</span>
								<input
									required
									type="text"
									name={`${numbers[index + 1]}-full-name`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}FullName`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									NICKNAME*
								</span>
								<input
									type="text"
									name={`${numbers[index + 1]}-nickname`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}Nickname`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									AGE*
								</span>
								<input
									type="number"
									name={`${numbers[index + 1]}-age`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}Age`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									DATE OF BIRTH*
								</span>
								<input
									type="date"
									name={`${numbers[index + 1]}-birthday`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}Birthday`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									SCHOOL*
								</span>
								<input
									type="text"
									name={`${numbers[index + 1]}-school`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}School`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									ADDRESS*
								</span>
								<input
									type="text"
									name={`${numbers[index + 1]}-address`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}Address`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									PHONE NUMBER*
								</span>
								<input
									type="text"
									name={`${numbers[index + 1]}-phone`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}Phone`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									PARENT NAME*
								</span>
								<input
									type="text"
									name={`${numbers[index + 1]}-parent`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}Parent`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>

							<label class="grid w-full gap-3">
								<span class="font-black text-sm uppercase leading-none tracking-tight sm:text-2xl">
									PARENT PHONE NUMBER*
								</span>
								<input
									type="text"
									name={`${numbers[index + 1]}-parent-phone`}
									placeholder="Type here"
									bind:value={formData[`${numbers[index + 1]}ParentPhone`]}
									class="rounded-none bg-white bg-opacity-20 px-3 py-4 font-black text-sm leading-none tracking-tight outline-none placeholder:uppercase placeholder:text-white placeholder:text-opacity-25 sm:px-6 sm:text-base"
								/>
							</label>
						{/each}
					{/if}

					<label class="flex w-full gap-3">
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
