import { newsQuery, newsCountQuery, newsPageQuery, type News } from '$lib/sanity/queries';
import type { NewsPage } from '$lib/sanity/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const from = Number(event.url.searchParams.get('from')) || 0;
	const to = Number(event.url.searchParams.get('to')) || 4;
	const params = { from, to };

	const { loadQuery } = event.locals;
	const initialNewsPage = await loadQuery<NewsPage>(newsPageQuery);
	const initialNews = await loadQuery<News[]>(newsQuery, params);
	const totalNews = await loadQuery<number>(newsCountQuery);

	return {
		newsPageQuery: {
			query: newsPageQuery,
			options: { initial: initialNewsPage }
		},
		newsQuery: {
			query: newsQuery,
			params,
			options: { initial: initialNews }
		},
		totalNews: totalNews.data
	};
};
