// turns the route into a string to later search
const hashRoute = (method: string, url: string) => `${method.toLowerCase()}:${url}`;

const fakeResponse = (body: any) => {
    return {
        json: () => Promise.resolve(JSON.parse(body)),
        text: () => Promise.resolve(JSON.stringify(body))
    };
};

interface MockerOptions {
    defaultToRealFetch: boolean;
    maxMockLatency: number;
    minMockLatency: number;
}
// a simple class to create mocks for the fetch api
export class Mocker {
    private routes: any = {};
    private readonly fetchInstance: typeof fetch;

    private readonly defaultToRealFetch: boolean;
    private readonly maxMockLatency: number;
    private readonly minMockLatency: number;

    constructor(
        fetchInstance: typeof fetch,
        options: Partial<MockerOptions> = {},
    ) {
        this.defaultToRealFetch = options.defaultToRealFetch || false;
        this.maxMockLatency = options.maxMockLatency || -1;
        this.minMockLatency = options.minMockLatency || 0;

        // if the instance is not bounded, bind it to the window
        if (!fetchInstance.hasOwnProperty('prototype')) {
            this.fetchInstance = fetchInstance.bind(window);
        }
        this.fetch = this.fetch.bind(this);
    }

    /**
     * add a route to mock
     * @param method - a method to mock
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    public addRoute(method: string, url: string, payload: any) {
        this.routes[hashRoute(method, url)] = JSON.stringify(payload);
    }

    /**
     * add a route to mock with the GET method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    public get(url: string, payload: any) {
        this.addRoute('get', url, payload);
    }

    /**
     * add a route to mock with the POST method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    public post(url: string, payload: any) {
        this.addRoute('post', url, payload);
    }

    /**
     * add a route to mock with the DELETE method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    public delete(url: string, payload: any) {
        this.addRoute('delete', url, payload);
    }

    /**
     * add a route to mock with the PUT method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    public put(url: string, payload: any) {
        this.addRoute('put', url, payload);
    }

    /**
     * call fetch
     * @param info
     * @param init
     */
    public fetch(info: RequestInfo, init?: RequestInit): Promise<Response> {
        const isSimple = typeof info === 'string';
        const method = init ? init.method : isSimple ? 'get' : (info as Request).method;
        const url = isSimple ? info : (info as Request).url;
        const hash = hashRoute(method || 'get', url as string);
        const payload = this.routes[hash];
        if (payload) {
            // fake some latency
            return new Promise((resolve) => {
                const {maxMockLatency, minMockLatency} = this;
                let timeout = 0;
                if (maxMockLatency < 0 || minMockLatency < 0) {
                    timeout = Math.round(Math.random() * (maxMockLatency - minMockLatency)) + minMockLatency;
                }
                const response = fakeResponse(payload) as Response;
                setTimeout(() => resolve(response), timeout);
            });
        }
        // fallback to using fetch
        if (this.defaultToRealFetch) {
            return this.fetchInstance(info, init);
        }
    }

    public bindToWindow() {
        (window as any).fetch = this.fetch;
    }
}
