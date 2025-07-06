<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	const { children } = $props();
</script>

<form action="/login?/logout" method="POST">
	<button
		aria-label="Logout"
		type="submit"
		class="flex items-center gap-2 text-xl font-bold text-[#fff2eb] underline hover:cursor-pointer hover:brightness-90"
	>
		<span class="icon-[solar--logout-2-bold]"></span> Logout
	</button>
</form>

{@render children()}
