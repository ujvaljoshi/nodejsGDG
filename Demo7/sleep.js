var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	setTimeout(function() {
		res.end("Hey\n\n");
	}, 5000);


}).listen(1337);













// curl localhost:1337 & curl localhost:1337 &