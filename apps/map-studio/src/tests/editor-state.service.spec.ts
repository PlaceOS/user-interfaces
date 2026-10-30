import { provideZonelessChangeDetection, SecurityContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { DbChanges, DbService } from '../app/data/db';
import { PlaceOSService } from '../app/data/placeos.service';
import { StoreService } from '../app/data/store.service';
import { MapObject } from '../app/data/types';
import { CanvasComponent } from '../app/editor/canvas.component';
import { EditorStateService } from '../app/editor/editor-state.service';

/** jsdom has no IndexedDB — back the store with a plain Map instead */
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

describe('EditorStateService', () => {
    let editor: EditorStateService;
    let store: StoreService;
    let floorplan_id: string;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DbService, useClass: MapDbService },
                EditorStateService,
            ],
        });
        store = TestBed.inject(StoreService);
        editor = TestBed.inject(EditorStateService);

        const floorplan = await store.addFloorplan('p1', 'Level 1');
        floorplan_id = floorplan.id;
        await store.createObject(floorplan.id, {
            svg_id: 'room-001',
            label: 'Room 1',
            object_type: 'room',
            layer: 'rooms',
            geometry: { type: 'rect', x: 0, y: 0, width: 50, height: 50 },
        });
        await editor.load(floorplan.id);
    });

    it('loads the floorplan and its objects', () => {
        expect(editor.objects()).toHaveLength(1);
        expect(editor.loading()).toBe(false);
        expect(editor.error()).toBe('');
    });

    it('requires confirmation before replacing a legacy SVG draft', async () => {
        await store.updateFloorplan(floorplan_id, {
            source_type: 'svg-import',
            svg_output:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><rect width="20" height="20"/></svg>',
        });
        await editor.load(floorplan_id);
        const imported = vi
            .spyOn(store, 'importLevelSvg')
            .mockResolvedValue(await store.getFloorplan(floorplan_id));
        const confirm_import = vi.fn(() => false);
        vi.stubGlobal('confirm', confirm_import);
        await editor.reimportSvg();
        expect(imported).not.toHaveBeenCalled();
        expect(editor.objects()).toHaveLength(1);
        confirm_import.mockReturnValue(true);
        vi.spyOn(editor, 'load').mockResolvedValue(undefined);
        vi.spyOn(editor, 'save').mockResolvedValue(undefined);
        await editor.reimportSvg();
        expect(imported).toHaveBeenCalledWith(
            floorplan_id,
            expect.stringContaining('<rect'),
        );
        vi.unstubAllGlobals();
    });

    it('offers to apply a newer server floorplan', async () => {
        const server = {
            floor_name: 'Server Level',
            updated_at: '2999-01-01T00:00:00.000Z',
        };
        vi.spyOn(store, 'getNewerServerFloorplan').mockResolvedValue(server);
        const apply = vi
            .spyOn(store, 'applyServerFloorplan')
            .mockResolvedValue({
                ...(await store.getFloorplan(floorplan_id)),
                ...server,
            });
        const confirm_save = vi.fn(() => true);
        vi.stubGlobal('confirm', confirm_save);

        await editor.load(floorplan_id);

        expect(confirm_save).toHaveBeenCalledWith(
            expect.stringContaining('newer server version'),
        );
        expect(apply).toHaveBeenCalledWith(floorplan_id, server);
        expect(editor.floorplan()?.floor_name).toBe('Server Level');
        vi.unstubAllGlobals();
    });

    it('offers to import a level SVG the first time an empty floorplan opens', async () => {
        const floorplan = await store.addFloorplan(
            'p1',
            'Level 2',
            1,
            'level-2',
        );
        const svg = '<svg viewBox="0 0 10 10"></svg>';
        vi.spyOn(
            TestBed.inject(PlaceOSService),
            'getLevelMap',
        ).mockResolvedValue({ map_id: '/maps/level-2.svg', svg });
        const imported = vi
            .spyOn(store, 'importLevelSvg')
            .mockResolvedValue({ ...floorplan, svg_output: svg });
        const confirm_import = vi.fn(() => true);
        vi.stubGlobal('confirm', confirm_import);

        await editor.load(floorplan.id);

        expect(confirm_import).toHaveBeenCalledWith(
            expect.stringContaining('already has an SVG map'),
        );
        expect(imported).toHaveBeenCalledWith(
            floorplan.id,
            svg,
            '/maps/level-2.svg',
        );
        expect(
            localStorage.getItem(`map-studio.svg-import.${floorplan.id}`),
        ).toBe('checked');
        vi.unstubAllGlobals();
    });

    it("offers the level's current map when it is not the one the floorplan came from", async () => {
        const placeos = TestBed.inject(PlaceOSService);
        vi.spyOn(placeos, 'mode').mockReturnValue('domain');
        vi.spyOn(placeos, 'saveFloorplanMetadata').mockResolvedValue(undefined);
        vi.spyOn(store, 'getNewerServerFloorplan').mockResolvedValue(null);
        const floorplan = await store.addFloorplan(
            'p1',
            'Level 3',
            2,
            'level-3',
            {
                source_map_id: '/maps/old.svg',
            },
        );
        await store.createObject(floorplan.id, { label: 'Desk' });
        vi.spyOn(placeos, 'getZone').mockResolvedValue({
            map_id: '/maps/new.svg',
        } as never);
        const svg = '<svg viewBox="0 0 10 10"></svg>';
        vi.spyOn(placeos, 'getLevelMap').mockResolvedValue({
            map_id: '/maps/new.svg',
            svg,
        });
        const imported = vi
            .spyOn(store, 'importLevelSvg')
            .mockResolvedValue({ ...floorplan, svg_output: svg });
        const ask = vi.fn(() => false);
        vi.stubGlobal('confirm', ask);

        await editor.load(floorplan.id);
        expect(ask).toHaveBeenCalledWith(
            expect.stringContaining('not the one this floorplan was made from'),
        );
        expect(imported).not.toHaveBeenCalled();
        expect((await store.getFloorplan(floorplan.id)).source_map_id).toBe(
            '/maps/new.svg',
        );

        ask.mockClear();
        await editor.load(floorplan.id);
        expect(ask).not.toHaveBeenCalled();

        await store.updateFloorplan(floorplan.id, {
            source_map_id: '/maps/old.svg',
        });
        ask.mockReturnValue(true);
        await editor.load(floorplan.id);
        expect(imported).toHaveBeenCalledWith(
            floorplan.id,
            svg,
            '/maps/new.svg',
        );
        vi.unstubAllGlobals();
    });

    it('starts with nothing to undo', () => {
        expect(editor.can_undo()).toBe(false);
        expect(editor.can_redo()).toBe(false);
    });

    it('undoes and redoes a geometry change', async () => {
        const id = editor.objects()[0].id;

        editor.pushHistory();
        expect(editor.can_undo()).toBe(true);

        await editor.updateObject(id, {
            geometry: { type: 'rect', x: 100, y: 200, width: 50, height: 50 },
        });
        expect(editor.objects()[0].geometry.x).toBe(100);

        editor.undo();
        expect(editor.objects()[0].geometry.x).toBe(0);
        expect(editor.can_redo()).toBe(true);

        editor.redo();
        expect(editor.objects()[0].geometry.x).toBe(100);
    });

    it('does not record history for a change that never happened', () => {
        editor.pushHistory();
        editor.pushHistory();
        editor.pushHistory();

        editor.undo();
        expect(editor.can_undo()).toBe(false);
    });

    it('undoes a creation by removing the object again', async () => {
        editor.pushHistory();
        await editor.createObject({
            object_type: 'desk',
            label: 'Desk 1',
            layer: 'desks',
            geometry: { type: 'rect', x: 10, y: 10, width: 30, height: 20 },
        });
        expect(editor.objects()).toHaveLength(2);

        editor.undo();
        expect(editor.objects()).toHaveLength(1);
        // The removal must reach storage, not just the signal
        expect(await store.listObjects(floorplan_id)).toHaveLength(1);
    });

    it('undoes a deletion by restoring the object', async () => {
        const id = editor.objects()[0].id;
        await editor.deleteObject(id);
        expect(editor.objects()).toHaveLength(0);

        editor.undo();
        expect(editor.objects()).toHaveLength(1);
        expect(await store.listObjects(floorplan_id)).toHaveLength(1);
    });

    it('places a desk layout as one undoable step', async () => {
        editor.startPlacing('desk-layout', 'row-4');
        await editor.placeAt(100, 100);
        expect(editor.objects()).toHaveLength(5);
        expect(await store.listObjects(floorplan_id)).toHaveLength(5);

        editor.undo();
        expect(editor.objects()).toHaveLength(1);
        expect(await store.listObjects(floorplan_id)).toHaveLength(1);
    });

    it('adds and updates one AI building outline', async () => {
        await editor.applyAiOutline([
            { x: 10, y: 20 },
            { x: 110, y: 20 },
            { x: 110, y: 120 },
        ]);
        await editor.applyAiOutline([
            { x: 20, y: 30 },
            { x: 90, y: 30 },
            { x: 90, y: 80 },
        ]);

        const outlines = editor
            .objects()
            .filter((object) => object.svg_id === 'ai-outline');
        expect(outlines).toHaveLength(1);
        expect(outlines[0].geometry).toMatchObject({
            type: 'polygon',
            x: 20,
            y: 30,
            width: 70,
            height: 50,
        });
        expect(outlines[0].metadata?.['ai_detected']).toBe(true);
    });

    it('replaces only rooms created by an earlier AI run', async () => {
        await editor.replaceAiRooms([
            {
                id: 'first-ai-room',
                label: 'AI Room 1',
                type: 'meeting',
                x: 10,
                y: 10,
                width: 30,
                height: 40,
            },
        ]);
        await editor.replaceAiRooms([
            {
                id: 'second-ai-room',
                label: 'AI Room 2',
                type: 'focus',
                x: 50,
                y: 50,
                width: 20,
                height: 20,
            },
        ]);

        expect(
            editor.objects().filter((object) => object.object_type === 'room'),
        ).toHaveLength(2);
        expect(
            editor
                .objects()
                .find((object) => object.svg_id === 'second-ai-room')?.metadata,
        ).toEqual({ ai_detected: true, room_type: 'focus' });
        expect(
            editor
                .objects()
                .some((object) => object.svg_id === 'first-ai-room'),
        ).toBe(false);

        editor.undo();
        expect(
            editor
                .objects()
                .some((object) => object.svg_id === 'first-ai-room'),
        ).toBe(true);
    });

    it('clears the redo stack once a new change lands', async () => {
        const id = editor.objects()[0].id;
        editor.pushHistory();
        await editor.updateObject(id, { label: 'Renamed' });
        editor.undo();
        expect(editor.can_redo()).toBe(true);

        editor.pushHistory();
        await editor.updateObject(id, { label: 'Different' });
        expect(editor.can_redo()).toBe(false);
    });

    it('names and colours new objects by type', () => {
        expect(editor.nextNaming('room')).toEqual({
            label: 'Room 2',
            svg_id: 'room-002',
        });
        expect(editor.colorsFor('desk')).toEqual({
            fill_color: '#2563eb55',
            stroke_color: '#2563eb',
        });
    });

    it('reorders layers without disturbing the rest', () => {
        const before = editor.sorted_layers().map((l) => l.id);
        editor.moveLayer('desks', 'up');
        const after = editor.sorted_layers().map((l) => l.id);

        const i = before.indexOf('desks');
        expect(after[i - 1]).toBe('desks');
        expect(after[i]).toBe(before[i - 1]);
        expect(after).toHaveLength(before.length);
    });

    it('deletes a multi-selection as one undo step', async () => {
        const room = editor.objects()[0];
        const desk = await editor.createObject({
            object_type: 'desk',
            label: 'Desk 1',
            layer: 'desks',
            geometry: { type: 'rect', x: 10, y: 10, width: 20, height: 20 },
        });

        await editor.deleteObjects([room.id, desk.id]);
        expect(editor.objects()).toHaveLength(0);

        editor.undo();
        expect(editor.objects()).toHaveLength(2);
        expect(await store.listObjects(floorplan_id)).toHaveLength(2);
    });

    it('duplicates a multi-selection as one undo step', async () => {
        const second = await editor.createObject({
            object_type: 'room',
            label: 'Room 2',
            layer: 'rooms',
            geometry: { type: 'rect', x: 60, y: 0, width: 50, height: 50 },
        });

        const copies = await editor.duplicateObjects([
            editor.objects()[0].id,
            second.id,
        ]);
        expect(copies).toHaveLength(2);
        expect(editor.objects()).toHaveLength(4);
        // Each copy takes the next free id for its type
        expect(copies.map((c) => c.svg_id)).toEqual(['room-003', 'room-004']);
        expect(await store.listObjects(floorplan_id)).toHaveLength(4);
        expect(editor.multi_select()).toEqual(copies.map((c) => c.id));

        editor.undo();
        expect(editor.objects()).toHaveLength(2);
    });

    it('places a desk group as one undo step', async () => {
        editor.startPlacing('desk-layout', 'row-4');
        await editor.placeAt(200, 200);
        expect(editor.objects()).toHaveLength(5);

        editor.undo();
        expect(editor.objects()).toHaveLength(1);
    });

    it('deletes a layer with its objects, and undo brings both back', async () => {
        await editor.deleteLayer('rooms');
        expect(editor.objects()).toHaveLength(0);
        expect(editor.layers().some((l) => l.id === 'rooms')).toBe(false);

        editor.undo();
        expect(editor.objects()).toHaveLength(1);
        expect(editor.visible_objects()).toHaveLength(1);
    });

    it('keeps the plan dirty and shows the error when a save fails', async () => {
        await editor.updateObject(editor.objects()[0].id, { label: 'Moved' });
        vi.spyOn(store, 'saveCanvasState').mockRejectedValueOnce(
            new Error('Disk full'),
        );

        expect(await editor.flush()).toBe(false);
        expect(editor.dirty()).toBe(true);
        expect(editor.error()).toBe('Disk full');

        expect(await editor.flush()).toBe(true);
        expect(editor.error()).toBe('');
    });

    it('hands the active layer on when the current one is deleted', () => {
        editor.setActiveLayer('zones');
        editor.deleteLayer('zones');
        expect(editor.active_layer_id()).not.toBe('zones');
        expect(editor.layers().some((l) => l.id === 'zones')).toBe(false);
    });

    it('drops hidden layers from the visible object set', () => {
        expect(editor.visible_objects()).toHaveLength(1);
        editor.updateLayer('rooms', { visible: false });
        expect(editor.visible_objects()).toHaveLength(0);
    });

    it('keeps multi-selection on one layer', async () => {
        const room = editor.objects()[0];
        const secondRoom = await editor.createObject({
            object_type: 'room',
            label: 'Room 2',
            layer: 'rooms',
            geometry: { type: 'rect', x: 60, y: 0, width: 50, height: 50 },
        });
        const desk = await editor.createObject({
            object_type: 'desk',
            label: 'Desk 1',
            layer: 'desks',
            geometry: { type: 'rect', x: 10, y: 10, width: 20, height: 20 },
        });

        editor.setMultiSelect([room.id, secondRoom.id, desk.id]);
        expect(editor.multi_select()).toEqual([room.id, secondRoom.id]);

        editor.toggleMultiSelect(desk.id);
        expect(editor.multi_select()).toEqual([room.id, secondRoom.id]);
    });

    it('extends a plain click selection with Shift-click', async () => {
        const room = editor.objects()[0];
        const secondRoom = await editor.createObject({
            object_type: 'room',
            label: 'Room 2',
            layer: 'rooms',
            geometry: { type: 'rect', x: 60, y: 0, width: 50, height: 50 },
        });

        editor.select(room.id);
        editor.toggleMultiSelect(secondRoom.id);
        expect(editor.multi_select()).toEqual([room.id, secondRoom.id]);
    });

    it('keeps a deleted default layer deleted after reopening', async () => {
        await editor.deleteLayer('zones');
        await editor.save();
        await editor.load(floorplan_id);
        expect(editor.layers().some((l) => l.id === 'zones')).toBe(false);
    });

    it('saves the canvas state back to the floorplan', async () => {
        editor.setZoom(2);
        await editor.save();

        const floorplan = await store.getFloorplan(floorplan_id);
        expect(floorplan.canvas_state?.viewport.zoom).toBe(2);
        expect(floorplan.canvas_state?.objects).toHaveLength(1);
        expect(editor.dirty()).toBe(false);
    });

    it('limits zoom to 80%', () => {
        editor.setZoom(0.5);
        expect(editor.zoom()).toBe(0.8);
    });
});

