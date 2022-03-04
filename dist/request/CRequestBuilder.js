"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRequestBuilder = void 0;
const axios_1 = __importDefault(require("axios"));
const CReporter_1 = require("../utils/CReporter");
class CRequestBuilder {
    constructor(reporter, debug = false) {
        this._debug = false;
        this._baseUrl = '';
        this._path = '';
        this._queryParams = [];
        this._header = [];
        this.httpClient = (host) => axios_1.default.create({ baseURL: host, timeout: 10000 });
        this._debug = debug;
        this._reporter = new CReporter_1.CReporter(this._debug, reporter);
    }
    _getHeader() {
        return {
            header: this._header,
            validateStatus: (status) => {
                return status >= 200 && status <= 550;
            }
        };
    }
    _setUpPayload(payload) {
        this._baseUrl = payload.baseUrl;
        this._path = payload.path;
        this._header = typeof payload.options != 'undefined' && typeof payload.options.header != 'undefined' ? payload.options.header : [];
        this._queryParams = typeof payload.options != 'undefined' && typeof payload.options.queryParams != 'undefined' ? payload.options.queryParams : [];
        this._body = typeof payload.options != 'undefined' ? payload.options.body : {};
    }
    _createRequestPayload(method) {
        return {
            url: this._baseUrl + this._path,
            method: method,
            headers: this._header,
            body: this._body
        };
    }
    async sendGet(payload, step = "GET Request") {
        this._setUpPayload(payload);
        const response = await this.httpClient(this._baseUrl).get(this._path, this._getHeader());
        this._reporter.httpCall(step, this._createRequestPayload("GET"), response);
        return response;
    }
    async sendPut(payload, step = "PUT Request") {
        this._setUpPayload(payload);
        const response = await this.httpClient(this._baseUrl).put(this._path, JSON.stringify(this._body), this._getHeader());
        this._reporter.httpCall(step, this._createRequestPayload("PUT"), response);
        return response;
    }
    async sendPost(payload, step = "POST Request") {
        this._setUpPayload(payload);
        const response = await this.httpClient(this._baseUrl).post(this._path, JSON.stringify(this._body), this._getHeader());
        this._reporter.httpCall(step, this._createRequestPayload("POST"), response);
        return response;
    }
    async sendPatch(payload, step = "PATCH Request") {
        this._setUpPayload(payload);
        const response = await this.httpClient(this._baseUrl).patch(this._path, JSON.stringify(this._body), this._getHeader());
        this._reporter.httpCall(step, this._createRequestPayload("PATCH"), response);
        return response;
    }
    async sendDelete(payload, step = "DELETE Request") {
        this._setUpPayload(payload);
        const response = await this.httpClient(this._baseUrl).delete(this._path, this._getHeader());
        this._reporter.httpCall(step, this._createRequestPayload("DELETE"), response);
        return response;
    }
}
exports.CRequestBuilder = CRequestBuilder;
