<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="not-prose">
	<h1 class="mb-8 text-3xl font-bold">Login/Register</h1>

	<form method="POST" action="?/login" use:enhance>
		<table>
			<tbody>
				<tr>
					<td>
						<label class="mr-8 font-bold" for="username">Username</label>
					</td>
					<td>
						<input name="username" id="username" />
					</td>
				</tr>
				<tr>
					<td>
						<label class="mr-8 font-bold" for="password">Password</label>
					</td>
					<td>
						<input type="password" name="password" id="password" />
					</td>
				</tr>
			</tbody>
		</table>

		<div class="mt-4 flex gap-2">
			<button
				class="rounded-md bg-[#fff2eb] px-2 py-1 font-bold hover:cursor-pointer hover:brightness-90"
				type="submit">Login</button
			>
			<button
				class="rounded-md bg-[#fff2eb] px-2 py-1 font-bold hover:cursor-pointer hover:brightness-90"
				formaction="?/register">Register</button
			>
		</div>
	</form>

	<p style="color: red">{form?.message ?? ''}</p>
</div>
