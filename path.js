
let path = require('path');
// console.log(path);

let extensionName = path.extname("E:\WD\level1\introToNode\path.js");
console.log(extensionName);

// let baseName = path.basename("E:\WD\level1\introToNode\path.js");
// console.log(baseName);

// console.log(__dirname);

// console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath, 'demo1.js');
console.log(newFilePath);
