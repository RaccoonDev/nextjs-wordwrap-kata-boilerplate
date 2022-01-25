import { wordwrap } from "../pages/sticker";

describe("wordwrap", () => {
  it("should do something", () => {
    expect(wordwrap("", 80)).toBe("");
  });
});
