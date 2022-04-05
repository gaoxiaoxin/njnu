/* 
@params: category ==> 是等级
*/
exports.getNum = (category, i) => {
  let num = 1.5;
  if (category > 2) {
    num = category
  }
  let x = 0;
  let y = 0;
  // 获取随机数
  x = getRndInteger(num * -100, num * 100);
  console.log(x);
  let sqrtNum = ((num * 100) ** 2) - x ** 2
  // 让y上下随机
  y = Math.sqrt(sqrtNum) * ((-1) ** i)
  console.log(y);
  return {
    x,
    y
  }
}

// 生成随机数的函数
function getRndInteger(min = -100, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}