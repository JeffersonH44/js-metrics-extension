import { JavaScriptLexer } from "./JavaScriptLexer";
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

export default function countTokens(text:string) {
    console.log(text);
    let inputStream = new ANTLRInputStream(text);
    let lexer = new JavaScriptLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    console.log(tokenStream.getText());

    return tokenStream;
}