describe('CanvasComponent pointer presses', () => {
    let editor: EditorStateService;
    let svg: SVGSVGElement;

    /** jsdom lays nothing out, so every client point maps to canvas (0, 0) */
    const press = (type: string, clientX = 0) =>
        svg.dispatchEvent(
            new MouseEvent(type, { button: 0, clientX, bubbles: true }),
        );

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DbService, useClass: MapDbService },
                EditorStateService,
            ],
        });
        const store = TestBed.inject(StoreService);
        editor = TestBed.inject(EditorStateService);
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        await store.createObject(floorplan.id, {
            label: 'Room 1',
            object_type: 'room',
            layer: 'rooms',
            geometry: { type: 'rect', x: 0, y: 0, width: 50, height: 50 },
        });
        await editor.load(floorplan.id);

        const fixture = TestBed.createComponent(CanvasComponent);
        await fixture.whenStable();
        svg = fixture.nativeElement.querySelector('svg');
    });

    it('selects without marking the plan dirty when the pointer does not travel', () => {
        press('mousedown');
        press('mousemove', 3);
        press('mouseup', 3);

        expect(editor.selected_id()).toBe(editor.objects()[0].id);
        expect(editor.dirty()).toBe(false);
        expect(editor.can_undo()).toBe(false);
    });

    it('commits a drag once the pointer passes the threshold', () => {
        press('mousedown');
        press('mousemove', 20);
        press('mouseup', 20);

        expect(editor.dirty()).toBe(true);
        expect(editor.can_undo()).toBe(true);
    });
});

describe('CanvasComponent furniture art', () => {
    const art = (stroke_color: string) => {
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DbService, useClass: MapDbService },
                EditorStateService,
            ],
        });
        const canvas =
            TestBed.createComponent(CanvasComponent).componentInstance;
        const html = canvas.furnitureArt({
            stroke_color,
            metadata: { furnitureType: 'desk-single' },
        } as unknown as MapObject);
        return TestBed.inject(DomSanitizer).sanitize(
            SecurityContext.HTML,
            html,
        );
    };

    it('paints the art with a hex stroke colour', () => {
        expect(art('#ff0000')).toContain('#ff0000');
    });

    it('does not put a stroke that is not a hex colour into the markup', () => {
        const markup = art('"/><img src=x onerror=alert(1)>');
        expect(markup).not.toContain('onerror');
        expect(markup).toContain('#333');
    });
});
