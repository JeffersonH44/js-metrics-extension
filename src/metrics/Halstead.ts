import {JavaScriptLexer} from "../parser/JavaScriptLexer";
import TokenCounter from "../utils/TokenCounter";

const OPERATORS_TOKENS = new Set<number>([
    JavaScriptLexer.CloseBracket,
    JavaScriptLexer.OpenParen,
    JavaScriptLexer.CloseParen,
    JavaScriptLexer.SemiColon,
    JavaScriptLexer.Comma,
    JavaScriptLexer.Assign,
    JavaScriptLexer.QuestionMark,
    JavaScriptLexer.Colon,
    JavaScriptLexer.Ellipsis,
    JavaScriptLexer.Dot,
    JavaScriptLexer.PlusPlus,
    JavaScriptLexer.MinusMinus,
    JavaScriptLexer.Plus,
    JavaScriptLexer.Minus,
    JavaScriptLexer.BitNot,
    JavaScriptLexer.Not,
    JavaScriptLexer.Multiply,
    JavaScriptLexer.Divide,
    JavaScriptLexer.Modulus,
    JavaScriptLexer.RightShiftArithmetic,
    JavaScriptLexer.LeftShiftArithmetic,
    JavaScriptLexer.RightShiftLogical,
    JavaScriptLexer.LessThan,
    JavaScriptLexer.MoreThan,
    JavaScriptLexer.LessThanEquals,
    JavaScriptLexer.GreaterThanEquals,
    JavaScriptLexer.Equals_,
    JavaScriptLexer.NotEquals,
    JavaScriptLexer.IdentityEquals,
    JavaScriptLexer.IdentityNotEquals,
    JavaScriptLexer.BitAnd,
    JavaScriptLexer.BitXOr,
    JavaScriptLexer.BitOr,
    JavaScriptLexer.And,
    JavaScriptLexer.Or,
    JavaScriptLexer.MultiplyAssign,
    JavaScriptLexer.DivideAssign,
    JavaScriptLexer.ModulusAssign,
    JavaScriptLexer.PlusAssign,
    JavaScriptLexer.MinusAssign,
    JavaScriptLexer.LeftShiftArithmeticAssign,
    JavaScriptLexer.RightShiftArithmeticAssign,
    JavaScriptLexer.RightShiftLogicalAssign,
    JavaScriptLexer.BitAndAssign,
    JavaScriptLexer.BitXorAssign,
    JavaScriptLexer.BitOrAssign,
]);

const OPERANDS_TOKENS = new Set<number>([
    JavaScriptLexer.Identifier,
    JavaScriptLexer.NullLiteral,
    JavaScriptLexer.BooleanLiteral,
    JavaScriptLexer.DecimalLiteral,
    JavaScriptLexer.HexIntegerLiteral,
    JavaScriptLexer.OctalIntegerLiteral,
    JavaScriptLexer.OctalIntegerLiteral2,
    JavaScriptLexer.BinaryIntegerLiteral
]);

export default class HalsteadMetrics {
    constructor(countedTokens: Map<String, TokenCounter>) {
        this.totalOperators = 0;
        this.totalOperands = 0;

        let keys = countedTokens.keys();
    
        let operatorsSet = new Set<String|undefined>();
        let operandsSet = new Set<string|undefined>();
    
        for(let key of keys) {
            let tokenCounter = countedTokens.get(key);
            if(tokenCounter === undefined) {
                continue;
            }

            let token = tokenCounter.token;
            
            if(OPERATORS_TOKENS.has(token.type)) {
                console.log("is operator:", token.text);
                this.totalOperators++;
                operatorsSet.add(token.text);
            }
    
            if(OPERANDS_TOKENS.has(token.type)) {
                console.log("is operand:", token.text);
                this.totalOperands++;
                operandsSet.add(token.text);
            }
        }

        this.uniqueOperators = operatorsSet.size;
        this.uniqueOperands = operandsSet.size;

        console.log(this.totalOperands, this.totalOperators, this.uniqueOperands, this.uniqueOperators);
    }

    getVolume(): number {
        return (this.totalOperands + this.totalOperators) * Math.log2(this.uniqueOperands + this.uniqueOperators);
    }

    private totalOperators: number;
    private totalOperands: number;
    private uniqueOperators: number;
    private uniqueOperands: number;
}