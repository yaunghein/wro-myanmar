import { json } from '@sveltejs/kit';
import { google } from 'googleapis';
import {
	GOOGLE_CLIENT_EMAIL,
	GOOGLE_PRIVATE_KEY,
	GOOGLE_SPREADSHEET_ID
} from '$env/static/private';
import type { RequestHandler } from './$types';

const auth = new google.auth.GoogleAuth({
	credentials: {
		client_email: GOOGLE_CLIENT_EMAIL,
		private_key: GOOGLE_PRIVATE_KEY
	},
	scopes: 'https://www.googleapis.com/auth/spreadsheets'
});

// change to POST later
export const POST: RequestHandler = async ({ request }) => {
	const { data, range } = await request.json();
	const client: any = await auth.getClient();
	const googleSheets: any = google.sheets({ version: 'v4', auth: client });
	const spreadsheetId = GOOGLE_SPREADSHEET_ID;
	googleSheets.spreadsheets.values.append({
		auth,
		spreadsheetId,
		range,
		valueInputOption: 'USER_ENTERED',
		resource: {
			values: [Object.values(data)]
		}
	});
	return json({ success: true, message: 'Save in google sheet successfully.' });
};
