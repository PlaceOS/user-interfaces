import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DbChanges, DbService } from '../app/data/db';
import { PlaceOSService } from '../app/data/placeos.service';
import { StoreService } from '../app/data/store.service';
import { analyzeSvg } from '../app/data/svg-import';

/**
 * jsdom has no IndexedDB, so the persistence layer is backed by a plain Map.
 * Everything above it — key layout, CSV handling, validation — is the real
 * service.
 */
class MapDbService implements Partial<DbService> {
    private readonly _records = new Map<string, unknown>();

    private _matching(prefix: string) {
        return [...this._records.keys()]
            .filter((key) => key.startsWith(prefix))
            .sort();
    }

    public async get<T>(key: string) {
        return this._records.get(key) as T | undefined;
    }

    public async set(key: string, value: unknown) {
        this._records.set(key, value);
    }

    public async delete(key: string) {
        this._records.delete(key);
    }

    public async list<T>(prefix: string) {
        return this._matching(prefix).map((key) => this._records.get(key) as T);
    }

    public async deleteWhere(prefix: string) {
        this._matching(prefix).forEach((key) => this._records.delete(key));
    }

    public async write(changes: DbChanges) {
        if (changes.clear) await this.deleteWhere(changes.clear);
        changes.delete?.forEach((key) => this._records.delete(key));
        changes.put?.forEach(([key, value]) => this._records.set(key, value));
    }
}

