import { Service, Logger, Name, TemplateService } from 'miter';
import { PugTemplate } from '../util/pug';
import * as pugRaw from 'pug';
import path = require('path');
let pathJoin = path.join.bind(path);

@Service()
@Name('pug')
export class PugService extends TemplateService {
    constructor(
        private logger: Logger
    ) {
        super();
    }
    
    async start() {
        //TODO: provide a way to change these values
        this._defaultPugOptions = {};
        this._defaultPugLocals = {};
        this._baseDir = '';
    }
    
    private _defaultPugLocals: pugRaw.LocalsObject;
    private getDefaultLocals(): pugRaw.LocalsObject {
        return this._defaultPugLocals;
    }
    
    private _defaultPugOptions: pugRaw.Options;
    private getCompileOptions(): pugRaw.Options {
        return this._defaultPugOptions;
    }
    
    private _baseDir: string;
    private getBaseDir(): string {
        return this._baseDir;
    }
    
    private tplCacheBody = new Map<string, PugTemplate>();
    private tplCache = new Map<string, PugTemplate>();
    public async compile(body: string): Promise<PugTemplate> {
        let cached = this.tplCacheBody.get(body);
        if (cached) return cached;
        
        let tpl = new PugTemplate(pugRaw.compile(body, this.getCompileOptions()), this.getDefaultLocals());
        this.tplCacheBody.set(body, tpl);
        return tpl;
    }
    public async compileFile(path: string): Promise<PugTemplate> {
        if (!path.startsWith('/')) path = pathJoin(this.getBaseDir(), path);
        let cached = this.tplCache.get(path);
        if (cached) return cached;
        
        let tpl = new PugTemplate(pugRaw.compileFile(path, this.getCompileOptions()), this.getDefaultLocals());
        this.tplCache.set(path, tpl);
        return tpl;
    }
    public async renderRaw(body: string, locals?: pugRaw.LocalsObject): Promise<string> {
        let tpl = await this.compile(body);
        return await tpl.render(locals);
    }
    public async render(path: string, locals?: pugRaw.LocalsObject): Promise<string> {
        let tpl = await this.compileFile(path);
        return await tpl.render(locals);
    }
}
