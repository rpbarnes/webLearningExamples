// require the import of the http module
var http = require('http');

//Define a port to listen to.
const PORT = 8080;

// a dispatcher
var HTTPDISPATCHER = require('httpdispatcher');
var dispatcher = new HTTPDISPATCHER();
dispatcher.setStatic('resources'); // Enter directory of all resource files.

// GET request
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('../index.html');
});

// A sample POST request
dispatcher.onPost('/post1', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

// handle the request and send a response
function handleRequest(request, response) {
    try{ 
        //response.end('It works bitch! Path: ' + request.url);
        console.log(request.url)
        dispatcher.dispatch(request,response);
    } catch(err) {
        console.log(err)
    }
}

// create the server
var server = http.createServer(handleRequest);

// Start the server
server.listen(PORT, function() {
    console.log('Server listening on: http://localhost:%s', PORT);
});


