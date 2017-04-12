import { request, jsonp } from ".";

declare namespace RequestService {
	export interface Static {
		request: typeof request;
		jsonp: typeof jsonp;
	}
}

declare const RequestService: RequestService.Static;
export = RequestService;
