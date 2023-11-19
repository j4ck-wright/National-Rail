import { buildXMLString } from './';
import { departuresTemplate, serviceDetailsTemplate } from '$lib/server/templates';

import { describe, it, expect } from 'vitest';

describe('requestBuilder.ts test suite', () => {
	it('returns correct xml string departure board with mandatory fields', () => {
		const departureOptions: Darwin.IServiceBoard = {
			crs: 'XXX'
		};

		const xmlString = buildXMLString(departuresTemplate, 'token', departureOptions);

		expect(xmlString).toEqual(
			`<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2017-10-01/ldb/"><soap:Header><typ:AccessToken><typ:TokenValue>token</typ:TokenValue></typ:AccessToken></soap:Header><soap:Body><ldb:GetDepartureBoardRequest><ldb:crs>XXX</ldb:crs></ldb:GetDepartureBoardRequest></soap:Body></soap:Envelope>`
		);
	});

	it('returns correct xml string for departure board with all values added', () => {
		const departureOptions: Darwin.IServiceBoard = {
			crs: 'XXX',
			numRows: 0,
			filterCrs: 'YYY',
			filterType: 'from',
			timeOffset: 5,
			timeWindow: 10
		};

		const xmlString = buildXMLString(departuresTemplate, 'token', departureOptions);

		expect(xmlString).toEqual(
			`<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2017-10-01/ldb/"><soap:Header><typ:AccessToken><typ:TokenValue>token</typ:TokenValue></typ:AccessToken></soap:Header><soap:Body><ldb:GetDepartureBoardRequest><ldb:numRows>0</ldb:numRows><ldb:crs>XXX</ldb:crs><ldb:filterCrs>YYY</ldb:filterCrs><ldb:filterType>from</ldb:filterType><ldb:timeOffset>5</ldb:timeOffset><ldb:timeWindow>10</ldb:timeWindow></ldb:GetDepartureBoardRequest></soap:Body></soap:Envelope>`
		);
	});

	it('should return correct xml string for service details', () => {
		const serviceOptions: Darwin.IServiceDetails = {
			serviceID: 'XXX'
		};

		const xmlString = buildXMLString(serviceDetailsTemplate, 'token', serviceOptions);

		expect(xmlString).toEqual(
			`<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2017-10-01/ldb/"><soap:Header><typ:AccessToken><typ:TokenValue>token</typ:TokenValue></typ:AccessToken></soap:Header><soap:Body><ldb:GetServiceDetailsRequest><ldb:serviceID>XXX</ldb:serviceID></ldb:GetServiceDetailsRequest></soap:Body></soap:Envelope>`
		);
	});
});
