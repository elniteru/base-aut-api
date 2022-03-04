import { Reporter } from "jest-allure/dist/Reporter";
import { AxiosResponse } from "axios";
import { IRequestLogPayload } from "./interface/IRequestLogPayload";
export declare class CReporter {
    _debug: boolean;
    _reporter: Reporter;
    constructor(debug: boolean, reporter: Reporter);
    recordStep(step: string): void;
    httpCall(step: string, request: IRequestLogPayload, response: AxiosResponse): void;
}
