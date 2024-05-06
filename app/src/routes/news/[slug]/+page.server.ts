import { newsSingleQuery, newsOthersQuery, type News } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };
	const initialSingleNews = await loadQuery<News>(newsSingleQuery, params);
	const initialOtherNews = await loadQuery<News[]>(newsOthersQuery, params);

	return {
		newsSingleQuery: {
			query: newsSingleQuery,
			params,
			options: { initial: initialSingleNews }
		},
		newsOthersQuery: {
			query: newsSingleQuery,
			params,
			options: { initial: initialOtherNews }
		}
	};
};
