import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAP_FEATURE_DATA } from '@placeos/common';
import { ngMocks } from 'ng-mocks';

import { ExploreSensorInfoComponent } from '../lib/explore-sensor-info.component';

describe('ExploreSensorInfoComponent', () => {
    let spectator: Spectator<ExploreSensorInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreSensorInfoComponent,
        ...ngMocks.guts(null),
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should fallback to default sensor values', () => {
        spectator = createComponent();
        expect(spectator.component.temp()).toBe(0);
        expect(spectator.component.temp_unit()).toBe('C');
        expect(spectator.component.humidity()).toBe(0);
    });

    it('should expose the provided sensor values', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: {
                        id: 'sensor-1',
                        temp: 21,
                        temp_unit: 'F',
                        humidity: 40,
                    },
                },
            ],
        });
        expect(spectator.component.temp()).toBe(21);
        expect(spectator.component.temp_unit()).toBe('F');
        expect(spectator.component.humidity()).toBe(40);
    });

    it('should not be shown for a sensor that is not the active one', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: { id: 'inactive-sensor', temp: 10, humidity: 20 },
                },
            ],
        });
        expect(spectator.component.show()).toBe(false);
    });

    it('should be shown once set as the active sensor', async () => {
        vi.useFakeTimers();
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: { id: 'active-sensor', temp: 10, humidity: 20 },
                },
            ],
        });
        spectator.component.setShow(true);
        await vi.advanceTimersByTimeAsync(300);
        expect(spectator.component.show()).toBe(true);
        vi.useRealTimers();
    });

    it('does not propagate map interactions from the sensor button', () => {
        spectator = createComponent();
        const parent = spectator.element.parentElement;
        const pointer_down = vi.fn();
        const pointer_up = vi.fn();
        const click = vi.fn();
        parent.addEventListener('pointerdown', pointer_down);
        parent.addEventListener('pointerup', pointer_up);
        parent.addEventListener('click', click);
        const button = spectator.query('button');

        button.dispatchEvent(new Event('pointerdown', { bubbles: true }));
        button.dispatchEvent(new Event('pointerup', { bubbles: true }));
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(pointer_down).not.toHaveBeenCalled();
        expect(pointer_up).not.toHaveBeenCalled();
        expect(click).not.toHaveBeenCalled();
    });
});
