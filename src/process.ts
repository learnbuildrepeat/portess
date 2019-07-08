class Process {
	constructor() {}
   
   /**
    * Know if a process is running
    * @param pid 
    */
	isRunning(pid) {
		if (!pid) throw new Error('Provide a pid');
		try {
			return process.kill(pid, 0);
		} catch (error) {
			return error.code === 'EPERM';
		}
	}
}

module.exports = new Process();
