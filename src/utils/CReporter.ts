import {Reporter} from "jest-allure/dist/Reporter";
import {CurlGenerator} from "curl-generator";
import {AxiosResponse} from "axios";
import {IRequestLogPayload} from "./interface/IRequestLogPayload";

export class CReporter {
  _debug: boolean = false;
  _reporter: Reporter;

  constructor(debug: boolean = false, reporter: Reporter) {
    this._debug = debug;
    this._reporter = reporter;
  }

  recordStep(step: string): void {
    this._reporter.startStep(step);
    this._reporter.endStep();
  }

  httpCall(step: string = "Http Call", request: IRequestLogPayload, response: AxiosResponse): void {
    this._reporter.startStep(step);
    this._reporter.addAttachment('Request', JSON.stringify(request), "text");
    this._reporter.addAttachment('Response', JSON.stringify(response), "text");
    this._reporter.addAttachment('Curl', CurlGenerator(request), "text");
    this._reporter.endStep();
  }
}