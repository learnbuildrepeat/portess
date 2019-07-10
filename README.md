Port and process management. Find open ports, monitor ports, find and manage process states.

### Installation
`npm install --save portess`

### API

`portess.Port.isOpen(port)`

Finds if the port is open. Return value will be a promise that will be yielded with a boolean result.

```js
const portess = require('portess');

await portess.Port.isOpen(3000); // true/false

/***************(or)**************/

portess.Port.isOpen(3000)
    .then( isOpen => {
        console.log(`Port 3000 is %s`, isOpen?'open':'in use');
    });

```

`portess.Port.get()`

Get a random open port. Retuns a promise that will be yielded with a port number.

```js
const portess = require('portess');

await portess.Port.get(); // Random port number - ex: 44450

/***************(or)**************/

portess.Port.get()
    .then( port => {
        console.log(`Port %s is open`, port);
    });
```

`portess.Process.isRunning(pid)`

Identifies if a process state is active. Returns `boolean`

```js
const portess = require('portess');

portess.Process.isRunning(55432); // true if the process is running
```

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