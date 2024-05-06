import { materialsQuery as query, type Material } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<Material[]>(query);

	return {
		query,
		options: { initial }
	};
};
