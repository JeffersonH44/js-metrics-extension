import countTokens from "../lexer/countTokens";

describe("Test count tokens", () => {

    // Defines a Mocha unit test
    test("Main test", () => {
        let code = `
            "use strict";
            var dsal = 10;
        `;

        console.log(countTokens(code).map(elem => elem.text));
    });
});