var net = require('net');
var port = 1337;

var server = net.createServer(function (socket) {
  console.log('Ahhhhhhhhhhhhhhhh!!!!');
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(port, '127.0.0.1');
console.log('TCP server listening on port: ' + port);