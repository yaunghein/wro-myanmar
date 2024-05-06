<div class="flex h-9 overflow-hidden">
	{#each [...Array(30).keys()] as _}
		<div class="h-full w-6 shrink-0">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 24 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="12" height="12" class="fill-white" />
				<rect x="12" y="12" width="12" height="12" class="fill-white" />
				<rect y="24" width="12" height="12" class="fill-white" />
			</svg>
		</div>
	{/each}
</div>
