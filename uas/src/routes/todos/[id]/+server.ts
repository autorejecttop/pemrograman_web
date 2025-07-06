import { db } from '$lib/server/db';
import { json, type RequestHandler } from '@sveltejs/kit';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

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

	// TODO: make this safer..?
	return json(result[0]);
};
