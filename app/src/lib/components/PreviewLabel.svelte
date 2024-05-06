<script>
	import { page } from '$app/stores';
</script>

<a
	href={`/preview/disable?redirect=${$page.url.pathname}`}
	class="group fixed bottom-5 right-5 rounded-full bg-neutral-600 px-4 py-2 text-sm text-white transition hover:bg-neutral-900"
>
	<span class="group-hover:hidden">Preview Enabled</span>
	<span class="hidden group-hover:block">Disable Preview</span>
</a>
