import { partnersQuery as query, type Partner } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<Partner[]>(query);

	return {
		query,
		options: { initial }
	};
};
