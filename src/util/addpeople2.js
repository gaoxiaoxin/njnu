const fs = require('fs');
const path = require('path');
const { getNum } = require('./getNum')
const filePath = path.join(__dirname, '../components/personageRelation/ensemable/config/panzunqi.json')



let outerRadius = 200;
let innerRadius = 150;

let peopleId = 9;
let fileData = {
  nodes: [
    {
      id: peopleId,
      name: '潘遵祁',
      symbolSize: 20,
      x: 0,
      y: 0,
      value: '本人',
      category: 0
    }
  ],
  links: []
}

// 要配置的人物关系
let peopleRelation = {
  cognation: [],
  teacAndStu: [],
  friend: []
}
let cognStr = '祖父-潘奕隽、父亲-潘世璜、祖父-潘榕皋、弟-潘希甫、妻子-汪氏、从父-文恭公'
let teacAndStuStr = '门人-叶昌炽、友人-张际亮、友人-杨沂孙、友人-许鹤巢、友人-章铁珊、友人-缪小云、友人-亢树滋、友人-吴云'
let Friendstr = ''
// 注入cog
let cogArray = cognStr.split('、')
for (let j = 0; j < cogArray.length; j++) {
  let innerArray = cogArray[j].split('-')
  peopleRelation.cognation.push({
    name: innerArray[1],
    relation: innerArray[0]
  })
}
// 注入teacAndStu
let teacAndStuArray = teacAndStuStr.split('、')
for (let j = 0; j < teacAndStuArray.length; j++) {
  let innerArray = teacAndStuArray[j].split('-')
  peopleRelation.teacAndStu.push({
    name: innerArray[1],
    relation: innerArray[0]
  })
}
// 注入friend
peopleRelation.friend = Friendstr.split('、');

var idNum = 0;
var arrayNum = 0
/* 
1. 确定外圆的半径和内圆的半径
2. 确定友人，亲族，师生的个数
3. 平分半径
4. 第一轮半径递减，第二轮递加
*/
let innerLength = peopleRelation.cognation.length + peopleRelation.teacAndStu.length;
let outerLength = peopleRelation.friend.length
// 返回一个包含各种点的坐标组
function getNumArray(radius, length) {
  // 获取x轴的间距
  let interval = (radius * 2) / (Math.round(length / 2));
  let x = -radius;
  let y = 0;
  let RadiusNum = (radius ** 2);
  let NumArray = [{
    x: -radius,
    y: 0
  }, {
    x: radius,
    y: 0
  }]
  for (let i = 0; i < Math.round((length - 2) / 2); i++) {
    x = x + interval;
    y = Math.sqrt(RadiusNum - x ** 2)
    NumArray.push({
      x,
      y
    })
  }
  x = radius;
  for (let i = 0; i < (length - 2) - Math.round(((length - 2) / 2)); i++) {
    x = x - interval;
    y = Math.sqrt(RadiusNum - x ** 2) * -1
    NumArray.push({
      x,
      y
    })
  }
  return NumArray;
}
function addData(array, category = 1, dotArray) {
  if (array.length === 0) {
    return
  }
  for (let i = 0; i < array.length; i++, idNum++, arrayNum++) {
    let node = {
      id: `${peopleId}-${idNum}`,
      name: array[i].name || array[i],
      symbolSize: 10,
      value: array[i].relation || '友人',
      category: category,
      ...dotArray[arrayNum]
    }
    fileData.nodes.push(node)
  }
}
// 添加连接的数据函数
function addLinks(length) {
  for (let i = 0; i < length; i++) {
    let link = {
      source: `${peopleId}`,
      target: `${peopleId}-${i}`
    }
    fileData.links.push(link)
  }
}
// 获得点坐标的数组
let innerDots = getNumArray(innerRadius, innerLength)
let outerDots = getNumArray(outerRadius, outerLength)
addData(peopleRelation.cognation, 1, innerDots);
addData(peopleRelation.teacAndStu, 2, innerDots);
arrayNum = 0;
addData(peopleRelation.friend, 3, outerDots);

let num = innerLength + outerLength
addLinks(num);

fs.writeFile(filePath, JSON.stringify(fileData), err => {
  if (err) {
    console.log(err);
    return
  }
  console.log(filePath, 'success');
})
