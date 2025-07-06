<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	const { children } = $props();
</script>

<main class="prose m-auto max-w-5xl p-4">
	<form action="/login?/logout" method="POST">
		<button aria-label="Logout" type="submit">Logout</button>
	</form>

	<h1>Current width: {innerWidth.current} px</h1>

	{@render children()}
</main>
