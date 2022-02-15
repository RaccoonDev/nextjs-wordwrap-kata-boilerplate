import { wordwrap } from "../pages/sticker";

describe("wordwrap", () => {
  function t(text, width, expectedResult) {
    expect(wordwrap(text, width)).toBe(expectedResult);
  }

  it("should return null for null", () => {
    t(null, 80, "");
  });

  it("should do return empty string for empty string", () => {
    t("", 80, "");
  });

  it("should return string that is shorter than width", () => {
    t("a", 1, "a");
  });

  it("should return splitted one word", () => {
    t("aa", 1, "a\na");
  });

  it("should return splitted word with more than one char", () => {
    t("aaaa", 2, "aa\naa");
  });

  it("should return correct new lines with mulitple lines", () => {
    t("abcdef", 2, "ab\ncd\nef");
  });

  it("should break the line by space if available", () => {
    t("a b", 2, "a\nb");
  });

  it("should break the line by space with multiple words ona line", () => {
    t("a b c", 3, "a b\nc");
  });

  it("should break the line by last space in the line", () => {
    t("a b c d", 4, "a b\nc d");
  });

  it("should break the word when it exceeds one second line", () => {
    t("a b cdef", 6, "a b\ncdef");
  });

  it("should pass the example", () => {
    t(
      "This is some kind of a longlonglonglong text",
      10,
      "This is\nsome kind\nof a\nlonglonglo\nnglong\ntext"
    );
  });

  it("should throw exception on negative width", () => {
    expect(() => wordwrap("text", -3)).toThrow("illegal negative width");
  });
});
