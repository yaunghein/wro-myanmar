import { client } from './client';

interface PDF {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
}

export function urlForPDF(source: PDF | undefined) {
	if (!source) return '';
	const clientId = client.config().projectId;
	const dataset = client.config().dataset;
	const filename = source.asset._ref.split('-')[1];
	return `https://cdn.sanity.io/files/${clientId}/${dataset}/${filename}.pdf`;
}
