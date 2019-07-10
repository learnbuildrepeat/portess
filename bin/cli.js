#!/usr/bin/env node

const portess = require('../dist');
const commander = require('commander');
const package = require('../package.json');
commander.version(package.version);

commander
    .command('isOpen <port>')
    .alias('o')
    .description('Find if a port is open or closed')
    .action(async (port)=>{
        let isPortOpen = await portess.Port.isOpen(port);
        console.log('Port %s is %s', port, isPortOpen ? 'open' : 'closed');
    });

commander
    .command('get')
    .alias('g')
    .description('Get an available port')
    .action(async () => {
        let port = await portess.Port.get();
        console.log('Available port %s is %s', port);
    });

commander
    .command('isRunning <pid>')
    .alias('r')
    .description('Find if a process is active or not')
    .action((pid) => {
        let isActive = portess.Process.isRunning(pid);
        console.log('Pid %s is %s', pid, isActive ? 'active' : 'inactive');
    });

commander.parse(process.argv);