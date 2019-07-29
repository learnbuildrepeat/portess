const Monitor = require('../lib/monitor');

describe('Monitor', () => {
    jest.setTimeout(10000);
    test('should attach events to port tracking', (done)=> {
        const track = new Monitor([8888,9999], {autoStart:true});
        track.on('open', (port) => {
            console.log('Port %s is open', port);
        });
        track.on('close', (port) => {
            console.log('Port %s is open', port);
        });
        setTimeout(()=> {
            track.stop(); // Closing monitoring after 500 milliseconds.
            done();
        }, 500);
    });
});