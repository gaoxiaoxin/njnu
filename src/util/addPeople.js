const fs = require('fs');
const path = require('path');
const { getNum } = require('./getNum')
const filePath = path.join(__dirname, '../components/personageRelation/ensemable/config/yuyue.json')
/* 
1. 写关系等配置
2. 将写好的关系写入对应的位置
3. 写入文件
4. 就写好了
*/

//要写入文件的数据
let peopleId = 15

let fileData = {
  nodes: [
    {
      id: peopleId,
      name: '俞樾',
      symbolSize: 30,
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
let cognStr = '曾孙-俞平伯、父亲-俞鸿渐、兄长-俞林、孙-俞陛云'
let teacAndStuStr = '师长-曾国藩、门生-童米荪、门生-章太炎、门生-吴昌硕、门生-【日本】井上陈政'
let Friendstr = '汪耕余、潘季玉'
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

// 数据绑定完成
// 数据注入
/* 
1. 先注入亲族
2. 注入师生
3. 注入友人
*/
var idNum = 0;
function addData(array, category) {
  if (array.length === 0) {
    return
  }
  for (let i = 0; i < array.length; i++, idNum++) {
    let node = {
      id: `${peopleId}-${idNum}`,
      name: array[i].name || array[i],
      symbolSize: 15,
      value: array[i].relation || '友人',
      category: category,
      ...getNum(category, i)
    }
    fileData.nodes.push(node)
  }
}
addData(peopleRelation.cognation, 1);
addData(peopleRelation.teacAndStu, 2);
addData(peopleRelation.friend, 3);

function addLinks(length) {
  1
  for (let i = 0; i < length; i++) {
    let link = {
      source: `${peopleId}`,
      target: `${peopleId}-${i}`
    }
    fileData.links.push(link)
  }
}
let num = peopleRelation.cognation.length + peopleRelation.teacAndStu.length + peopleRelation.friend.length
addLinks(num)
fs.writeFile(filePath, JSON.stringify(fileData), err => {
  if (err) {
    console.log(err);
    return
  }
  console.log('success');
})
/* 
亲友, 师生放一块, 然后友人单独一块
*/


