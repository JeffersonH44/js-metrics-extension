// Generated from ./src/parser/JavaScriptParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { TemplateStringExpressionContext } from './JavaScriptParser';
import { TernaryExpressionContext } from './JavaScriptParser';
import { LogicalAndExpressionContext } from './JavaScriptParser';
import { PreIncrementExpressionContext } from './JavaScriptParser';
import { ObjectLiteralExpressionContext } from './JavaScriptParser';
import { InExpressionContext } from './JavaScriptParser';
import { LogicalOrExpressionContext } from './JavaScriptParser';
import { NotExpressionContext } from './JavaScriptParser';
import { PreDecreaseExpressionContext } from './JavaScriptParser';
import { ArgumentsExpressionContext } from './JavaScriptParser';
import { ThisExpressionContext } from './JavaScriptParser';
import { FunctionExpressionContext } from './JavaScriptParser';
import { PostDecreaseExpressionContext } from './JavaScriptParser';
import { UnaryMinusExpressionContext } from './JavaScriptParser';
import { AssignmentExpressionContext } from './JavaScriptParser';
import { TypeofExpressionContext } from './JavaScriptParser';
import { InstanceofExpressionContext } from './JavaScriptParser';
import { UnaryPlusExpressionContext } from './JavaScriptParser';
import { DeleteExpressionContext } from './JavaScriptParser';
import { EqualityExpressionContext } from './JavaScriptParser';
import { BitXOrExpressionContext } from './JavaScriptParser';
import { ArrowFunctionExpressionContext } from './JavaScriptParser';
import { MultiplicativeExpressionContext } from './JavaScriptParser';
import { SuperExpressionContext } from './JavaScriptParser';
import { BitShiftExpressionContext } from './JavaScriptParser';
import { ParenthesizedExpressionContext } from './JavaScriptParser';
import { PostIncrementExpressionContext } from './JavaScriptParser';
import { AdditiveExpressionContext } from './JavaScriptParser';
import { RelationalExpressionContext } from './JavaScriptParser';
import { BitNotExpressionContext } from './JavaScriptParser';
import { NewExpressionContext } from './JavaScriptParser';
import { LiteralExpressionContext } from './JavaScriptParser';
import { MemberDotExpressionContext } from './JavaScriptParser';
import { ArrayLiteralExpressionContext } from './JavaScriptParser';
import { ClassExpressionContext } from './JavaScriptParser';
import { MemberIndexExpressionContext } from './JavaScriptParser';
import { IdentifierExpressionContext } from './JavaScriptParser';
import { BitAndExpressionContext } from './JavaScriptParser';
import { BitOrExpressionContext } from './JavaScriptParser';
import { AssignmentOperatorExpressionContext } from './JavaScriptParser';
import { VoidExpressionContext } from './JavaScriptParser';
import { PropertyExpressionAssignmentContext } from './JavaScriptParser';
import { ComputedPropertyExpressionAssignmentContext } from './JavaScriptParser';
import { PropertyShorthandContext } from './JavaScriptParser';
import { PropertySetterContext } from './JavaScriptParser';
import { PropertyGetterContext } from './JavaScriptParser';
import { MethodPropertyContext } from './JavaScriptParser';
import { DoStatementContext } from './JavaScriptParser';
import { ForVarStatementContext } from './JavaScriptParser';
import { ForVarInStatementContext } from './JavaScriptParser';
import { WhileStatementContext } from './JavaScriptParser';
import { ForStatementContext } from './JavaScriptParser';
import { ForInStatementContext } from './JavaScriptParser';
import { ProgramContext } from './JavaScriptParser';
import { SourceElementContext } from './JavaScriptParser';
import { StatementContext } from './JavaScriptParser';
import { BlockContext } from './JavaScriptParser';
import { StatementListContext } from './JavaScriptParser';
import { VariableStatementContext } from './JavaScriptParser';
import { VariableDeclarationListContext } from './JavaScriptParser';
import { VariableDeclarationContext } from './JavaScriptParser';
import { EmptyStatementContext } from './JavaScriptParser';
import { ExpressionStatementContext } from './JavaScriptParser';
import { IfStatementContext } from './JavaScriptParser';
import { IterationStatementContext } from './JavaScriptParser';
import { VarModifierContext } from './JavaScriptParser';
import { ContinueStatementContext } from './JavaScriptParser';
import { BreakStatementContext } from './JavaScriptParser';
import { ReturnStatementContext } from './JavaScriptParser';
import { WithStatementContext } from './JavaScriptParser';
import { SwitchStatementContext } from './JavaScriptParser';
import { CaseBlockContext } from './JavaScriptParser';
import { CaseClausesContext } from './JavaScriptParser';
import { CaseClauseContext } from './JavaScriptParser';
import { DefaultClauseContext } from './JavaScriptParser';
import { LabelledStatementContext } from './JavaScriptParser';
import { ThrowStatementContext } from './JavaScriptParser';
import { TryStatementContext } from './JavaScriptParser';
import { CatchProductionContext } from './JavaScriptParser';
import { FinallyProductionContext } from './JavaScriptParser';
import { DebuggerStatementContext } from './JavaScriptParser';
import { FunctionDeclarationContext } from './JavaScriptParser';
import { ClassDeclarationContext } from './JavaScriptParser';
import { ClassTailContext } from './JavaScriptParser';
import { ClassElementContext } from './JavaScriptParser';
import { MethodDefinitionContext } from './JavaScriptParser';
import { GeneratorMethodContext } from './JavaScriptParser';
import { FormalParameterListContext } from './JavaScriptParser';
import { FormalParameterArgContext } from './JavaScriptParser';
import { LastFormalParameterArgContext } from './JavaScriptParser';
import { FunctionBodyContext } from './JavaScriptParser';
import { SourceElementsContext } from './JavaScriptParser';
import { ArrayLiteralContext } from './JavaScriptParser';
import { ElementListContext } from './JavaScriptParser';
import { LastElementContext } from './JavaScriptParser';
import { ObjectLiteralContext } from './JavaScriptParser';
import { PropertyAssignmentContext } from './JavaScriptParser';
import { PropertyNameContext } from './JavaScriptParser';
import { ArgumentsContext } from './JavaScriptParser';
import { LastArgumentContext } from './JavaScriptParser';
import { ExpressionSequenceContext } from './JavaScriptParser';
import { SingleExpressionContext } from './JavaScriptParser';
import { ArrowFunctionParametersContext } from './JavaScriptParser';
import { ArrowFunctionBodyContext } from './JavaScriptParser';
import { AssignmentOperatorContext } from './JavaScriptParser';
import { LiteralContext } from './JavaScriptParser';
import { NumericLiteralContext } from './JavaScriptParser';
import { IdentifierNameContext } from './JavaScriptParser';
import { ReservedWordContext } from './JavaScriptParser';
import { KeywordContext } from './JavaScriptParser';
import { GetterContext } from './JavaScriptParser';
import { SetterContext } from './JavaScriptParser';
import { EosContext } from './JavaScriptParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JavaScriptParser`.
 */
