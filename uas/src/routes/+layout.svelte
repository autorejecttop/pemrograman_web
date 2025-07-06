<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="prose m-auto flex h-full max-w-5xl flex-col gap-4 rounded-4xl bg-blue-100/80 p-8">
	{@render children()}
</main>
