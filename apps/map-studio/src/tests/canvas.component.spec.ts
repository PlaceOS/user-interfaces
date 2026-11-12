import { provideZonelessChangeDetection, SecurityContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { DbService } from '../app/data/db';
import { StoreService } from '../app/data/store.service';
import { MapObject } from '../app/data/types';
import { CanvasComponent } from '../app/editor/canvas.component';
import { EditorStateService } from '../app/editor/editor-state.service';
import { MapDbService } from './map-db';

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

describe('CanvasComponent rotate handle', () => {
    it('turns a rotated shape by the angle the pointer moves', async () => {
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DbService, useClass: MapDbService },
                EditorStateService,
            ],
        });
        const store = TestBed.inject(StoreService);
        const editor = TestBed.inject(EditorStateService);
        const floorplan = await store.addFloorplan('p1', 'Level 1');
        await store.createObject(floorplan.id, {
            label: 'Room 1',
            object_type: 'room',
            layer: 'rooms',
            geometry: {
                type: 'rect',
                x: 0,
                y: 0,
                width: 100,
                height: 100,
                rotation: 90,
            },
        });
        await editor.load(floorplan.id);
        const fixture = TestBed.createComponent(CanvasComponent);
        await fixture.whenStable();
        // jsdom lays nothing out; map client pixels 1:1 onto canvas units
        const svg: SVGSVGElement = fixture.nativeElement.querySelector('svg');
        svg.getBoundingClientRect = () =>
            ({ left: 0, top: 0, width: 1000, height: 1000 }) as DOMRect;
        Object.defineProperty(svg, 'viewBox', {
            value: { baseVal: { width: 1000 } },
        });
        const canvas = fixture.componentInstance;
        const at = (type: string, clientX: number, clientY: number) =>
            new MouseEvent(type, { button: 0, clientX, clientY });

        // At 90° the handle sits right of the center (50, 50), not above it
        canvas.startRotate(at('mousedown', 150, 50), editor.objects()[0]);
        canvas.onMouseMove(at('mousemove', 50, 150));

        expect(editor.objects()[0].geometry.rotation).toBe(180);
    });
});
