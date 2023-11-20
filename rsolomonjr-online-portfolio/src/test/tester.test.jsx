import  {describe, it, expect, should} from "vitest";

describe("Example Suite", () => {
    it(
        'should return true', () => {
            const sum = 2 + 2 
            expect(sum).toEqual(4)
        }
    )
})