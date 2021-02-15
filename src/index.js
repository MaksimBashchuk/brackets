module.exports = 
function check(str, bracketsConfig) {
  let bracketsStr = [];
  bracketsConfig.forEach(i => bracketsStr.push(i.join('')));

  for (let i = 0; i < str.length; i++) {
    
    bracketsStr.forEach(i => {
      while (str.includes(i)) {
        str = str.replace(i, '');
      }
    });

    if (bracketsStr.some(elem => str.includes(elem))) {
      i--;
    }
  }
  return str ? false : true;
};