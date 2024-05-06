<div class="flex h-[1.875rem] overflow-hidden">
	{#each [...Array(90).keys()] as _}
		<div class="h-full w-5 shrink-0">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 20 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="10" width="10" height="10" class="fill-accent-100" />
				<rect y="20" width="10" height="10" class="fill-accent-25" />
				<rect width="10" height="10" class="fill-accent-25" />
				<rect y="10" width="10" height="10" class="fill-accent-100" />
				<rect x="10" y="20" width="10" height="10" class="fill-accent-100" />
				<rect x="10" y="10" width="10" height="10" class="fill-accent-25" />
			</svg>
		</div>
	{/each}
</div>
