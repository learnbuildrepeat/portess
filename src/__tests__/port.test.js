const Port = require('../lib/port');
describe('Port', () => {
    test('should throw error if port number is not provided', () => {
        expect( Port.isOpen("hhh")).rejects.toThrow();
        expect( Port.isOpen(null)).rejects.toThrow();
        expect( Port.isOpen(undefined)).rejects.toThrow();
        expect( Port.isOpen()).rejects.toThrow();
        expect( Port.isOpen(false)).rejects.toThrow();
    });

    test('should find if a port is available', async () => {
        let isOpen = await Port.isOpen(3000);
        expect(isOpen).toBe(true);
        isOpen = await Port.isOpen('3000');
        expect(isOpen).toBe(true);
    });

    test('should find an available port', async () => {
        let port = await Port.get();
        expect(port).not.toBeFalsy();
        expect(port).toBeGreaterThan(0);
    });
});

