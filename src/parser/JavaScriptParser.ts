// Generated from ./src/parser/JavaScriptParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { JavaScriptParserListener } from './JavaScriptParserListener';
import JavaScriptBaseParser from './JavaScriptBaseParser';

export class JavaScriptParser extends JavaScriptBaseParser {
	public static readonly RegularExpressionLiteral=1;
	public static readonly LineTerminator=2;
	public static readonly OpenBracket=3;
	public static readonly CloseBracket=4;
	public static readonly OpenParen=5;
	public static readonly CloseParen=6;
	public static readonly OpenBrace=7;
	public static readonly CloseBrace=8;
	public static readonly SemiColon=9;
	public static readonly Comma=10;
	public static readonly Assign=11;
	public static readonly QuestionMark=12;
	public static readonly Colon=13;
	public static readonly Ellipsis=14;
	public static readonly Dot=15;
	public static readonly PlusPlus=16;
	public static readonly MinusMinus=17;
	public static readonly Plus=18;
	public static readonly Minus=19;
	public static readonly BitNot=20;
	public static readonly Not=21;
	public static readonly Multiply=22;
	public static readonly Divide=23;
	public static readonly Modulus=24;
	public static readonly RightShiftArithmetic=25;
	public static readonly LeftShiftArithmetic=26;
	public static readonly RightShiftLogical=27;
	public static readonly LessThan=28;
	public static readonly MoreThan=29;
	public static readonly LessThanEquals=30;
	public static readonly GreaterThanEquals=31;
	public static readonly Equals_=32;
	public static readonly NotEquals=33;
	public static readonly IdentityEquals=34;
	public static readonly IdentityNotEquals=35;
	public static readonly BitAnd=36;
	public static readonly BitXOr=37;
	public static readonly BitOr=38;
	public static readonly And=39;
	public static readonly Or=40;
	public static readonly MultiplyAssign=41;
	public static readonly DivideAssign=42;
	public static readonly ModulusAssign=43;
	public static readonly PlusAssign=44;
	public static readonly MinusAssign=45;
	public static readonly LeftShiftArithmeticAssign=46;
	public static readonly RightShiftArithmeticAssign=47;
	public static readonly RightShiftLogicalAssign=48;
	public static readonly BitAndAssign=49;
	public static readonly BitXorAssign=50;
	public static readonly BitOrAssign=51;
	public static readonly ARROW=52;
	public static readonly NullLiteral=53;
	public static readonly BooleanLiteral=54;
	public static readonly DecimalLiteral=55;
	public static readonly HexIntegerLiteral=56;
	public static readonly OctalIntegerLiteral=57;
	public static readonly OctalIntegerLiteral2=58;
	public static readonly BinaryIntegerLiteral=59;
	public static readonly Break=60;
	public static readonly Do=61;
	public static readonly Instanceof=62;
	public static readonly Typeof=63;
	public static readonly Case=64;
	public static readonly Else=65;
	public static readonly New=66;
	public static readonly Var=67;
	public static readonly Catch=68;
	public static readonly Finally=69;
	public static readonly Return=70;
	public static readonly Void=71;
	public static readonly Continue=72;
	public static readonly For=73;
	public static readonly Switch=74;
	public static readonly While=75;
	public static readonly Debugger=76;
	public static readonly Function=77;
	public static readonly This=78;
	public static readonly With=79;
	public static readonly Default=80;
	public static readonly If=81;
	public static readonly Throw=82;
	public static readonly Delete=83;
	public static readonly In=84;
	public static readonly Try=85;
	public static readonly Class=86;
	public static readonly Enum=87;
	public static readonly Extends=88;
	public static readonly Super=89;
	public static readonly Const=90;
	public static readonly Export=91;
	public static readonly Import=92;
	public static readonly Implements=93;
	public static readonly Let=94;
	public static readonly Private=95;
	public static readonly Public=96;
	public static readonly Interface=97;
	public static readonly Package=98;
	public static readonly Protected=99;
	public static readonly Static=100;
	public static readonly Yield=101;
	public static readonly Identifier=102;
	public static readonly StringLiteral=103;
	public static readonly TemplateStringLiteral=104;
	public static readonly WhiteSpaces=105;
	public static readonly MultiLineComment=106;
	public static readonly SingleLineComment=107;
	public static readonly HtmlComment=108;
	public static readonly CDataComment=109;
	public static readonly UnexpectedCharacter=110;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_variableStatement = 5;
	public static readonly RULE_variableDeclarationList = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_emptyStatement = 8;
	public static readonly RULE_expressionStatement = 9;
	public static readonly RULE_ifStatement = 10;
	public static readonly RULE_iterationStatement = 11;
	public static readonly RULE_varModifier = 12;
	public static readonly RULE_continueStatement = 13;
	public static readonly RULE_breakStatement = 14;
	public static readonly RULE_returnStatement = 15;
	public static readonly RULE_withStatement = 16;
	public static readonly RULE_switchStatement = 17;
	public static readonly RULE_caseBlock = 18;
	public static readonly RULE_caseClauses = 19;
	public static readonly RULE_caseClause = 20;
	public static readonly RULE_defaultClause = 21;
	public static readonly RULE_labelledStatement = 22;
	public static readonly RULE_throwStatement = 23;
	public static readonly RULE_tryStatement = 24;
	public static readonly RULE_catchProduction = 25;
	public static readonly RULE_finallyProduction = 26;
	public static readonly RULE_debuggerStatement = 27;
	public static readonly RULE_functionDeclaration = 28;
	public static readonly RULE_classDeclaration = 29;
	public static readonly RULE_classTail = 30;
	public static readonly RULE_classElement = 31;
	public static readonly RULE_methodDefinition = 32;
	public static readonly RULE_generatorMethod = 33;
	public static readonly RULE_formalParameterList = 34;
	public static readonly RULE_formalParameterArg = 35;
	public static readonly RULE_lastFormalParameterArg = 36;
	public static readonly RULE_functionBody = 37;
	public static readonly RULE_sourceElements = 38;
	public static readonly RULE_arrayLiteral = 39;
	public static readonly RULE_elementList = 40;
	public static readonly RULE_lastElement = 41;
	public static readonly RULE_objectLiteral = 42;
	public static readonly RULE_propertyAssignment = 43;
	public static readonly RULE_propertyName = 44;
	public static readonly RULE_arguments = 45;
	public static readonly RULE_lastArgument = 46;
	public static readonly RULE_expressionSequence = 47;
	public static readonly RULE_singleExpression = 48;
	public static readonly RULE_arrowFunctionParameters = 49;
	public static readonly RULE_arrowFunctionBody = 50;
	public static readonly RULE_assignmentOperator = 51;
	public static readonly RULE_literal = 52;
	public static readonly RULE_numericLiteral = 53;
	public static readonly RULE_identifierName = 54;
	public static readonly RULE_reservedWord = 55;
	public static readonly RULE_keyword = 56;
	public static readonly RULE_getter = 57;
	public static readonly RULE_setter = 58;
	public static readonly RULE_eos = 59;
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "block", "statementList", "variableStatement", 
		"variableDeclarationList", "variableDeclaration", "emptyStatement", "expressionStatement", 
		"ifStatement", "iterationStatement", "varModifier", "continueStatement", 
		"breakStatement", "returnStatement", "withStatement", "switchStatement", 
		"caseBlock", "caseClauses", "caseClause", "defaultClause", "labelledStatement", 
		"throwStatement", "tryStatement", "catchProduction", "finallyProduction", 
		"debuggerStatement", "functionDeclaration", "classDeclaration", "classTail", 
		"classElement", "methodDefinition", "generatorMethod", "formalParameterList", 
		"formalParameterArg", "lastFormalParameterArg", "functionBody", "sourceElements", 
		"arrayLiteral", "elementList", "lastElement", "objectLiteral", "propertyAssignment", 
		"propertyName", "arguments", "lastArgument", "expressionSequence", "singleExpression", 
		"arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
		"literal", "numericLiteral", "identifierName", "reservedWord", "keyword", 
		"getter", "setter", "eos"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"';'", "','", "'='", "'?'", "':'", "'...'", "'.'", "'++'", "'--'", "'+'", 
		"'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'>>'", "'<<'", "'>>>'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", 
		"'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", 
		"'>>='", "'>>>='", "'&='", "'^='", "'|='", "'=>'", "'null'", undefined, 
		undefined, undefined, undefined, undefined, undefined, "'break'", "'do'", 
		"'instanceof'", "'typeof'", "'case'", "'else'", "'new'", "'var'", "'catch'", 
		"'finally'", "'return'", "'void'", "'continue'", "'for'", "'switch'", 
		"'while'", "'debugger'", "'function'", "'this'", "'with'", "'default'", 
		"'if'", "'throw'", "'delete'", "'in'", "'try'", "'class'", "'enum'", "'extends'", 
		"'super'", "'const'", "'export'", "'import'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "RegularExpressionLiteral", "LineTerminator", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Ellipsis", "Dot", 
		"PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", 
		"Divide", "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
		"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", 
		"NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", 
		"BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
		"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
		"Break", "Do", "Instanceof", "Typeof", "Case", "Else", "New", "Var", "Catch", 
		"Finally", "Return", "Void", "Continue", "For", "Switch", "While", "Debugger", 
		"Function", "This", "With", "Default", "If", "Throw", "Delete", "In", 
		"Try", "Class", "Enum", "Extends", "Super", "Const", "Export", "Import", 
		"Implements", "Let", "Private", "Public", "Interface", "Package", "Protected", 
		"Static", "Yield", "Identifier", "StringLiteral", "TemplateStringLiteral", 
		"WhiteSpaces", "MultiLineComment", "SingleLineComment", "HtmlComment", 
		"CDataComment", "UnexpectedCharacter"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return JavaScriptParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "JavaScriptParser.g4"; }

	@Override
	public get ruleNames(): string[] { return JavaScriptParser.ruleNames; }

	@Override
	public get serializedATN(): string { return JavaScriptParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaScriptParser._ATN, this);
	}
	@RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
			case 1:
				{
				this.state = 120;
				this.sourceElements();
				}
				break;
			}
			this.state = 123;
			this.match(JavaScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				{
				this.state = 125;
				this.match(JavaScriptParser.Export);
				}
				break;
			}
			this.state = 128;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaScriptParser.RULE_statement);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.variableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 132;
				this.emptyStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 133;
				this.expressionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 134;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 135;
				this.iterationStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 136;
				this.continueStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 137;
				this.breakStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 138;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 139;
				this.withStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 140;
				this.labelledStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 141;
				this.switchStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 142;
				this.throwStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 143;
				this.tryStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 144;
				this.debuggerStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 145;
				this.functionDeclaration();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 146;
				this.classDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				{
				this.state = 150;
				this.statementList();
				}
				break;
			}
			this.state = 153;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 155;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 158; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.varModifier();
			this.state = 161;
			this.variableDeclarationList();
			this.state = 162;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.variableDeclaration();
			this.state = 169;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 165;
					this.match(JavaScriptParser.Comma);
					this.state = 166;
					this.variableDeclaration();
					}
					} 
				}
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				{
				this.state = 172;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			case JavaScriptParser.OpenBracket:
				{
				this.state = 173;
				this.arrayLiteral();
				}
				break;
			case JavaScriptParser.OpenBrace:
				{
				this.state = 174;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
			case 1:
				{
				this.state = 177;
				this.match(JavaScriptParser.Assign);
				this.state = 178;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaScriptParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(JavaScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			if (!(this.notOpenBraceAndNotFunction())) throw new FailedPredicateException(this, "notOpenBraceAndNotFunction()");
			this.state = 184;
			this.expressionSequence();
			this.state = 185;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(JavaScriptParser.If);
			this.state = 188;
			this.match(JavaScriptParser.OpenParen);
			this.state = 189;
			this.expressionSequence();
			this.state = 190;
			this.match(JavaScriptParser.CloseParen);
			this.state = 191;
			this.statement();
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				{
				this.state = 192;
				this.match(JavaScriptParser.Else);
				this.state = 193;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(JavaScriptParser.Do);
				this.state = 197;
				this.statement();
				this.state = 198;
				this.match(JavaScriptParser.While);
				this.state = 199;
				this.match(JavaScriptParser.OpenParen);
				this.state = 200;
				this.expressionSequence();
				this.state = 201;
				this.match(JavaScriptParser.CloseParen);
				this.state = 202;
				this.eos();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.match(JavaScriptParser.While);
				this.state = 205;
				this.match(JavaScriptParser.OpenParen);
				this.state = 206;
				this.expressionSequence();
				this.state = 207;
				this.match(JavaScriptParser.CloseParen);
				this.state = 208;
				this.statement();
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.match(JavaScriptParser.For);
				this.state = 211;
				this.match(JavaScriptParser.OpenParen);
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.Delete - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (JavaScriptParser.Class - 86)) | (1 << (JavaScriptParser.Super - 86)) | (1 << (JavaScriptParser.Identifier - 86)) | (1 << (JavaScriptParser.StringLiteral - 86)) | (1 << (JavaScriptParser.TemplateStringLiteral - 86)))) !== 0)) {
					{
					this.state = 212;
					this.expressionSequence();
					}
				}

				this.state = 215;
				this.match(JavaScriptParser.SemiColon);
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.Delete - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (JavaScriptParser.Class - 86)) | (1 << (JavaScriptParser.Super - 86)) | (1 << (JavaScriptParser.Identifier - 86)) | (1 << (JavaScriptParser.StringLiteral - 86)) | (1 << (JavaScriptParser.TemplateStringLiteral - 86)))) !== 0)) {
					{
					this.state = 216;
					this.expressionSequence();
					}
				}

				this.state = 219;
				this.match(JavaScriptParser.SemiColon);
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.Delete - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (JavaScriptParser.Class - 86)) | (1 << (JavaScriptParser.Super - 86)) | (1 << (JavaScriptParser.Identifier - 86)) | (1 << (JavaScriptParser.StringLiteral - 86)) | (1 << (JavaScriptParser.TemplateStringLiteral - 86)))) !== 0)) {
					{
					this.state = 220;
					this.expressionSequence();
					}
				}

				this.state = 223;
				this.match(JavaScriptParser.CloseParen);
				this.state = 224;
				this.statement();
				}
				break;

			case 4:
				_localctx = new ForVarStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 225;
				this.match(JavaScriptParser.For);
				this.state = 226;
				this.match(JavaScriptParser.OpenParen);
				this.state = 227;
				this.varModifier();
				this.state = 228;
				this.variableDeclarationList();
				this.state = 229;
				this.match(JavaScriptParser.SemiColon);
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.Delete - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (JavaScriptParser.Class - 86)) | (1 << (JavaScriptParser.Super - 86)) | (1 << (JavaScriptParser.Identifier - 86)) | (1 << (JavaScriptParser.StringLiteral - 86)) | (1 << (JavaScriptParser.TemplateStringLiteral - 86)))) !== 0)) {
					{
					this.state = 230;
					this.expressionSequence();
					}
				}

				this.state = 233;
				this.match(JavaScriptParser.SemiColon);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.Delete - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (JavaScriptParser.Class - 86)) | (1 << (JavaScriptParser.Super - 86)) | (1 << (JavaScriptParser.Identifier - 86)) | (1 << (JavaScriptParser.StringLiteral - 86)) | (1 << (JavaScriptParser.TemplateStringLiteral - 86)))) !== 0)) {
					{
					this.state = 234;
					this.expressionSequence();
					}
				}

				this.state = 237;
				this.match(JavaScriptParser.CloseParen);
				this.state = 238;
				this.statement();
				}
				break;

			case 5:
				_localctx = new ForInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 240;
				this.match(JavaScriptParser.For);
				this.state = 241;
				this.match(JavaScriptParser.OpenParen);
				this.state = 242;
				this.singleExpression(0);
				this.state = 246;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.In:
					{
					this.state = 243;
					this.match(JavaScriptParser.In);
					}
					break;
				case JavaScriptParser.Identifier:
					{
					this.state = 244;
					this.match(JavaScriptParser.Identifier);
					this.state = 245;
					if (!(p("of"))) throw new FailedPredicateException(this, "p(\"of\")");
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 248;
				this.expressionSequence();
				this.state = 249;
				this.match(JavaScriptParser.CloseParen);
				this.state = 250;
				this.statement();
				}
				break;

			case 6:
				_localctx = new ForVarInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 252;
				this.match(JavaScriptParser.For);
				this.state = 253;
				this.match(JavaScriptParser.OpenParen);
				this.state = 254;
				this.varModifier();
				this.state = 255;
				this.variableDeclaration();
				this.state = 259;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.In:
					{
					this.state = 256;
					this.match(JavaScriptParser.In);
					}
					break;
				case JavaScriptParser.Identifier:
					{
					this.state = 257;
					this.match(JavaScriptParser.Identifier);
					this.state = 258;
					if (!(p("of"))) throw new FailedPredicateException(this, "p(\"of\")");
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 261;
				this.expressionSequence();
				this.state = 262;
				this.match(JavaScriptParser.CloseParen);
				this.state = 263;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaScriptParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			_la = this._input.LA(1);
			if ( !(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaScriptParser.Var - 67)) | (1 << (JavaScriptParser.Const - 67)) | (1 << (JavaScriptParser.Let - 67)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(JavaScriptParser.Continue);
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				{
				this.state = 270;
				if (!(notLineTerminator())) throw new FailedPredicateException(this, "notLineTerminator()");
				this.state = 271;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			}
			this.state = 274;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(JavaScriptParser.Break);
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
			case 1:
				{
				this.state = 277;
				if (!(notLineTerminator())) throw new FailedPredicateException(this, "notLineTerminator()");
				this.state = 278;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			}
			this.state = 281;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(JavaScriptParser.Return);
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
			case 1:
				{
				this.state = 284;
				if (!(notLineTerminator())) throw new FailedPredicateException(this, "notLineTerminator()");
				this.state = 285;
				this.expressionSequence();
				}
				break;
			}
			this.state = 288;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(JavaScriptParser.With);
			this.state = 291;
			this.match(JavaScriptParser.OpenParen);
			this.state = 292;
			this.expressionSequence();
			this.state = 293;
			this.match(JavaScriptParser.CloseParen);
			this.state = 294;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(JavaScriptParser.Switch);
			this.state = 297;
			this.match(JavaScriptParser.OpenParen);
			this.state = 298;
			this.expressionSequence();
			this.state = 299;
			this.match(JavaScriptParser.CloseParen);
			this.state = 300;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.Case) {
				{
				this.state = 303;
				this.caseClauses();
				}
			}

			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.Default) {
				{
				this.state = 306;
				this.defaultClause();
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaScriptParser.Case) {
					{
					this.state = 307;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 312;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 314;
				this.caseClause();
				}
				}
				this.state = 317; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===JavaScriptParser.Case );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(JavaScriptParser.Case);
			this.state = 320;
			this.expressionSequence();
			this.state = 321;
			this.match(JavaScriptParser.Colon);
			this.state = 323;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				{
				this.state = 322;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(JavaScriptParser.Default);
			this.state = 326;
			this.match(JavaScriptParser.Colon);
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,25,this._ctx) ) {
			case 1:
				{
				this.state = 327;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let _localctx: LabelledStatementContext = new LabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(JavaScriptParser.Identifier);
			this.state = 331;
			this.match(JavaScriptParser.Colon);
			this.state = 332;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(JavaScriptParser.Throw);
			this.state = 335;
			if (!(notLineTerminator())) throw new FailedPredicateException(this, "notLineTerminator()");
			this.state = 336;
			this.expressionSequence();
			this.state = 337;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(JavaScriptParser.Try);
			this.state = 340;
			this.block();
			this.state = 346;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Catch:
				{
				this.state = 341;
				this.catchProduction();
				this.state = 343;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
				case 1:
					{
					this.state = 342;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case JavaScriptParser.Finally:
				{
				this.state = 345;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaScriptParser.RULE_catchProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(JavaScriptParser.Catch);
			this.state = 349;
			this.match(JavaScriptParser.OpenParen);
			this.state = 350;
			this.match(JavaScriptParser.Identifier);
			this.state = 351;
			this.match(JavaScriptParser.CloseParen);
			this.state = 352;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(JavaScriptParser.Finally);
			this.state = 355;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(JavaScriptParser.Debugger);
			this.state = 358;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(JavaScriptParser.Function);
			this.state = 361;
			this.match(JavaScriptParser.Identifier);
			this.state = 362;
			this.match(JavaScriptParser.OpenParen);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la===JavaScriptParser.Identifier) {
				{
				this.state = 363;
				this.formalParameterList();
				}
			}

			this.state = 366;
			this.match(JavaScriptParser.CloseParen);
			this.state = 367;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 368;
			this.functionBody();
			this.state = 369;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(JavaScriptParser.Class);
			this.state = 372;
			this.match(JavaScriptParser.Identifier);
			this.state = 373;
			this.classTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classTail(): ClassTailContext {
		let _localctx: ClassTailContext = new ClassTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaScriptParser.RULE_classTail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.Extends) {
				{
				this.state = 375;
				this.match(JavaScriptParser.Extends);
				this.state = 376;
				this.singleExpression(0);
				}
			}

			this.state = 379;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaScriptParser.Multiply || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Break - 53)) | (1 << (JavaScriptParser.Do - 53)) | (1 << (JavaScriptParser.Instanceof - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.Case - 53)) | (1 << (JavaScriptParser.Else - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Var - 53)) | (1 << (JavaScriptParser.Catch - 53)) | (1 << (JavaScriptParser.Finally - 53)) | (1 << (JavaScriptParser.Return - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Continue - 53)) | (1 << (JavaScriptParser.For - 53)) | (1 << (JavaScriptParser.Switch - 53)) | (1 << (JavaScriptParser.While - 53)) | (1 << (JavaScriptParser.Debugger - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.With - 53)) | (1 << (JavaScriptParser.Default - 53)) | (1 << (JavaScriptParser.If - 53)) | (1 << (JavaScriptParser.Throw - 53)) | (1 << (JavaScriptParser.Delete - 53)) | (1 << (JavaScriptParser.In - 53)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (JavaScriptParser.Try - 85)) | (1 << (JavaScriptParser.Class - 85)) | (1 << (JavaScriptParser.Enum - 85)) | (1 << (JavaScriptParser.Extends - 85)) | (1 << (JavaScriptParser.Super - 85)) | (1 << (JavaScriptParser.Const - 85)) | (1 << (JavaScriptParser.Export - 85)) | (1 << (JavaScriptParser.Import - 85)) | (1 << (JavaScriptParser.Implements - 85)) | (1 << (JavaScriptParser.Let - 85)) | (1 << (JavaScriptParser.Private - 85)) | (1 << (JavaScriptParser.Public - 85)) | (1 << (JavaScriptParser.Interface - 85)) | (1 << (JavaScriptParser.Package - 85)) | (1 << (JavaScriptParser.Protected - 85)) | (1 << (JavaScriptParser.Static - 85)) | (1 << (JavaScriptParser.Yield - 85)) | (1 << (JavaScriptParser.Identifier - 85)) | (1 << (JavaScriptParser.StringLiteral - 85)))) !== 0)) {
				{
				{
				this.state = 380;
				this.classElement();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 386;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classElement(): ClassElementContext {
		let _localctx: ClassElementContext = new ClassElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaScriptParser.RULE_classElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
			case 1:
				{
				this.state = 388;
				this.match(JavaScriptParser.Static);
				}
				break;
			}
			this.state = 391;
			this.methodDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaScriptParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 393;
				this.propertyName();
				this.state = 394;
				this.match(JavaScriptParser.OpenParen);
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la===JavaScriptParser.Identifier) {
					{
					this.state = 395;
					this.formalParameterList();
					}
				}

				this.state = 398;
				this.match(JavaScriptParser.CloseParen);
				this.state = 399;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 400;
				this.functionBody();
				this.state = 401;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.getter();
				this.state = 404;
				this.match(JavaScriptParser.OpenParen);
				this.state = 405;
				this.match(JavaScriptParser.CloseParen);
				this.state = 406;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 407;
				this.functionBody();
				this.state = 408;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this.setter();
				this.state = 411;
				this.match(JavaScriptParser.OpenParen);
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la===JavaScriptParser.Identifier) {
					{
					this.state = 412;
					this.formalParameterList();
					}
				}

				this.state = 415;
				this.match(JavaScriptParser.CloseParen);
				this.state = 416;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 417;
				this.functionBody();
				this.state = 418;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 420;
				this.generatorMethod();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public generatorMethod(): GeneratorMethodContext {
		let _localctx: GeneratorMethodContext = new GeneratorMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaScriptParser.RULE_generatorMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.Multiply) {
				{
				this.state = 423;
				this.match(JavaScriptParser.Multiply);
				}
			}

			this.state = 426;
			this.match(JavaScriptParser.Identifier);
			this.state = 427;
			this.match(JavaScriptParser.OpenParen);
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la===JavaScriptParser.Identifier) {
				{
				this.state = 428;
				this.formalParameterList();
				}
			}

			this.state = 431;
			this.match(JavaScriptParser.CloseParen);
			this.state = 432;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 433;
			this.functionBody();
			this.state = 434;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 451;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this.formalParameterArg();
				this.state = 441;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,37,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 437;
						this.match(JavaScriptParser.Comma);
						this.state = 438;
						this.formalParameterArg();
						}
						} 
					}
					this.state = 443;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,37,this._ctx);
				}
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaScriptParser.Comma) {
					{
					this.state = 444;
					this.match(JavaScriptParser.Comma);
					this.state = 445;
					this.lastFormalParameterArg();
					}
				}

				}
				break;
			case JavaScriptParser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.lastFormalParameterArg();
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 449;
				this.arrayLiteral();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 450;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(JavaScriptParser.Identifier);
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.Assign) {
				{
				this.state = 454;
				this.match(JavaScriptParser.Assign);
				this.state = 455;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let _localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaScriptParser.RULE_lastFormalParameterArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 459;
			this.match(JavaScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,41,this._ctx) ) {
			case 1:
				{
				this.state = 461;
				this.sourceElements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 464;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 467; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaScriptParser.RULE_arrayLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(JavaScriptParser.OpenBracket);
			this.state = 473;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 470;
					this.match(JavaScriptParser.Comma);
					}
					} 
				}
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			}
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.Delete - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (JavaScriptParser.Class - 86)) | (1 << (JavaScriptParser.Super - 86)) | (1 << (JavaScriptParser.Identifier - 86)) | (1 << (JavaScriptParser.StringLiteral - 86)) | (1 << (JavaScriptParser.TemplateStringLiteral - 86)))) !== 0)) {
				{
				this.state = 476;
				this.elementList();
				}
			}

			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaScriptParser.Comma) {
				{
				{
				this.state = 479;
				this.match(JavaScriptParser.Comma);
				}
				}
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 485;
			this.match(JavaScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.RegularExpressionLiteral:
			case JavaScriptParser.OpenBracket:
			case JavaScriptParser.OpenParen:
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.PlusPlus:
			case JavaScriptParser.MinusMinus:
			case JavaScriptParser.Plus:
			case JavaScriptParser.Minus:
			case JavaScriptParser.BitNot:
			case JavaScriptParser.Not:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.New:
			case JavaScriptParser.Void:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.Delete:
			case JavaScriptParser.Class:
			case JavaScriptParser.Super:
			case JavaScriptParser.Identifier:
			case JavaScriptParser.StringLiteral:
			case JavaScriptParser.TemplateStringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this.singleExpression(0);
				this.state = 496;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 489; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 488;
							this.match(JavaScriptParser.Comma);
							}
							}
							this.state = 491; 
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while ( _la===JavaScriptParser.Comma );
						this.state = 493;
						this.singleExpression(0);
						}
						} 
					}
					this.state = 498;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
				}
				this.state = 505;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,49,this._ctx) ) {
				case 1:
					{
					this.state = 500; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 499;
						this.match(JavaScriptParser.Comma);
						}
						}
						this.state = 502; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ( _la===JavaScriptParser.Comma );
					this.state = 504;
					this.lastElement();
					}
					break;
				}
				}
				break;
			case JavaScriptParser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.lastElement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lastElement(): LastElementContext {
		let _localctx: LastElementContext = new LastElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaScriptParser.RULE_lastElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 511;
			this.match(JavaScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.OpenBracket || _la===JavaScriptParser.Multiply || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaScriptParser.NullLiteral - 53)) | (1 << (JavaScriptParser.BooleanLiteral - 53)) | (1 << (JavaScriptParser.DecimalLiteral - 53)) | (1 << (JavaScriptParser.HexIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 53)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 53)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 53)) | (1 << (JavaScriptParser.Break - 53)) | (1 << (JavaScriptParser.Do - 53)) | (1 << (JavaScriptParser.Instanceof - 53)) | (1 << (JavaScriptParser.Typeof - 53)) | (1 << (JavaScriptParser.Case - 53)) | (1 << (JavaScriptParser.Else - 53)) | (1 << (JavaScriptParser.New - 53)) | (1 << (JavaScriptParser.Var - 53)) | (1 << (JavaScriptParser.Catch - 53)) | (1 << (JavaScriptParser.Finally - 53)) | (1 << (JavaScriptParser.Return - 53)) | (1 << (JavaScriptParser.Void - 53)) | (1 << (JavaScriptParser.Continue - 53)) | (1 << (JavaScriptParser.For - 53)) | (1 << (JavaScriptParser.Switch - 53)) | (1 << (JavaScriptParser.While - 53)) | (1 << (JavaScriptParser.Debugger - 53)) | (1 << (JavaScriptParser.Function - 53)) | (1 << (JavaScriptParser.This - 53)) | (1 << (JavaScriptParser.With - 53)) | (1 << (JavaScriptParser.Default - 53)) | (1 << (JavaScriptParser.If - 53)) | (1 << (JavaScriptParser.Throw - 53)) | (1 << (JavaScriptParser.Delete - 53)) | (1 << (JavaScriptParser.In - 53)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (JavaScriptParser.Try - 85)) | (1 << (JavaScriptParser.Class - 85)) | (1 << (JavaScriptParser.Enum - 85)) | (1 << (JavaScriptParser.Extends - 85)) | (1 << (JavaScriptParser.Super - 85)) | (1 << (JavaScriptParser.Const - 85)) | (1 << (JavaScriptParser.Export - 85)) | (1 << (JavaScriptParser.Import - 85)) | (1 << (JavaScriptParser.Implements - 85)) | (1 << (JavaScriptParser.Let - 85)) | (1 << (JavaScriptParser.Private - 85)) | (1 << (JavaScriptParser.Public - 85)) | (1 << (JavaScriptParser.Interface - 85)) | (1 << (JavaScriptParser.Package - 85)) | (1 << (JavaScriptParser.Protected - 85)) | (1 << (JavaScriptParser.Static - 85)) | (1 << (JavaScriptParser.Yield - 85)) | (1 << (JavaScriptParser.Identifier - 85)) | (1 << (JavaScriptParser.StringLiteral - 85)))) !== 0)) {
				{
				this.state = 514;
				this.propertyAssignment();
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,51,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 515;
						this.match(JavaScriptParser.Comma);
						this.state = 516;
						this.propertyAssignment();
						}
						} 
					}
					this.state = 521;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,51,this._ctx);
				}
				}
			}

			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaScriptParser.Comma) {
				{
				this.state = 524;
				this.match(JavaScriptParser.Comma);
				}
			}

			this.state = 527;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 529;
				this.propertyName();
				this.state = 530;
				_la = this._input.LA(1);
				if ( !(_la===JavaScriptParser.Assign || _la===JavaScriptParser.Colon) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 531;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 534;
				this.singleExpression(0);
				this.state = 535;
				this.match(JavaScriptParser.CloseBracket);
				this.state = 536;
				this.match(JavaScriptParser.Colon);
				this.state = 537;
				this.singleExpression(0);
				}
				break;

			case 3:
				_localctx = new PropertyGetterContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 539;
				this.getter();
				this.state = 540;
				this.match(JavaScriptParser.OpenParen);
				this.state = 541;
				this.match(JavaScriptParser.CloseParen);
				this.state = 542;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 543;
				this.functionBody();
				this.state = 544;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 4:
				_localctx = new PropertySetterContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 546;
				this.setter();
				this.state = 547;
				this.match(JavaScriptParser.OpenParen);
				this.state = 548;
				this.match(JavaScriptParser.Identifier);
				this.state = 549;
				this.match(JavaScriptParser.CloseParen);
				this.state = 550;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 551;
				this.functionBody();
				this.state = 552;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 5:
				_localctx = new MethodPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 554;
				this.generatorMethod();
				}
				break;

			case 6:
				_localctx = new PropertyShorthandContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 555;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaScriptParser.RULE_propertyName);
		try {
			this.state = 561;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.identifierName();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 560;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaScriptParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(JavaScriptParser.OpenParen);
			this.state = 577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.RegularExpressionLiteral:
			case JavaScriptParser.OpenBracket:
			case JavaScriptParser.OpenParen:
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.PlusPlus:
			case JavaScriptParser.MinusMinus:
			case JavaScriptParser.Plus:
			case JavaScriptParser.Minus:
			case JavaScriptParser.BitNot:
			case JavaScriptParser.Not:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.New:
			case JavaScriptParser.Void:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.Delete:
			case JavaScriptParser.Class:
			case JavaScriptParser.Super:
			case JavaScriptParser.Identifier:
			case JavaScriptParser.StringLiteral:
			case JavaScriptParser.TemplateStringLiteral:
				{
				this.state = 564;
				this.singleExpression(0);
				this.state = 569;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 565;
						this.match(JavaScriptParser.Comma);
						this.state = 566;
						this.singleExpression(0);
						}
						} 
					}
					this.state = 571;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
				}
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaScriptParser.Comma) {
					{
					this.state = 572;
					this.match(JavaScriptParser.Comma);
					this.state = 573;
					this.lastArgument();
					}
				}

				}
				break;
			case JavaScriptParser.Ellipsis:
				{
				this.state = 576;
				this.lastArgument();
				}
				break;
			case JavaScriptParser.CloseParen:
				break;
			default:
				break;
			}
			this.state = 579;
			this.match(JavaScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lastArgument(): LastArgumentContext {
		let _localctx: LastArgumentContext = new LastArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaScriptParser.RULE_lastArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 582;
			this.match(JavaScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.singleExpression(0);
			this.state = 589;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,59,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 585;
					this.match(JavaScriptParser.Comma);
					this.state = 586;
					this.singleExpression(0);
					}
					} 
				}
				this.state = 591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,59,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	@RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, JavaScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 593;
				this.match(JavaScriptParser.Function);
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaScriptParser.Identifier) {
					{
					this.state = 594;
					this.match(JavaScriptParser.Identifier);
					}
				}

				this.state = 597;
				this.match(JavaScriptParser.OpenParen);
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la===JavaScriptParser.Identifier) {
					{
					this.state = 598;
					this.formalParameterList();
					}
				}

				this.state = 601;
				this.match(JavaScriptParser.CloseParen);
				this.state = 602;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 603;
				this.functionBody();
				this.state = 604;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 2:
				{
				_localctx = new ClassExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 606;
				this.match(JavaScriptParser.Class);
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaScriptParser.Identifier) {
					{
					this.state = 607;
					this.match(JavaScriptParser.Identifier);
					}
				}

				this.state = 610;
				this.classTail();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 611;
				this.match(JavaScriptParser.New);
				this.state = 612;
				this.singleExpression(0);
				this.state = 614;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
				case 1:
					{
					this.state = 613;
					this.arguments();
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 616;
				this.match(JavaScriptParser.Delete);
				this.state = 617;
				this.singleExpression(33);
				}
				break;

			case 5:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 618;
				this.match(JavaScriptParser.Void);
				this.state = 619;
				this.singleExpression(32);
				}
				break;

			case 6:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 620;
				this.match(JavaScriptParser.Typeof);
				this.state = 621;
				this.singleExpression(31);
				}
				break;

			case 7:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 622;
				this.match(JavaScriptParser.PlusPlus);
				this.state = 623;
				this.singleExpression(30);
				}
				break;

			case 8:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 624;
				this.match(JavaScriptParser.MinusMinus);
				this.state = 625;
				this.singleExpression(29);
				}
				break;

			case 9:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 626;
				this.match(JavaScriptParser.Plus);
				this.state = 627;
				this.singleExpression(28);
				}
				break;

			case 10:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 628;
				this.match(JavaScriptParser.Minus);
				this.state = 629;
				this.singleExpression(27);
				}
				break;

			case 11:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 630;
				this.match(JavaScriptParser.BitNot);
				this.state = 631;
				this.singleExpression(26);
				}
				break;

			case 12:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 632;
				this.match(JavaScriptParser.Not);
				this.state = 633;
				this.singleExpression(25);
				}
				break;

			case 13:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 634;
				this.match(JavaScriptParser.This);
				}
				break;

			case 14:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 635;
				this.match(JavaScriptParser.Identifier);
				}
				break;

			case 15:
				{
				_localctx = new SuperExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 636;
				this.match(JavaScriptParser.Super);
				}
				break;

			case 16:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 637;
				this.literal();
				}
				break;

			case 17:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 638;
				this.arrayLiteral();
				}
				break;

			case 18:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 639;
				this.objectLiteral();
				}
				break;

			case 19:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 640;
				this.match(JavaScriptParser.OpenParen);
				this.state = 641;
				this.expressionSequence();
				this.state = 642;
				this.match(JavaScriptParser.CloseParen);
				}
				break;

			case 20:
				{
				_localctx = new ArrowFunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 644;
				this.arrowFunctionParameters();
				this.state = 645;
				this.match(JavaScriptParser.ARROW);
				this.state = 646;
				this.arrowFunctionBody();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 719;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 717;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 650;
						if (!(this.precpred(this._ctx, 24))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						this.state = 651;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.Multiply) | (1 << JavaScriptParser.Divide) | (1 << JavaScriptParser.Modulus))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 652;
						this.singleExpression(25);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 653;
						if (!(this.precpred(this._ctx, 23))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						this.state = 654;
						_la = this._input.LA(1);
						if ( !(_la===JavaScriptParser.Plus || _la===JavaScriptParser.Minus) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 655;
						this.singleExpression(24);
						}
						break;

					case 3:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 656;
						if (!(this.precpred(this._ctx, 22))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						this.state = 657;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RightShiftArithmetic) | (1 << JavaScriptParser.LeftShiftArithmetic) | (1 << JavaScriptParser.RightShiftLogical))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 658;
						this.singleExpression(23);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 659;
						if (!(this.precpred(this._ctx, 21))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						this.state = 660;
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.LessThan) | (1 << JavaScriptParser.MoreThan) | (1 << JavaScriptParser.LessThanEquals) | (1 << JavaScriptParser.GreaterThanEquals))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 661;
						this.singleExpression(22);
						}
						break;

					case 5:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 662;
						if (!(this.precpred(this._ctx, 20))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						this.state = 663;
						this.match(JavaScriptParser.Instanceof);
						this.state = 664;
						this.singleExpression(21);
						}
						break;

					case 6:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 665;
						if (!(this.precpred(this._ctx, 19))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						this.state = 666;
						this.match(JavaScriptParser.In);
						this.state = 667;
						this.singleExpression(20);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 668;
						if (!(this.precpred(this._ctx, 18))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						this.state = 669;
						_la = this._input.LA(1);
						if ( !(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaScriptParser.Equals_ - 32)) | (1 << (JavaScriptParser.NotEquals - 32)) | (1 << (JavaScriptParser.IdentityEquals - 32)) | (1 << (JavaScriptParser.IdentityNotEquals - 32)))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 670;
						this.singleExpression(19);
						}
						break;

					case 8:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 671;
						if (!(this.precpred(this._ctx, 17))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						this.state = 672;
						this.match(JavaScriptParser.BitAnd);
						this.state = 673;
						this.singleExpression(18);
						}
						break;

					case 9:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 674;
						if (!(this.precpred(this._ctx, 16))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						this.state = 675;
						this.match(JavaScriptParser.BitXOr);
						this.state = 676;
						this.singleExpression(17);
						}
						break;

					case 10:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 677;
						if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						this.state = 678;
						this.match(JavaScriptParser.BitOr);
						this.state = 679;
						this.singleExpression(16);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 680;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 681;
						this.match(JavaScriptParser.And);
						this.state = 682;
						this.singleExpression(15);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 683;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 684;
						this.match(JavaScriptParser.Or);
						this.state = 685;
						this.singleExpression(14);
						}
						break;

					case 13:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 686;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 687;
						this.match(JavaScriptParser.QuestionMark);
						this.state = 688;
						this.singleExpression(0);
						this.state = 689;
						this.match(JavaScriptParser.Colon);
						this.state = 690;
						this.singleExpression(13);
						}
						break;

					case 14:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 692;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 693;
						this.match(JavaScriptParser.Assign);
						this.state = 694;
						this.singleExpression(12);
						}
						break;

					case 15:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 695;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 696;
						this.assignmentOperator();
						this.state = 697;
						this.singleExpression(11);
						}
						break;

					case 16:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 699;
						if (!(this.precpred(this._ctx, 39))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 39)");
						this.state = 700;
						this.match(JavaScriptParser.OpenBracket);
						this.state = 701;
						this.expressionSequence();
						this.state = 702;
						this.match(JavaScriptParser.CloseBracket);
						}
						break;

					case 17:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 704;
						if (!(this.precpred(this._ctx, 38))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 38)");
						this.state = 705;
						this.match(JavaScriptParser.Dot);
						this.state = 706;
						this.identifierName();
						}
						break;

					case 18:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 707;
						if (!(this.precpred(this._ctx, 37))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 37)");
						this.state = 708;
						this.arguments();
						}
						break;

					case 19:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 709;
						if (!(this.precpred(this._ctx, 35))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 35)");
						this.state = 710;
						if (!(notLineTerminator())) throw new FailedPredicateException(this, "notLineTerminator()");
						this.state = 711;
						this.match(JavaScriptParser.PlusPlus);
						}
						break;

					case 20:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 712;
						if (!(this.precpred(this._ctx, 34))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 34)");
						this.state = 713;
						if (!(notLineTerminator())) throw new FailedPredicateException(this, "notLineTerminator()");
						this.state = 714;
						this.match(JavaScriptParser.MinusMinus);
						}
						break;

					case 21:
						{
						_localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 715;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 716;
						this.match(JavaScriptParser.TemplateStringLiteral);
						}
						break;
					}
					} 
				}
				this.state = 721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let _localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 728;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 722;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			case JavaScriptParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
				this.match(JavaScriptParser.OpenParen);
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la===JavaScriptParser.Identifier) {
					{
					this.state = 724;
					this.formalParameterList();
					}
				}

				this.state = 727;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let _localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,69,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 730;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 732;
				this.functionBody();
				this.state = 733;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			_la = this._input.LA(1);
			if ( !(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JavaScriptParser.MultiplyAssign - 41)) | (1 << (JavaScriptParser.DivideAssign - 41)) | (1 << (JavaScriptParser.ModulusAssign - 41)) | (1 << (JavaScriptParser.PlusAssign - 41)) | (1 << (JavaScriptParser.MinusAssign - 41)) | (1 << (JavaScriptParser.LeftShiftArithmeticAssign - 41)) | (1 << (JavaScriptParser.RightShiftArithmeticAssign - 41)) | (1 << (JavaScriptParser.RightShiftLogicalAssign - 41)) | (1 << (JavaScriptParser.BitAndAssign - 41)) | (1 << (JavaScriptParser.BitXorAssign - 41)) | (1 << (JavaScriptParser.BitOrAssign - 41)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaScriptParser.RULE_literal);
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 739;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 740;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 741;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.TemplateStringLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 742;
				this.match(JavaScriptParser.TemplateStringLiteral);
				}
				break;
			case JavaScriptParser.RegularExpressionLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 743;
				this.match(JavaScriptParser.RegularExpressionLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 744;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			_la = this._input.LA(1);
			if ( !(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (JavaScriptParser.DecimalLiteral - 55)) | (1 << (JavaScriptParser.HexIntegerLiteral - 55)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 55)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 55)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 55)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaScriptParser.RULE_identifierName);
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 749;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 750;
				this.reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaScriptParser.RULE_reservedWord);
		try {
			this.state = 756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.keyword();
				}
				break;
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 754;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 755;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			_la = this._input.LA(1);
			if ( !(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (JavaScriptParser.Break - 60)) | (1 << (JavaScriptParser.Do - 60)) | (1 << (JavaScriptParser.Instanceof - 60)) | (1 << (JavaScriptParser.Typeof - 60)) | (1 << (JavaScriptParser.Case - 60)) | (1 << (JavaScriptParser.Else - 60)) | (1 << (JavaScriptParser.New - 60)) | (1 << (JavaScriptParser.Var - 60)) | (1 << (JavaScriptParser.Catch - 60)) | (1 << (JavaScriptParser.Finally - 60)) | (1 << (JavaScriptParser.Return - 60)) | (1 << (JavaScriptParser.Void - 60)) | (1 << (JavaScriptParser.Continue - 60)) | (1 << (JavaScriptParser.For - 60)) | (1 << (JavaScriptParser.Switch - 60)) | (1 << (JavaScriptParser.While - 60)) | (1 << (JavaScriptParser.Debugger - 60)) | (1 << (JavaScriptParser.Function - 60)) | (1 << (JavaScriptParser.This - 60)) | (1 << (JavaScriptParser.With - 60)) | (1 << (JavaScriptParser.Default - 60)) | (1 << (JavaScriptParser.If - 60)) | (1 << (JavaScriptParser.Throw - 60)) | (1 << (JavaScriptParser.Delete - 60)) | (1 << (JavaScriptParser.In - 60)) | (1 << (JavaScriptParser.Try - 60)) | (1 << (JavaScriptParser.Class - 60)) | (1 << (JavaScriptParser.Enum - 60)) | (1 << (JavaScriptParser.Extends - 60)) | (1 << (JavaScriptParser.Super - 60)) | (1 << (JavaScriptParser.Const - 60)) | (1 << (JavaScriptParser.Export - 60)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (JavaScriptParser.Import - 92)) | (1 << (JavaScriptParser.Implements - 92)) | (1 << (JavaScriptParser.Let - 92)) | (1 << (JavaScriptParser.Private - 92)) | (1 << (JavaScriptParser.Public - 92)) | (1 << (JavaScriptParser.Interface - 92)) | (1 << (JavaScriptParser.Package - 92)) | (1 << (JavaScriptParser.Protected - 92)) | (1 << (JavaScriptParser.Static - 92)) | (1 << (JavaScriptParser.Yield - 92)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JavaScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(JavaScriptParser.Identifier);
			this.state = 761;
			if (!(p("get"))) throw new FailedPredicateException(this, "p(\"get\")");
			this.state = 762;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(JavaScriptParser.Identifier);
			this.state = 765;
			if (!(p("set"))) throw new FailedPredicateException(this, "p(\"set\")");
			this.state = 766;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaScriptParser.RULE_eos);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 768;
				this.match(JavaScriptParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 769;
				this.match(JavaScriptParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 770;
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "lineTerminatorAhead()");
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 771;
				if (!(this.closeBrace())) throw new FailedPredicateException(this, "closeBrace()");
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expressionStatement_sempred(_localctx as ExpressionStatementContext, predIndex);

		case 11:
			return this.iterationStatement_sempred(_localctx as IterationStatementContext, predIndex);

		case 13:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 14:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 15:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 23:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 48:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 57:
			return this.getter_sempred(_localctx as GetterContext, predIndex);

		case 58:
			return this.setter_sempred(_localctx as SetterContext, predIndex);

		case 59:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private expressionStatement_sempred(_localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(_localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return p("of");

		case 2:
			return p("of");
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 24);

		case 8:
			return this.precpred(this._ctx, 23);

		case 9:
			return this.precpred(this._ctx, 22);

		case 10:
			return this.precpred(this._ctx, 21);

		case 11:
			return this.precpred(this._ctx, 20);

		case 12:
			return this.precpred(this._ctx, 19);

		case 13:
			return this.precpred(this._ctx, 18);

		case 14:
			return this.precpred(this._ctx, 17);

		case 15:
			return this.precpred(this._ctx, 16);

		case 16:
			return this.precpred(this._ctx, 15);

		case 17:
			return this.precpred(this._ctx, 14);

		case 18:
			return this.precpred(this._ctx, 13);

		case 19:
			return this.precpred(this._ctx, 12);

		case 20:
			return this.precpred(this._ctx, 11);

		case 21:
			return this.precpred(this._ctx, 10);

		case 22:
			return this.precpred(this._ctx, 39);

		case 23:
			return this.precpred(this._ctx, 38);

		case 24:
			return this.precpred(this._ctx, 37);

		case 25:
			return this.precpred(this._ctx, 35);

		case 26:
			return notLineTerminator();

		case 27:
			return this.precpred(this._ctx, 34);

		case 28:
			return notLineTerminator();

		case 29:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private getter_sempred(_localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.p("get");
		}
		return true;
	}
	private setter_sempred(_localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.p("set");
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.lineTerminatorAhead();

		case 33:
			return this.closeBrace();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03p\u0309\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x03\x02\x05\x02|\n\x02\x03\x02\x03\x02\x03\x03\x05\x03\x81\n\x03"+
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04"+
		"\x03\x04\x05\x04\x96\n\x04\x03\x05\x03\x05\x05\x05\x9A\n\x05\x03\x05\x03"+
		"\x05\x03\x06\x06\x06\x9F\n\x06\r\x06\x0E\x06\xA0\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\b\x03\b\x03\b\x07\b\xAA\n\b\f\b\x0E\b\xAD\v\b\x03\t\x03\t"+
		"\x03\t\x05\t\xB2\n\t\x03\t\x03\t\x05\t\xB6\n\t\x03\n\x03\n\x03\v\x03\v"+
		"\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xC5\n\f\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xD8\n\r\x03\r\x03\r\x05\r\xDC\n\r\x03"+
		"\r\x03\r\x05\r\xE0\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r"+
		"\x05\r\xEA\n\r\x03\r\x03\r\x05\r\xEE\n\r\x03\r\x03\r\x03\r\x03\r\x03\r"+
		"\x03\r\x03\r\x03\r\x03\r\x05\r\xF9\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0106\n\r\x03\r\x03\r\x03\r\x03"+
		"\r\x05\r\u010C\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0113"+
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u011A\n\x10\x03"+
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0121\n\x11\x03\x11\x03\x11"+
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0133\n\x14\x03\x14\x03"+
		"\x14\x05\x14\u0137\n\x14\x05\x14\u0139\n\x14\x03\x14\x03\x14\x03\x15\x06"+
		"\x15\u013E\n\x15\r\x15\x0E\x15\u013F\x03\x16\x03\x16\x03\x16\x03\x16\x05"+
		"\x16\u0146\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\u014B\n\x17\x03\x18\x03"+
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03"+
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u015A\n\x1A\x03\x1A\x05\x1A\u015D\n\x1A\x03"+
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016F\n\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x03 \x03 \x05 \u017C\n \x03 \x03 \x07 \u0180\n \f \x0E \u0183\v \x03"+
		" \x03 \x03!\x05!\u0188\n!\x03!\x03!\x03\"\x03\"\x03\"\x05\"\u018F\n\""+
		"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03"+
		"\"\x03\"\x03\"\x03\"\x05\"\u01A0\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03"+
		"\"\x05\"\u01A8\n\"\x03#\x05#\u01AB\n#\x03#\x03#\x03#\x05#\u01B0\n#\x03"+
		"#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x07$\u01BA\n$\f$\x0E$\u01BD\v$\x03"+
		"$\x03$\x05$\u01C1\n$\x03$\x03$\x03$\x05$\u01C6\n$\x03%\x03%\x03%\x05%"+
		"\u01CB\n%\x03&\x03&\x03&\x03\'\x05\'\u01D1\n\'\x03(\x06(\u01D4\n(\r(\x0E"+
		"(\u01D5\x03)\x03)\x07)\u01DA\n)\f)\x0E)\u01DD\v)\x03)\x05)\u01E0\n)\x03"+
		")\x07)\u01E3\n)\f)\x0E)\u01E6\v)\x03)\x03)\x03*\x03*\x06*\u01EC\n*\r*"+
		"\x0E*\u01ED\x03*\x07*\u01F1\n*\f*\x0E*\u01F4\v*\x03*\x06*\u01F7\n*\r*"+
		"\x0E*\u01F8\x03*\x05*\u01FC\n*\x03*\x05*\u01FF\n*\x03+\x03+\x03+\x03,"+
		"\x03,\x03,\x03,\x07,\u0208\n,\f,\x0E,\u020B\v,\x05,\u020D\n,\x03,\x05"+
		",\u0210\n,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x05-\u022F\n-\x03.\x03.\x03.\x05.\u0234\n.\x03/\x03/"+
		"\x03/\x03/\x07/\u023A\n/\f/\x0E/\u023D\v/\x03/\x03/\x05/\u0241\n/\x03"+
		"/\x05/\u0244\n/\x03/\x03/\x030\x030\x030\x031\x031\x031\x071\u024E\n1"+
		"\f1\x0E1\u0251\v1\x032\x032\x032\x052\u0256\n2\x032\x032\x052\u025A\n"+
		"2\x032\x032\x032\x032\x032\x032\x032\x052\u0263\n2\x032\x032\x032\x03"+
		"2\x052\u0269\n2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x052\u028B\n2\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x072\u02D0\n2\f2\x0E2\u02D3\v2\x03"+
		"3\x033\x033\x053\u02D8\n3\x033\x053\u02DB\n3\x034\x034\x034\x034\x034"+
		"\x054\u02E2\n4\x035\x035\x036\x036\x036\x036\x036\x036\x056\u02EC\n6\x03"+
		"7\x037\x038\x038\x058\u02F2\n8\x039\x039\x039\x059\u02F7\n9\x03:\x03:"+
		"\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x05=\u0307"+
		"\n=\x03=\x02\x02\x03b>\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02"+
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"+
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02"+
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02"+
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02"+
		"v\x02x\x02\x02\f\x05\x02EE\\\\``\x04\x02\r\r\x0F\x0F\x03\x02\x18\x1A\x03"+
		"\x02\x14\x15\x03\x02\x1B\x1D\x03\x02\x1E!\x03\x02\"%\x03\x02+5\x03\x02"+
		"9=\x03\x02>g\u0360\x02{\x03\x02\x02\x02\x04\x80\x03\x02\x02\x02\x06\x95"+
		"\x03\x02\x02\x02\b\x97\x03\x02\x02\x02\n\x9E\x03\x02\x02\x02\f\xA2\x03"+
		"\x02\x02\x02\x0E\xA6\x03\x02\x02\x02\x10\xB1\x03\x02\x02\x02\x12\xB7\x03"+
		"\x02\x02\x02\x14\xB9\x03\x02\x02\x02\x16\xBD\x03\x02\x02\x02\x18\u010B"+
		"\x03\x02\x02\x02\x1A\u010D\x03\x02\x02\x02\x1C\u010F\x03\x02\x02\x02\x1E"+
		"\u0116\x03\x02\x02\x02 \u011D\x03\x02\x02\x02\"\u0124\x03\x02\x02\x02"+
		"$\u012A\x03\x02\x02\x02&\u0130\x03\x02\x02\x02(\u013D\x03\x02\x02\x02"+
		"*\u0141\x03\x02\x02\x02,\u0147\x03\x02\x02\x02.\u014C\x03\x02\x02\x02"+
		"0\u0150\x03\x02\x02\x022\u0155\x03\x02\x02\x024\u015E\x03\x02\x02\x02"+
		"6\u0164\x03\x02\x02\x028\u0167\x03\x02\x02\x02:\u016A\x03\x02\x02\x02"+
		"<\u0175\x03\x02\x02\x02>\u017B\x03\x02\x02\x02@\u0187\x03\x02\x02\x02"+
		"B\u01A7\x03\x02\x02\x02D\u01AA\x03\x02\x02\x02F\u01C5\x03\x02\x02\x02"+
		"H\u01C7\x03\x02\x02\x02J\u01CC\x03\x02\x02\x02L\u01D0\x03\x02\x02\x02"+
		"N\u01D3\x03\x02\x02\x02P\u01D7\x03\x02\x02\x02R\u01FE\x03\x02\x02\x02"+
		"T\u0200\x03\x02\x02\x02V\u0203\x03\x02\x02\x02X\u022E\x03\x02\x02\x02"+
		"Z\u0233\x03\x02\x02\x02\\\u0235\x03\x02\x02\x02^\u0247\x03\x02\x02\x02"+
		"`\u024A\x03\x02\x02\x02b\u028A\x03\x02\x02\x02d\u02DA\x03\x02\x02\x02"+
		"f\u02E1\x03\x02\x02\x02h\u02E3\x03\x02\x02\x02j\u02EB\x03\x02\x02\x02"+
		"l\u02ED\x03\x02\x02\x02n\u02F1\x03\x02\x02\x02p\u02F6\x03\x02\x02\x02"+
		"r\u02F8\x03\x02\x02\x02t\u02FA\x03\x02\x02\x02v\u02FE\x03\x02\x02\x02"+
		"x\u0306\x03\x02\x02\x02z|\x05N(\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02"+
		"|}\x03\x02\x02\x02}~\x07\x02\x02\x03~\x03\x03\x02\x02\x02\x7F\x81\x07"+
		"]\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03"+
		"\x02\x02\x02\x82\x83\x05\x06\x04\x02\x83\x05\x03\x02\x02\x02\x84\x96\x05"+
		"\b\x05\x02\x85\x96\x05\f\x07\x02\x86\x96\x05\x12\n\x02\x87\x96\x05\x14"+
		"\v\x02\x88\x96\x05\x16\f\x02\x89\x96\x05\x18\r\x02\x8A\x96\x05\x1C\x0F"+
		"\x02\x8B\x96\x05\x1E\x10\x02\x8C\x96\x05 \x11\x02\x8D\x96\x05\"\x12\x02"+
		"\x8E\x96\x05.\x18\x02\x8F\x96\x05$\x13\x02\x90\x96\x050\x19\x02\x91\x96"+
		"\x052\x1A\x02\x92\x96\x058\x1D\x02\x93\x96\x05:\x1E\x02\x94\x96\x05<\x1F"+
		"\x02\x95\x84\x03\x02\x02\x02\x95\x85\x03\x02\x02\x02\x95\x86\x03\x02\x02"+
		"\x02\x95\x87\x03\x02\x02\x02\x95\x88\x03\x02\x02\x02\x95\x89\x03\x02\x02"+
		"\x02\x95\x8A\x03\x02\x02\x02\x95\x8B\x03\x02\x02\x02\x95\x8C\x03\x02\x02"+
		"\x02\x95\x8D\x03\x02\x02\x02\x95\x8E\x03\x02\x02\x02\x95\x8F\x03\x02\x02"+
		"\x02\x95\x90\x03\x02\x02\x02\x95\x91\x03\x02\x02\x02\x95\x92\x03\x02\x02"+
		"\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96\x07\x03\x02\x02"+
		"\x02\x97\x99\x07\t\x02\x02\x98\x9A\x05\n\x06\x02\x99\x98\x03\x02\x02\x02"+
		"\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x07\n\x02\x02"+
		"\x9C\t\x03\x02\x02\x02\x9D\x9F\x05\x06\x04\x02\x9E\x9D\x03\x02\x02\x02"+
		"\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02"+
		"\xA1\v\x03\x02\x02\x02\xA2\xA3\x05\x1A\x0E\x02\xA3\xA4\x05\x0E\b\x02\xA4"+
		"\xA5\x05x=\x02\xA5\r\x03\x02\x02\x02\xA6\xAB\x05\x10\t\x02\xA7\xA8\x07"+
		"\f\x02\x02\xA8\xAA\x05\x10\t\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02"+
		"\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\x0F\x03\x02"+
		"\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB2\x07h\x02\x02\xAF\xB2\x05P)\x02"+
		"\xB0\xB2\x05V,\x02\xB1\xAE\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1"+
		"\xB0\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB4\x07\r\x02\x02\xB4"+
		"\xB6\x05b2\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\x11"+
		"\x03\x02\x02\x02\xB7\xB8\x07\v\x02\x02\xB8\x13\x03\x02\x02\x02\xB9\xBA"+
		"\x06\v\x02\x02\xBA\xBB\x05`1\x02\xBB\xBC\x05x=\x02\xBC\x15\x03\x02\x02"+
		"\x02\xBD\xBE\x07S\x02\x02\xBE\xBF\x07\x07\x02\x02\xBF\xC0\x05`1\x02\xC0"+
		"\xC1\x07\b\x02\x02\xC1\xC4\x05\x06\x04\x02\xC2\xC3\x07C\x02\x02\xC3\xC5"+
		"\x05\x06\x04\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\x17"+
		"\x03\x02\x02\x02\xC6\xC7\x07?\x02\x02\xC7\xC8\x05\x06\x04\x02\xC8\xC9"+
		"\x07M\x02\x02\xC9\xCA\x07\x07\x02\x02\xCA\xCB\x05`1\x02\xCB\xCC\x07\b"+
		"\x02\x02\xCC\xCD\x05x=\x02\xCD\u010C\x03\x02\x02\x02\xCE\xCF\x07M\x02"+
		"\x02\xCF\xD0\x07\x07\x02\x02\xD0\xD1\x05`1\x02\xD1\xD2\x07\b\x02\x02\xD2"+
		"\xD3\x05\x06\x04\x02\xD3\u010C\x03\x02\x02\x02\xD4\xD5\x07K\x02\x02\xD5"+
		"\xD7\x07\x07\x02\x02\xD6\xD8\x05`1\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8"+
		"\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x07\v\x02\x02\xDA\xDC"+
		"\x05`1\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03"+
		"\x02\x02\x02\xDD\xDF\x07\v\x02\x02\xDE\xE0\x05`1\x02\xDF\xDE\x03\x02\x02"+
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x07\b\x02"+
		"\x02\xE2\u010C\x05\x06\x04\x02\xE3\xE4\x07K\x02\x02\xE4\xE5\x07\x07\x02"+
		"\x02\xE5\xE6\x05\x1A\x0E\x02\xE6\xE7\x05\x0E\b\x02\xE7\xE9\x07\v\x02\x02"+
		"\xE8\xEA\x05`1\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA"+
		"\xEB\x03\x02\x02\x02\xEB\xED\x07\v\x02\x02\xEC\xEE\x05`1\x02\xED\xEC\x03"+
		"\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x07"+
		"\b\x02\x02\xF0\xF1\x05\x06\x04\x02\xF1\u010C\x03\x02\x02\x02\xF2\xF3\x07"+
		"K\x02\x02\xF3\xF4\x07\x07\x02\x02\xF4\xF8\x05b2\x02\xF5\xF9\x07V\x02\x02"+
		"\xF6\xF7\x07h\x02\x02\xF7\xF9\x06\r\x03\x02\xF8\xF5\x03\x02\x02\x02\xF8"+
		"\xF6\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x05`1\x02\xFB\xFC"+
		"\x07\b\x02\x02\xFC\xFD\x05\x06\x04\x02\xFD\u010C\x03\x02\x02\x02\xFE\xFF"+
		"\x07K\x02\x02\xFF\u0100\x07\x07\x02\x02\u0100\u0101\x05\x1A\x0E\x02\u0101"+
		"\u0105\x05\x10\t\x02\u0102\u0106\x07V\x02\x02\u0103\u0104\x07h\x02\x02"+
		"\u0104\u0106\x06\r\x04\x02\u0105\u0102\x03\x02\x02\x02\u0105\u0103\x03"+
		"\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x05`1\x02\u0108\u0109"+
		"\x07\b\x02\x02\u0109\u010A\x05\x06\x04\x02\u010A\u010C\x03\x02\x02\x02"+
		"\u010B\xC6\x03\x02\x02\x02\u010B\xCE\x03\x02\x02\x02\u010B\xD4\x03\x02"+
		"\x02\x02\u010B\xE3\x03\x02\x02\x02\u010B\xF2\x03\x02\x02\x02\u010B\xFE"+
		"\x03\x02\x02\x02\u010C\x19\x03\x02\x02\x02\u010D\u010E\t\x02\x02\x02\u010E"+
		"\x1B\x03\x02\x02\x02\u010F\u0112\x07J\x02\x02\u0110\u0111\x06\x0F\x05"+
		"\x02\u0111\u0113\x07h\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113"+
		"\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x05x=\x02\u0115"+
		"\x1D\x03\x02\x02\x02\u0116\u0119\x07>\x02\x02\u0117\u0118\x06\x10\x06"+
		"\x02\u0118\u011A\x07h\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A"+
		"\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x05x=\x02\u011C"+
		"\x1F\x03\x02\x02\x02\u011D\u0120\x07H\x02\x02\u011E\u011F\x06\x11\x07"+
		"\x02\u011F\u0121\x05`1\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03"+
		"\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x05x=\x02\u0123!"+
		"\x03\x02\x02\x02\u0124\u0125\x07Q\x02\x02\u0125\u0126\x07\x07\x02\x02"+
		"\u0126\u0127\x05`1\x02\u0127\u0128\x07\b\x02\x02\u0128\u0129\x05\x06\x04"+
		"\x02\u0129#\x03\x02\x02\x02\u012A\u012B\x07L\x02\x02\u012B\u012C\x07\x07"+
		"\x02\x02\u012C\u012D\x05`1\x02\u012D\u012E\x07\b\x02\x02\u012E\u012F\x05"+
		"&\x14\x02\u012F%\x03\x02\x02\x02\u0130\u0132\x07\t\x02\x02\u0131\u0133"+
		"\x05(\x15\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02"+
		"\u0133\u0138\x03\x02\x02\x02\u0134\u0136\x05,\x17\x02\u0135\u0137\x05"+
		"(\x15\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137"+
		"\u0139\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02\u0138\u0139\x03\x02"+
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x07\n\x02\x02\u013B\'"+
		"\x03\x02\x02\x02\u013C\u013E\x05*\x16\x02\u013D\u013C\x03\x02\x02\x02"+
		"\u013E\u013F\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03"+
		"\x02\x02\x02\u0140)\x03\x02\x02\x02\u0141\u0142\x07B\x02\x02\u0142\u0143"+
		"\x05`1\x02\u0143\u0145\x07\x0F\x02\x02\u0144\u0146\x05\n\x06\x02\u0145"+
		"\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146+\x03\x02\x02"+
		"\x02\u0147\u0148\x07R\x02\x02\u0148\u014A\x07\x0F\x02\x02\u0149\u014B"+
		"\x05\n\x06\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02"+
		"\u014B-\x03\x02\x02\x02\u014C\u014D\x07h\x02\x02\u014D\u014E\x07\x0F\x02"+
		"\x02\u014E\u014F\x05\x06\x04\x02\u014F/\x03\x02\x02\x02\u0150\u0151\x07"+
		"T\x02\x02\u0151\u0152\x06\x19\b\x02\u0152\u0153\x05`1\x02\u0153\u0154"+
		"\x05x=\x02\u01541\x03\x02\x02\x02\u0155\u0156\x07W\x02\x02\u0156\u015C"+
		"\x05\b\x05\x02\u0157\u0159\x054\x1B\x02\u0158\u015A\x056\x1C\x02\u0159"+
		"\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015D\x03\x02"+
		"\x02\x02\u015B\u015D\x056\x1C\x02\u015C\u0157\x03\x02\x02\x02\u015C\u015B"+
		"\x03\x02\x02\x02\u015D3\x03\x02\x02\x02\u015E\u015F\x07F\x02\x02\u015F"+
		"\u0160\x07\x07\x02\x02\u0160\u0161\x07h\x02\x02\u0161\u0162\x07\b\x02"+
		"\x02\u0162\u0163\x05\b\x05\x02\u01635\x03\x02\x02\x02\u0164\u0165\x07"+
		"G\x02\x02\u0165\u0166\x05\b\x05\x02\u01667\x03\x02\x02\x02\u0167\u0168"+
		"\x07N\x02\x02\u0168\u0169\x05x=\x02\u01699\x03\x02\x02\x02\u016A\u016B"+
		"\x07O\x02\x02\u016B\u016C\x07h\x02\x02\u016C\u016E\x07\x07\x02\x02\u016D"+
		"\u016F\x05F$\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02"+
		"\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x07\b\x02\x02\u0171\u0172\x07"+
		"\t\x02\x02\u0172\u0173\x05L\'\x02\u0173\u0174\x07\n\x02\x02\u0174;\x03"+
		"\x02\x02\x02\u0175\u0176\x07X\x02\x02\u0176\u0177\x07h\x02\x02\u0177\u0178"+
		"\x05> \x02\u0178=\x03\x02\x02\x02\u0179\u017A\x07Z\x02\x02\u017A\u017C"+
		"\x05b2\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C"+
		"\u017D\x03\x02\x02\x02\u017D\u0181\x07\t\x02\x02\u017E\u0180\x05@!\x02"+
		"\u017F\u017E\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03"+
		"\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0184\x03\x02\x02\x02\u0183"+
		"\u0181\x03\x02\x02\x02\u0184\u0185\x07\n\x02\x02\u0185?\x03\x02\x02\x02"+
		"\u0186\u0188\x07f\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03"+
		"\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x05B\"\x02\u018A"+
		"A\x03\x02\x02\x02\u018B\u018C\x05Z.\x02\u018C\u018E\x07\x07\x02\x02\u018D"+
		"\u018F\x05F$\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02"+
		"\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x07\b\x02\x02\u0191\u0192\x07"+
		"\t\x02\x02\u0192\u0193\x05L\'\x02\u0193\u0194\x07\n\x02\x02\u0194\u01A8"+
		"\x03\x02\x02\x02\u0195\u0196\x05t;\x02\u0196\u0197\x07\x07\x02\x02\u0197"+
		"\u0198\x07\b\x02\x02\u0198\u0199\x07\t\x02\x02\u0199\u019A\x05L\'\x02"+
		"\u019A\u019B\x07\n\x02\x02\u019B\u01A8\x03\x02\x02\x02\u019C\u019D\x05"+
		"v<\x02\u019D\u019F\x07\x07\x02\x02\u019E\u01A0\x05F$\x02\u019F\u019E\x03"+
		"\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1"+
		"\u01A2\x07\b\x02\x02\u01A2\u01A3\x07\t\x02\x02\u01A3\u01A4\x05L\'\x02"+
		"\u01A4\u01A5\x07\n\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A8\x05"+
		"D#\x02\u01A7\u018B\x03\x02\x02\x02\u01A7\u0195\x03\x02\x02\x02\u01A7\u019C"+
		"\x03\x02\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8C\x03\x02\x02\x02\u01A9"+
		"\u01AB\x07\x18\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02"+
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x07h\x02\x02\u01AD\u01AF"+
		"\x07\x07\x02\x02\u01AE\u01B0\x05F$\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF"+
		"\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x07\b\x02"+
		"\x02\u01B2\u01B3\x07\t\x02\x02\u01B3\u01B4\x05L\'\x02\u01B4\u01B5\x07"+
		"\n\x02\x02\u01B5E\x03\x02\x02\x02\u01B6\u01BB\x05H%\x02\u01B7\u01B8\x07"+
		"\f\x02\x02\u01B8\u01BA\x05H%\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BD"+
		"\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02"+
		"\u01BC\u01C0\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01BF\x07"+
		"\f\x02\x02\u01BF\u01C1\x05J&\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1"+
		"\x03\x02\x02\x02\u01C1\u01C6\x03\x02\x02\x02\u01C2\u01C6\x05J&\x02\u01C3"+
		"\u01C6\x05P)\x02\u01C4\u01C6\x05V,\x02\u01C5\u01B6\x03\x02\x02\x02\u01C5"+
		"\u01C2\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C4\x03\x02"+
		"\x02\x02\u01C6G\x03\x02\x02\x02\u01C7\u01CA\x07h\x02\x02\u01C8\u01C9\x07"+
		"\r\x02\x02\u01C9\u01CB\x05b2\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB"+
		"\x03\x02\x02\x02\u01CBI\x03\x02\x02\x02\u01CC\u01CD\x07\x10\x02\x02\u01CD"+
		"\u01CE\x07h\x02\x02\u01CEK\x03\x02\x02\x02\u01CF\u01D1\x05N(\x02\u01D0"+
		"\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1M\x03\x02\x02"+
		"\x02\u01D2\u01D4\x05\x04\x03\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01D5"+
		"\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02"+
		"\u01D6O\x03\x02\x02\x02\u01D7\u01DB\x07\x05\x02\x02\u01D8\u01DA\x07\f"+
		"\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB"+
		"\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DF\x03\x02"+
		"\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE\u01E0\x05R*\x02\u01DF\u01DE"+
		"\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E4\x03\x02\x02\x02"+
		"\u01E1\u01E3\x07\f\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03"+
		"\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5"+
		"\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01E8\x07\x06"+
		"\x02\x02\u01E8Q\x03\x02\x02\x02\u01E9\u01F2\x05b2\x02\u01EA\u01EC\x07"+
		"\f\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED"+
		"\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02"+
		"\x02\x02\u01EF\u01F1\x05b2\x02\u01F0\u01EB\x03\x02\x02\x02\u01F1\u01F4"+
		"\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02"+
		"\u01F3\u01FB\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F7\x07"+
		"\f\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8"+
		"\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x03\x02"+
		"\x02\x02\u01FA\u01FC\x05T+\x02\u01FB\u01F6\x03\x02\x02\x02\u01FB\u01FC"+
		"\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FF\x05T+\x02\u01FE"+
		"\u01E9\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FFS\x03\x02\x02"+
		"\x02\u0200\u0201\x07\x10\x02\x02\u0201\u0202\x07h\x02\x02\u0202U\x03\x02"+
		"\x02\x02\u0203\u020C\x07\t\x02\x02\u0204\u0209";
	private static readonly _serializedATNSegment1: string =
		"\x05X-\x02\u0205\u0206\x07\f\x02\x02\u0206\u0208\x05X-\x02\u0207\u0205"+
		"\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02"+
		"\u0209\u020A\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03"+
		"\x02\x02\x02\u020C\u0204\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D"+
		"\u020F\x03\x02\x02\x02\u020E\u0210\x07\f\x02\x02\u020F\u020E\x03\x02\x02"+
		"\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212"+
		"\x07\n\x02\x02\u0212W\x03\x02\x02\x02\u0213\u0214\x05Z.\x02\u0214\u0215"+
		"\t\x03\x02\x02\u0215\u0216\x05b2\x02\u0216\u022F\x03\x02\x02\x02\u0217"+
		"\u0218\x07\x05\x02\x02\u0218\u0219\x05b2\x02\u0219\u021A\x07\x06\x02\x02"+
		"\u021A\u021B\x07\x0F\x02\x02\u021B\u021C\x05b2\x02\u021C\u022F\x03\x02"+
		"\x02\x02\u021D\u021E\x05t;\x02\u021E\u021F\x07\x07\x02\x02\u021F\u0220"+
		"\x07\b\x02\x02\u0220\u0221\x07\t\x02\x02\u0221\u0222\x05L\'\x02\u0222"+
		"\u0223\x07\n\x02\x02\u0223\u022F\x03\x02\x02\x02\u0224\u0225\x05v<\x02"+
		"\u0225\u0226\x07\x07\x02\x02\u0226\u0227\x07h\x02\x02\u0227\u0228\x07"+
		"\b\x02\x02\u0228\u0229\x07\t\x02\x02\u0229\u022A\x05L\'\x02\u022A\u022B"+
		"\x07\n\x02\x02\u022B\u022F\x03\x02\x02\x02\u022C\u022F\x05D#\x02\u022D"+
		"\u022F\x07h\x02\x02\u022E\u0213\x03\x02\x02\x02\u022E\u0217\x03\x02\x02"+
		"\x02\u022E\u021D\x03\x02\x02\x02\u022E\u0224\x03\x02\x02\x02\u022E\u022C"+
		"\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022FY\x03\x02\x02\x02\u0230"+
		"\u0234\x05n8\x02\u0231\u0234\x07i\x02\x02\u0232\u0234\x05l7\x02\u0233"+
		"\u0230\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0232\x03\x02"+
		"\x02\x02\u0234[\x03\x02\x02\x02\u0235\u0243\x07\x07\x02\x02\u0236\u023B"+
		"\x05b2\x02\u0237\u0238\x07\f\x02\x02\u0238\u023A\x05b2\x02\u0239\u0237"+
		"\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02"+
		"\u023B\u023C\x03\x02\x02\x02\u023C\u0240\x03\x02\x02\x02\u023D\u023B\x03"+
		"\x02\x02\x02\u023E\u023F\x07\f\x02\x02\u023F\u0241\x05^0\x02\u0240\u023E"+
		"\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02"+
		"\u0242\u0244\x05^0\x02\u0243\u0236\x03\x02\x02\x02\u0243\u0242\x03\x02"+
		"\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245"+
		"\u0246\x07\b\x02\x02\u0246]\x03\x02\x02\x02\u0247\u0248\x07\x10\x02\x02"+
		"\u0248\u0249\x07h\x02\x02\u0249_\x03\x02\x02\x02\u024A\u024F\x05b2\x02"+
		"\u024B\u024C\x07\f\x02\x02\u024C\u024E\x05b2\x02\u024D\u024B\x03\x02\x02"+
		"\x02\u024E\u0251\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250"+
		"\x03\x02\x02\x02\u0250a\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252"+
		"\u0253\b2\x01\x02\u0253\u0255\x07O\x02\x02\u0254\u0256\x07h\x02\x02\u0255"+
		"\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02"+
		"\x02\x02\u0257\u0259\x07\x07\x02\x02\u0258\u025A\x05F$\x02\u0259\u0258"+
		"\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02"+
		"\u025B\u025C\x07\b\x02\x02\u025C\u025D\x07\t\x02\x02\u025D\u025E\x05L"+
		"\'\x02\u025E\u025F\x07\n\x02\x02\u025F\u028B\x03\x02\x02\x02\u0260\u0262"+
		"\x07X\x02\x02\u0261\u0263\x07h\x02\x02\u0262\u0261\x03\x02\x02\x02\u0262"+
		"\u0263\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u028B\x05> \x02"+
		"\u0265\u0266\x07D\x02\x02\u0266\u0268\x05b2\x02\u0267\u0269\x05\\/\x02"+
		"\u0268\u0267\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u028B\x03"+
		"\x02\x02\x02\u026A\u026B\x07U\x02\x02\u026B\u028B\x05b2#\u026C\u026D\x07"+
		"I\x02\x02\u026D\u028B\x05b2\"\u026E\u026F\x07A\x02\x02\u026F\u028B\x05"+
		"b2!\u0270\u0271\x07\x12\x02\x02\u0271\u028B\x05b2 \u0272\u0273\x07\x13"+
		"\x02\x02\u0273\u028B\x05b2\x1F\u0274\u0275\x07\x14\x02\x02\u0275\u028B"+
		"\x05b2\x1E\u0276\u0277\x07\x15\x02\x02\u0277\u028B\x05b2\x1D\u0278\u0279"+
		"\x07\x16\x02\x02\u0279\u028B\x05b2\x1C\u027A\u027B\x07\x17\x02\x02\u027B"+
		"\u028B\x05b2\x1B\u027C\u028B\x07P\x02\x02\u027D\u028B\x07h\x02\x02\u027E"+
		"\u028B\x07[\x02\x02\u027F\u028B\x05j6\x02\u0280\u028B\x05P)\x02\u0281"+
		"\u028B\x05V,\x02\u0282\u0283\x07\x07\x02\x02\u0283\u0284\x05`1\x02\u0284"+
		"\u0285\x07\b\x02\x02\u0285\u028B\x03\x02\x02\x02\u0286\u0287\x05d3\x02"+
		"\u0287\u0288\x076\x02\x02\u0288\u0289\x05f4\x02\u0289\u028B\x03\x02\x02"+
		"\x02\u028A\u0252\x03\x02\x02\x02\u028A\u0260\x03\x02\x02\x02\u028A\u0265"+
		"\x03\x02\x02\x02\u028A\u026A\x03\x02\x02\x02\u028A\u026C\x03\x02\x02\x02"+
		"\u028A\u026E\x03\x02\x02\x02\u028A\u0270\x03\x02\x02\x02\u028A\u0272\x03"+
		"\x02\x02\x02\u028A\u0274\x03\x02\x02\x02\u028A\u0276\x03\x02\x02\x02\u028A"+
		"\u0278\x03\x02\x02\x02\u028A\u027A\x03\x02\x02\x02\u028A\u027C\x03\x02"+
		"\x02\x02\u028A\u027D\x03\x02\x02\x02\u028A\u027E\x03\x02\x02\x02\u028A"+
		"\u027F\x03\x02\x02\x02\u028A\u0280\x03\x02\x02\x02\u028A\u0281\x03\x02"+
		"\x02\x02\u028A\u0282\x03\x02\x02\x02\u028A\u0286\x03\x02\x02\x02\u028B"+
		"\u02D1\x03\x02\x02\x02\u028C\u028D\f\x1A\x02\x02\u028D\u028E\t\x04\x02"+
		"\x02\u028E\u02D0\x05b2\x1B\u028F\u0290\f\x19\x02\x02\u0290\u0291\t\x05"+
		"\x02\x02\u0291\u02D0\x05b2\x1A\u0292\u0293\f\x18\x02\x02\u0293\u0294\t"+
		"\x06\x02\x02\u0294\u02D0\x05b2\x19\u0295\u0296\f\x17\x02\x02\u0296\u0297"+
		"\t\x07\x02\x02\u0297\u02D0\x05b2\x18\u0298\u0299\f\x16\x02\x02\u0299\u029A"+
		"\x07@\x02\x02\u029A\u02D0\x05b2\x17\u029B\u029C\f\x15\x02\x02\u029C\u029D"+
		"\x07V\x02\x02\u029D\u02D0\x05b2\x16\u029E\u029F\f\x14\x02\x02\u029F\u02A0"+
		"\t\b\x02\x02\u02A0\u02D0\x05b2\x15\u02A1\u02A2\f\x13\x02\x02\u02A2\u02A3"+
		"\x07&\x02\x02\u02A3\u02D0\x05b2\x14\u02A4\u02A5\f\x12\x02\x02\u02A5\u02A6"+
		"\x07\'\x02\x02\u02A6\u02D0\x05b2\x13\u02A7\u02A8\f\x11\x02\x02\u02A8\u02A9"+
		"\x07(\x02\x02\u02A9\u02D0\x05b2\x12\u02AA\u02AB\f\x10\x02\x02\u02AB\u02AC"+
		"\x07)\x02\x02\u02AC\u02D0\x05b2\x11\u02AD\u02AE\f\x0F\x02\x02\u02AE\u02AF"+
		"\x07*\x02\x02\u02AF\u02D0\x05b2\x10\u02B0\u02B1\f\x0E\x02\x02\u02B1\u02B2"+
		"\x07\x0E\x02\x02\u02B2\u02B3\x05b2\x02\u02B3\u02B4\x07\x0F\x02\x02\u02B4"+
		"\u02B5\x05b2\x0F\u02B5\u02D0\x03\x02\x02\x02\u02B6\u02B7\f\r\x02\x02\u02B7"+
		"\u02B8\x07\r\x02\x02\u02B8\u02D0\x05b2\x0E\u02B9\u02BA\f\f\x02\x02\u02BA"+
		"\u02BB\x05h5\x02\u02BB\u02BC\x05b2\r\u02BC\u02D0\x03\x02\x02\x02\u02BD"+
		"\u02BE\f)\x02\x02\u02BE\u02BF\x07\x05\x02\x02\u02BF\u02C0\x05`1\x02\u02C0"+
		"\u02C1\x07\x06\x02\x02\u02C1\u02D0\x03\x02\x02\x02\u02C2\u02C3\f(\x02"+
		"\x02\u02C3\u02C4\x07\x11\x02\x02\u02C4\u02D0\x05n8\x02\u02C5\u02C6\f\'"+
		"\x02\x02\u02C6\u02D0\x05\\/\x02\u02C7\u02C8\f%\x02\x02\u02C8\u02C9\x06"+
		"2\x1C\x02\u02C9\u02D0\x07\x12\x02\x02\u02CA\u02CB\f$\x02\x02\u02CB\u02CC"+
		"\x062\x1E\x02\u02CC\u02D0\x07\x13\x02\x02\u02CD\u02CE\f\v\x02\x02\u02CE"+
		"\u02D0\x07j\x02\x02\u02CF\u028C\x03\x02\x02\x02\u02CF\u028F\x03\x02\x02"+
		"\x02\u02CF\u0292\x03\x02\x02\x02\u02CF\u0295\x03\x02\x02\x02\u02CF\u0298"+
		"\x03\x02\x02\x02\u02CF\u029B\x03\x02\x02\x02\u02CF\u029E\x03\x02\x02\x02"+
		"\u02CF\u02A1\x03\x02\x02\x02\u02CF\u02A4\x03\x02\x02\x02\u02CF\u02A7\x03"+
		"\x02\x02\x02\u02CF\u02AA\x03\x02\x02\x02\u02CF\u02AD\x03\x02\x02\x02\u02CF"+
		"\u02B0\x03\x02\x02\x02\u02CF\u02B6\x03\x02\x02\x02\u02CF\u02B9\x03\x02"+
		"\x02\x02\u02CF\u02BD\x03\x02\x02\x02\u02CF\u02C2\x03\x02\x02\x02\u02CF"+
		"\u02C5\x03\x02\x02\x02\u02CF\u02C7\x03\x02\x02\x02\u02CF\u02CA\x03\x02"+
		"\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1"+
		"\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2c\x03\x02\x02"+
		"\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02DB\x07h\x02\x02\u02D5\u02D7"+
		"\x07\x07\x02\x02\u02D6\u02D8\x05F$\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7"+
		"\u02D8\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x07\b\x02"+
		"\x02\u02DA\u02D4\x03\x02\x02\x02\u02DA\u02D5\x03\x02\x02\x02\u02DBe\x03"+
		"\x02\x02\x02\u02DC\u02E2\x05b2\x02\u02DD\u02DE\x07\t\x02\x02\u02DE\u02DF"+
		"\x05L\'\x02\u02DF\u02E0\x07\n\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1"+
		"\u02DC\x03\x02\x02\x02\u02E1\u02DD\x03\x02\x02\x02\u02E2g\x03\x02\x02"+
		"\x02\u02E3\u02E4\t\t\x02\x02\u02E4i\x03\x02\x02\x02\u02E5\u02EC\x077\x02"+
		"\x02\u02E6\u02EC\x078\x02\x02\u02E7\u02EC\x07i\x02\x02\u02E8\u02EC\x07"+
		"j\x02\x02\u02E9\u02EC\x07\x03\x02\x02\u02EA\u02EC\x05l7\x02\u02EB\u02E5"+
		"\x03\x02\x02\x02\u02EB\u02E6\x03\x02\x02\x02\u02EB\u02E7\x03\x02\x02\x02"+
		"\u02EB\u02E8\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EA\x03"+
		"\x02\x02\x02\u02ECk\x03\x02\x02\x02\u02ED\u02EE\t\n\x02\x02\u02EEm\x03"+
		"\x02\x02\x02\u02EF\u02F2\x07h\x02\x02\u02F0\u02F2\x05p9\x02\u02F1\u02EF"+
		"\x03\x02\x02\x02\u02F1\u02F0\x03\x02\x02\x02\u02F2o\x03\x02\x02\x02\u02F3"+
		"\u02F7\x05r:\x02\u02F4\u02F7\x077\x02\x02\u02F5\u02F7\x078\x02\x02\u02F6"+
		"\u02F3\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6\u02F5\x03\x02"+
		"\x02\x02\u02F7q\x03\x02\x02\x02\u02F8\u02F9\t\v\x02\x02\u02F9s\x03\x02"+
		"\x02\x02\u02FA\u02FB\x07h\x02\x02\u02FB\u02FC\x06; \x02\u02FC\u02FD\x05"+
		"Z.\x02\u02FDu\x03\x02\x02\x02\u02FE\u02FF\x07h\x02\x02\u02FF\u0300\x06"+
		"<!\x02\u0300\u0301\x05Z.\x02\u0301w\x03\x02\x02\x02\u0302\u0307\x07\v"+
		"\x02\x02\u0303\u0307\x07\x02\x02\x03\u0304\u0307\x06=\"\x02\u0305\u0307"+
		"\x06=#\x02\u0306\u0302\x03\x02\x02\x02\u0306\u0303\x03\x02\x02\x02\u0306"+
		"\u0304\x03\x02\x02\x02\u0306\u0305\x03\x02\x02\x02\u0307y\x03\x02\x02"+
		"\x02L{\x80\x95\x99\xA0\xAB\xB1\xB5\xC4\xD7\xDB\xDF\xE9\xED\xF8\u0105\u010B"+
		"\u0112\u0119\u0120\u0132\u0136\u0138\u013F\u0145\u014A\u0159\u015C\u016E"+
		"\u017B\u0181\u0187\u018E\u019F\u01A7\u01AA\u01AF\u01BB\u01C0\u01C5\u01CA"+
		"\u01D0\u01D5\u01DB\u01DF\u01E4\u01ED\u01F2\u01F8\u01FB\u01FE\u0209\u020C"+
		"\u020F\u022E\u0233\u023B\u0240\u0243\u024F\u0255\u0259\u0262\u0268\u028A"+
		"\u02CF\u02D1\u02D7\u02DA\u02E1\u02EB\u02F1\u02F6\u0306";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaScriptParser._serializedATNSegment0,
			JavaScriptParser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptParser.__ATN) {
			JavaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
		}

		return JavaScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaScriptParser.EOF, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_program; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterProgram) listener.enterProgram(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitProgram) listener.exitProgram(this);
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Export, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElement) listener.enterSourceElement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElement) listener.exitSourceElement(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public labelledStatement(): LabelledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabelledStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_statement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
}


