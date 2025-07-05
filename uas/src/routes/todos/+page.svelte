<script lang="ts">
	const dummyTodos = $state([
		{
			id: 1,
			name: 'Todo 1',
			description: 'Description 1',
			status: 'Pending'
		},
		{
			id: 2,
			name: 'Todo 2',
			description: 'Description 2',
			status: 'In Progress'
		},
		{
			id: 3,
			name: 'Todo 3',
			description: 'Description 3',
			status: 'Done'
		}
	]);
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
		{#each dummyTodos as todo, index}
			<tr>
				<td>{index + 1}</td>
				<td>{todo.name}</td>
				<td>{todo.description}</td>
				<td>{todo.status}</td>
			</tr>
		{/each}
	</tbody>
</table>
