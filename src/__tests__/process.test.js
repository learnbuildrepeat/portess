const prcs = require('../lib/process');

describe('Process', () => {
    test('should throw exception if a process not active', () => {
        expect(() => { prcs.isRunning() }).toThrow();
        expect(() => { prcs.isRunning('null') }).toThrow();
        expect(() => { prcs.isRunning('processId') }).toThrow();
        expect(() => { prcs.isRunning(null) }).toThrow();
    });

    test('should find if a process is running', async () => {
        const isRunning = prcs.isRunning(12345678);
        expect(isRunning).toBe(false);
    });

    test('should kill a process by pid', async () => {
        const isKilled = await prcs.kill(12345678);
        expect(isKilled).toBe(false);
    });
});