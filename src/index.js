module.exports = 
function check(str, bracketsConfig) {
  let bracketsStr = [];
  bracketsConfig.forEach(i => bracketsStr.push(i.join('')));

  bracketsStr.forEach(i => {
    while (str.includes(i)) {
      str = str.replace(i, '');
    }
  });

  return str ? false : true;

};










// console.log(check('((()))()', [['(', ')']]));
// // const config = [['(', ')'], ['|', '|']];
