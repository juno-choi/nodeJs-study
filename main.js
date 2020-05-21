var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	response.end('Hellow node~~');
}).listen(8081);

console.log('Node Server Start... at port 8081');
