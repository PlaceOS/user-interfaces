import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    ActivatedRoute,
    convertToParamMap,
    provideRouter,
} from '@angular/router';

import { DbService } from '../app/data/db';
import { PlaceOSService } from '../app/data/placeos.service';
import { StoreService } from '../app/data/store.service';
import { AvailabilityState, MapObject } from '../app/data/types';
import { AvailabilityPollingService } from '../app/kiosk/availability-polling.service';
import { KioskComponent } from '../app/kiosk/kiosk.component';
import { MapDbService } from './map-db';

describe('KioskComponent', () => {
    /** Stand-in for the polling service, so a test sets the states it needs */
    const polling = {
        states: signal<Record<string, AvailabilityState>>({}),
        last_updated: signal<Date | null>(null),
        possible_states: signal<AvailabilityState[]>([]),
        simulated: signal(false),
        offline: signal(false),
        start: vi.fn(),
        stop: vi.fn(),
    };
    let store: StoreService;
    let project_id: string;
    let first: string;
    let second: string;

    const shape = (
        label: string,
        object_type: MapObject['object_type'],
    ): Partial<MapObject> => ({
        label,
        object_type,
        layer: 'rooms',
        geometry: { type: 'rect', x: 0, y: 0, width: 40, height: 40 },
    });

    beforeEach(async () => {
        polling.states.set({});
        polling.start.mockReset();
        // jsdom has no ResizeObserver; the floor plan only uses it for sizing
        vi.stubGlobal(
            'ResizeObserver',
            class {
                public observe() {}
                public disconnect() {}
            },
        );
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                { provide: DbService, useClass: MapDbService },
                {
                    provide: PlaceOSService,
                    useValue: { config: { configured: false } },
                },
                {
                    provide: ActivatedRoute,
                    useFactory: () => ({
                        snapshot: {
                            paramMap: convertToParamMap({
                                project_id,
                                floorplan_id: second,
                            }),
                            queryParamMap: convertToParamMap({}),
                            queryParams: {},
                        },
                    }),
                },
            ],
        });
        TestBed.overrideComponent(KioskComponent, {
            set: {
                providers: [
                    { provide: AvailabilityPollingService, useValue: polling },
                ],
            },
        });
        store = TestBed.inject(StoreService);
        project_id = (await store.createProject('Sydney HQ')).id;
        first = (await store.addFloorplan(project_id, 'Level 1')).id;
        second = (await store.addFloorplan(project_id, 'Level 2')).id;
        await store.createObject(first, shape('Board Room', 'room'));
        await store.createObject(first, shape('Board Zone', 'zone'));
        await store.createObject(second, shape('Board Desk', 'desk'));
        await store.createObject(second, shape('Quiet Room', 'room'));
    });

    afterEach(() => vi.unstubAllGlobals());

    /** Storage lists objects by random id, so compare labels in order */
    const labels = (objects: MapObject[]) => objects.map((o) => o.label).sort();

    /** Opens the kiosk on the second floor and waits for its search index */
    const open = async () => {
        const kiosk = TestBed.createComponent(KioskComponent).componentInstance;
        await vi.waitFor(() => {
            expect(kiosk.loading()).toBe(false);
            expect(kiosk.all_objects()).toHaveLength(4);
        });
        return kiosk;
    };

    it('finds rooms and desks on every floor, the open floor first', async () => {
        const kiosk = await open();

        kiosk.search.set('  BOARD ');

        expect(kiosk.results().map((o) => o.label)).toEqual([
            'Board Desk',
            'Board Room',
        ]);
    });

    it('shows no counts until the first availability arrives', async () => {
        const kiosk = await open();
        expect(kiosk.stats().map((s) => s.value)).toEqual([
            null,
            null,
            null,
            null,
        ]);

        const of = (type: string) =>
            kiosk.objects().find((o) => o.object_type === type)!;
        const [desk, room] = [of('desk'), of('room')];
        polling.states.set({ [desk.id]: 'available', [room.id]: 'booked' });

        const stats = Object.fromEntries(
            kiosk.stats().map((s) => [s.label, [s.value, s.total, s.percent]]),
        );
        expect(stats).toEqual({
            'Rooms Available': [0, 1, 0],
            'Desks Available': [1, 1, 100],
            'Rooms Occupied': [0, 1, 0],
            'Rooms Booked': [1, 1, 100],
        });
    });

    it('opens the floor of a search hit and calls the hit out', async () => {
        const kiosk = await open();
        kiosk.search.set('board room');
        const [hit] = kiosk.results();

        await kiosk.reveal(hit);

        expect(kiosk.search()).toBe('');
        expect(kiosk.floorplan_id()).toBe(first);
        expect(labels(kiosk.objects())).toEqual(['Board Room', 'Board Zone']);
        expect(kiosk.highlight()).toBe(hit.id);
        expect(polling.start).toHaveBeenLastCalledWith(kiosk.objects(), '');
    });

    it('keeps the floor picked last when an earlier pick loads slowly', async () => {
        const kiosk = await open();
        const load = store.getFloorplan.bind(store);
        let finish: () => void = () => undefined;
        const slow = new Promise<void>((done) => (finish = done));
        vi.spyOn(store, 'getFloorplan').mockImplementation(async (id) => {
            if (id === first) await slow;
            return load(id);
        });

        polling.start.mockClear();
        kiosk.pickFloor(first);
        kiosk.pickFloor(second);
        // Both floors were asked for, and the second one finished loading
        expect(store.getFloorplan).toHaveBeenCalledWith(first);
        expect(store.getFloorplan).toHaveBeenCalledWith(second);
        await vi.waitFor(() => expect(polling.start).toHaveBeenCalledOnce());
        finish();
        await new Promise((done) => setTimeout(done));

        expect(kiosk.floorplan_id()).toBe(second);
        expect(kiosk.floorplan()?.id).toBe(second);
        expect(labels(kiosk.objects())).toEqual(['Board Desk', 'Quiet Room']);
    });
});
