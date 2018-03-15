import { Token } from "antlr4ts";

export default interface TokenCounter {
    count: number;
    token: Token;
}