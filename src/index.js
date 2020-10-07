module.exports = 
function check(str, bracketsConfig) {
  let bracketsStr = [];
  bracketsConfig.forEach(i => bracketsStr.push(i.join('')));

  for (let i = 0; i < str.length * 5; i++) {
    
    bracketsStr.forEach(i => {
      while (str.includes(i)) {
        str = str.replace(i, '');
      }
    });
    
  }
  return str ? false : true;
};