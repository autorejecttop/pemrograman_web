import { db } from '$lib/server/db';
import { json, type RequestHandler } from '@sveltejs/kit';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

// TODO: make this safer..?
export const PUT: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const result = await db
		.update(table.todos)
		.set(data)
		.where(eq(table.todos.id, data.id))
		.returning({
			id: table.todos.id,
			description: table.todos.description,
			status: table.todos.status,
			userId: table.todos.userId
		});

	return json(result[0], {
		status: 201
	});
};

// TODO: make this safer..?
export const DELETE: RequestHandler = async ({ params }) => {
	const todoId = params.id;

	if (!todoId || todoId === '') {
		return json(
			{
				message: 'Invalid Todo ID'
			},
			{
				status: 400
			}
		);
	}

	await db.delete(table.todos).where(eq(table.todos.id, +todoId));

	return json(undefined, {
		status: 204
	});
};
