import { db } from '$lib/server/db';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import * as table from '$lib/server/db/schema';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const name = data.get('name');
		const description = data.get('description');
		const status = data.get('status');

		if (!name || typeof name !== 'string') {
			return fail(400, { name, message: 'Invalid name' });
		}

		if (!description || typeof description !== 'string') {
			return fail(400, { description, message: 'Invalid description' });
		}

		if (
			!status ||
			typeof status !== 'string' ||
			(status !== 'pending' && status !== 'in progress' && status !== 'done')
		) {
			return fail(400, { status, message: 'Invalid status' });
		}

		// TODO: maybe check if user exists?
		await db.insert(table.todos).values({
			name,
			description,
			status,
			userId: event.locals.user!.id
		});

		redirect(302, '/todos');
	}
} satisfies Actions;