export class BlockContext extends ParserRuleContext {
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_block; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBlock) listener.enterBlock(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBlock) listener.exitBlock(this);
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_statementList; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatementList) listener.enterStatementList(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatementList) listener.exitStatementList(this);
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_variableStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableStatement) listener.enterVariableStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableStatement) listener.exitVariableStatement(this);
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclarationList; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclarationList) listener.enterVariableDeclarationList(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclarationList) listener.exitVariableDeclarationList(this);
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclaration; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclaration) listener.enterVariableDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclaration) listener.exitVariableDeclaration(this);
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(JavaScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_emptyStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEmptyStatement) listener.enterEmptyStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEmptyStatement) listener.exitEmptyStatement(this);
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_expressionStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionStatement) listener.enterExpressionStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionStatement) listener.exitExpressionStatement(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(JavaScriptParser.If, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_ifStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIfStatement) listener.enterIfStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIfStatement) listener.exitIfStatement(this);
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_iterationStatement; }
 
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(JavaScriptParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: IterationStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDoStatement) listener.enterDoStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDoStatement) listener.exitDoStatement(this);
	}
}
export class ForVarStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForVarStatement) listener.enterForVarStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForVarStatement) listener.exitForVarStatement(this);
	}
}
export class ForVarInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.In, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: IterationStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForVarInStatement) listener.enterForVarInStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForVarInStatement) listener.exitForVarInStatement(this);
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWhileStatement) listener.enterWhileStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWhileStatement) listener.exitWhileStatement(this);
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForStatement) listener.enterForStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForStatement) listener.exitForStatement(this);
	}
}
export class ForInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.In, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: IterationStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForInStatement) listener.enterForInStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForInStatement) listener.exitForInStatement(this);
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Let, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_varModifier; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVarModifier) listener.enterVarModifier(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVarModifier) listener.exitVarModifier(this);
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(JavaScriptParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_continueStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterContinueStatement) listener.enterContinueStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitContinueStatement) listener.exitContinueStatement(this);
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(JavaScriptParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_breakStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBreakStatement) listener.enterBreakStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBreakStatement) listener.exitBreakStatement(this);
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(JavaScriptParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_returnStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReturnStatement) listener.enterReturnStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReturnStatement) listener.exitReturnStatement(this);
	}
}


