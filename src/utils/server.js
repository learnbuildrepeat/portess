const net = require('net');
/**
 * .unref: 
 * Calling unref() on a server will allow the program to exit if this is the only active server in the event system. If the server is already unrefed calling unref() again will have no effect.
 */
const create = (port) => {
  return new Promise((resolve, reject) => {
    const isCheckOperation = port > 0;

    const server = net.createServer();
    server.unref();

    server.on('error', function (err) {
      if (err.code === 'EADDRINUSE') {
        console.log('Port %s was in use', port);
        return resolve(false);
      }
      return reject(err);
    });

    server.on('close', function () {
      console.log('TCP server on port %s closed', port);
      resolve(isCheckOperation ? true : port);
    });

    console.log('Trying to test port %s', port);
    server.listen({ port }, function (err) {
      port = server.address().port;
      if (err && err.code === 'EADDRINUSE') {
        console.log('Port %s was in use', port);
        return resolve(false);
      }
      if (err) {
        return reject(err);
      }

      server.close(function (error) {
        if (error){
          return reject(error);
        }
        console.log('Port %s was free', port);
      });
    });
  });
};

module.exports = { create };