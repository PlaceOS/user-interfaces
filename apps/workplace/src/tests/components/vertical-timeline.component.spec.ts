import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { set } from 'date-fns';

import { VerticalTimelineComponent } from '../../app/components/vertical-timeline.component';

const REFERENCE_DAY = new Date(2026, 0, 15);
const at = (hours: number, minutes = 0) =>
    set(REFERENCE_DAY, { hours, minutes, seconds: 0, milliseconds: 0 }).valueOf();

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('VerticalTimelineComponent', () => {
    let spectator: Spectator<VerticalTimelineComponent>;
    const createComponent = createComponentFactory({
        component: VerticalTimelineComponent,
    });

    beforeEach(
        () =>
            (spectator = createComponent({
                props: { date: at(9, 0), duration: 60 } as any,
            })),
    );

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('generates a full day of 5-minute blocks on init', () => {
        const blocks = spectator.component.blocks();
        // 24h * 60min / 5min = 288 blocks
        expect(blocks.length).toBe(288);
        expect(blocks[0].id).toBe('00:00');
        expect(blocks[0].hour).toBe(true);
        expect(blocks[0].show).toBe(true);
        const nine = blocks.find((b) => b.id === '09:00');
        expect(nine.hour).toBe(true);
    });

    it('renders a human readable selected range for the display label', () => {
        const label = spectator.component.display;
        expect(label).toContain('09:00 AM');
        expect(label).toContain('10:00 AM');
    });

    it('derives active start and length fractions from date/duration', () => {
        spectator.component.updateStartEnd();
        // 09:00 within a full day => 9/24 (allowing for endOfDay truncation)
        expect(spectator.component.active_start()).toBeCloseTo(0.375, 2);
        // 60 minutes within a full day
        expect(spectator.component.active_length()).toBeCloseTo(0.0417, 2);
    });

    it('marks blocks overlapping a group event as unavailable', () => {
        spectator.setInput('groups', [
            { events: [{ start: 9, duration: 10 }] },
        ]);
        const blocks = spectator.component.blocks();
        expect(blocks.find((b) => b.id === '09:00').unavailable).toBe(true);
        expect(blocks.find((b) => b.id === '09:05').unavailable).toBe(true);
        expect(blocks.find((b) => b.id === '09:10').unavailable).toBe(false);
    });

    it('converts fractional hours to a 5-minute aligned timestamp', () => {
        const result = new Date(spectator.component.hoursToDate(9.5));
        expect(result.getHours()).toBe(9);
        expect(result.getMinutes()).toBe(30);
    });

    it('tracks and resets the active move target', () => {
        spectator.component.setMove('top');
        expect(spectator.component.active_move).toBe('top');
        spectator.component.resetMove();
        expect(spectator.component.active_move).toBe('');
    });

    it('does not emit date changes while dragging is inactive', async () => {
        spectator.component.active_move = '';
        let emitted = false;
        spectator.component.date.subscribe(() => (emitted = true));

        spectator.component.move({ clientX: 10, clientY: 10 });
        await wait(20);

        expect(emitted).toBe(false);
    });
});