export class WithStatementContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(JavaScriptParser.With, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_withStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWithStatement) listener.enterWithStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWithStatement) listener.exitWithStatement(this);
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(JavaScriptParser.Switch, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_switchStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSwitchStatement) listener.enterSwitchStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSwitchStatement) listener.exitSwitchStatement(this);
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_caseBlock; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseBlock) listener.enterCaseBlock(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseBlock) listener.exitCaseBlock(this);
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_caseClauses; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClauses) listener.enterCaseClauses(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClauses) listener.exitCaseClauses(this);
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(JavaScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_caseClause; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClause) listener.enterCaseClause(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClause) listener.exitCaseClause(this);
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_defaultClause; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDefaultClause) listener.enterDefaultClause(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDefaultClause) listener.exitDefaultClause(this);
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_labelledStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLabelledStatement) listener.enterLabelledStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLabelledStatement) listener.exitLabelledStatement(this);
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(JavaScriptParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_throwStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThrowStatement) listener.enterThrowStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThrowStatement) listener.exitThrowStatement(this);
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(JavaScriptParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_tryStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTryStatement) listener.enterTryStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTryStatement) listener.exitTryStatement(this);
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(JavaScriptParser.Catch, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_catchProduction; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCatchProduction) listener.enterCatchProduction(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCatchProduction) listener.exitCatchProduction(this);
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(JavaScriptParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_finallyProduction; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFinallyProduction) listener.enterFinallyProduction(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFinallyProduction) listener.exitFinallyProduction(this);
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(JavaScriptParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_debuggerStatement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDebuggerStatement) listener.enterDebuggerStatement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDebuggerStatement) listener.exitDebuggerStatement(this);
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(JavaScriptParser.Function, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_functionDeclaration; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDeclaration) listener.enterFunctionDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDeclaration) listener.exitFunctionDeclaration(this);
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_classDeclaration; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassDeclaration) listener.enterClassDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassDeclaration) listener.exitClassDeclaration(this);
	}
}


