/**
 * Reference : https://github.com/yibn2008/find-process
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
		if (!pid) throw new Error('Provide a pid');
		try {
			return process.kill(pid, 0);
		} catch (error) {
			return error.code === 'EPERM';
		}
	}
}

module.exports = Process;
