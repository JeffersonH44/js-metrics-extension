import {Parser, TokenStream, Token, Lexer} from 'antlr4ts';
import {JavaScriptParser} from './JavaScriptParser';

/**
 * All parser methods that used in grammar (p, prev, notLineTerminator, etc.)
 * should start with lower case char similar to parser rules.
 */
export default abstract class JavaScriptBaseParser extends Parser
{
    constructor(input: TokenStream) {
        super(input);
    }

    /**
     * Short form for prev(String str)
     */
    protected p(str: string) : boolean {
        return this.prev(str);
    }

    /**
     * Whether the previous token value equals to @param str
     */
    protected prev(str: string) : boolean {
        return this._input.LT(-1).text === str;
    }

    protected notLineTerminator() : boolean {
        return !this.here(JavaScriptParser.LineTerminator);
    }

    protected notOpenBraceAndNotFunction() : boolean {
        let nextTokenType = this._input.LT(1).type;
        return nextTokenType !== JavaScriptParser.OpenBrace && nextTokenType !== JavaScriptParser.Function;
    }

    protected closeBrace(): boolean {
        return this._input.LT(1).type === JavaScriptParser.CloseBrace;
    }
    
    /**
     * Returns {@code true} iff on the current index of the parser's
     * token stream a token of the given {@code type} exists on the
     * {@code HIDDEN} channel.
     *
     * @param type
     *         the type of the token on the {@code HIDDEN} channel
     *         to check.
     *
     * @return {@code true} iff on the current index of the parser's
     * token stream a token of the given {@code type} exists on the
     * {@code HIDDEN} channel.
     */
    private here(type: Number): boolean {

        // Get the token ahead of the current index.
        let possibleIndexEosToken = this.currentToken.tokenIndex - 1;
        let ahead: Token = this._input.get(possibleIndexEosToken);

        // Check if the token resides on the HIDDEN channel and if it's of the
        // provided type.
        return (ahead.channel === Lexer.HIDDEN) && (ahead.type === type);
    }
    
    /**
     * Returns {@code true} iff on the current index of the parser's
     * token stream a token exists on the {@code HIDDEN} channel which
     * either is a line terminator, or is a multi line comment that
     * contains a line terminator.
     *
     * @return {@code true} iff on the current index of the parser's
     * token stream a token exists on the {@code HIDDEN} channel which
     * either is a line terminator, or is a multi line comment that
     * contains a line terminator.
     */
    protected lineTerminatorAhead(): boolean {

        // Get the token ahead of the current index.
        let possibleIndexEosToken = this.currentToken.tokenIndex - 1;
        let ahead = this._input.get(possibleIndexEosToken);

        if (ahead.channel !== Lexer.HIDDEN) {
            // We're only interested in tokens on the HIDDEN channel.
            return false;
        }

        if (ahead.channel === JavaScriptParser.LineTerminator) {
            // There is definitely a line terminator ahead.
            return true;
        }

        if (ahead.type === JavaScriptParser.WhiteSpaces) {
            // Get the token ahead of the current whitespaces.
            possibleIndexEosToken = this.currentToken.tokenIndex - 2;
            ahead = this._input.get(possibleIndexEosToken);
        }

        // Get the token's text and type.
        let text: string|undefined = ahead.text;
        let type = ahead.type;

        // Check if the token is, or contains a line terminator.
        return (type === JavaScriptParser.MultiLineComment && text && (text.includes("\r") || text.includes("\n"))) ||
                (type === JavaScriptParser.LineTerminator);
    }
}
