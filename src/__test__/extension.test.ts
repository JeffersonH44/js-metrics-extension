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
        console.log(hasltead.getDifficulty());
        console.log(hasltead.getEffort());
        console.log(hasltead.getTimeToImplement());
        console.log(hasltead.getBugsDelivered());

        // TODO: test halstead metrics
        expect(42).toBe(43);
    });
});