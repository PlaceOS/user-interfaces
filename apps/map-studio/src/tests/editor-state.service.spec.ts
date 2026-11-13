import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DbService } from '../app/data/db';
import { PlaceOSService } from '../app/data/placeos.service';
import { StoreService } from '../app/data/store.service';
import { EditorStateService } from '../app/editor/editor-state.service';
import { MapDbService } from './map-db';

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

    it('stores an uploaded image size so the kiosk uses the same canvas', async () => {
        // jsdom decodes no images; report a fixed natural size instead
        vi.stubGlobal(
            'Image',
            class {
                public naturalWidth = 1600;
                public naturalHeight = 900;
                public onload: (() => void) | null = null;
                public set src(_: string) {
                    queueMicrotask(() => this.onload?.());
                }
            },
        );
        vi.spyOn(store, 'getSourceImageUrl').mockResolvedValue('blob:plan');

        await editor.uploadSourceImage(new File(['png'], 'plan.png'));

        const saved = await store.getFloorplan(floorplan_id);
        expect([saved.canvas_width, saved.canvas_height]).toEqual([1600, 900]);
        expect(editor.canvas_width()).toBe(1600);
        vi.unstubAllGlobals();
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

    it('never gives a new object an svg id that another object still has', async () => {
        const room = (svg_id: string) =>
            editor.createObject({
                object_type: 'room',
                svg_id,
                layer: 'rooms',
            });
        await room('room-002');
        await room('room-003');
        await editor.deleteObject(
            editor.objects().find((o) => o.svg_id === 'room-002')!.id,
        );
        expect(editor.nextNaming('room').svg_id).toBe('room-004');

        editor.startPlacing('desk-layout', 'row-4');
        await editor.placeAt(100, 100);
        await editor.deleteObject(
            editor.objects().find((o) => o.svg_id === 'desk-002')!.id,
        );
        editor.startPlacing('desk-layout', 'row-4');
        await editor.placeAt(300, 100);
        const ids = editor.objects().map((o) => o.svg_id);
        expect(new Set(ids).size).toBe(ids.length);
        expect(ids).toContain('desk-008');
    });

    it('auto-numbers one type and keeps labels a person wrote', async () => {
        const [room] = editor.objects();
        const boardroom = await editor.createObject({
            object_type: 'room',
            label: 'Boardroom',
            layer: 'rooms',
        });
        const desk = await editor.createObject({
            object_type: 'desk',
            svg_id: 'desk-001',
            label: 'Desk 1',
            layer: 'desks',
        });

        await editor.autoNumber('room', 'L1-R', 10);
        const by_id = (id: string) =>
            editor.objects().find((o) => o.id === id)!;
        expect(by_id(room.id)).toMatchObject({
            svg_id: 'L1-R010',
            label: 'Room 10',
        });
        expect(by_id(boardroom.id)).toMatchObject({
            svg_id: 'L1-R011',
            label: 'Boardroom',
        });
        expect(by_id(desk.id).svg_id).toBe('desk-001');
        const stored = await store.listObjects(floorplan_id);
        expect(stored.find((o) => o.id === room.id)?.svg_id).toBe('L1-R010');

        editor.undo();
        expect(by_id(room.id).svg_id).toBe('room-001');
        expect(by_id(boardroom.id).svg_id).toBeNull();
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

    it('keeps edits made during a save pending and saves them next', async () => {
        const id = editor.objects()[0].id;
        let release: () => void = () => undefined;
        const write = vi
            .spyOn(store, 'saveCanvasState')
            .mockImplementationOnce(
                () => new Promise<void>((done) => (release = done)),
            );
        await editor.updateObject(id, { label: 'First' });
        const first = editor.save();
        await editor.updateObject(id, { label: 'Second' });
        const second = editor.save();

        release();
        await first;
        await second;

        expect(write).toHaveBeenCalledTimes(2);
        expect(write.mock.calls[1][1].objects[0].label).toBe('Second');
        expect(editor.dirty()).toBe(false);
    });

    it('hands the active layer on when the current one is deleted', async () => {
        editor.setActiveLayer('zones');
        await editor.deleteLayer('zones');
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

    it('drags the multi-selection only when the dragged object is in it', async () => {
        const room = editor.objects()[0];
        const second = await editor.createObject({
            object_type: 'room',
            layer: 'rooms',
        });
        const third = await editor.createObject({
            object_type: 'room',
            layer: 'rooms',
        });

        editor.setMultiSelect([room.id, second.id]);
        expect(editor.movingIds(second.id)).toEqual([room.id, second.id]);
        expect(editor.movingIds(third.id)).toEqual([third.id]);
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

    it('keeps zoom between 80% and 1000% and the grid between 5 and 100', () => {
        editor.setZoom(0.5);
        expect(editor.zoom()).toBe(0.8);
        editor.setZoom(40);
        expect(editor.zoom()).toBe(10);

        editor.setGridSize(2);
        expect(editor.grid_size()).toBe(5);
        editor.setGridSize(500);
        expect(editor.grid_size()).toBe(100);
        // A cleared or invalid field falls back to the default
        editor.setGridSize(Number.NaN);
        expect(editor.grid_size()).toBe(20);
    });

    it('keeps at most 50 undo steps', () => {
        const id = editor.objects()[0].id;
        for (let x = 1; x <= 51; x++) {
            editor.pushHistory();
            editor.patchLocal(id, {
                geometry: { type: 'rect', x, y: 0, width: 50, height: 50 },
            });
        }

        let undone = 0;
        while (editor.can_undo() && undone < 100) {
            editor.undo();
            undone++;
        }
        expect(undone).toBe(50);
        // The oldest step (x = 0) fell off the stack
        expect(editor.objects()[0].geometry.x).toBe(1);
    });

    it('applies a bulk edit to every object as one undo step', async () => {
        const [room] = editor.objects();
        const desk = await editor.createObject({
            object_type: 'desk',
            layer: 'desks',
            locked: false,
        });

        await editor.bulkUpdate([room.id, desk.id], { locked: true });
        expect(editor.objects().map((o) => o.locked)).toEqual([true, true]);
        const stored = await store.listObjects(floorplan_id);
        expect(stored.every((o) => o.locked)).toBe(true);

        editor.undo();
        expect(editor.objects().map((o) => o.locked)).toEqual([false, false]);
    });

    it('creates a shape of the type its layer holds', async () => {
        editor.setActiveLayer('desks');
        const desk = await editor.createOnActiveLayer({
            type: 'rect',
            x: 0,
            y: 0,
            width: 30,
            height: 20,
        });
        expect(desk).toMatchObject({
            object_type: 'desk',
            layer: 'desks',
            label: 'Desk 1',
            svg_id: 'desk-001',
            metadata: { furnitureType: 'desk-single' },
        });

        editor.setActiveLayer('walls');
        const wall = await editor.createOnActiveLayer({
            type: 'rect',
            x: 0,
            y: 0,
            width: 100,
            height: 4,
        });
        expect(wall).toMatchObject({
            object_type: 'decorative',
            layer: 'walls',
        });
        expect(wall.metadata).toBeFalsy();
    });

    it('centres placed furniture on the click and ignores an unknown asset', async () => {
        editor.startPlacing('furniture', 'desk-single');
        await editor.placeAt(100, 100);
        const furniture = editor.objects().at(-1);
        expect(furniture).toMatchObject({
            object_type: 'decorative',
            layer: 'background',
            svg_id: 'furniture-001',
            geometry: { x: 85, y: 90, width: 30, height: 20 },
        });

        editor.startPlacing('furniture', 'no-such-asset');
        await editor.placeAt(100, 100);
        expect(editor.objects()).toHaveLength(2);
    });

    it('resets the availability preview of bookable objects only', async () => {
        const desk = await editor.createObject({
            object_type: 'desk',
            layer: 'desks',
        });
        await editor.createObject({ object_type: 'zone', layer: 'zones' });
        const [room] = editor.objects();

        editor.cycleAvailability(room);
        editor.cycleAvailability(room);
        expect(editor.availability_states()[room.id]).toBe('checked-in');

        editor.resetAvailability();
        expect(editor.availability_states()).toEqual({
            [room.id]: 'free',
            [desk.id]: 'available',
        });
    });
});
