const { yeah } = require("../dir1/dir2/yeah");

describe("yeah test", function () {
  it("should return true", function () {
    expect(yeah()).toBeTrue;
  });
});