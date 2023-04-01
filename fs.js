let fs = require("fs");
// console.log(fs);

let path = require("path");

let filePath = path.join(__dirname, "createFile.txt");
// console.log(filePath)

// C-create
fs.writeFileSync(filePath, "Hello I'm a txt file");

// R-read
let read = fs.readFileSync(filePath, "utf-8");
console.log(read);

// U-update
fs.appendFileSync(filePath, "'New text adding'");

// D-delete
fs.unlinkSync(filePath);
    