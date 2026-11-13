import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DbService } from '../app/data/db';
import { PlaceOSService, PlaceOSSystem } from '../app/data/placeos.service';
import { StoreService } from '../app/data/store.service';
import { EditorStateService } from '../app/editor/editor-state.service';
import { PublishPanelComponent } from '../app/editor/publish-panel.component';
import { MapDbService } from './map-db';

const system = (id: string, map_id = ''): PlaceOSSystem => ({
    id,
    name: id,
    display_name: id,
    map_id,
    bookable: true,
    capacity: 4,
    zones: [],
    features: [],
});

const zone = (id: string) => ({ id, name: id, display_name: id });

describe('PublishPanelComponent', () => {
    const placeos = {
        config: { configured: false },
        mode: () => 'manual',
        getZones: vi.fn(),
        getSystems: vi.fn(),
        uploadSvg: vi.fn(),
        updateZone: vi.fn(),
        updateSystem: vi.fn(),
    };
    let store: StoreService;
    let floorplan_id: string;
    let panel: PublishPanelComponent;

    beforeEach(async () => {
        vi.resetAllMocks();
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DbService, useClass: MapDbService },
                { provide: PlaceOSService, useValue: placeos },
                EditorStateService,
            ],
        });
        store = TestBed.inject(StoreService);
        const editor = TestBed.inject(EditorStateService);
        const floorplan = await store.addFloorplan(
            'p1',
            'Level 1',
            0,
            'level-1',
        );
        floorplan_id = floorplan.id;
        await store.createObject(floorplan.id, {
            svg_id: 'room-001',
            label: 'Room 1',
            object_type: 'room',
            layer: 'rooms',
            geometry: { type: 'rect', x: 0, y: 0, width: 50, height: 50 },
        });
        await editor.load(floorplan.id);
        panel = TestBed.createComponent(
            PublishPanelComponent,
        ).componentInstance;
    });

    /** Picks building `b1` and level `level-1`, which holds `systems` */
    const openLevel = async (systems: PlaceOSSystem[]) => {
        placeos.getZones.mockResolvedValue([zone('level-1')]);
        placeos.getSystems.mockResolvedValue(systems);
        await panel.pickBuilding('b1');
        await panel.pickLevel('level-1');
    };

    it('publishes the map, points the level at it and writes the staged links', async () => {
        await openLevel([system('sys-1'), system('sys-2')]);
        panel.setLink(panel.systems().items[0], 'room-001');
        panel.setLink(panel.systems().items[1], 'room-001');
        placeos.uploadSvg.mockResolvedValue({ file_url: '/maps/l1.svg' });
        placeos.updateSystem.mockImplementation(async (id: string) => {
            if (id === 'sys-2') throw new Error('refused');
        });

        await panel.publish();

        expect(placeos.uploadSvg.mock.calls[0][0]).toContain('id="room-001"');
        expect(placeos.updateZone).toHaveBeenCalledWith('level-1', {
            map_id: '/maps/l1.svg',
        });
        expect(placeos.updateSystem.mock.calls).toEqual([
            ['sys-1', { map_id: 'room-001' }],
            ['sys-2', { map_id: 'room-001' }],
        ]);
        expect(panel.level_zone()?.map_id).toBe('/maps/l1.svg');
        expect((await store.getFloorplan(floorplan_id)).source_map_id).toBe(
            '/maps/l1.svg',
        );
        // The link that failed stays staged so the next publish retries it
        expect(panel.systems().items[0].map_id).toBe('room-001');
        expect(panel.pending()).toEqual({ 'sys-2': 'room-001' });
        expect(panel.published()).toMatchObject({
            url: '/maps/l1.svg',
            failed_links: 1,
        });
    });

    it('keeps the links staged and shows why when the upload fails', async () => {
        await openLevel([system('sys-1')]);
        panel.setLink(panel.systems().items[0], 'room-001');
        placeos.uploadSvg.mockRejectedValue(new Error('Storage is full'));

        await panel.publish();

        expect(placeos.updateZone).not.toHaveBeenCalled();
        expect(placeos.updateSystem).not.toHaveBeenCalled();
        expect(panel.status()).toBe('Storage is full');
        expect(panel.publishing()).toBe(false);
        expect(panel.pending()).toEqual({ 'sys-1': 'room-001' });
        expect(panel.published()).toBeNull();
    });

    it('stages a link only while it differs from the link in PlaceOS', async () => {
        await openLevel([system('sys-1', 'room-001')]);
        const [linked] = panel.systems().items;

        panel.setLink(linked, 'room-002');
        expect(panel.pending()).toEqual({ 'sys-1': 'room-002' });
        panel.setLink(linked, 'room-001');
        expect(panel.pending()).toEqual({});
    });

    it('flags systems that link to the same room', async () => {
        await openLevel([system('sys-1', 'room-001'), system('sys-2')]);
        const [first, second] = panel.systems().items;
        expect(panel.hasConflict(first)).toBe(false);

        panel.setLink(second, 'room-001');
        expect(panel.hasConflict(first)).toBe(true);
        expect(panel.hasConflict(second)).toBe(true);
        expect(panel.isTaken(first, 'room-001')).toBe(true);
    });

    it('drops a level list that lands after another building was picked', async () => {
        let finish: (levels: unknown[]) => void = () => undefined;
        placeos.getZones
            .mockReturnValueOnce(new Promise((done) => (finish = done)))
            .mockResolvedValueOnce([zone('b2-level')]);

        const slow = panel.pickBuilding('b1');
        await panel.pickBuilding('b2');
        finish([zone('b1-level')]);
        await slow;

        expect(panel.levels().items.map((level) => level.id)).toEqual([
            'b2-level',
        ]);
    });
});
