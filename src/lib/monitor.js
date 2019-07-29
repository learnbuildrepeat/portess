const commons = require('../utils/commons');
const events = require('events');
const util = require('util');
const Port = require('../lib/port');

class Monitor {
    constructor(ports, options){
        if(commons.isEmptyArray(ports)){
            throw new Error('Invalid input. Expected an array of ports');
        }
        this._ports = ports;
        this._options = options || {};
        this._watchers = [];
        if(!this._options.autoStart){
            return;
        }
        this.start();
    }

    start(){
        if(!commons.isEmptyArray(this._watchers.length))
          return this.emit('error', new Error('Monitoring already started'));

         this._ports.forEach((port) => this._watchers.push(this._watcher(port)));
    }
    
    stop(){
        this._watchers.forEach((watcher) => clearInterval(watcher.interval));
        this._watchers = [];
    }

    _watcher(port){
        const setup = {
            state: null,
            interval: setInterval(async() => {
                let isOpen = await Port.isOpen(port);
                if(setup.state === 'open' && isOpen)
                 return;

                 const state = isOpen? 'open': 'close';
                 this.emit(state, port);
                 setup.state = state;
            }, this._options.interval || 100) 
        };
        return setup;
    }
}

util.inherits(Monitor, events.EventEmitter);

module.exports = Monitor;