export interface JavaScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `TemplateStringExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTemplateStringExpression?: (ctx: TemplateStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TemplateStringExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTemplateStringExpression?: (ctx: TemplateStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ThisExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterDeleteExpression?: (ctx: DeleteExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitDeleteExpression?: (ctx: DeleteExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrowFunctionExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionExpression?: (ctx: ArrowFunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrowFunctionExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionExpression?: (ctx: ArrowFunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SuperExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSuperExpression?: (ctx: SuperExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SuperExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSuperExpression?: (ctx: SuperExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NewExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NewExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ClassExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterClassExpression?: (ctx: ClassExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ClassExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitClassExpression?: (ctx: ClassExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `VoidExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterVoidExpression?: (ctx: VoidExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitVoidExpression?: (ctx: VoidExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyShorthand?: (ctx: PropertyShorthandContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyShorthand?: (ctx: PropertyShorthandContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertySetter`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertySetter?: (ctx: PropertySetterContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertySetter`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertySetter?: (ctx: PropertySetterContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyGetter?: (ctx: PropertyGetterContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyGetter?: (ctx: PropertyGetterContext) => void;

	/**
	 * Enter a parse tree produced by the `MethodProperty`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterMethodProperty?: (ctx: MethodPropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `MethodProperty`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitMethodProperty?: (ctx: MethodPropertyContext) => void;

	/**
	 * Enter a parse tree produced by the `DoStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `DoStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarStatement?: (ctx: ForVarStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarStatement?: (ctx: ForVarStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForVarInStatement?: (ctx: ForVarInStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForVarInStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForVarInStatement?: (ctx: ForVarInStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `WhileStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForInStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForInStatement?: (ctx: ForInStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForInStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForInStatement?: (ctx: ForInStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	enterSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	exitSourceElement?: (ctx: SourceElementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.varModifier`.
	 * @param ctx the parse tree
	 */
	enterVarModifier?: (ctx: VarModifierContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.varModifier`.
	 * @param ctx the parse tree
	 */
	exitVarModifier?: (ctx: VarModifierContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.withStatement`.
	 * @param ctx the parse tree
	 */
	enterWithStatement?: (ctx: WithStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.withStatement`.
	 * @param ctx the parse tree
	 */
	exitWithStatement?: (ctx: WithStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	enterCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	exitCaseClauses?: (ctx: CaseClausesContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabelledStatement?: (ctx: LabelledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabelledStatement?: (ctx: LabelledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	enterCatchProduction?: (ctx: CatchProductionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	exitCatchProduction?: (ctx: CatchProductionContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	enterFinallyProduction?: (ctx: FinallyProductionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	exitFinallyProduction?: (ctx: FinallyProductionContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	enterDebuggerStatement?: (ctx: DebuggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	exitDebuggerStatement?: (ctx: DebuggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.classTail`.
	 * @param ctx the parse tree
	 */
	enterClassTail?: (ctx: ClassTailContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.classTail`.
	 * @param ctx the parse tree
	 */
	exitClassTail?: (ctx: ClassTailContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.classElement`.
	 * @param ctx the parse tree
	 */
	enterClassElement?: (ctx: ClassElementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.classElement`.
	 * @param ctx the parse tree
	 */
	exitClassElement?: (ctx: ClassElementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.methodDefinition`.
	 * @param ctx the parse tree
	 */
	enterMethodDefinition?: (ctx: MethodDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.methodDefinition`.
	 * @param ctx the parse tree
	 */
	exitMethodDefinition?: (ctx: MethodDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.generatorMethod`.
	 * @param ctx the parse tree
	 */
	enterGeneratorMethod?: (ctx: GeneratorMethodContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.generatorMethod`.
	 * @param ctx the parse tree
	 */
	exitGeneratorMethod?: (ctx: GeneratorMethodContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterArg?: (ctx: FormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterArg?: (ctx: FormalParameterArgContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	enterSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	exitSourceElements?: (ctx: SourceElementsContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	enterElementList?: (ctx: ElementListContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	exitElementList?: (ctx: ElementListContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.lastElement`.
	 * @param ctx the parse tree
	 */
	enterLastElement?: (ctx: LastElementContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.lastElement`.
	 * @param ctx the parse tree
	 */
	exitLastElement?: (ctx: LastElementContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.lastArgument`.
	 * @param ctx the parse tree
	 */
	enterLastArgument?: (ctx: LastArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.lastArgument`.
	 * @param ctx the parse tree
	 */
	exitLastArgument?: (ctx: LastArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierName?: (ctx: IdentifierNameContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `JavaScriptParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `JavaScriptParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

