import { soapHeader } from './header';
import { serviceBoardParams } from './params';

export const arrivalsTemplate =
	soapHeader +
	`<soap:Body>` +
	`<ldb:GetArrivalDepartureBoardRequest>` +
	serviceBoardParams +
	`</ldb:GetArrivalDepartureBoardRequest>` +
	`</soap:Body>` +
	`</soap:Envelope>`;
