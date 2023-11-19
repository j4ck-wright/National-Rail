export function buildXMLString(
	template: string,
	token: string,
	options: Darwin.IServiceDetails | Darwin.IServiceBoard
) {
	let output = template.replace('!!TokenValue!!', token);

	for (const [key, value] of Object.entries(options)) {
		output = output.replace('!!' + `${key}` + '!!', `${value}`);
	}

	const removeEmptyValues = new RegExp('(<.*?!!.*?!!.*?>)', 'g');

	output = output.replaceAll(removeEmptyValues, '');
	output = output.replaceAll('\n', '');

	return output;
}
