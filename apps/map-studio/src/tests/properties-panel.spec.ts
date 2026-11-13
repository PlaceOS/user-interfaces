import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DbService } from '../app/data/db';
import { StoreService } from '../app/data/store.service';
import { MapObject } from '../app/data/types';
import { EditorStateService } from '../app/editor/editor-state.service';
import { PropertiesPanelComponent } from '../app/editor/properties-panel.component';
import { MapDbService } from './map-db';

describe('PropertiesPanelComponent', () => {
    let editor: EditorStateService;
    let panel: PropertiesPanelComponent;

    const room = () => editor.objects()[0];
    /** An input event whose target holds `value` */
    const typed = (value: string) => {
        const input = document.createElement('input');
        input.value = value;
        return { input, event: { target: input } as unknown as Event };
    };

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
            capacity: 6,
            fill_color: '#ff0000',
            entity_type: 'system',
            entity_id: 'sys-1',
            geometry: { type: 'rect', x: 0, y: 0, width: 50, height: 40 },
        });
        await editor.load(floorplan.id);
        editor.select(room().id);
        panel = TestBed.createComponent(
            PropertiesPanelComponent,
        ).componentInstance;
    });

    it('rejects values that would break the object, without an undo step', () => {
        const before = room();
        const rejected: [Parameters<typeof panel.set>[1], string][] = [
            ['width', '0'],
            ['height', '-5'],
            ['width', ''],
            ['rotation', 'abc'],
            ['capacity', 'many'],
            ['fill_color', 'red'],
            ['stroke_color', '#12345'],
            ['opacity', ''],
        ];
        for (const [field, value] of rejected) panel.set(room(), field, value);

        expect(room()).toBe(before);
        expect(editor.can_undo()).toBe(false);
    });

    it('normalises values before it stores them', () => {
        const stored = (
            field: Parameters<typeof panel.set>[1],
            value: string,
        ): MapObject => {
            panel.set(room(), field, value);
            return room();
        };

        expect(stored('rotation', '-90').geometry.rotation).toBe(270);
        expect(stored('rotation', '725.4').geometry.rotation).toBe(5);
        expect(stored('capacity', '3.6').capacity).toBe(4);
        expect(stored('capacity', '-2').capacity).toBe(0);
        expect(stored('capacity', '').capacity).toBeNull();
        expect(stored('fill_color', '#AbC').fill_color).toBe('#AAbbCC');
        expect(stored('stroke_color', '').stroke_color).toBeNull();
        expect(stored('tags', ' quiet, ,window ').tags).toEqual([
            'quiet',
            'window',
        ]);
        expect(stored('width', '80').geometry).toMatchObject({
            width: 80,
            height: 40,
        });
    });

    it('clears the entity id together with the entity type', () => {
        panel.set(room(), 'entity_type', '');

        expect(room().entity_type).toBeNull();
        expect(room().entity_id).toBeNull();
    });

    it('puts the stored value back in a field after a rejected edit', () => {
        const { input, event } = typed('nope');
        panel.edit(room(), 'width', event);
        expect(input.value).toBe('50');

        const clamped = typed('-4');
        panel.edit(room(), 'capacity', clamped.event);
        expect(clamped.input.value).toBe('0');
    });

    it('records a whole slider drag as one undo step', () => {
        for (const value of ['0.8', '0.6', '0.4']) {
            panel.preview(room(), 'opacity', typed(value).event);
            expect(room().opacity).toBe(Number(value));
        }
        panel.commitPreview(room(), 'opacity', typed('0.3').event);
        expect(room().opacity).toBe(0.3);

        editor.undo();
        expect(room().opacity).toBe(1);
        expect(editor.can_undo()).toBe(false);
    });
});
