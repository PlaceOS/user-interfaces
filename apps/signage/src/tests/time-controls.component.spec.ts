import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import * as media_helpers from '../app/media-helpers';
import { TimeControlsComponent } from '../app/time-controls.component';

describe('TimeControlsComponent', () => {
    let spectator: Spectator<TimeControlsComponent>;

    const create_component = createComponentFactory({
        component: TimeControlsComponent,
        shallow: true,
    });

    beforeEach(() => {
        spectator = create_component();
        spectator.component['_tooltip'] = (() =>
            ({ close: vi.fn() }) as any) as any;
    });

    afterEach(() => {
        media_helpers.setMockTime(0);
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should clear the mocked time and close the tooltip', () => {
        // Workspace-module exports cannot be spied under the native builder, so
        // assert the observable module state via `mockTimeState()` instead.
        const close_spy = vi.fn();
        media_helpers.setMockTime(1234567890, 4);
        spectator.component['_tooltip'] = (() =>
            ({ close: close_spy }) as any) as any;

        spectator.component.clear();

        expect(media_helpers.mockTimeState().active).toBe(false);
        expect(close_spy).toHaveBeenCalled();
    });

    it('should save the edited time at the selected speed', () => {
        // The mocked clock runs at the selected speed from the moment it is
        // set, so a single millisecond of real time between saving and reading
        // it back moves the result by four. Freeze the clock so the assertion
        // is about the saved value rather than how long the test took.
        vi.useFakeTimers();
        const close_spy = vi.fn();
        spectator.component['_tooltip'] = (() =>
            ({ close: close_spy }) as any) as any;
        spectator.component.edited_time.set(1234567890);
        spectator.component.edited_speed.set(4);

        spectator.component.save();

        const state = media_helpers.mockTimeState();
        expect(state.active).toBe(true);
        expect(state.speed).toBe(4);
        expect(spectator.component.time()).toBe(1234567890);
        expect(close_spy).toHaveBeenCalled();
    });

    it('should advance the mocked time at the selected speed', () => {
        vi.useFakeTimers();
        spectator.component.edited_time.set(1234567890);
        spectator.component.edited_speed.set(4);
        spectator.component.save();

        vi.advanceTimersByTime(1000);
        spectator.component['refresh']();

        expect(spectator.component.time()).toBe(1234567890 + 4000);
    });

    it('should save the edited time as paused when 0x is selected', () => {
        spectator.component.edited_time.set(987654321);
        spectator.component.edited_speed.set(0);

        spectator.component.save();

        const state = media_helpers.mockTimeState();
        expect(state.active).toBe(true);
        expect(state.speed).toBe(0);
        expect(state.time).toBe(987654321);
    });

    it('should indicate unsaved edits after the active values change', () => {
        spectator.component.edit();

        expect(spectator.component.has_changes()).toBe(false);

        spectator.component.shiftTime(60);

        expect(spectator.component.has_changes()).toBe(true);
    });

    it('should set the edited time from an input value', () => {
        spectator.component.edited_time.set(
            new Date(2026, 4, 29, 10, 15).valueOf(),
        );

        spectator.component.setEditedTime('14:37');

        expect(
            spectator.component.formatTimeInput(
                spectator.component.edited_time(),
            ),
        ).toBe('14:37');
    });

    it('should refresh the displayed time on the polling interval', () => {
        vi.useFakeTimers();
        const set_interval_spy = vi.spyOn(window, 'setInterval');

        spectator = create_component();
        spectator.component['_tooltip'] = (() =>
            ({ close: vi.fn() }) as any) as any;
        vi.advanceTimersByTime(10001);

        expect(set_interval_spy).toHaveBeenCalled();
        vi.useRealTimers();
    });
});
