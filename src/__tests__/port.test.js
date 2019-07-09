const Port = require('../lib/port');

describe('Port',() => {
    test('should find if a port is available', async () => {
        let isOpen = await Port.isOpen(3000);
        expect(isOpen).toBe(true);
    });

    test('should find an available port', async () => {
        let port = await Port.get();
        expect(port).not.toBeFalsy();
        expect(port).toBeGreaterThan(0);
    });
});

