<script lang="ts">
	const { data } = $props();

	const todos = $state(data.todos);
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
				<td>{todo.status.toUpperCase()}</td>
			</tr>
		{/each}
	</tbody>
</table>
