/* 
批量修改文件, 讽刺一个白学编程的傻瓜
*/

const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname, '../components/personageRelation/personConfig/fgfConfig.json')
let file = fs.readFileSync(filePath, 'utf-8');
file = JSON.parse(file);

let nodes = file.nodes;
let links = file.links;
let str = nodes[0].id + '-'
links[0].source = nodes[0].id
for (let i = 1; i < nodes.length; i++) {
  nodes[i].id = str + `${i}`
}
for (let i = 0; i < links.length; i++) {
  links[i].source = nodes[0].id
  links[i].target = str + `${i}`
}
file.nodes = nodes;
console.log(nodes.length);
file.links = links;
console.log(links.length);

fs.writeFile(filePath, JSON.stringify(file), err => {
  if (err) {
    console.log(err);
    return
  }
  console.log('success');
})





