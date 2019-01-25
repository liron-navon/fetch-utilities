interface MockerOptions {
    defaultToRealFetch: boolean;
    maxMockLatency: number;
    minMockLatency: number;
}
export declare class Mocker {
    private routes;
    private readonly fetchInstance;
    private readonly defaultToRealFetch;
    private readonly maxMockLatency;
    private readonly minMockLatency;
    constructor(fetchInstance: typeof fetch, options?: Partial<MockerOptions>);
    /**
     * add a route to mock
     * @param method - a method to mock
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    addRoute(method: string, url: string, payload: any): void;
    /**
     * add a route to mock with the GET method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    get(url: string, payload: any): void;
    /**
     * add a route to mock with the POST method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    post(url: string, payload: any): void;
    /**
     * add a route to mock with the DELETE method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    delete(url: string, payload: any): void;
    /**
     * add a route to mock with the PUT method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    put(url: string, payload: any): void;
    /**
     * call fetch
     * @param info
     * @param init
     */
    fetch(info: RequestInfo, init?: RequestInit): Promise<Response>;
    bindToWindow(): void;
}
export {};
