const { woohoo } = require("../dir1/woohoo");

describe("wohoo test", function () {
  it("should return true", function () {
    expect(woohoo()).toBeTrue;
  });
});