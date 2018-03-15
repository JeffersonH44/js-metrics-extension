import { JavaScriptLexer } from './JavaScriptLexer';
import { Lexer, Token, CharStream } from "antlr4ts";

export default abstract class JavaScriptBaseLexer extends Lexer {
    
    constructor(input:CharStream) {
        super(input);
        this.scopeStrictModes = [];
        this.lastToken = null;
        this.useStrictCurrent = false;
        this.useStrictDefault = false;
    }

    public getStrictDefault() {
        return this.useStrictDefault;
    }

    public setUseStrictDefault(value: boolean) {
        this.useStrictDefault = value;
        this.useStrictCurrent = value;
    }

    public IsSrictMode() {
        return this.useStrictCurrent;
    }

    /**
     * Return the next token from the character stream and records this last
     * token in case it resides on the default channel. This recorded token
     * is used to determine when the lexer could possibly match a regex
     * literal. Also changes scopeStrictModes stack if tokenize special
     * string 'use strict';
     *
     * @return the next token from the character stream.
     */
    public nextToken() {
        let next:Token = super.nextToken();

        let size = this.scopeStrictModes.length;
        let lastElement = this.scopeStrictModes[size - 1];

        if (next.type === JavaScriptLexer.OpenBrace) {
            this.useStrictCurrent = this.scopeStrictModes.length > 0 && lastElement ? true : this.useStrictDefault;
            this.scopeStrictModes.push(this.useStrictCurrent);
        } else if (next.type === JavaScriptLexer.CloseBrace) {
            let output = this.scopeStrictModes.length > 0 ? this.scopeStrictModes.pop() : this.useStrictDefault;
            this.useStrictCurrent = output === undefined ? false : output;
        } else if (next.type === JavaScriptLexer.StringLiteral &&
                (this.lastToken === null || this.lastToken.type === JavaScriptLexer.OpenBrace) && 
                next.text && (next.text.substring(1, next.text.length - 1)) === "use strict") {
            if (this.scopeStrictModes.length > 0) {
                this.scopeStrictModes.pop();
            }
            this.useStrictCurrent = true;
            this.scopeStrictModes.push(this.useStrictCurrent);
        }

        if (next.channel === Token.DEFAULT_CHANNEL) {
            // Keep track of the last token on the default channel.
            this.lastToken = next;
        }

        return next;
    }

    /**
     * Returns {@code true} if the lexer can match a regex literal.
     */
    protected RegexPossible() {
                                       
        if (this.lastToken == null) {
            // No token has been produced yet: at the start of the input,
            // no division is possible, so a regex literal _is_ possible.
            return true;
        }
        
        switch (this.lastToken.type) {
            case JavaScriptLexer.Identifier:
            case JavaScriptLexer.NullLiteral:
            case JavaScriptLexer.BooleanLiteral:
            case JavaScriptLexer.This:
            case JavaScriptLexer.CloseBracket:
            case JavaScriptLexer.CloseParen:
            case JavaScriptLexer.OctalIntegerLiteral:
            case JavaScriptLexer.DecimalLiteral:
            case JavaScriptLexer.HexIntegerLiteral:
            case JavaScriptLexer.StringLiteral:
            case JavaScriptLexer.PlusPlus:
            case JavaScriptLexer.MinusMinus:
                // After any of the tokens above, no regex literal can follow.
                return false;
            default:
                // In all other cases, a regex literal _is_ possible.
                return true;
        }
    }
    
    private scopeStrictModes:Array<boolean>;
    private lastToken:Token|null;
    private useStrictDefault:boolean;
    private useStrictCurrent:boolean;
}