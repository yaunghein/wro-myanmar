import { joinUsPageQuery } from '$lib/sanity/queries';
import type { JoinUsPage } from '$lib/sanity/types';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { preview } = event.locals;

	const { loadQuery } = event.locals;
	const initial = await loadQuery<JoinUsPage>(joinUsPageQuery);

	return {
		preview,
		joinUsPageQuery,
		joinUsOptions: { initial }
	};
};
