import { JavaScriptLexer } from "./JavaScriptLexer";
import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';

function getTokens(lexer:JavaScriptLexer) : Array<Token> {
    let tokens:Array<Token> = [];
    
    let currentToken:Token = lexer.nextToken();
    while(currentToken.type !== -1) {
        tokens.push(currentToken);
        currentToken = lexer.nextToken();
    }

    return tokens;
}

function addElement(operators:Map<number, number>, key:number): void {
    let value = operators.get(key);
    if(value !== undefined) {
        operators.set(key, value + 1);
    } else {
        operators.set(key, 1);
    }
}

function countElements(tokens: Array<Token>): Map<number, number> {
    let operators = new Map<number, number>();
    tokens.forEach(element => {
        addElement(operators, element.type);
    });

    return operators;
}

export default function countTokens(text:string) : Map<number, number> {
    let inputStream = new ANTLRInputStream(text);
    let lexer = new JavaScriptLexer(inputStream);
    let tokens = getTokens(lexer);

    return countElements(tokens);
}