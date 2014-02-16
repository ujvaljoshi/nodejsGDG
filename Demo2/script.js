var fs = require('fs');

console.log("Starting \n\n\n");

fs.readFile('sample.txt', function(error, contents) {
	console.log("Contents of the file : " + contents);
});

console.log("Finished..\n\n\n");
