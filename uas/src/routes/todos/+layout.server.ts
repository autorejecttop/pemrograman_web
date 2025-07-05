import { getRequestEvent } from '$app/server';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';

export const load: LayoutServerLoad = async () => {
	const user = requireLogin();
	const todos = await db.select().from(table.todos);

	return { user, todos };
};

function requireLogin() {
	const { locals } = getRequestEvent();

	if (!locals.user) {
		return redirect(302, '/login');
	}

	return locals.user;
}
