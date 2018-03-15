import countTokens from "../parser/countTokens";

describe("Test count tokens", () => {
    test("Main test", () => {
        let code = `
            "use strict";
            var dsal = 10;
        `;

        console.log(countTokens(code));
    });
});