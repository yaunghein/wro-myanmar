import { json, error } from '@sveltejs/kit';
import { BREVO_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';
import SibApiV3Sdk from '@getbrevo/brevo';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { subject, sender, to, htmlContent, attachments } = await request.json();
		let brevo = new SibApiV3Sdk.TransactionalEmailsApi();

		// @ts-ignore
		let brevoAuth = brevo.authentications['apiKey'];
		brevoAuth.apiKey = BREVO_API_KEY;

		let email = new SibApiV3Sdk.SendSmtpEmail();
		email.subject = subject;
		email.sender = sender;
		email.to = [...to];
		email.replyTo = sender;
		email.htmlContent = htmlContent;

		if (attachments) email.attachment = attachments;

		await brevo.sendTransacEmail(email).catch((err: any) => error(500, err.message));
		return json({ success: true });
	} catch (err: any) {
		return error(500, err.message);
	}
};