export class ClassTailContext extends ParserRuleContext {
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public classElement(): ClassElementContext[];
	public classElement(i: number): ClassElementContext;
	public classElement(i?: number): ClassElementContext | ClassElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassElementContext);
		} else {
			return this.getRuleContext(i, ClassElementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_classTail; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassTail) listener.enterClassTail(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassTail) listener.exitClassTail(this);
	}
}


export class ClassElementContext extends ParserRuleContext {
	public methodDefinition(): MethodDefinitionContext {
		return this.getRuleContext(0, MethodDefinitionContext);
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Static, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_classElement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassElement) listener.enterClassElement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassElement) listener.exitClassElement(this);
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	public generatorMethod(): GeneratorMethodContext | undefined {
		return this.tryGetRuleContext(0, GeneratorMethodContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_methodDefinition; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMethodDefinition) listener.enterMethodDefinition(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMethodDefinition) listener.exitMethodDefinition(this);
	}
}


export class GeneratorMethodContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_generatorMethod; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterGeneratorMethod) listener.enterGeneratorMethod(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitGeneratorMethod) listener.exitGeneratorMethod(this);
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterArgContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterList; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterList) listener.enterFormalParameterList(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterList) listener.exitFormalParameterList(this);
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterArg; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterArg) listener.enterFormalParameterArg(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterArg) listener.exitFormalParameterArg(this);
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(JavaScriptParser.Ellipsis, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_lastFormalParameterArg; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLastFormalParameterArg) listener.enterLastFormalParameterArg(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLastFormalParameterArg) listener.exitLastFormalParameterArg(this);
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_functionBody; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionBody) listener.enterFunctionBody(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionBody) listener.exitFunctionBody(this);
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElements; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElements) listener.enterSourceElements(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElements) listener.exitSourceElements(this);
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_arrayLiteral; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteral) listener.enterArrayLiteral(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteral) listener.exitArrayLiteral(this);
	}
}


