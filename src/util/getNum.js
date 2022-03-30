// exports.getNum = function (category) {
//   let num = 1;
//   if (category > 2) {
//     num = category
//   }
//   let randomNUm = getRndInteger(num * -100, num * 100)
//   switch (num) {
//     // 范围在100以外
//     case 0: {
//       if (randomNUm > 0) {
//         randomNUm += 100
//       } else {
//         randomNUm -= 100
//       }
//       break;
//     }
//     // 范围在300以外
//     case 3: {
//       if (randomNUm > 0) {
//         randomNUm = (randomNUm) + 100 > 300 ? (randomNUm) + 100 : 200 + randomNUm
//       } else {
//         randomNUm = (randomNUm) - 100 > -300 ? -200 + randomNUm : (randomNUm) - 100
//       }
//       break;
//     }
//   }
//   console.log(category, randomNUm);
//   return randomNUm + ''
// }

exports.getNum = (category, i) => {
  let num = 1.5;
  if (category > 2) {
    num = category
  }
  let x = 0;
  let y = 0;
  x = getRndInteger(num * -100, num * 100);
  console.log(x);
  sqrtNum = ((num * 100) ** 2) - x ** 2
  // console.log(num ** 2);
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