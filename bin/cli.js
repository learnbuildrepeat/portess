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
        let isPortOpen = await portess.port.isOpen(port);
        console.log('Port %s is %s', port, isPortOpen ? 'open' : 'closed');
    });

commander
    .command('get')
    .alias('g')
    .description('Get an available port')
    .action(async () => {
        let port = await portess.port.get();
        console.log('Available port to use: %s', port);
    });

commander
    .command('isRunning <pid>')
    .alias('r')
    .description('Find if a process is active or not')
    .action((pid) => {
        let isActive = portess.process.isRunning(pid);
        console.log('Pid %s is %s', pid, isActive ? 'active' : 'inactive');
    });

commander
    .command('kill <pid>')
    .alias('k')
    .description('Kill a process by pid')
    .action(async (pid) => {
        let isKilled = await portess.process.kill(pid);
        console.log('Pid %s is %s', pid, isKilled?'killed':'not available (or) cannot be closed.');
    });    

commander.parse(process.argv);