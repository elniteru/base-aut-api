import {createRollingFileLogger} from "simple-node-logger";
import * as chalk from "chalk";

export class CLogger {
  _debug: boolean = false;
  _infoLog = createRollingFileLogger({
    logDirectory:'log',
    fileNamePattern:'info.<DATE>.log',
    dateFormat:'YYYY.MM.DD',
    timestampFormat:'HH:mm:ss.SSS'
  });
  _errorLog = createRollingFileLogger({
    logDirectory:'log',
    fileNamePattern:'error.<DATE>.log',
    dateFormat:'YYYY.MM.DD',
    timestampFormat:'HH:mm:ss.SSS'
  });

  constructor(debug: boolean = false) {
    this._debug = debug;
  }

  debugLine(message: string):void {
    const tag = '[DEBUG] ';
    if(this._debug){
      process.stdout.write(chalk.gray(tag) + message + '\n');
    }
    this._infoLog.setLevel('trace');
    this._infoLog.trace(message);
  }

  errorLine(message: string):void {
    const tag = '[ERROR] ';
    if(this._debug){
      process.stdout.write(chalk.red(tag) + message + '\n');
    }
    this._errorLog.setLevel('error');
    this._errorLog.error(message);
  }

  warningLine(message: string):void {
    const tag = '[WARNING] ';
    if(this._debug){
      process.stdout.write(chalk.yellow(tag) + message + '\n');
    }
    this._infoLog.setLevel('warn');
    this._infoLog.warn(message);
  }
}