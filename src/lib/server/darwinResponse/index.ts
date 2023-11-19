import axios, { type AxiosResponse, AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function sendDarwinRequest(body: string) {
	const DARWIN_ENDPOINT = process.env.DARWIN_ENDPOINT;
	if (!DARWIN_ENDPOINT) throw Error('You do not have DARWIN_ENDPOINT as an environment variable');

	try {
		const request: AxiosResponse = await axios.post(DARWIN_ENDPOINT, body, {
			headers: { 'Content-Type': 'text/xml' }
		});
		return {
			status: request.status,
			statusMsg: request.statusText,
			data: (await request.data) as XMLHttpRequestBodyInit
		};
	} catch (error: unknown | AxiosError) {
		if (axios.isAxiosError(error)) {
			if (error.response) {
				return {
					status: error.response.status,
					statusMsg: error.response.statusText,
					data: undefined
				};
			}
		}
	}
	return { status: 500, statusMsg: 'Something went wrong', data: undefined };
}
