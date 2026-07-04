import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { SettingsService } from '@placeos/common';

import { LockerGridComponent } from '../lib/locker-grid.component';
import { Locker, LockerBank } from '../lib/locker.class';

function makeLocker(overrides: Partial<Locker> = {}): Locker {
    return {
        id: 'locker-1',
        bank_id: 'bank-1',
        name: 'A1',
        accessible: false,
        bookable: true,
        available: true,
        position: [0, 0],
        size: [1, 1],
        features: [],
        ...overrides,
    };
}

function makeBank(lockers: Locker[]): LockerBank {
    return {
        id: 'bank-1',
        map_id: 'map-1',
        level_id: 'level-1',
        name: 'Bank 1',
        height: 3,
        lockers,
        zones: [],
        tags: [],
    };
}

describe('LockerGridComponent', () => {
    let spectator: Spectator<LockerGridComponent>;
    const createComponent = createComponentFactory({
        component: LockerGridComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render a button for each locker', () => {
        spectator.setInput(
            'bank',
            makeBank([
                makeLocker({ id: 'a' }),
                makeLocker({ id: 'b', position: [1, 0] }),
            ]),
        );
        spectator.detectChanges();
        expect(spectator.queryAll('button').length).toBe(2);
    });

    it('should render nothing when there is no bank', () => {
        spectator.detectChanges();
        expect(spectator.queryAll('button').length).toBe(0);
    });

    it('should emit clicked with the locker when a button is pressed', () => {
        const locker = makeLocker({ id: 'a' });
        spectator.setInput('bank', makeBank([locker]));
        const spy = jest.fn();
        spectator.output('clicked').subscribe(spy);
        spectator.detectChanges();
        spectator.click('button');
        expect(spy).toHaveBeenCalledWith(locker);
    });

    it('should disable buttons for non-bookable or unavailable lockers', () => {
        spectator.setInput(
            'bank',
            makeBank([
                makeLocker({ id: 'a', bookable: false }),
                makeLocker({ id: 'b', position: [1, 0], available: false }),
            ]),
        );
        spectator.detectChanges();
        const buttons = spectator.queryAll<HTMLButtonElement>('button');
        expect(buttons[0].disabled).toBe(true);
        expect(buttons[1].disabled).toBe(true);
    });

    it('should compute the number of columns from locker positions and sizes', () => {
        spectator.setInput(
            'bank',
            makeBank([
                makeLocker({ id: 'a', position: [0, 0], size: [2, 1] }),
                makeLocker({ id: 'b', position: [3, 0], size: [1, 1] }),
            ]),
        );
        spectator.detectChanges();
        expect(spectator.component.columns()).toBe(4);
    });

    it('should default columns to 1 when there are no lockers', () => {
        spectator.setInput('bank', makeBank([]));
        spectator.detectChanges();
        expect(spectator.component.columns()).toBe(1);
    });

    it('should mark unselected lockers as faded when a selection exists', () => {
        spectator.setInput(
            'bank',
            makeBank([
                makeLocker({ id: 'a' }),
                makeLocker({ id: 'b', position: [1, 0] }),
            ]),
        );
        spectator.setInput('selected', 'a');
        spectator.detectChanges();
        const buttons = spectator.queryAll('button');
        expect(buttons[0].classList).not.toContain('opacity-60');
        expect(buttons[1].classList).toContain('opacity-60');
    });

    describe('status()', () => {
        it('should return the free colour by default', () => {
            expect(spectator.component.status(makeLocker())).toBe('#43a047');
        });

        it('should return the pending colour for the selected locker', () => {
            spectator.setInput('selected', 'locker-1');
            spectator.detectChanges();
            expect(spectator.component.status(makeLocker({ id: 'locker-1' }))).toBe(
                '#ffb300',
            );
        });

        it('should use the default status colour for unavailable lockers', () => {
            expect(
                spectator.component.status(makeLocker({ available: false })),
            ).toBe('#e53935');
        });

        it('should honour explicit bank status values', () => {
            spectator.setInput('bank_status', { 'locker-1': 'reserved' });
            spectator.detectChanges();
            expect(spectator.component.status(makeLocker())).toBe('#e65100');
        });

        it('should return the not-bookable colour for a missing locker', () => {
            expect(spectator.component.status(undefined as any)).toBe('#757575');
        });
    });

    describe('color()', () => {
        it('should prefer configured locker specific colours', () => {
            const settings = spectator.inject(SettingsService);
            (settings.get as jest.Mock).mockReturnValue({
                'lockers-free': '#123456',
            });
            expect(spectator.component.color('free')).toBe('#123456');
        });

        it('should fall back to generic configured colours', () => {
            const settings = spectator.inject(SettingsService);
            (settings.get as jest.Mock).mockReturnValue({ free: '#abcdef' });
            expect(spectator.component.color('free')).toBe('#abcdef');
        });
    });
});
