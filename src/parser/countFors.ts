import JavaScriptCompleteParser from './JavaScriptCompleteParser';
import { JavaScriptLexer } from './JavaScriptLexer';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

export default function countFor(text: string): number {
    let inputStream = new ANTLRInputStream(text);
    let lexer = new JavaScriptLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new JavaScriptCompleteParser(tokenStream);
    parser.buildParseTree = true;
    let tree = parser.program();

    return parser.getFors();
}