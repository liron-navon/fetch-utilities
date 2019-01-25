import {fetch} from 'whatwg-fetch'; // fetch polyfill, for testing
import {Fetcher, Mocker} from './index';

test('Mocker: get', async () => {
    const payload = { hello : 'world'};
    // set up the mocker
    const mocker = new Mocker(fetch);
    // setup route to mock
    mocker.get('/test-route', payload);

    const response = await mocker.fetch('/test-route');
    const json = await response.json();

    expect(json.hello).toEqual(payload.hello);
});

test('Mocker: post', async () => {
    const payload = { hello : 'world'};
    // set up the mocker
    const mocker = new Mocker(fetch);
    // setup route to mock
    mocker.post('/test-route', payload);

    const response = await mocker.fetch('/test-route', {
        method: 'post'
    });
    const json = await response.json();
    expect(json.hello).toEqual(payload.hello);
});

function createMockedFetch(url = '/test-route') {
    const payload = { hello : 'world'};
    const mocker = new Mocker(fetch);
    mocker.post(url, payload);
    return mocker.fetch;
}

test('Fetcher simple', async () => {
    const fetcher = new Fetcher(createMockedFetch(), {
        defaultInit: { method: 'post' }
    });
    const response = await fetcher.fetch('/test-route', {
        method: 'post'
    });
    const json = await response.json();
    expect(json.hello).toEqual('world');
});

test('Fetcher interceptors', async () => {
    // expect.assertions(3); // we expect 3 assertions
    const mockedFetch = createMockedFetch('/hello/world');
    const fetcher = new Fetcher(mockedFetch, {
        defaultInit: { method: 'post' },
        baseURL: '/hello'
    });

    // interceptors for all options
    fetcher.errorInterceptor = e => e;
    fetcher.beforeInterceptor = (...params) => {
        expect(params[0]).toEqual('/hello/world');
        return params;
    };
    fetcher.afterInterceptor = response => {
        expect(typeof response.json).toEqual('function');
        return response.json();
    };

    // with base url of /hello, we should get /hello/world
    const json = await fetcher.fetch<{ hello: string }>('/world', {
        method: 'post'
    });
    expect(json.hello).toEqual('world');
});
