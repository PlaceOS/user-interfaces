import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { set } from 'date-fns';

import { EventTimelineComponent } from '../../app/components/event-timeline.component';

const REFERENCE_DAY = new Date(2026, 0, 15);
const at = (hours: number, minutes = 0) =>
    set(REFERENCE_DAY, { hours, minutes, seconds: 0, milliseconds: 0 }).valueOf();

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('EventTimelineComponent', () => {
    let spectator: Spectator<EventTimelineComponent>;
    const createComponent = createComponentFactory({
        component: EventTimelineComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('generates 5-minute blocks between 06:30 and 21:30 on init', () => {
        const blocks = spectator.component.model.blocks;
        // (21:30 - 06:30) = 15h = 900min / 5min = 180 blocks
        expect(blocks.length).toBe(180);
        expect(blocks[0].id).toBe('06:30');
        expect(blocks[0].hour).toBe(false);
        expect(blocks[0].divider).toBe(true);
        const hour_block = blocks.find((b) => b.id === '07:00');
        expect(hour_block.hour).toBe(true);
        expect(hour_block.divider).toBe(true);
    });

    it('derives selected period fractions from the active date/duration', () => {
        spectator.setInput('date', at(9, 0));
        spectator.setInput('duration', 30);
        // window is 06:30 -> 21:30 = 15h. 09:00 is 2.5h in => 2.5/15
        expect(spectator.component.model.start_time).toBeCloseTo(2.5 / 15, 3);
        // 30 minutes of a 15h window
        expect(spectator.component.model.duration).toBeCloseTo(0.5 / 15, 3);
    });

    it('selects a time when a block is clicked and emits the change', () => {
        spectator.setInput('date', at(9, 0));
        let emitted: number | undefined;
        spectator.component.date.subscribe((v) => (emitted = v));

        spectator.component.setTime({ id: '10:15' } as any);

        const selected = new Date(spectator.component.date());
        expect(selected.getHours()).toBe(10);
        expect(selected.getMinutes()).toBe(15);
        expect(emitted).toBe(spectator.component.date());
    });

    it('ignores block selection when no block is provided', () => {
        const before = spectator.component.date();
        spectator.component.setTime(undefined as any);
        expect(spectator.component.date()).toBe(before);
    });

    it('converts fractional hours to a 5-minute aligned timestamp', () => {
        const result = new Date(spectator.component.hoursToDate(9.5));
        expect(result.getHours()).toBe(9);
        expect(result.getMinutes()).toBe(30);
    });

    it('converts HH:mm strings rounding down to 5-minute alignment', () => {
        const result = new Date(spectator.component.timeToDate('09:37'));
        expect(result.getHours()).toBe(9);
        expect(result.getMinutes()).toBe(35);
    });

    it('marks blocks overlapping a group event as unavailable', () => {
        spectator.component.model.blocks = [
            { id: '09:00' },
            { id: '09:05' },
            { id: '09:10' },
        ];
        spectator.component.model.groups = [
            { events: [{ start: 9, duration: 10 }] },
        ];

        spectator.component.checkInUseBlocks();

        const blocks = spectator.component.model.blocks;
        expect(blocks.find((b) => b.id === '09:00').unavailable).toBe(true);
        expect(blocks.find((b) => b.id === '09:05').unavailable).toBe(true);
        // 09:10 is the exclusive end of the event window
        expect(blocks.find((b) => b.id === '09:10').unavailable).toBe(false);
    });

    it('tracks and resets the active move target', () => {
        spectator.component.setMove('start');
        expect(spectator.component.model.move).toBe('start');
        spectator.component.resetMove();
        expect(spectator.component.model.move).toBe('');
    });

    it('builds render groups with per-block events after group input changes', async () => {
        spectator.setInput('groups', [
            { name: 'Team', events: [{ start: 9, duration: 5 }] },
        ]);
        await wait(40);

        const groups = spectator.component.model.groups;
        expect(groups.length).toBe(1);
        expect(groups[0].name).toBe('Team');
        const total_events = groups[0].blocks.reduce(
            (count, blk) => count + (blk.events?.length || 0),
            0,
        );
        expect(total_events).toBe(1);
    });

    it('does not emit date changes while dragging is inactive', async () => {
        spectator.component.model.move = '';
        let emitted = false;
        spectator.component.date.subscribe(() => (emitted = true));

        spectator.component.move({ clientX: 10, clientY: 10 });
        await wait(20);

        expect(emitted).toBe(false);
    });
});