export class ElementListContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public lastElement(): LastElementContext | undefined {
		return this.tryGetRuleContext(0, LastElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_elementList; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterElementList) listener.enterElementList(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitElementList) listener.exitElementList(this);
	}
}


export class LastElementContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(JavaScriptParser.Ellipsis, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_lastElement; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLastElement) listener.enterLastElement(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLastElement) listener.exitLastElement(this);
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_objectLiteral; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteral) listener.enterObjectLiteral(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteral) listener.exitObjectLiteral(this);
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_propertyAssignment; }
 
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: PropertyAssignmentContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyExpressionAssignment) listener.enterPropertyExpressionAssignment(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyExpressionAssignment) listener.exitPropertyExpressionAssignment(this);
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: PropertyAssignmentContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterComputedPropertyExpressionAssignment) listener.enterComputedPropertyExpressionAssignment(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitComputedPropertyExpressionAssignment) listener.exitComputedPropertyExpressionAssignment(this);
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: PropertyAssignmentContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyShorthand) listener.enterPropertyShorthand(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyShorthand) listener.exitPropertyShorthand(this);
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	public setter(): SetterContext {
		return this.getRuleContext(0, SetterContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: PropertyAssignmentContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertySetter) listener.enterPropertySetter(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertySetter) listener.exitPropertySetter(this);
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	public getter(): GetterContext {
		return this.getRuleContext(0, GetterContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: PropertyAssignmentContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyGetter) listener.enterPropertyGetter(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyGetter) listener.exitPropertyGetter(this);
	}
}
export class MethodPropertyContext extends PropertyAssignmentContext {
	public generatorMethod(): GeneratorMethodContext {
		return this.getRuleContext(0, GeneratorMethodContext);
	}
	constructor(ctx: PropertyAssignmentContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMethodProperty) listener.enterMethodProperty(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMethodProperty) listener.exitMethodProperty(this);
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_propertyName; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyName) listener.enterPropertyName(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyName) listener.exitPropertyName(this);
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public lastArgument(): LastArgumentContext | undefined {
		return this.tryGetRuleContext(0, LastArgumentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_arguments; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArguments) listener.enterArguments(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArguments) listener.exitArguments(this);
	}
}


