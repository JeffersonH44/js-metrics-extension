import { JavaScriptParser, IterationStatementContext, FunctionDeclarationContext } from './JavaScriptParser';
import { TokenStream } from 'antlr4ts';
import { Override } from 'antlr4ts/Decorators';

export default class JavaScriptCompleteParser extends JavaScriptParser {
    public static ITERATORS = 0;
    public static CONDITIONALS = 1;
    public static SIZE = 2;

    constructor(input: TokenStream) {
        super(input);

        this.countFor = 0;
        this.stats = new Map<string, Array<number>>();
        this.currentFunction = undefined;
    }

    @Override
    public functionDeclaration(): FunctionDeclarationContext {
        let localCtx = super.functionDeclaration();
        let functionName:string = localCtx.Identifier().text;
        this.stats[functionName] = new Array<number>(JavaScriptCompleteParser.SIZE);
        return localCtx;
    }

    @Override
    public iterationStatement(): IterationStatementContext {
        let localCtx = super.iterationStatement();
        this.countFor++;

        return localCtx;
    }

    public getFors(): number {
        return this.countFor;
    }

    private countFor: number;
    private stats: Map<string, Array<number>>;
    private currentFunction: Array<number>|undefined;
}