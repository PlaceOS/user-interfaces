import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

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

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should not render any blocks by default', () => {
        spectator.detectChanges();
        expect('[event]').not.toExist();
    });

    it('should render a block for each availability entry', () => {
        const availability: AvailabilityBlock[] = [
            { date: Date.now(), duration: 30, start: 25, size: 10 },
            { date: Date.now(), duration: 60, start: 50, size: 20 },
        ];
        spectator.setInput({ availability });
        spectator.detectChanges();
        expect(spectator.queryAll('[event]').length).toBe(2);
    });

    it('should position and size blocks from the block data', () => {
        const availability: AvailabilityBlock[] = [
            { date: Date.now(), duration: 30, start: 25, size: 10 },
        ];
        spectator.setInput({ availability });
        spectator.detectChanges();
        const block = spectator.query('[event]') as HTMLElement;
        expect(block.style.left).toBe('25%');
        expect(block.style.width).toBe('10%');
    });
});
