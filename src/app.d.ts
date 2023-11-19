declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Darwin {
		interface IServiceBoard {
			numRows?: string | number;
			crs: string;
			filterCrs?: string;
			filterType?: 'to' | 'from';
			timeOffset?: number;
			timeWindow?: number;
		}

		interface IServiceDetails {
			serviceID: string;
		}
	}
}

export {};
