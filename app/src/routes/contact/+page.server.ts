import { contactPageQuery as query } from '$lib/sanity/queries';
import type { ContactPage } from '$lib/sanity/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initial = await loadQuery<ContactPage>(query);

	return {
		query,
		options: { initial }
	};
};
