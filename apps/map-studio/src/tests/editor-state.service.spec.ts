import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DbService } from '../app/data/db';
import { StoreService } from '../app/data/store.service';
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
