/**
 * isRunning - To Find a pid is active
 * kill - To kill a process by pid
 * by(<type>) - type: name/port
 */
class Process {
	/**
	 * Know if a process is running
	 * @param pid 
	 */
	static isRunning(pid) {
		if (!pid) {
			throw new Error('Provide a pid');
		}	
		try {
			return process.kill(pid, 0);
		} catch (error) {
			return error.code === 'EPERM';
		}
	}

	static kill(pid) {
		if (!pid) {
			throw new Error('Provide a pid');
		}
		return new Promise((resolve,reject) => {
			process.on('SIGHUP', () => {
				console.log('Got SIGHUP signal.');
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
