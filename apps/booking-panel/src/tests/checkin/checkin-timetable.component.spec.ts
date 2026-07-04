import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { CheckinTimetableComponent } from '../../app/checkin/checkin-timetable.component';

describe('CheckinTimetableComponent', () => {
    let spectator: Spectator<CheckinTimetableComponent>;
    const createComponent = createComponentFactory({
        component: CheckinTimetableComponent,
        detectChanges: false,
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should generate a full day of time blocks on init', () => {
        spectator.detectChanges();
        // 24 hours at 15-minute steps => 96 blocks
        expect(spectator.component.blocks().length).toBe(96);
        const first = spectator.component.blocks()[0];
        expect(first.id).toEqual(expect.any(Number));
        expect(first.hour).toEqual(expect.any(String));
    });

    it('should render a button for each time block', () => {
        spectator.detectChanges();
        const buttons = spectator.queryAll('button');
        expect(buttons.length).toBe(spectator.component.blocks().length);
    });

    it('should emit the block id when a block is clicked', () => {
        spectator.detectChanges();
        let emitted: number | undefined;
        spectator.component.event.subscribe((v) => (emitted = v));
        const first_id = spectator.component.blocks()[0].id;
        spectator.click('button');
        expect(emitted).toBe(first_id);
    });

    it('should update the current time marker to a positive offset', () => {
        spectator.detectChanges();
        // first block sits ~1 hour before now, so the offset should be > 0
        expect(spectator.component.current_time()).toBeGreaterThan(0);
    });

    it('should map events into positioned blocks with the correct duration', async () => {
        spectator.setInput('events', [
            { date: Date.now(), duration: 30 } as any,
        ]);
        spectator.detectChanges();
        const blocks = spectator.component.event_blocks();
        expect(blocks.length).toBe(1);
        expect(blocks[0].length).toBe(30);
        // event starts after the first block, so offset is positive
        expect(blocks[0].start).toBeGreaterThan(0);
    });

    it('should render an event overlay for in-range events', () => {
        spectator.setInput('events', [
            { date: Date.now(), duration: 30 } as any,
        ]);
        spectator.detectChanges();
        expect('[event]').toExist();
    });

    it('should leave event blocks empty when no events are supplied', () => {
        spectator.detectChanges();
        expect(spectator.component.event_blocks().length).toBe(0);
    });

    it('should map time-block heights by minute offset', () => {
        const c = spectator.component;
        expect(c.height(0)).toBe('2.5rem');
        expect(c.height(15)).toBe('0.75rem');
        expect(c.height(45)).toBe('0.75rem');
        expect(c.height(30)).toBe('1.5rem');
        expect(c.height(7)).toBe('');
    });
});
