var fs = require('fs');

console.log("Starting \n\n\n");

var contents = fs.readFileSync('sample.txt');

console.log("Contents of the file : " + contents);

console.log("\n\n\nFinished..");
