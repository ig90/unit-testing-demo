import { getCurrencies } from './getCurrencies';

describe('getCurrecies', () => {
    it('should return the supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('PLN');
        expect(result).toContain('EUR');
    });
});

