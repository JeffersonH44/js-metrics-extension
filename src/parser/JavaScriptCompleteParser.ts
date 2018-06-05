import { 
    JavaScriptParser, 
    IterationStatementContext, 
    FunctionDeclarationContext,
    IfStatementContext
} from './JavaScriptParser';
import { TokenStream } from 'antlr4ts';
import { Override } from 'antlr4ts/Decorators';
import MeasuresCounter from "../utils/MeasuresCounter";

export default class JavaScriptCompleteParser extends JavaScriptParser {
    public static ITERATORS = 0;
    public static CONDITIONALS = 1;
    public static SIZE = 2;

    constructor(input: TokenStream, path:string, commit:number) {
        super(input);
        this.counter = undefined;
        this.path = path;
        this.commit = commit;
    }

    @Override
    public functionDeclaration(): FunctionDeclarationContext {
        let localCtx = super.functionDeclaration();
        let functionName:string = localCtx.Identifier().text;
        if(functionName === '' && this.counter === undefined) {
            let startLine = localCtx.start.line;
            let endLine = localCtx.stop ? localCtx.stop.line : startLine + 1;
            let name = this.path.split('/');
            let lastname = name[name.length - 1];
            this.counter = new MeasuresCounter(this.path, lastname, startLine, endLine, this.commit);
        } else if(functionName !== '') {
            
        }
        return localCtx;
    }

    @Override
    public iterationStatement(): IterationStatementContext {
        let localCtx = super.iterationStatement();
        if(this.counter) {
            this.counter.countFor();
        }

        return localCtx;
    }

    @Override
    public ifStatement(): IfStatementContext {
        let localCtx = super.ifStatement();
        if(this.counter) {
            this.counter.countIf();
        }

        return localCtx;
    }

    private counter:MeasuresCounter|undefined;
    private path:string;
    private commit:number;
    private inner
}