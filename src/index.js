module.exports = function check(str, bracketsConfig) {
  let result = false;
  if (bracketsConfig.length === 1) {
    if (bracketsConfig[0][0] === '(') {
      let regExp = /\(+\)+$/g;
      if (regExp.test(str)) {
        result = true;
      }
    }
    if (bracketsConfig[0][0] === '|') {
      let regExp = /^\|+\|+$/g;
      if (regExp.test(str)) {
        result = true;
      }
    }
  }
  return result;
}
