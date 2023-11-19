export function buildXMLString(
	template: string,
	token: string,
	options: Darwin.IServiceDetails | Darwin.IServiceBoard
) {
	let output = template.replace('!!TokenValue!!', token);

	for (const [key, value] of Object.entries(options)) {
		output = output.replace('!!' + `${key}` + '!!', `${value}`);
	}

	const regex = new RegExp('(<.*?!!.*?!!.*?>)', 'g'); // Removing empty values e.g. <ldb:filterType>!!FILTERTYPE!!</ldb:filterType> would be removed
	const removeNewlineRegex = new RegExp('\r?\n|\r', 'g');

	output = output.replaceAll(regex, '');
	output = output.replaceAll(removeNewlineRegex, '');

	return output;
}
