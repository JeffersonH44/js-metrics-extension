import { JavaScriptLexer } from "./JavaScriptLexer";
import { ANTLRInputStream, Token } from 'antlr4ts';

function getTokens(lexer:JavaScriptLexer) : Array<Token> {
    let tokens:Array<Token> = [];
    
    let currentToken:Token = lexer.nextToken();
    while(currentToken.type !== -1) {
        tokens.push(currentToken);
        currentToken = lexer.nextToken();
    }

    return tokens;
}

export default function countTokens(text:string) : Array<Token> {
    let inputStream = new ANTLRInputStream(text);
    let lexer = new JavaScriptLexer(inputStream);

    return getTokens(lexer);
}