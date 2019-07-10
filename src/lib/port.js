const Server = require('../utils/server');
/**
 * - isOpen
 * - get(port[,range])
 */
class Port {
  /** Know if a port is open/close */
  static async isOpen(port) {
    return await Server.create(port);
  }
  /**
   * Get a random open port
   */
  static async get() {
    return await Server.create(0);
  }
}

module.exports = Port;