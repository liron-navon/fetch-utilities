(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fetch-utilities"] = factory();
	else
		root["fetch-utilities"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mocker_1 = __webpack_require__(/*! ./modules/Mocker */ "./src/modules/Mocker.ts");
var Fetcher_1 = __webpack_require__(/*! ./modules/Fetcher */ "./src/modules/Fetcher.ts");
exports.Mocker = Mocker_1.Mocker;
exports.Fetcher = Fetcher_1.Fetcher;


/***/ }),

/***/ "./src/modules/Fetcher.ts":
/*!********************************!*\
  !*** ./src/modules/Fetcher.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var Fetcher = /** @class */ (function () {
    function Fetcher(fetchInstance, options) {
        if (options === void 0) { options = {}; }
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
    Fetcher.prototype.beforeInterceptor = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return params;
    };
    // a function to run after any request
    Fetcher.prototype.afterInterceptor = function (response) {
        return response;
    };
    // a function to run on errors
    Fetcher.prototype.errorInterceptor = function (error) {
        return error;
    };
    /**
     * a fetch compatible function
     * @param info
     * @param init
     */
    Fetcher.prototype.fetch = function (info, init) {
        return __awaiter(this, void 0, void 0, function () {
            var _init, _info, augmentedParams;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _init = init;
                        _info = info;
                        // handling default init
                        if (this.defaultInit) {
                            if (!_init) {
                                _init = this.defaultInit;
                            }
                            else {
                                _init = lodash_1.merge({}, this.defaultInit, init);
                            }
                        }
                        // handling default info
                        if (this.defaultInfo && typeof info === 'object') {
                            _info = lodash_1.merge({}, this.defaultInfo, info);
                        }
                        // handling base url
                        if (this.baseURL) {
                            if (typeof _info === 'string') {
                                if (!_info.startsWith('http')) {
                                    _info = this.baseURL + _info;
                                }
                            }
                            else {
                                if (_info.url && !_info.url.startsWith('http')) {
                                    _info = __assign({}, _info, { url: this.baseURL + _info.url });
                                }
                            }
                        }
                        augmentedParams = this.beforeInterceptor(_info, _init);
                        if (!!Array.isArray(augmentedParams)) return [3 /*break*/, 2];
                        return [4 /*yield*/, augmentedParams];
                    case 1:
                        augmentedParams = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.fetchInstance.apply(this, augmentedParams).then(function (response) { return _this.afterInterceptor(response); })
                            .catch(function (error) {
                            var newError = _this.errorInterceptor(error);
                            if (newError) {
                                throw newError;
                            }
                        })];
                }
            });
        });
    };
    return Fetcher;
}());
exports.Fetcher = Fetcher;


/***/ }),

/***/ "./src/modules/Mocker.ts":
/*!*******************************!*\
  !*** ./src/modules/Mocker.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// turns the route into a string to later search
var hashRoute = function (method, url) { return method.toLowerCase() + ":" + url; };
var fakeResponse = function (body) {
    return {
        json: function () { return Promise.resolve(JSON.parse(body)); },
        text: function () { return Promise.resolve(JSON.stringify(body)); }
    };
};
// a simple class to create mocks for the fetch api
var Mocker = /** @class */ (function () {
    function Mocker(fetchInstance, options) {
        if (options === void 0) { options = {}; }
        this.routes = {};
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
    Mocker.prototype.addRoute = function (method, url, payload) {
        this.routes[hashRoute(method, url)] = JSON.stringify(payload);
    };
    /**
     * add a route to mock with the GET method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    Mocker.prototype.get = function (url, payload) {
        this.addRoute('get', url, payload);
    };
    /**
     * add a route to mock with the POST method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    Mocker.prototype.post = function (url, payload) {
        this.addRoute('post', url, payload);
    };
    /**
     * add a route to mock with the DELETE method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    Mocker.prototype.delete = function (url, payload) {
        this.addRoute('delete', url, payload);
    };
    /**
     * add a route to mock with the PUT method
     * @param url - a url for the request
     * @param payload - the date the mock should return
     */
    Mocker.prototype.put = function (url, payload) {
        this.addRoute('put', url, payload);
    };
    /**
     * call fetch
     * @param info
     * @param init
     */
    Mocker.prototype.fetch = function (info, init) {
        var _this = this;
        var isSimple = typeof info === 'string';
        var method = init ? init.method : isSimple ? 'get' : info.method;
        var url = isSimple ? info : info.url;
        var hash = hashRoute(method || 'get', url);
        var payload = this.routes[hash];
        if (payload) {
            // fake some latency
            return new Promise(function (resolve) {
                var _a = _this, maxMockLatency = _a.maxMockLatency, minMockLatency = _a.minMockLatency;
                var timeout = 0;
                if (maxMockLatency < 0 || minMockLatency < 0) {
                    timeout = Math.round(Math.random() * (maxMockLatency - minMockLatency)) + minMockLatency;
                }
                var response = fakeResponse(payload);
                setTimeout(function () { return resolve(response); }, timeout);
            });
        }
        // fallback to using fetch
        if (this.defaultToRealFetch) {
            return this.fetchInstance(info, init);
        }
    };
    Mocker.prototype.bindToWindow = function () {
        window.fetch = this.fetch;
    };
    return Mocker;
}());
exports.Mocker = Mocker;


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });
});
//# sourceMappingURL=fetch-utilities.js.map