export class LastArgumentContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(JavaScriptParser.Ellipsis, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_lastArgument; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLastArgument) listener.enterLastArgument(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLastArgument) listener.exitLastArgument(this);
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_expressionSequence; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionSequence) listener.enterExpressionSequence(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionSequence) listener.exitExpressionSequence(this);
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_singleExpression; }
 
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public TemplateStringLiteral(): TerminalNode { return this.getToken(JavaScriptParser.TemplateStringLiteral, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringExpression) listener.enterTemplateStringExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringExpression) listener.exitTemplateStringExpression(this);
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTernaryExpression) listener.enterTernaryExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTernaryExpression) listener.exitTernaryExpression(this);
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalAndExpression) listener.enterLogicalAndExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalAndExpression) listener.exitLogicalAndExpression(this);
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreIncrementExpression) listener.enterPreIncrementExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreIncrementExpression) listener.exitPreIncrementExpression(this);
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteralExpression) listener.enterObjectLiteralExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteralExpression) listener.exitObjectLiteralExpression(this);
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInExpression) listener.enterInExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInExpression) listener.exitInExpression(this);
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalOrExpression) listener.enterLogicalOrExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalOrExpression) listener.exitLogicalOrExpression(this);
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNotExpression) listener.enterNotExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNotExpression) listener.exitNotExpression(this);
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreDecreaseExpression) listener.enterPreDecreaseExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreDecreaseExpression) listener.exitPreDecreaseExpression(this);
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgumentsExpression) listener.enterArgumentsExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgumentsExpression) listener.exitArgumentsExpression(this);
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(JavaScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThisExpression) listener.enterThisExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThisExpression) listener.exitThisExpression(this);
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	public Function(): TerminalNode { return this.getToken(JavaScriptParser.Function, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionExpression) listener.enterFunctionExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionExpression) listener.exitFunctionExpression(this);
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostDecreaseExpression) listener.enterPostDecreaseExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostDecreaseExpression) listener.exitPostDecreaseExpression(this);
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryMinusExpression) listener.enterUnaryMinusExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryMinusExpression) listener.exitUnaryMinusExpression(this);
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentExpression) listener.enterAssignmentExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentExpression) listener.exitAssignmentExpression(this);
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(JavaScriptParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTypeofExpression) listener.enterTypeofExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTypeofExpression) listener.exitTypeofExpression(this);
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(JavaScriptParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInstanceofExpression) listener.enterInstanceofExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInstanceofExpression) listener.exitInstanceofExpression(this);
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryPlusExpression) listener.enterUnaryPlusExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryPlusExpression) listener.exitUnaryPlusExpression(this);
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(JavaScriptParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeleteExpression) listener.enterDeleteExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeleteExpression) listener.exitDeleteExpression(this);
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEqualityExpression) listener.enterEqualityExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEqualityExpression) listener.exitEqualityExpression(this);
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitXOrExpression) listener.enterBitXOrExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitXOrExpression) listener.exitBitXOrExpression(this);
	}
}
export class ArrowFunctionExpressionContext extends SingleExpressionContext {
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getRuleContext(0, ArrowFunctionParametersContext);
	}
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getRuleContext(0, ArrowFunctionBodyContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionExpression) listener.enterArrowFunctionExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionExpression) listener.exitArrowFunctionExpression(this);
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMultiplicativeExpression) listener.enterMultiplicativeExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMultiplicativeExpression) listener.exitMultiplicativeExpression(this);
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	public Super(): TerminalNode { return this.getToken(JavaScriptParser.Super, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSuperExpression) listener.enterSuperExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSuperExpression) listener.exitSuperExpression(this);
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitShiftExpression) listener.enterBitShiftExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitShiftExpression) listener.exitBitShiftExpression(this);
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterParenthesizedExpression) listener.enterParenthesizedExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitParenthesizedExpression) listener.exitParenthesizedExpression(this);
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostIncrementExpression) listener.enterPostIncrementExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostIncrementExpression) listener.exitPostIncrementExpression(this);
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAdditiveExpression) listener.enterAdditiveExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAdditiveExpression) listener.exitAdditiveExpression(this);
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterRelationalExpression) listener.enterRelationalExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitRelationalExpression) listener.exitRelationalExpression(this);
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitNotExpression) listener.enterBitNotExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitNotExpression) listener.exitBitNotExpression(this);
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNewExpression) listener.enterNewExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNewExpression) listener.exitNewExpression(this);
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteralExpression) listener.enterLiteralExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteralExpression) listener.exitLiteralExpression(this);
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberDotExpression) listener.enterMemberDotExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberDotExpression) listener.exitMemberDotExpression(this);
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteralExpression) listener.enterArrayLiteralExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteralExpression) listener.exitArrayLiteralExpression(this);
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassExpression) listener.enterClassExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassExpression) listener.exitClassExpression(this);
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberIndexExpression) listener.enterMemberIndexExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberIndexExpression) listener.exitMemberIndexExpression(this);
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierExpression) listener.enterIdentifierExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierExpression) listener.exitIdentifierExpression(this);
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitAndExpression) listener.enterBitAndExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitAndExpression) listener.exitBitAndExpression(this);
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitOrExpression) listener.enterBitOrExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitOrExpression) listener.exitBitOrExpression(this);
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperatorExpression) listener.enterAssignmentOperatorExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperatorExpression) listener.exitAssignmentOperatorExpression(this);
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(JavaScriptParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVoidExpression) listener.enterVoidExpression(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVoidExpression) listener.exitVoidExpression(this);
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionParameters; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionParameters) listener.enterArrowFunctionParameters(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionParameters) listener.exitArrowFunctionParameters(this);
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionBody; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionBody) listener.enterArrowFunctionBody(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionBody) listener.exitArrowFunctionBody(this);
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_assignmentOperator; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperator) listener.enterAssignmentOperator(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperator) listener.exitAssignmentOperator(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public TemplateStringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateStringLiteral, 0); }
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_literal; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteral) listener.enterLiteral(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteral) listener.exitLiteral(this);
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_numericLiteral; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNumericLiteral) listener.enterNumericLiteral(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNumericLiteral) listener.exitNumericLiteral(this);
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_identifierName; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierName) listener.enterIdentifierName(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierName) listener.exitIdentifierName(this);
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_reservedWord; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReservedWord) listener.enterReservedWord(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReservedWord) listener.exitReservedWord(this);
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Debugger, 0); }
	public Function(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Function, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Try, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Implements, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Let, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Yield, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_keyword; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterKeyword) listener.enterKeyword(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitKeyword) listener.exitKeyword(this);
	}
}


export class GetterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_getter; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterGetter) listener.enterGetter(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitGetter) listener.exitGetter(this);
	}
}


export class SetterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_setter; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSetter) listener.enterSetter(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSetter) listener.exitSetter(this);
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaScriptParser.RULE_eos; }
	@Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEos) listener.enterEos(this);
	}
	@Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEos) listener.exitEos(this);
	}
}


