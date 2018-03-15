import countTokens from "../lexer/countTokens";

describe("example test", () => {

    // Defines a Mocha unit test
    test("Something 1", () => {
        console.log(countTokens("const a = 1;"));
        expect(42).toBe(42);
    });
});