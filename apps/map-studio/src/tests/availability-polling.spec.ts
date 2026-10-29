import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { PlaceOSService } from '../app/data/placeos.service';
import { MapObject } from '../app/data/types';
import { AvailabilityPollingService } from '../app/kiosk/availability-polling.service';

const object = (
    id: string,
    object_type: MapObject['object_type'] = 'room',
): MapObject => ({
    id,
    floorplan_id: 'fp',
    object_type,
    svg_id: id,
    label: id,
    geometry: { type: 'rect', x: 0, y: 0, width: 40, height: 40 },
    entity_type: null,
    entity_id: null,
    layer: 'rooms',
    fill_color: null,
    stroke_color: null,
    opacity: 1,
    capacity: null,
    amenities: null,
    tags: null,
    metadata: null,
    group_id: null,
    z_index: 0,
    locked: false,
    visible: true,
});

describe('AvailabilityPollingService', () => {
    const getSystems = vi.fn();
    let service: AvailabilityPollingService;

    beforeEach(() => {
        vi.useFakeTimers();
        getSystems.mockReset();
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                AvailabilityPollingService,
                {
                    provide: PlaceOSService,
                    useValue: { config: { configured: true }, getSystems },
                },
            ],
        });
        service = TestBed.inject(AvailabilityPollingService);
    });

    afterEach(() => {
        service.stop();
        vi.useRealTimers();
    });

    it('simulates only when the floor has no level zone', async () => {
        service.start([object('room-1'), object('desk-1', 'desk')]);
        expect(service.simulated()).toBe(true);
        expect(service.states()).toEqual({});

        await vi.advanceTimersByTimeAsync(2_000);
        expect(getSystems).not.toHaveBeenCalled();
        expect(Object.keys(service.states())).toEqual(['room-1', 'desk-1']);
    });

    it('reads live states when a level zone is given', async () => {
        getSystems.mockResolvedValue([{ map_id: 'room-1', bookable: false }]);
        service.start([object('room-1')], 'zone-1');
        expect(service.simulated()).toBe(false);

        await vi.advanceTimersByTimeAsync(2_000);
        expect(getSystems).toHaveBeenCalledWith('zone-1');
        expect(service.states()).toEqual({ 'room-1': 'out-of-service' });
        expect(service.last_updated()).not.toBeNull();
    });

    it('keeps the same states when a poll changes nothing', async () => {
        getSystems.mockResolvedValue([{ map_id: 'room-1', bookable: true }]);
        service.start([object('room-1')], 'zone-1');
        await vi.advanceTimersByTimeAsync(2_000);
        const states = service.states();
        const updated = service.last_updated();

        await vi.advanceTimersByTimeAsync(30_000);
        expect(getSystems).toHaveBeenCalledTimes(2);
        expect(service.states()).toBe(states);
        expect(service.last_updated()).not.toBe(updated);
    });

    it('keeps the last good states when a poll fails', async () => {
        getSystems.mockResolvedValueOnce([
            { map_id: 'room-1', bookable: true },
        ]);
        service.start([object('room-1')], 'zone-1');
        await vi.advanceTimersByTimeAsync(2_000);
        const updated = service.last_updated();

        getSystems.mockRejectedValue(new Error('offline'));
        await vi.advanceTimersByTimeAsync(30_000 * 2);
        expect(service.states()).toEqual({ 'room-1': 'free' });
        expect(service.simulated()).toBe(false);
        expect(service.last_updated()).toBe(updated);
        expect(service.offline()).toBe(false);

        await vi.advanceTimersByTimeAsync(30_000);
        expect(service.offline()).toBe(true);
    });

    it('ignores a poll that lands after the floor changed', async () => {
        let resolve: (systems: unknown[]) => void = () => undefined;
        getSystems.mockReturnValueOnce(new Promise((done) => (resolve = done)));
        service.start([object('room-1')], 'zone-1');
        await vi.advanceTimersByTimeAsync(2_000);

        service.start([object('room-2')], 'zone-2');
        resolve([{ map_id: 'room-1', bookable: false }]);
        await vi.advanceTimersByTimeAsync(0);
        expect(service.states()).toEqual({});
    });
});
