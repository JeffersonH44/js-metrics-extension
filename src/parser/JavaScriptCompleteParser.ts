import { 
    JavaScriptParser, 
    IterationStatementContext, 
    FunctionDeclarationContext,
    IfStatementContext,
    VariableDeclarationContext
} from './JavaScriptParser';
import { TokenStream } from 'antlr4ts';
import { Override } from 'antlr4ts/Decorators';
import MeasuresCounter from "../utils/MeasuresCounter";
import { ParseTree } from 'antlr4ts/tree/ParseTree';

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
        if(this.counter) {
            this.measuresStack.push(this.counter);
        }

        this.counter = new MeasuresCounter(this.commit);
        let localCtx = super.functionDeclaration();
        let functionName:string = localCtx.Identifier().text;
        let name = functionName + '()';

        // export function
        if(functionName === '' && this.isStart) {
            this.isStart = false;
            let startLine = localCtx.start.line;
            this.counter.setPath = this.path;
            this.counter.setName = name;
            this.counter.setStartLine = startLine;
            this.counter.setEndLine = localCtx.stop ? localCtx.stop.line : startLine + 1;

            //this.counter = new MeasuresCounter(this.path.join('.'), "()", startLine, endLine, this.commit);
        } else if(functionName === '') {
            let last = this.measuresStack.pop();
            if(last) {
                last.add(this.counter);
            }
            this.counter = last;
        } else if(functionName !== '') {
            let startLine = localCtx.start.line;
            this.counter.setPath = this.path;
            this.counter.setName = name;
            this.counter.setStartLine = startLine;
            this.counter.setEndLine = localCtx.stop ? localCtx.stop.line : startLine + 1;

            this.completed.push(this.counter);
            this.counter = this.measuresStack.pop();
        }
        return localCtx;
    }

    @Override
    public iterationStatement(): IterationStatementContext {
        let localCtx = super.iterationStatement();
        this.getTerminals(localCtx.children, true);
        if(this.counter) {
            this.counter.countFor();
        }

        return localCtx;
    }

    @Override
    public ifStatement(): IfStatementContext {
        let localCtx = super.ifStatement();
        this.getTerminals(localCtx.children, true);
        if(this.counter) {
            this.counter.countIf();
        }

        return localCtx;
    }

    public variableDeclaration(): VariableDeclarationContext {
        let localCtx = super.variableDeclaration();
        this.getTerminals(localCtx.children, false);
        return localCtx;
    }

    private getTerminals(children: ParseTree[]|undefined, isOperator:boolean) {
        if(children) {
            let terminals = children.filter((elem) => {
                return elem.childCount === 0;
            });
            if(this.counter) {
                if(isOperator) {
                    terminals.forEach((elem) => {
                        this.counter.countOperator(elem.text);
                    });
                } else {
                    terminals.forEach((elem) => {
                        this.counter.countOperands(elem.text);
                    });
                }
                
            }
        }
    }

    private counter:MeasuresCounter|undefined;
    private path:string;
    private measuresStack:Array<MeasuresCounter> = [];
    private completed:Array<MeasuresCounter> = [];
    private commit:number;
    private isStart:boolean = true;
}