export interface ILogger {
    
    info(msg: any):any;

    warn(msg: any):any;

    error(msg: any):any;
    
 }
  
export class Logger implements ILogger {

    public info(msg: any) {
        console.info(msg);
    }

    public warn(msg: any) {
        console.warn(msg);
    }

    public error(msg: any) {
        console.error(msg);
    }
}
