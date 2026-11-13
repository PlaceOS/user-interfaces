import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { getUnixTime, subMinutes } from 'date-fns';

import { MAP_FEATURE_DATA } from '@placeos/common';
import { MapRadiusComponent, MapRadiusData } from '../lib/map-radius.component';

describe('MapRadiusComponent', () => {
    let spectator: Spectator<MapRadiusComponent>;
    const createComponent = createComponentFactory({
        component: MapRadiusComponent,
        detectChanges: false,
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    /** Render the radius with an element that is `widths` wide in turn */
    const create = (data: Partial<MapRadiusData>, widths: number[] = [0]) => {
        spectator = createComponent({
            providers: [{ provide: MAP_FEATURE_DATA, useValue: data }],
        });
        const box = vi.spyOn(spectator.element, 'getBoundingClientRect');
        for (const width of widths) {
            box.mockReturnValueOnce({ width } as DOMRect);
        }
        box.mockReturnValue({ width: widths.at(-1) } as DOMRect);
        spectator.detectChanges();
        return box;
    };

    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    it('should show the radius, then the message a moment later', () => {
        create({ message: 'Test' });
        expect('[radius]').not.toExist();

        vi.advanceTimersByTime(300);
        spectator.detectChanges();
        expect('[radius]').toExist();
        expect('[message]').not.toExist();

        vi.advanceTimersByTime(700);
        spectator.detectChanges();
        expect('[message]').toContainText('Test');
    });

    it('should size the radius from the element once it has a width', () => {
        create({ radius: 2 }, [0, 0, 50]);
        expect(spectator.component.radius()).toBe(2);

        vi.advanceTimersByTime(600);
        expect(spectator.component.radius()).toBe(100);
    });

    it('should keep the radius of a small element large enough to see', () => {
        create({ radius: 2 }, [10]);
        expect(spectator.component.radius()).toBe(64);
    });

    it('should stop measuring an element that never gets a width', () => {
        const box = create({ radius: 2 });

        vi.advanceTimersByTime(60 * 1000);

        expect(box).toHaveBeenCalledTimes(10);
        expect(spectator.component.radius()).toBe(2);
    });

    it('should show a last seen if set', () => {
        create({ message: 'Test' });
        spectator.component.show.set(true);
        spectator.component.show_message.set(true);
        spectator.component.last_seen.set(
            getUnixTime(subMinutes(new Date(), 60)),
        );
        spectator.detectChanges();
        expect('[message] span').toContainText('1 hour ago');
    });
});
