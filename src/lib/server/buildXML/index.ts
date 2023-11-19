import dotenv from 'dotenv';
dotenv.config();

export function buildXMLString(
	template: string,
	options: Darwin.IServiceDetails | Darwin.IServiceBoard
) {
	const token = process.env.DARWIN_TOKEN;
	if (!token) throw Error('You do not have DARWIN_TOKEN as an environment variable');
	let output = template.replace('!!TokenValue!!', token);

	for (const [key, value] of Object.entries(options)) {
		output = output.replace('!!' + `${key}` + '!!', `${value}`);
	}

	const removeEmptyValues = new RegExp('(<.*?!!.*?!!.*?>)', 'g');

	output = output.replaceAll(removeEmptyValues, '');
	output = output.replaceAll('\n', '');

	return output;
}
