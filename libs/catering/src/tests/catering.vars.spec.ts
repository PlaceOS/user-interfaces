import {
    matchesStatusFilter,
    nextOrderStatus,
    orderUrgency,
} from '../lib/catering.vars';

describe('catering status helpers', () => {
    it('should step orders through to delivery', () => {
        expect(nextOrderStatus('pending')).toBe('accepted');
        expect(nextOrderStatus('ready')).toBe('delivered');
        expect(nextOrderStatus('delivered')).toBeNull();
        expect(nextOrderStatus('cancelled')).toBeNull();
    });

    it('should match status filters', () => {
        expect(matchesStatusFilter('delivered', 'all')).toBe(true);
        expect(matchesStatusFilter('preparing', 'active')).toBe(true);
        expect(matchesStatusFilter('cancelled', 'active')).toBe(false);
        expect(matchesStatusFilter('ready', 'ready')).toBe(true);
        expect(matchesStatusFilter('ready', 'pending')).toBe(false);
    });

    it('should mark open orders as due soon or overdue', () => {
        const now = new Date(2026, 0, 1, 12).valueOf();
        const minutes = (count: number) => now + count * 60 * 1000;

        expect(orderUrgency('accepted', minutes(-1), now)).toBe('overdue');
        expect(orderUrgency('accepted', minutes(30), now)).toBe('soon');
        expect(orderUrgency('accepted', minutes(31), now)).toBeNull();
        expect(orderUrgency('delivered', minutes(-10), now)).toBeNull();
    });
});
