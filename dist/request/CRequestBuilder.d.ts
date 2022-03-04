import { AxiosInstance, AxiosResponse } from "axios";
import { IKeyAndValue } from "./interface/IKeyAndValue";
import { Reporter } from "jest-allure/dist/Reporter";
import { IRequestPayload } from "./interface/IRequestPayload";
import { IRequestLogPayload } from "../utils/interface/IRequestLogPayload";
import { CReporter } from "../utils/CReporter";
export declare class CRequestBuilder {
    _debug: boolean;
    _reporter: CReporter;
    _baseUrl: string;
    _path: string;
    _queryParams: IKeyAndValue[];
    _header: IKeyAndValue[];
    _body: any;
    httpClient: (host: string) => AxiosInstance;
    constructor(reporter: Reporter, debug?: boolean);
    _getHeader(): {
        validateStatus: (status: number) => boolean;
        header: any;
    };
    _setUpPayload(payload: IRequestPayload): void;
    _createRequestPayload(method: "GET" | "PUT" | "POST" | "PATCH" | "DELETE"): IRequestLogPayload;
    sendGet(payload: IRequestPayload, step?: string): Promise<AxiosResponse>;
    sendPut(payload: IRequestPayload, step?: string): Promise<AxiosResponse>;
    sendPost(payload: IRequestPayload, step?: string): Promise<AxiosResponse>;
    sendPatch(payload: IRequestPayload, step?: string): Promise<AxiosResponse>;
    sendDelete(payload: IRequestPayload, step?: string): Promise<AxiosResponse>;
}
