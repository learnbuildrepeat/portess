const debug = require('debug');
const  net  = require('net');

const log = debug('portess:test');

class Portess{
  constructor(){}
  /** Know if a port is open/close */
  async isOpen(port){
    return new Promise( (resolve, reject) => {
      var server = net.createServer();
      server.on('error', function(err) {
        if (err.code === 'EADDRINUSE') {
          log('Port %s was in use', port);
          return resolve(false);
        }
        return reject(err);
      });
      server.on('close', function() {
        log('TCP server on port %s closed', port);
        resolve(true);
      });

      log('Trying to test port %s', port);
      server.listen(port, function(err) {
        if (err && err.code === 'EADDRINUSE') {
          log('Port %s was in use', port);
          return resolve(false);
        }
        if (err)
          return reject(err);
  
        server.close(function(err) {
          if (err)
            return reject(err);
          log('Port %s was free', port);
        });
      });
    });
  } 
}

module.exports = new Portess();