import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { MAP_FEATURE_DATA } from '@placeos/common';
import { MapPinComponent } from '../lib/map-pin.component';

describe('MapPinComponent', () => {
    let spectator: Spectator<MapPinComponent>;
    const createComponent = createComponentFactory({
        component: MapPinComponent,
        providers: [
            { provide: MAP_FEATURE_DATA, useValue: { message: 'Test' } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a pin SVG', async () => {
        vi.useFakeTimers();
        spectator.component.ngOnInit();
        spectator.detectChanges();
        expect('[name="pin"]').not.toExist();
        await vi.advanceTimersByTimeAsync(400);
        spectator.detectChanges();
        expect('[name="pin"]').toExist();
        await vi.advanceTimersByTimeAsync(700);
        vi.useRealTimers();
    });

    it('should show a message', async () => {
        vi.useFakeTimers();
        spectator.component.ngOnInit();
        spectator.detectChanges();
        expect('[name="message"]').not.toExist();
        await vi.advanceTimersByTimeAsync(1100);
        spectator.detectChanges();
        expect('[name="message"]').toExist();
        expect('[name="message"]').toContainText('Test');
        vi.useRealTimers();
    });

    it('should allow for actions on pin', () => {
        const action = vi.fn();
        (spectator.component as any).action = action;
        spectator.component.show.set(true);
        spectator.detectChanges();
        spectator.query('[name="pin"]').dispatchEvent(new Event('click'));
        expect(action).toHaveBeenCalled();
    });
});
