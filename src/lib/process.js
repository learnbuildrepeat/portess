const commons = require('../utils/commons');
class Process {
	/**
	 * Know if a process is running 
	 * @param {number} pid
	 * @returns {boolean} Represents the state of process 
	 */
	static isRunning(pid) {
		commons.isValidNumber(pid);
		try {
			return process.kill(pid, 0);
		} catch (error) {
			return error.code === 'EPERM';
		}
	}

	/**
	 * Kill a process by pid
	 * @param {number} pid 
	 * @returns {boolean} Represents the kill operation state 
	 */
	static kill(pid) {
		commons.isValidNumber(pid);
		return new Promise((resolve,reject) => {
			process.on('SIGHUP', () => {
				return resolve(true);
			});
			try {
				process.kill(pid, 'SIGHUP');
			} catch (error) {
				if(error.code === 'ESRCH'){
					return resolve(false);
				}
			}
		});
	}
}

module.exports = Process;
