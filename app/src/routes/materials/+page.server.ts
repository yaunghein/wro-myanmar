import { materialsQuery, materialsPageQuery } from '$lib/sanity/queries';
import type { Material, MaterialPage } from '$lib/sanity/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const initialMaterialsPage = await loadQuery<MaterialPage>(materialsPageQuery);
	const initialMaterials = await loadQuery<Material[]>(materialsQuery);

	return {
		materialsPageQuery: {
			query: materialsPageQuery,
			options: { initial: initialMaterialsPage }
		},
		materialsQuery: {
			query: materialsQuery,
			options: { initial: initialMaterials }
		}
	};
};
