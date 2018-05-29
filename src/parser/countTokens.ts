import { JavaScriptLexer } from "./JavaScriptLexer";
import { JavaScriptParser } from './JavaScriptParser';
import JavaScriptCompleteParser from "./JavaScriptCompleteParser";
import { ANTLRInputStream,  Token, CommonTokenStream } from 'antlr4ts';
import TokenCounter from '../utils/TokenCounter';

function getTokens(lexer:JavaScriptLexer) : Array<Token> {
    let tokens:Array<Token> = [];
    
    let currentToken:Token = lexer.nextToken();
    while(currentToken.type !== -1) {
        tokens.push(currentToken);
        currentToken = lexer.nextToken();
    }

    return tokens;
}

function addElement(operators:Map<string, TokenCounter>, token: Token): void {
    let key:string = token.text ? token.text : "";
    let value = operators.get(key);

    if(value !== undefined) {
        value.count++;
    } else {
        operators.set(key, {
            token: token,
            count: 1
        });
    }
}

function countElements(tokens: Array<Token>): Map<string, TokenCounter> {
    let operators = new Map<string, TokenCounter>();
    tokens.forEach(element => {
        addElement(operators, element);
    });

    return operators;
}

export default function countTokens(text:string) : Map<string, TokenCounter> {
    let inputStream = new ANTLRInputStream(text);
    let lexer = new JavaScriptLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new JavaScriptCompleteParser(tokenStream);
    try {
        parser.buildParseTree = true;
        let tree = parser.program();
    } catch (e) {
        console.log(e);
    }

    let tokens = getTokens(lexer);

    return countElements(tokens);
}