<script lang="ts">
	import type { Todo } from '$lib/server/db/schema';

	const { data } = $props();

	let todos: Todo[] = $state(data.todos);

	const handleStatusChange = async (updatedTodo: Todo) => {
		// TODO: make this safer..?
		await fetch(`/todos/${updatedTodo.id}`, {
			method: 'PUT',
			body: JSON.stringify(updatedTodo)
		});
	};

	const handleDeleteTodo = async (deletedTodo: Todo) => {
		const response = await fetch(`/todos/${deletedTodo.id}`, {
			method: 'DELETE'
		});

		if (response.ok) {
			todos = todos.filter((todo) => todo.id !== deletedTodo.id);
		}
	};
</script>

<div class="flex items-center justify-between">
	<h1 class="mb-0 text-3xl text-[#fff2eb]">Todos</h1>
	<a
		href="/todos/new"
		aria-label="Add Todo"
		class="icon-[solar--add-square-bold] text-6xl text-blue-700 hover:brightness-90"
	></a>
</div>

<div class="scrollbar-slim h-full overflow-y-scroll">
	<table>
		<thead>
			<tr>
				<th class="text-lg text-[#fff2eb]">No</th>
				<th class="text-lg text-[#fff2eb]">Name</th>
				<th class="text-lg text-[#fff2eb]">Description</th>
				<th class="text-lg text-[#fff2eb]">Status</th>
				<th class="text-lg text-[#fff2eb]">Actions</th>
			</tr>
		</thead>
		<tbody class="font-bold">
			{#each todos as todo, index}
				<tr>
					<td class="align-middle">{index + 1}</td>
					<td class="align-middle">{todo.name}</td>
					<td class="align-middle">{todo.description}</td>
					<td class="align-middle">
						<select
							onchange={() => handleStatusChange(todo)}
							name="status"
							id="status"
							bind:value={todo.status}
						>
							<option value="pending">PENDING</option>
							<option value="in progress">IN PROGRESS</option>
							<option value="done">DONE</option>
						</select>
					</td>
					<td class="align-middle">
						<button
							aria-label="Delete"
							onclick={() => handleDeleteTodo(todo)}
							class="block rounded-sm bg-red-600"
						>
							<span class="icon-[typcn--delete] block text-4xl text-white hover:cursor-pointer"
							></span>
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
