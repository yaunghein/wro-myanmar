import { json, error } from '@sveltejs/kit';
import { google } from 'googleapis';
import {
	GOOGLE_CLIENT_EMAIL,
	GOOGLE_PRIVATE_KEY,
	GOOGLE_SPREADSHEET_ID
} from '$env/static/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: GOOGLE_CLIENT_EMAIL,
				private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
			},
			scopes: 'https://www.googleapis.com/auth/spreadsheets'
		});
		const { values, range } = await request.json();
		const client: any = await auth.getClient();
		const googleSheets: any = google.sheets({ version: 'v4', auth: client });
		const spreadsheetId = GOOGLE_SPREADSHEET_ID;
		googleSheets.spreadsheets.values.append({
			auth,
			spreadsheetId,
			range,
			valueInputOption: 'USER_ENTERED',
			resource: { values }
		});
		return json({ success: true });
	} catch (err: any) {
		return error(500, err.message);
	}
};
