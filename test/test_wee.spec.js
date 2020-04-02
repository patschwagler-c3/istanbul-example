const { wee } = require("../dir1/wee");

describe("wee test", function () {
  it("should return fun", function () {
    expect(wee()).toEqual("fun");
  });
});