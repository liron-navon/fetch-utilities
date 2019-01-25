### fetch-utilities

A library for adding functionality to fetch, and for mocking.

### Usage for Fetcher

Creates wrapper that adds interceptors and default values.

```js
import { Fetcher } from 'fetch-utilities';

const options = {
  defaultInit: {
      headers: {
            'Content-Type': 'application/javascript'
        }  
  },
  baseURL: 'https://jsonplaceholder.typicode.com'
};

const fetcher = new Fetcher(window.fetch, options);

fetcher.afterInterceptor = (response) => response.json();
fetcher.errorInterceptor = err => {
    console.error(err);
    // you can return null to not have to add a catch clause, 
    // or return an error to continue to the catch
    return err; 
}

fetcher
    .fetch('/todos/1')
    .then((json) => {
        console.log(json);
    })
```

### Usage for Mocker

Creates a wrapper that mocks routes.

```js
import { Mocker } from 'fetch-utilities';

// you can also import a polyfill for tests: import {fetch} from 'whatwg-fetch';
// you can also use fetcher.fetch instead of window.fetch
const mocker = new Mocker(window.fetch);

// binds mocker.fetch to the window object
mocker.bindToWindow();

const fakeResponse = {
    text: 'my fake response'
}

mocker.get('/my-fake-url', fakeResponse)
mocker.post('/my-fake-url', fakeResponse)
mocker.delete('/my-fake-url', fakeResponse)
mocker.put('/my-fake-url', fakeResponse)
mocker.addRoute('get', '/my-other-fake-url', { text: 'my other fake response' })

window.fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((json) => console.log(json))
```
