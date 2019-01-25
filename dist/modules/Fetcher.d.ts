declare type FetchParamsAsArray = [RequestInfo, RequestInit?];
interface FetcherOptions {
    defaultInfo: RequestInfo;
    defaultInit: RequestInit;
    baseURL: string;
}
export declare class Fetcher {
    private fetchInstance;
    defaultInfo?: RequestInfo;
    defaultInit?: RequestInit;
    baseURL?: string;
    constructor(fetchInstance: typeof fetch, options?: Partial<FetcherOptions>);
    beforeInterceptor(...params: FetchParamsAsArray): FetchParamsAsArray | Promise<FetchParamsAsArray>;
    afterInterceptor(response: Response): Promise<any> | Response;
    errorInterceptor(error: Error): Error;
    /**
     * a fetch compatible function
     * @param info
     * @param init
     */
    fetch<ResponseData = Response | any>(info: RequestInfo, init?: RequestInit): Promise<ResponseData>;
}
export {};
