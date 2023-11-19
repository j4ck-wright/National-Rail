import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { sendDarwinRequest } from './';

describe('darwinResponse test suite', () => {
	it('Returns 200 OK correctly', async () => {
		const spy = vi
			.spyOn(axios, 'post')
			.mockResolvedValue({ data: 'XML Test', status: 200, statusText: 'OK' });

		const response = await sendDarwinRequest('Test suite example');

		expect(spy).toHaveBeenCalledOnce();
		expect(response.status).toEqual(200);
		expect(response.statusMsg).toEqual('OK');
		expect(response.data).toBe('XML Test');
	});
});