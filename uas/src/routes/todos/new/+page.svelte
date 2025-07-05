<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>Create New Todo</h1>

<form action="" method="POST" use:enhance>
	<table>
		<tbody>
			<tr>
				<td><label for="name">Name</label></td>
				<td><input placeholder="Wash the dishes ..." type="text" name="name" id="name" /></td>
			</tr>
			<tr>
				<td><label for="description">Description</label></td>
				<td
					><textarea
						placeholder="Use the dish soap and the sponge from ..."
						name="description"
						id="description"
					></textarea></td
				>
			</tr>
			<tr>
				<td><label for="status">Status</label></td>
				<td>
					<select name="status" id="status">
						<option value="pending">PENDING</option>
						<option value="in progress">IN PROGRESS</option>
						<option value="done">DONE</option>
					</select>
				</td>
			</tr>
		</tbody>
	</table>

	<button class="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white" type="submit">
		Submit
	</button>
</form>
