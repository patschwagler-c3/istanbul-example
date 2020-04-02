exports.yeah = function () {
  for (let i = 0; i < 2; i++) {
    if (i === 999) {
      console.log("never used");
    }
    console.log("yeah!");
  }
  return true;
}