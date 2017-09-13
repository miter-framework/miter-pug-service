import * as pugRaw from 'pug';
import * as _ from 'lodash';

export class PugTemplate {
    constructor(private tpl: pugRaw.compileTemplate, private defaultLocals: pugRaw.LocalsObject) { }
    
    public async render(locals?: pugRaw.LocalsObject): Promise<string> {
        locals = _.merge({}, this.defaultLocals, locals || {});
        return this.tpl(locals);
    }
};
