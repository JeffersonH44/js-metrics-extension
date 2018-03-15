import countTokens from "../parser/countTokens";
import Halstead from "../metrics/Halstead";

describe("Test count tokens", () => {
    test("Main test", () => {
        let code = `
            "use strict";
            var dsal = 10;
        `;

        let countedTokens = countTokens(code);
        let hasltead = new Halstead(countedTokens);
        console.log(hasltead.getVolume());
    });
});