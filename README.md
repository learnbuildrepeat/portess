## Portess

[![Build Status](https://travis-ci.org/learnbuildrepeat/portess.svg?branch=master)](https://travis-ci.org/learnbuildrepeat/portess) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Port and process management. Find open ports, monitor ports, find and manage process states.

### Installation
`npm install --save portess`

### API

`portess.port.isOpen(port)`

Finds if the port is open. Return value will be a promise that will be yielded with a boolean result.

```js
const portess = require('portess');

await portess.port.isOpen(3000); // true/false

/***************(or)**************/

portess.port.isOpen(3000)
    .then( isOpen => {
        console.log(`Port 3000 is %s`, isOpen?'open':'in use');
    });

```
<br/>

`portess.port.get(?[ports])`

Get a random open port (or) first available port from the given list. Retuns a promise that will be yielded with a port number.

```js
const portess = require('portess');

await portess.port.get(); // Returns random port number - ex: 44450
await portess.port.get([3000, 3010, 4010]);  // Returns first available port from the given list- ex: 3010 (if 3000 is in use)

/***************(or)**************/

portess.port.get() 
    .then( port => {
        console.log(`Port %s is open`, port);
    });

portess.port.get([3000, 3010,4010]) 
    .then( port => {
        console.log(`Port %s is open`, port);
    });
```
<br/>

`portess.process.isRunning(pid)`

Identifies if a process state is active. Returns `boolean`

```js
const portess = require('portess');

portess.process.isRunning(55432); // true if the process is running
```
<br/>

`portess.process.kill(pid)`

Kill a process by `pid`

```js
const portess = require('portess');

portess.process.kill(55432); // false : If the process is not found
```
<br/>

### CLI
You can use `portess` as a command line utility. You just have to install it globally as `npm install -g portess` and run help command `portess --help` to find the options and usage.

```
Usage: portess [options] [command]

Options:
  -V, --version      output the version number
  -h, --help         output usage information

Commands:
  isOpen|o <port>    Find if a port is open or closed
  get|g              Get an available port
  isRunning|r <pid>  Find if a process is active or not
```
&nbsp;
####[LICENSE](./LICENSE)
