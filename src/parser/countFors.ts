import JavaScriptCompleteParser from './JavaScriptCompleteParser';
import { JavaScriptLexer } from './JavaScriptLexer';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from "fs";

export default function parseFile(path: string, commit: number): void {
    let text = fs.readFileSync(path, 'utf-8');
    let inputStream = new ANTLRInputStream(text);
    let lexer = new JavaScriptLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new JavaScriptCompleteParser(tokenStream, path, commit);
    parser.buildParseTree = true;
    let tree = parser.program();
    console.log("finished");
    // return parser.getFors();
}