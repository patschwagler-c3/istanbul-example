function fun () {
  return "fun";
}

exports.woohoo = function () {
  if (fun() === "fun") {
    return true;
  } else if (false) {
    return false;
  } else {
    return 33;
  }
}