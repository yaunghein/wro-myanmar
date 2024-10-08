import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

// replace types in this file with generated types
export interface News {
	_type: 'news';
	_createdAt: string;
	_updatedAt: string;
	title: string;
	slug: Slug;
	excerpt: string;
	mainImage: ImageAsset;
	body: PortableTextBlock[];
}

export const newsCountQuery = groq`count(*[_type == "news" && defined(slug.current)])`;

export const newsAllQuery = groq`*[_type == "news" && defined(slug.current)] | order(_createdAt desc) {
	_type,
	_createdAt,
	_updatedAt,
	title,
	slug,
	excerpt,
	mainImage
}`;

export const newsQuery = groq`*[_type == "news" && defined(slug.current)] | order(_createdAt desc) {
	_createdAt,
	title,
	slug,
	excerpt,
	mainImage
}[$from..$to]`;

export const newsSingleQuery = groq`*[_type == "news" && slug.current == $slug][0] {
	_createdAt,
	title,
	excerpt,
	mainImage,
	body
}`;

export const newsOthersQuery = groq`*[_type == "news" && slug.current != $slug && defined(slug.current)] | order(_createdAt desc)  {
	_createdAt,
	title,
	slug,
	excerpt,
	mainImage
}[0..2]`;

export interface CustomImage {
	image: ImageAsset;
	caption: string;
}

export interface Material {
	_type: 'material';
	_createdAt: string;
	_updatedAt: string;
	name: string;
	slug: Slug;
	image: CustomImage;
	availability: string;
	price: number;
}

export interface MaterialSingle {
	_type: 'material';
	name: string;
	images: CustomImage[];
	description: PortableTextBlock[];
	availability: string;
	price: number;
	deliveryFees: string;
}

export const materialsQuery = groq`*[_type == "material" && defined(slug.current)] | order(_createdAt desc) {
	_type,
	_createdAt,
	_updatedAt,
	name,
	slug,
	"image": images[0],
	availability,
	price
}`;

export const materialSingleQuery = groq`*[_type == "material" && slug.current == $slug][0] {
	name,
	images,
	description,
	availability,
	price,
	deliveryFees,
}`;

export const materialsOthersQuery = groq`*[_type == "material" && slug.current != $slug && defined(slug.current)] | order(_createdAt desc)  {
	_createdAt,
	name,
	slug,
	"image": images[0],
	isAvailable,
	price
}[0..1]`;

export interface Partner {
	_type: 'partner';
	_createdAt: string;
	name: string;
	type: 'premium' | 'gold' | 'silver' | 'school';
	sponsor: string;
	image: CustomImage;
	description: string;
	link: string;
	label: string;
}

export const partnersQuery = groq`*[_type == "partner"] | order(_createdAt desc) {
	_createdAt,
	name,
	type,
	sponsor,
	image,
	description,
	link,
	label
}`;

export const homePageQuery = groq`*[_type == "homePage" && isActive][0]`;

export const seasonPageQuery = groq`*[_type == "seasonPage" && isActive][0]`;

export const contactPageQuery = groq`*[_type == "contactPage" && isActive][0]`;

export const newsPageQuery = groq`*[_type == "newsPage" && isActive][0]`;

export const materialsPageQuery = groq`*[_type == "materialPage" && isActive][0]`;

export const joinUsPageQuery = groq`*[_type == "joinUsPage" && isActive][0]`;
