const Server = require('../utils/server');
const commons = require('../utils/commons');
class Port {
  /**
   * Find if the port is open
   * @param {number} port
   * @returns {boolean} Represents port state
   */
  static async isOpen(port) {
    commons.isValidNumber(port);
    return await Server.create(port);
  }
  
  /**
   * Get a random open port
   * @returns - Available free port number
   */
  static async get(ports) {
    if(!ports || ports.length<1)
    return await Server.create(0);

    for(let port of ports) {
      if(await this.isOpen(port))
      return port;
    }
    console.log(`None of the ports in ${ports} are available`);
  }
}

module.exports = Port;