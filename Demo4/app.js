var fs = require('fs');

console.log("Starting\n\n");

var content = fs.readFileSync('config.json');
var config = JSON.parse(content);


console.log("Username: " + config.username);
console.log("API Key: " + config.api_key);

console.log("\n\nFinished");