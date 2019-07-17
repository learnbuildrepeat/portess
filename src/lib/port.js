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
  static async get() {
    return await Server.create(0);
  }
}

module.exports = Port;