describe('StoreService', () => {
    let store: StoreService;
    const placeos = {
        mode: () => 'domain',
        getFloorplanMetadata: vi.fn(async (level_id: string) =>
            level_id === 'level-1'
                ? {
                      floor_name: 'Saved Level 1',
                      background_color: '#123456',
                      canvas_state: {
                          objects: [{ id: 'saved-room', label: 'Saved Room' }],
                      },
                  }
                : null,
        ),
        saveFloorplanMetadata: vi.fn(
            async (): Promise<string | undefined> => undefined,
        ),
        getZone: vi.fn(async (id: string) =>
            id === 'building-1'
                ? { id, name: 'Sydney HQ', display_name: 'Sydney HQ' }
                : { id, name: id, display_name: id, parent_id: 'building-1' },
        ),
        getZones: vi.fn(async () => [
            { id: 'level-1', name: 'Level 1', display_name: 'Level 1' },
            { id: 'level-2', name: 'Level 2', display_name: 'Level 2' },
        ]),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DbService, useClass: MapDbService },
                { provide: PlaceOSService, useValue: placeos },
            ],
        });
        store = TestBed.inject(StoreService);
    });

    it('nests floorplans under their project and cascades deletes', async () => {
        const project = await store.createProject('Sydney HQ', 'Tower A');
        const floorplan = await store.addFloorplan(project.id, 'Level 1');
        await store.createObject(floorplan.id, { label: 'Room 1' });

        const listed = await store.listProjects();
        expect(listed).toHaveLength(1);
        expect(listed[0].floorplans).toHaveLength(1);
        expect(await store.listObjects(floorplan.id)).toHaveLength(1);

        await store.deleteProject(project.id);
        expect(await store.listProjects()).toHaveLength(0);
        expect(await store.listObjects(floorplan.id)).toHaveLength(0);
    });

    it('keeps the canvas out of project listings', async () => {
        const project = await store.createProject('Sydney HQ');
        const floorplan = await store.addFloorplan(project.id, 'Level 1');
        await store.updateFloorplan(floorplan.id, {
            svg_output: '<svg/>',
            svg_source: '<svg/>',
        });

        const [listed] = (await store.listProjects())[0].floorplans ?? [];
        expect(listed).not.toHaveProperty('svg_output');
        expect(listed).not.toHaveProperty('svg_source');
        expect(listed).not.toHaveProperty('canvas_state');
        await expect(store.getFloorplan(floorplan.id)).resolves.toMatchObject({
            svg_output: '<svg/>',
            svg_source: '<svg/>',
        });
    });

    it('creates missing projects and floorplans from PlaceOS zones once', async () => {
        const zone = (id: string, name: string) => ({
            id,
            name,
            display_name: name,
        });
        const buildings = [
            {
                zone: zone('building-1', 'Sydney HQ'),
                levels: [
                    zone('level-1', 'Level 1'),
                    zone('level-2', 'Level 2'),
                ],
            },
        ];

        await store.syncPlaceOSZones(buildings);
        await store.syncPlaceOSZones(buildings);

        const [project] = await store.listProjects();
        expect(project.building_zone_id).toBe('building-1');
        expect(project.floorplans).toHaveLength(2);
        expect(project.floorplans?.map((floor) => floor.level_zone_id)).toEqual(
            ['level-1', 'level-2'],
        );
        expect(project.floorplans?.[0]).toMatchObject({
            floor_name: 'Saved Level 1',
            background_color: '#123456',
        });
        await expect(
            store.listObjects(project.floorplans![0].id),
        ).resolves.toEqual([
            expect.objectContaining({ id: 'saved-room', label: 'Saved Room' }),
        ]);

        placeos.saveFloorplanMetadata.mockResolvedValueOnce(
            '2099-01-01T00:00:00.000Z',
        );
        const saved = await store.updateFloorplan(project.floorplans![0].id, {
            background_color: '#654321',
        });
        expect(placeos.saveFloorplanMetadata).toHaveBeenCalledWith(
            'level-1',
            expect.objectContaining({ background_color: '#654321' }),
        );
        expect(saved.updated_at).toBe('2099-01-01T00:00:00.000Z');
    });

    it('does not recreate synced zones the user deleted', async () => {
        const zone = (id: string) => ({ id, name: id, display_name: id });
        const buildings = [
            {
                zone: zone('building-1'),
                levels: [zone('level-1'), zone('level-2')],
            },
            { zone: zone('building-2'), levels: [zone('level-3')] },
        ];
        await store.syncPlaceOSZones(buildings);
        const projects = await store.listProjects();
        const first = projects.find((p) => p.building_zone_id === 'building-1');
        const second = projects.find(
            (p) => p.building_zone_id === 'building-2',
        );
        await store.deleteFloorplan(first!.floorplans![1].id);
        await store.deleteProject(second!.id);

        await store.syncPlaceOSZones(buildings);

        const [project, ...rest] = await store.listProjects();
        expect(rest).toHaveLength(0);
        expect(project.floorplans?.map((f) => f.level_zone_id)).toEqual([
            'level-1',
        ]);
    });

    it('appends new floors after the highest floor index', async () => {
        await store.addFloorplan('p1', 'Level 1', 0);
        await store.addFloorplan('p1', 'Level 5', 4);
        const added = await store.addFloorplan('p1', 'Level 6');
        expect(added.floor_index).toBe(5);
    });

    it('imports an SVG into an existing project', async () => {
        const project = await store.createProject('Sydney HQ');
        await store.addFloorplan(project.id, 'Level 1');
        const svg_content =
            '<svg viewBox="0 0 800 600"><rect id="room-1" width="20" height="30"/></svg>';

        const result = await store.importSvg({
            svg_content,
            analysis: analyzeSvg(svg_content),
            project_id: project.id,
            floor_name: 'Level 2',
            mappings: [{ svgId: 'room-1', objectType: 'room' }],
        });

        expect(result.project_id).toBe(project.id);
        const floorplan = await store.getFloorplan(result.floorplan_id);
        expect(floorplan).toMatchObject({
            floor_index: 1,
            source_type: 'svg-import',
            svg_source_ids: ['room-1'],
        });
        expect(floorplan.svg_source).toContain('room-1');
        expect(await store.listProjects()).toHaveLength(1);
    });

    it('removes the new project when an SVG import fails', async () => {
        const svg_content = '<svg viewBox="0 0 10 10"></svg>';
        vi.spyOn(store, 'bulkUpsertObjects').mockRejectedValueOnce(
            new Error('disk full'),
        );

        await expect(
            store.importSvg({
                svg_content,
                analysis: analyzeSvg(svg_content),
                project_name: 'Broken',
                floor_name: 'Level 1',
                mappings: [],
            }),
        ).rejects.toThrow('disk full');
        expect(await store.listProjects()).toHaveLength(0);
    });

    it('detects and applies a newer server floorplan', async () => {
        const floorplan = await store.addFloorplan(
            'project-1',
            'Local Level',
            0,
            'level-1',
        );
        placeos.getFloorplanMetadata.mockResolvedValueOnce({
            floor_name: 'Server Level',
            background_color: '#abcdef',
            updated_at: '2999-01-01T00:00:00.000Z',
            canvas_state: {
                objects: [{ id: 'server-room', label: 'Server Room' }],
            },
        } as never);

        const server = await store.getNewerServerFloorplan(floorplan.id);
        expect(server?.floor_name).toBe('Server Level');
        const applied = await store.applyServerFloorplan(floorplan.id, server!);

        expect(applied).toMatchObject({
            id: floorplan.id,
            project_id: 'project-1',
            level_zone_id: 'level-1',
            floor_name: 'Server Level',
            background_color: '#abcdef',
            updated_at: '2999-01-01T00:00:00.000Z',
        });
        await expect(store.listObjects(floorplan.id)).resolves.toEqual([
            expect.objectContaining({
                id: 'server-room',
                label: 'Server Room',
                floorplan_id: floorplan.id,
            }),
        ]);
        placeos.getFloorplanMetadata.mockResolvedValueOnce({
            updated_at: '2020-01-01T00:00:00.000Z',
        } as never);
        await expect(
            store.getNewerServerFloorplan(floorplan.id),
        ).resolves.toBeNull();
    });

    it("finds a level's floorplan, adding its building's floors once even while another sync runs", async () => {
        const zone = (id: string, name: string) => ({
            id,
            name,
            display_name: name,
        });
        const [, floorplan] = await Promise.all([
            store.syncPlaceOSZones([
                {
                    zone: zone('building-1', 'Sydney HQ'),
                    levels: [
                        zone('level-1', 'Level 1'),
                        zone('level-2', 'Level 2'),
                    ],
                },
            ]),
            store.floorplanForLevel('level-2'),
        ]);

        expect(floorplan.level_zone_id).toBe('level-2');
        const projects = await store.listProjects();
        expect(projects).toHaveLength(1);
        expect(projects[0].floorplans).toHaveLength(2);
        await expect(store.floorplanForLevel('level-2')).resolves.toMatchObject(
            { id: floorplan.id },
        );
    });

    it('keeps a save in this browser when PlaceOS refuses its copy', async () => {
        const floorplan = await store.addFloorplan(
            'project-1',
            'Level 1',
            0,
            'level-1',
        );
        placeos.saveFloorplanMetadata.mockRejectedValueOnce({ status: 413 });

        const saved = await store.updateFloorplan(floorplan.id, {
            background_color: '#abcdef',
        });

        expect(saved.background_color).toBe('#abcdef');
        expect((await store.getFloorplan(floorplan.id)).background_color).toBe(
            '#abcdef',
        );
        expect(store.server_save_error()).toContain('too large');

        await store.updateFloorplan(floorplan.id, { background_color: '#fff' });
        expect(store.server_save_error()).toBe('');
    });

    it('imports a level SVG into an existing local floorplan', async () => {
        const floorplan = await store.addFloorplan(
            'project-1',
            'Level 1',
            0,
            'level-1',
        );
        const imported = await store.importLevelSvg(
            floorplan.id,
            '<svg viewBox="0 0 800 600"><rect id="room-1" width="20" height="30"/></svg>',
            '/maps/level-1.svg',
        );

        expect(imported).toMatchObject({
            source_map_id: '/maps/level-1.svg',
            canvas_width: 800,
            canvas_height: 600,
            source_image_path: `image:${floorplan.id}`,
            source_type: 'image/svg+xml',
        });
        await expect(store.listObjects(floorplan.id)).resolves.toEqual([
            expect.objectContaining({
                svg_id: 'room-1',
                object_type: 'room',
            }),
        ]);
    });

    it('round-trips objects through CSV, escaping and re-parsing fields', async () => {
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        await store.createObject(floorplan.id, {
            svg_id: 'room-1',
            label: 'Board, Room "A"',
            geometry: { type: 'rect', x: 10, y: 20, width: 30, height: 40 },
        });

        const csv = await store.exportObjectsCsv(floorplan.id);
        const target = await store.addFloorplan('p1', 'Level 2');
        const result = await store.importObjectsCsv(target.id, csv);

        expect(result).toEqual({ imported: 1, updated: 0 });
        const [imported] = await store.listObjects(target.id);
        expect(imported.label).toBe('Board, Room "A"');
        expect(imported.geometry).toEqual({
            type: 'rect',
            x: 10,
            y: 20,
            width: 30,
            height: 40,
        });
    });

    it('exports formula-like labels as text and imports them unchanged', async () => {
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        const labels = [
            '=HYPERLINK("https://example.com","Open")',
            '\r=1+1',
            '\t=1+1',
            "'=1+1",
        ];
        for (const [index, label] of labels.entries()) {
            await store.createObject(floorplan.id, {
                svg_id: `room-${index}`,
                label,
                geometry: { type: 'rect', x: 0, y: 0, width: 1, height: 1 },
            });
        }

        const csv = await store.exportObjectsCsv(floorplan.id);
        expect(csv).toContain(`"'=HYPERLINK(`);
        expect(csv).toContain(`"'\r=1+1"`);

        const target = await store.addFloorplan('p1', 'Level 2');
        await store.importObjectsCsv(target.id, csv);
        const imported = await store.listObjects(target.id);
        expect(imported.map((object) => object.label).sort()).toEqual(
            [...labels].sort(),
        );
    });

    it('updates rather than duplicates when a CSV row matches an svg_id', async () => {
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        await store.createObject(floorplan.id, {
            svg_id: 'room-1',
            label: 'Old Name',
            geometry: { type: 'rect', x: 0, y: 0, width: 1, height: 1 },
        });

        const csv = (await store.exportObjectsCsv(floorplan.id)).replace(
            'Old Name',
            'New Name',
        );
        const result = await store.importObjectsCsv(floorplan.id, csv);

        expect(result).toEqual({ imported: 0, updated: 1 });
        const objects = await store.listObjects(floorplan.id);
        expect(objects).toHaveLength(1);
        expect(objects[0].label).toBe('New Name');
    });

    it('reports missing labels, empty geometry and duplicate svg ids', async () => {
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        await store.createObject(floorplan.id, {
            svg_id: 'dupe',
            label: 'A',
            geometry: { type: 'rect', x: 0, y: 0, width: 1, height: 1 },
        });
        await store.createObject(floorplan.id, {
            svg_id: 'dupe',
            label: 'B',
            geometry: { type: 'rect', x: 0, y: 0, width: 1, height: 1 },
        });
        await store.createObject(floorplan.id, { geometry: {} as never });

        const issues = await store.validateFloorplan(floorplan.id);
        const types = issues.map((issue) => issue.message);

        expect(types.filter((m) => m.includes('has no label'))).toHaveLength(1);
        expect(
            types.filter((m) => m.includes('has empty geometry')),
        ).toHaveLength(1);
        expect(
            types.filter((m) => m.includes('Duplicate svg_id')),
        ).toHaveLength(2);
    });

    it('snapshots a version on publish and restores it', async () => {
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        const state = {
            objects: [],
            viewport: { x: 0, y: 0, zoom: 1 },
            selectedIds: [],
            layers: [],
            gridEnabled: true,
            snapEnabled: true,
            gridSize: 10,
        };
        await store.saveCanvasState(floorplan.id, state);
        await store.publishFloorplan(floorplan.id);

        const published = await store.getFloorplan(floorplan.id);
        expect(published.status).toBe('published');
        expect(published.version).toBe(2);

        const [version] = await store.listVersions(floorplan.id);
        await store.saveCanvasState(floorplan.id, {
            ...state,
            gridSize: 99,
        });
        await store.restoreVersion(floorplan.id, version.id);

        const restored = await store.getFloorplan(floorplan.id);
        expect(restored.canvas_state?.gridSize).toBe(10);
    });
});
