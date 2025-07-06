<script lang="ts">
	import type { Todo } from '$lib/server/db/schema';

	const { data } = $props();

	const todos: Todo[] = $state(data.todos);

	const onStatusChange = async (updatedTodo: Todo) => {
		// TODO: make this safer..?
		await fetch(`/todos/${updatedTodo.id}`, {
			method: 'PUT',
			body: JSON.stringify(updatedTodo)
		});
	};
</script>

<div class="flex items-center justify-between">
	<h1 class="mb-0 text-3xl">Todos</h1>
	<a
		href="/todos/new"
		aria-label="Add Todo"
		class="icon-[solar--add-square-bold] text-6xl text-blue-600"
	></a>
</div>

<table>
	<thead>
		<tr>
			<th>No</th>
			<th>Name</th>
			<th>Description</th>
			<th>Status</th>
		</tr>
	</thead>
	<tbody>
		{#each todos as todo, index}
			<tr>
				<td>{index + 1}</td>
				<td>{todo.name}</td>
				<td>{todo.description}</td>
				<td>
					<select
						onchange={() => onStatusChange(todo)}
						name="status"
						id="status"
						bind:value={todo.status}
					>
						<option value="pending">PENDING</option>
						<option value="in progress">IN PROGRESS</option>
						<option value="done">DONE</option>
					</select>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
