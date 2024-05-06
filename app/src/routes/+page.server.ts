import { homePageQuery as query } from '$lib/sanity/queries';
import type { HomePage } from '$lib/sanity/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<HomePage>(query);

	return {
		query,
		options: { initial }
	};
};
