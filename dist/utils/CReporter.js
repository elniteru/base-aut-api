"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CReporter = void 0;
const curl_generator_1 = require("curl-generator");
class CReporter {
    constructor(debug = false, reporter) {
        this._debug = false;
        this._debug = debug;
        this._reporter = reporter;
    }
    recordStep(step) {
        this._reporter.startStep(step);
        this._reporter.endStep();
    }
    httpCall(step = "Http Call", request, response) {
        this._reporter.startStep(step);
        this._reporter.addAttachment('Request', JSON.stringify(request), "text");
        this._reporter.addAttachment('Response', JSON.stringify(response), "text");
        this._reporter.addAttachment('Curl', (0, curl_generator_1.CurlGenerator)(request), "text");
        this._reporter.endStep();
    }
}
exports.CReporter = CReporter;
