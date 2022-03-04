export declare class CLogger {
    _debug: boolean;
    _infoLog: import("simple-node-logger").Logger;
    _errorLog: import("simple-node-logger").Logger;
    constructor(debug?: boolean);
    debugLine(message: string): void;
    errorLine(message: string): void;
    warningLine(message: string): void;
}
