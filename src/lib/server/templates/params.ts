export interface IServiceBoard {
	numRows?: string | number;
	crs: string;
	filterCrs?: string;
	filterType: 'to' | 'from';
	timeOffset?: number;
	timeWindow?: number;
}

export const serviceBoardParams =
	'\n' +
	`<ldb:numRows>!!numRows!!</ldb:numRows>` +
	'\n' +
	`<ldb:crs>!!crs!!</ldb:crs>` +
	'\n' +
	`<ldb:filterCrs>!!filterCrs!!</ldb:filterCrs>` +
	'\n' +
	`<ldb:filterType>!!filterType!!</ldb:filterType>` +
	'\n' +
	`<ldb:timeOffset>!!timeOffset!!</ldb:timeOffset>` +
	'\n' +
	`<ldb:timeWindow>!!timeWindow!!</ldb:timeWindow>`;
