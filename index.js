let x = `Years old`;
let n = "ROOMS";

function translateFun(x, n) {
  let y = x.toLocaleUpperCase().replaceAll(/[,؟ ?.’0123465798-]/g, "");

  let p = `"${y}":"${x}",`;
  let t = `{{'${n}.${y}' | translate}}`;

  console.log(t);
  return p;
}

console.log(translateFun(x, n));
