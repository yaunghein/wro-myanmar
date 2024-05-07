export default function (data: any) {
	return `
    <!doctype html>
<html
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
>
	<head>
		<title></title>
		<!--[if !mso]><!-- -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<style type="text/css">
			#outlook a {
				padding: 0;
			}
			.ReadMsgBody {
				width: 100%;
			}
			.ExternalClass {
				width: 100%;
			}
			.ExternalClass * {
				line-height: 100%;
			}
			body {
				margin: 0;
				padding: 0;
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
			}
			table,
			td {
				border-collapse: collapse;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}
			img {
				border: 0;
				height: auto;
				line-height: 100%;
				outline: none;
				text-decoration: none;
				-ms-interpolation-mode: bicubic;
			}
			p {
				display: block;
				margin: 13px 0;
			}
		</style>
		<!--[if !mso]><!-->
		<style type="text/css">
			@media only screen and (max-width: 480px) {
				@-ms-viewport {
					width: 320px;
				}
				@viewport {
					width: 320px;
				}
			}
		</style>
		<!--<![endif]-->
		<!--[if mso]>
			<xml>
				<o:OfficeDocumentSettings>
					<o:AllowPNG />
					<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
			</xml>
		<![endif]-->
		<!--[if lte mso 11]>
			<style type="text/css">
				.outlook-group-fix {
					width: 100% !important;
				}
			</style>
		<![endif]-->
		<!--[if !mso]><!-->
		<link
			href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700"
			rel="stylesheet"
			type="text/css"
		/>
		<style type="text/css">
			@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
		</style>
		<!--<![endif]-->
		<style type="text/css">
			@media only screen and (min-width: 480px) {
				.mj-column-px-480 {
					width: 480px !important;
					max-width: 480px;
				}
			}
		</style>
		<style type="text/css">
			@media only screen and (max-width: 480px) {
				table.full-width-mobile {
					width: 100% !important;
				}
				td.full-width-mobile {
					width: auto !important;
				}
			}
		</style>
	</head>
	<body style="background-color: #161026">
		<div style="background-color: #161026">
			<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
			<div style="margin: 0px auto; max-width: 600px">
				<table
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					role="presentation"
					style="width: 100%"
				>
					<tbody>
						<tr>
							<td
								style="
									direction: ltr;
									font-size: 0px;
									padding: 0;
									text-align: center;
									vertical-align: top;
								"
							>
								<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:480px;" ><![endif]-->
								<div
									class="mj-column-px-480 outlook-group-fix"
									style="
										font-size: 13px;
										text-align: left;
										direction: ltr;
										display: inline-block;
										vertical-align: top;
										width: 100%;
									"
								>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										width="100%"
									>
										<tbody>
											<tr>
												<td style="vertical-align: top; padding: 24px">
													<table
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														width="100%"
													>
														<tr>
															<td
																align="center"
																style="
																	font-size: 0px;
																	padding: 10px 25px;
																	padding-top: 40px;
																	padding-right: 40px;
																	padding-bottom: 40px;
																	word-break: break-word;
																"
															>
																<table
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	role="presentation"
																	style="border-collapse: collapse; border-spacing: 0px"
																>
																	<tbody>
																		<tr>
																			<td style="width: 204px">
																				<img
																					height="46"
																					src="https://i.ibb.co/DR41c4v/logo.png"
																					style="
																						border: 0;
																						display: block;
																						outline: none;
																						text-decoration: none;
																						height: 46px;
																						width: 100%;
																					"
																					width="204"
																				/>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td
																align="center"
																class="uppercase"
																style="font-size: 0px; padding: 0px; word-break: break-word"
															>
																<div
																	style="
																		font-family: Arial, sans-serif;
																		font-size: 24px;
																		font-weight: 900;
																		line-height: 28px;
																		text-align: center;
																		text-transform: uppercase;
																		color: #ffffff;
																	"
																>
																	Below is the order information from ${data.name}.
																</div>
															</td>
														</tr>
														<tr>
															<td
																align="left"
																style="font-size: 0px; padding: 10px 25px; word-break: break-word"
															>
																<table
																	cellpadding="0"
																	cellspacing="0"
																	width="100%"
																	border="0"
																	style="
																		cellspacing: 0;
																		color: #ffffff;
																		font-family: Ubuntu, Helvetica, Arial, sans-serif;
																		font-size: 13px;
																		line-height: 22px;
																		table-layout: auto;
																		width: 100%;
																	"
																>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			Item Name
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.itemName}
																		</td>
																	</tr>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			Customer Name
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.name}
																		</td>
																	</tr>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			Email
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.email}
																		</td>
																	</tr>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			Phone
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.phone}
																		</td>
																	</tr>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			School
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.school}
																		</td>
																	</tr>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			Address
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.address}
																		</td>
																	</tr>
																	<tr>
																		<td style="padding: 0; width: 50%;text-align: right;font-size: 16px;">
																			Item Quantity
																		</td>
																		<td style="padding: 0 4px 0 4px;text-align: right;font-size: 16px;">
																			:
																		</td>
																		<td style="padding: 0;width: 50%;text-align: left;font-size: 16px;">
																			${data.quantity}
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td
																align="center"
																vertical-align="middle"
																style="
																	font-size: 0px;
																	padding: 10px 25px;
																	padding-top: 32px;
																	padding-bottom: 40px;
																	word-break: break-word;
																"
															>
																<table
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	role="presentation"
																	style="border-collapse: separate; line-height: 100%"
																>
																	<tr>
																		<td
																			align="center"
																			bgcolor="#006699"
																			role="presentation"
																			style="
																				border: none;
																				border-radius: 0;
																				cursor: auto;
																				padding: 10px 25px;
																				background: #006699;
																			"
																			valign="middle"
																		>
																			<a
																				href="https://docs.google.com/spreadsheets/d/1AzHzDEg3HngOZL16SXsnnUQyDe8C_4f06pROr-XezUE/edit#gid=551215692"
																				style="
																					background: #006699;
																					color: white;
																					font-family: Arial, sans-serif;
																					font-size: 13px;
																					font-weight: bold;
																					line-height: 120%;
																					margin: 0;
																					text-decoration: none;
																					text-transform: uppercase;
																				"
																				target="_blank"
																				>See in Google Sheet</a
																			>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--[if mso | IE]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!--[if mso | IE]></td></tr></table><![endif]-->
		</div>
	</body>
</html>

    `;
}
