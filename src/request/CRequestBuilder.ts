import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IKeyAndValue} from "./interface/IKeyAndValue";
import {Reporter} from "jest-allure/dist/Reporter";
import {IRequestPayload} from "./interface/IRequestPayload";
import {IRequestLogPayload} from "../utils/interface/IRequestLogPayload";
import {CReporter} from "../utils/CReporter";

export class CRequestBuilder {
  _debug: boolean = false;
  _reporter: CReporter;
  _baseUrl: string = '';
  _path: string = '';
  _queryParams: IKeyAndValue[] = [];
  _header: IKeyAndValue[] = [];
  _body: any;
  
  httpClient = (host: string): AxiosInstance =>
    axios.create({ baseURL: host, timeout: 10000 });

  constructor(reporter: Reporter, debug: boolean = false) {
    this._debug = debug;
    this._reporter = new CReporter(this._debug, reporter);
  }

  _getHeader(): { validateStatus: (status: number) => boolean; header: any } {
    return {
      header: this._header,
      validateStatus: (status: number) => {
        return status >= 200 && status <= 550;
      }
    }
  }

  _setUpPayload(payload: IRequestPayload){
    this._baseUrl = payload.baseUrl;
    this._path = payload.path;
    this._header = typeof payload.options != 'undefined' && typeof payload.options.header != 'undefined' ? payload.options.header : [];
    this._queryParams = typeof payload.options != 'undefined' && typeof payload.options.queryParams != 'undefined' ? payload.options.queryParams : [];
    this._body = typeof payload.options != 'undefined' ? payload.options.body : {};
  }

  _createRequestPayload(method: "GET" | "PUT" | "POST" | "PATCH" | "DELETE"): IRequestLogPayload{
    return {
      url: this._baseUrl + this._path,
      method: method,
      headers: this._header,
      body: this._body
    }
  }

  async sendGet(payload: IRequestPayload, step: string = "GET Request"): Promise<AxiosResponse> {
    this._setUpPayload(payload);
    const response = <AxiosResponse> await this.httpClient(this._baseUrl).get(
      this._path,
      this._getHeader()
    );
    this._reporter.httpCall(step, this._createRequestPayload("GET"), response);
    return response;
  }

  async sendPut(payload: IRequestPayload, step: string = "PUT Request"): Promise<AxiosResponse> {
    this._setUpPayload(payload);
    const response = <AxiosResponse> await this.httpClient(this._baseUrl).put(
      this._path,
      JSON.stringify(this._body),
      this._getHeader()
    );
    this._reporter.httpCall(step, this._createRequestPayload("PUT"), response);
    return response;
  }

  async sendPost(payload: IRequestPayload, step: string = "POST Request"): Promise<AxiosResponse> {
    this._setUpPayload(payload);
    const response = <AxiosResponse> await this.httpClient(this._baseUrl).post(
      this._path,
      JSON.stringify(this._body),
      this._getHeader()
    );
    this._reporter.httpCall(step, this._createRequestPayload("POST"), response);
    return response;
  }

  async sendPatch(payload: IRequestPayload, step: string = "PATCH Request"): Promise<AxiosResponse> {
    this._setUpPayload(payload);
    const response = <AxiosResponse> await this.httpClient(this._baseUrl).patch(
      this._path,
      JSON.stringify(this._body),
      this._getHeader()
    );
    this._reporter.httpCall(step, this._createRequestPayload("PATCH"), response);
    return response;
  }

  async sendDelete(payload: IRequestPayload, step: string = "DELETE Request"): Promise<AxiosResponse> {
    this._setUpPayload(payload);
    const response = <AxiosResponse> await this.httpClient(this._baseUrl).delete(
      this._path,
      this._getHeader()
    );
    this._reporter.httpCall(step, this._createRequestPayload("DELETE"), response);
    return response;
  }
}