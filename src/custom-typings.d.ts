

declare module 'miter' {
    declare function Service(): (service: any) => void;
    
    declare class Logger {
        constructor(core: any, subsystem: string);
        
        static fromSubsystem(core: LoggerCore, subsystem: string): any;
        
        log(message?: any, ...optionalParams: any[]): void;
        trace(message?: any, ...optionalParams: any[]): void;
        
        error(message?: any, ...optionalParams: any[]): void;
        info(message?: any, ...optionalParams: any[]): void;
        warn(message?: any, ...optionalParams: any[]): void;
        verbose(message?: any, ...optionalParams: any[]): void;
    }
    
    declare function Name(name: string): (injectable: any) => void;
    
    declare class TemplateService {
        constructor();
        public renderRaw(body: string, locals?: Locals): Promise<string>;
        public render(path: string, locals?: Locals): Promise<string>;
    }
}
