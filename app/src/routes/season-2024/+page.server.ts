import { seasonPageQuery as query } from '$lib/sanity/queries';
import type { SeasonPage } from '$lib/sanity/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<SeasonPage>(query);

	return {
		query,
		options: { initial }
	};
};
