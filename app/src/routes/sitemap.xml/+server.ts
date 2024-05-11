import { newsAllQuery, materialsQuery } from '$lib/sanity/queries';
import type { News, Material } from '$lib/sanity/queries';
import type { RequestHandler } from './$types';

interface SitemapItem {
	_type: string;
	slug: { current: string };
	_updatedAt: string;
}

const prepare = <T extends SitemapItem>(collection: T[], priority: number) => {
	return collection.map((item) => {
		return {
			path: `${item._type}/${item.slug.current}`,
			lastmod: item._updatedAt,
			frequency: 'daily',
			priority
		};
	});
};

export const GET: RequestHandler = async (event) => {
	const { loadQuery } = event.locals;
	const { data: newsData } = await loadQuery<News[]>(newsAllQuery);
	const { data: materialsData } = await loadQuery<Material[]>(materialsQuery);

	const news = prepare<News>(newsData, 1);
	const materials = prepare<Material>(materialsData, 0.5);
	const pages = [
		{ path: '', lastmod: new Date().toISOString(), frequency: 'monthly', priority: 1 },
		{ path: 'season-2024', lastmod: new Date().toISOString(), frequency: 'monthly', priority: 1 },
		{ path: 'partners', lastmod: new Date().toISOString(), frequency: 'daily', priority: 0.5 },
		{ path: 'materials', lastmod: new Date().toISOString(), frequency: 'daily', priority: 0.5 },
		{ path: 'news', lastmod: new Date().toISOString(), frequency: 'daily', priority: 1 },
		{ path: 'contact', lastmod: new Date().toISOString(), frequency: 'daily', priority: 0.5 },
		{ path: 'register', lastmod: new Date().toISOString(), frequency: 'daily', priority: 1 },
		{
			path: 'join-as-partner',
			lastmod: new Date().toISOString(),
			frequency: 'daily',
			priority: 0.5
		},
		{ path: 'sponsorship', lastmod: new Date().toISOString(), frequency: 'daily', priority: 0.5 }
	];

	const entries = [...pages, ...news, ...materials];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	    ${entries
				.map((entry) => {
					return `
	            <url>
	                <loc>https://www.wro-mm.com/${entry.path}</loc>
	                <lastmod>${entry.lastmod}</lastmod>
	                <changefreq>${entry.frequency}</changefreq>
	                <priority>${entry.priority}</priority>
	            </url>`;
				})
				.join('')}
	</urlset>`;

	return new Response(xml, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
};
