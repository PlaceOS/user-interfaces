import { CalendarEvent, CateringOrder, Space } from '@placeos/common';

import {
    orderHost,
    orderLevelFinder,
    orderLocation,
} from '../lib/catering-order-details';

const withEvent = (event: Partial<CalendarEvent>) =>
    new CateringOrder({ id: 'o1', event: event as CalendarEvent });

describe('catering order details', () => {
    it('should show the event location before the room name', () => {
        const system = { display_name: 'Boardroom', name: 'BR-1' };
        expect(
            orderLocation(withEvent({ location: 'Lobby', system } as any)),
        ).toBe('Lobby');
        expect(orderLocation(withEvent({ system } as any))).toBe('Boardroom');
        expect(
            orderLocation(withEvent({ system: { name: 'BR-1' } } as any)),
        ).toBe('BR-1');
    });

    it('should show the organiser name, then the host, then the email', () => {
        const organiser = { name: 'Ada', email: 'ada@example.com' };
        expect(orderHost(withEvent({ organiser, host: 'h@x' } as any))).toBe(
            'Ada',
        );
        expect(
            orderHost(
                withEvent({ organiser: { email: 'ada@example.com' } } as any),
            ),
        ).toBe('ada@example.com');
        expect(
            orderHost(
                withEvent({
                    organiser: { email: 'ada@example.com' },
                    host: 'host@example.com',
                } as any),
            ),
        ).toBe('host@example.com');
        expect(orderHost(new CateringOrder())).toBe('');
    });

    it('should find the level of the order room', () => {
        const levels = { 'zone-l1': { id: 'zone-l1', name: 'L1' } };
        const levelOf = orderLevelFinder({
            levelWithID: (zones: string[]) =>
                zones.map((id) => levels[id]).find(Boolean),
        } as any);
        const order = new CateringOrder({ id: 'o1' });
        const roomIn = (space: Partial<Space>) =>
            Object.assign(new CateringOrder({ id: 'o1' }), { space });

        expect(levelOf(roomIn({ zones: ['bld', 'zone-l1'] }))).toEqual({
            id: 'zone-l1',
            name: 'L1',
        });
        expect(
            levelOf(
                roomIn({
                    zones: ['bld'],
                    level: { id: 'zone-l2', display_name: 'Level 2' } as any,
                }),
            ),
        ).toEqual({ id: 'zone-l2', name: 'Level 2' });
        expect(levelOf(order)).toBeNull();
    });
});
