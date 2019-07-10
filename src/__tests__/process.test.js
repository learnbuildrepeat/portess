const prcs = require('../lib/process');

describe('Process',() => {
    test('should find if a process is running', async () => {
        const isRunning = prcs.isRunning(12345678);
        expect(isRunning).toBe(false);
    });
});

