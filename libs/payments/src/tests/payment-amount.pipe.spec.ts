import {
    currencyDigits,
    formatAmount,
    toMajorUnits,
    toMinorUnits,
} from '../lib/payment-amount.pipe';

describe('payment amounts', () => {
    it('uses the decimal digits of the currency', () => {
        expect(currencyDigits('AUD')).toBe(2);
        expect(currencyDigits('JPY')).toBe(0);
        expect(toMajorUnits(1250, 'AUD')).toBe(12.5);
        expect(toMajorUnits(1250, 'JPY')).toBe(1250);
    });

    it('rounds major units to a whole minor unit', () => {
        expect(toMinorUnits(19.99, 'AUD')).toBe(1999);
        expect(toMinorUnits(0.105, 'USD')).toBe(11);
    });

    it('formats an amount in the minor unit', () => {
        expect(formatAmount(1250, 'USD')).toContain('12.50');
    });
});
