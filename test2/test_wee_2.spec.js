const { wee } = require("../dir1/wee");

describe("wee test 2", function () {
  it("should return not fun", function () {
    expect(wee(false)).toEqual("not fun");
  });
});