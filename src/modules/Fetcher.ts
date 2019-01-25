import { merge } from 'lodash';

// a utility type for convenient conversion of the params to an array
type FetchParamsAsArray = [RequestInfo, RequestInit?];

interface FetcherOptions {
    defaultInfo: RequestInfo;
    defaultInit: RequestInit;
    baseURL: string;
}
export class Fetcher {
    private fetchInstance: typeof fetch;
    public defaultInfo?: RequestInfo;
    public defaultInit?: RequestInit;
    public baseURL?: string;

    constructor(
        fetchInstance: typeof fetch,
        options: Partial<FetcherOptions> = {},
    ) {
        this.defaultInfo = options.defaultInfo || undefined;
        this.defaultInit = options.defaultInit || undefined;
        this.baseURL = options.baseURL || undefined;
        // if the instance is not bounded, bind it to the window
        if (!fetchInstance.hasOwnProperty('prototype')) {
            this.fetchInstance = fetchInstance.bind(window);
        }
        this.fetch = this.fetch.bind(this);
    }

    // a function to run before any request
    public beforeInterceptor(...params: FetchParamsAsArray): FetchParamsAsArray | Promise<FetchParamsAsArray> {
        return params;
    }

    // a function to run after any request
    public afterInterceptor (response: Response): Promise<any>|Response {
        return response;
    }

    // a function to run on errors
    public errorInterceptor (error: Error): Error {
        return error;
    }

    /**
     * a fetch compatible function
     * @param info
     * @param init
     */
    public async fetch<ResponseData = Response|any>(info: RequestInfo, init?: RequestInit): Promise<ResponseData> {
        let _init = init;
        let _info = info;

        // handling default init
        if (this.defaultInit) {
            if (!_init) {
                _init = this.defaultInit;
            } else {
                _init = merge({}, this.defaultInit, init);
            }
        }

        // handling default info
        if (this.defaultInfo && typeof info === 'object') {
            _info = merge({}, this.defaultInfo, info);
        }

        // handling base url
        if (this.baseURL) {
            if (typeof _info === 'string') {
                if (!(_info as String).startsWith('http')) {
                    _info = this.baseURL + _info;
                }
            } else {
                if (_info.url && !_info.url.startsWith('http')) {
                    _info = {..._info, url: this.baseURL + _info.url};
                }
            }
        }

        // the before hook can return a promise or an array
        let augmentedParams = this.beforeInterceptor(_info, _init);
        if (!Array.isArray(augmentedParams)) {
            augmentedParams = await augmentedParams;
        }

        return this.fetchInstance(...augmentedParams)
            .then((response) => this.afterInterceptor(response))
            .catch((error) => {
                const newError = this.errorInterceptor(error);
                if (newError) {
                    throw newError;
                }
            });
    }
}
