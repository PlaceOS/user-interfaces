import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

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
            ({ close: jest.fn() }) as any) as any;
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should clear the mocked time and close the tooltip', () => {
        const close_spy = jest.fn();
        const set_mock_time_spy = jest.spyOn(media_helpers, 'setMockTime');
        spectator.component['_tooltip'] = (() =>
            ({ close: close_spy }) as any) as any;

        spectator.component.clear();

        expect(set_mock_time_spy).toHaveBeenCalledWith(0);
        expect(close_spy).toHaveBeenCalled();
    });

    it('should save the edited time as progressive when not static', () => {
        const close_spy = jest.fn();
        const set_mock_time_spy = jest.spyOn(media_helpers, 'setMockTime');
        spectator.component['_tooltip'] = (() =>
            ({ close: close_spy }) as any) as any;
        spectator.component.edited_time.set(1234567890);
        spectator.component.is_static = false;

        spectator.component.save();

        expect(set_mock_time_spy).toHaveBeenCalledWith(1234567890, true);
        expect(spectator.component.time()).toBe(1234567890);
        expect(close_spy).toHaveBeenCalled();
    });

    it('should save the edited time as static when requested', () => {
        const set_mock_time_spy = jest.spyOn(media_helpers, 'setMockTime');
        spectator.component.edited_time.set(987654321);
        spectator.component.is_static = true;

        spectator.component.save();

        expect(set_mock_time_spy).toHaveBeenCalledWith(987654321, false);
    });

    it('should refresh the displayed time on the polling interval', () => {
        jest.useFakeTimers();
        const set_interval_spy = jest.spyOn(window, 'setInterval');

        spectator = create_component();
        spectator.component['_tooltip'] = (() =>
            ({ close: jest.fn() }) as any) as any;
        jest.advanceTimersByTime(10001);

        expect(set_interval_spy).toHaveBeenCalled();
        jest.useRealTimers();
    });
});
