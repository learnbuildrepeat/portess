const portess = require('../portess');

describe('Portess',() => {
    test('should find if a port is available', async () => {
        let isOpen = await portess.isOpen(3000);
        expect(isOpen).toBe(true);
    });
});

