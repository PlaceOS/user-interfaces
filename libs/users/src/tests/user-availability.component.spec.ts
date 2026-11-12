import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import {
    AvailabilityBlock,
    UserAvailabilityComponent,
} from '../lib/find-availability-modal/user-availability.component';

describe('UserAvailabilityComponent', () => {
    let spectator: Spectator<UserAvailabilityComponent>;
    const createComponent = createComponentFactory({
        component: UserAvailabilityComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should position, size and label a block for each busy period', () => {
        const nine = new Date('2030-06-01T09:00:00').valueOf();
        const availability: AvailabilityBlock[] = [
            { date: nine, duration: 90, start: 37.5, size: 6.25 },
            { date: nine, duration: 60, start: 50, size: 20 },
        ];
        spectator.setInput({ availability });
        spectator.detectChanges();
        const blocks = spectator.queryAll<HTMLElement>('[event]');
        expect(blocks).toHaveLength(2);
        expect(blocks[0].style.left).toBe('37.5%');
        expect(blocks[0].style.width).toBe('6.25%');
        expect(blocks[0].textContent?.replace(/\s+/g, ' ').trim()).toBe(
            '9:00 AM - 10:30 AM',
        );
    });
});
