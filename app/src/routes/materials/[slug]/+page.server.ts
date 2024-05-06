import {
	materialSingleQuery,
	materialsOthersQuery,
	type Material,
	type MaterialSingle
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };
	const initialSingleMaterial = await loadQuery<MaterialSingle>(materialSingleQuery, params);
	const initialOtherMaterials = await loadQuery<Material[]>(materialsOthersQuery, params);

	return {
		materialSingleQuery: {
			query: materialSingleQuery,
			params,
			options: { initial: initialSingleMaterial }
		},
		materialsOthersQuery: {
			query: materialSingleQuery,
			params,
			options: { initial: initialOtherMaterials }
		}
	};
};
