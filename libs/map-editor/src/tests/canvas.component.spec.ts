import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MapEditorCanvasComponent } from '../lib/canvas/map-canvas.component';
import { MapEditorComponent } from '../lib/canvas/map-editor.component';
import { RecordingNotifier } from '../lib/canvas/ports';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { ProtectedIdSet } from '../lib/protected-ids';
import { MapEditorSession } from '../lib/session';
import { anchor, OFFICE } from './fixtures';

@Component({
    imports: [MapEditorComponent],
    template: `
        <map-editor
            [session]="session"
            [notifier]="notifier"
            [show_save]="true"
            (save)="saves = saves + 1"
        >
            <div panel class="projected">Panel</div>
        </map-editor>
    `,
})
class HostComponent {
    public saves = 0;
    public readonly notifier = new RecordingNotifier(true);
    public readonly session = new MapEditorSession(
        MapDocument.load(OFFICE, { geometry: new AttributeGeometryProvider() }),
        {
            zone_id: 'zone-1',
            source_text: OFFICE,
            protected: new ProtectedIdSet([
                { id: 'table-01.001', kind: 'desk', label: 'Desk 1' },
            ]),
        },
    );
}

async function settle(fixture: ComponentFixture<HostComponent>) {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
}

function key(target: Element, init: KeyboardEventInit): KeyboardEvent {
    const event = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        ...init,
    });
    target.dispatchEvent(event);
    return event;
}

describe('MapEditorComponent', () => {
    let fixture: ComponentFixture<HostComponent>;
    let host: HostComponent;
    let viewport: HTMLElement;

    beforeEach(async () => {
        fixture = TestBed.createComponent(HostComponent);
        host = fixture.componentInstance;
        await settle(fixture);
        viewport = fixture.nativeElement.querySelector('.viewport');
    });

    it('hides marks without removing them or changing the SVG', async () => {
        const original = host.session.doc.serialise();
        host.session.addAnnotation({
            kind: 'ellipse',
            colour: 'red',
            x: 10,
            y: 20,
            width: 30,
            height: 40,
            hits: [],
        });
        await settle(fixture);
        const toggle = Array.from(
            fixture.nativeElement.querySelectorAll('button'),
        ).find((button: any) =>
            button.textContent.includes('Show marks'),
        ) as HTMLButtonElement;
        expect(viewport.shadowRoot?.querySelector('ellipse')).not.toBeNull();
        toggle.click();
        await settle(fixture);
        expect(toggle.getAttribute('aria-pressed')).toBe('false');
        expect(viewport.shadowRoot?.querySelector('ellipse')).toBeNull();
        expect(host.session.annotations()).toHaveLength(1);
        expect(host.session.doc.serialise()).toBe(original);
        expect(host.session.dirty()).toBe(false);
        toggle.click();
        await settle(fixture);
        expect(viewport.shadowRoot?.querySelector('ellipse')).not.toBeNull();
    });

    it.each(['ellipse', 'box'] as const)(
        'draws a red %s in map coordinates through zoom and pan without editing the map',
        async (kind) => {
            const canvas = fixture.debugElement.query(
                By.directive(MapEditorCanvasComponent),
            ).componentInstance as MapEditorCanvasComponent;
            const editor = fixture.debugElement.query(
                By.directive(MapEditorComponent),
            ).componentInstance as MapEditorComponent;
            const original = host.session.doc.serialise();
            canvas.view.set({ scale: 2, tx: 30, ty: 40 });
            editor.annotation_tool.set(kind);
            await settle(fixture);
            const event = (x: number, y: number) =>
                ({
                    button: 0,
                    pointerId: 1,
                    clientX: x,
                    clientY: y,
                    preventDefault() {},
                }) as PointerEvent;
            canvas.onPointerDown(event(330, 540));
            canvas.onPointerMove(event(210, 380));
            canvas.onPointerUp(event(210, 380));
            await settle(fixture);
            expect(host.session.annotations()).toMatchObject([
                {
                    n: 1,
                    kind,
                    colour: 'red',
                    x: 90,
                    y: 170,
                    width: 60,
                    height: 80,
                },
            ]);
            expect(host.session.annotations()[0].hits).toContain(
                anchor(host.session.doc, 'table-01.001'),
            );
            expect(
                viewport.shadowRoot
                    ?.querySelector(
                        `[data-annotation] ${kind === 'box' ? 'rect' : 'ellipse'}`,
                    )
                    ?.getAttribute(kind === 'box' ? 'x' : 'cx'),
            ).toBe(kind === 'box' ? '90' : '120');
            expect(host.session.doc.serialise()).toBe(original);
            expect(host.session.dirty()).toBe(false);
            expect(host.session.can_undo()).toBe(false);
            host.session.undoAnnotation();
            await settle(fixture);
            expect(host.session.annotations()).toHaveLength(0);
        },
    );

    it('draws an arrow in the chosen colour and cancels a freehand gesture', async () => {
        const canvas = fixture.debugElement.query(
            By.directive(MapEditorCanvasComponent),
        ).componentInstance as MapEditorCanvasComponent;
        const editor = fixture.debugElement.query(
            By.directive(MapEditorComponent),
        ).componentInstance as MapEditorComponent;
        canvas.view.set({ scale: 1, tx: 0, ty: 0 });
        editor.annotation_tool.set('arrow');
        editor.annotation_colour.set('blue');
        await settle(fixture);
        const event = (x: number, y: number) =>
            ({
                button: 0,
                pointerId: 1,
                clientX: x,
                clientY: y,
                preventDefault() {},
            }) as PointerEvent;
        canvas.onPointerDown(event(50, 100));
        canvas.onPointerUp(event(115, 210));
        expect(host.session.annotations()).toMatchObject([
            { kind: 'arrow', colour: 'blue', x2: 115, y2: 210 },
        ]);
        editor.annotation_tool.set('path');
        await settle(fixture);
        canvas.onPointerDown(event(100, 200));
        canvas.onPointerMove(event(150, 250));
        canvas.onPointerCancel(event(150, 250));
        expect(host.session.annotations()).toHaveLength(1);
        host.session.clearAnnotations();
        expect(host.session.annotations()).toHaveLength(0);
        key(viewport, { key: 'Escape' });
        await settle(fixture);
        expect(editor.annotation_tool()).toBe('select');
    });

    it('mounts the document root inside a shadow root with the overlay last', () => {
        const shadow = viewport.shadowRoot as ShadowRoot;
        expect(shadow).toBeTruthy();
        const svgs = shadow.querySelectorAll('.map-wrapper > svg');
        expect(svgs.length).toBe(2);
        expect(svgs[0]).toBe(host.session.doc.root);
        expect(svgs[1].classList.contains('map-editor-overlay')).toBe(true);
        expect(
            (shadow.querySelector('style') as HTMLStyleElement).textContent,
        ).toContain('width: 1000px; height: 500px');
        expect(
            fixture.nativeElement.querySelector('.panel .projected'),
        ).toBeTruthy();
    });

    it('outlines the selection and the hover on the overlay', async () => {
        const shadow = viewport.shadowRoot as ShadowRoot;
        const desk = anchor(host.session.doc, 'table-01.001');
        host.session.select([desk]);
        host.session.setHover(anchor(host.session.doc, 'plant-1'));
        await settle(fixture);
        const selected = shadow.querySelectorAll(
            'rect[data-outline="selected"]',
        );
        expect(selected.length).toBe(1);
        expect(selected[0].getAttribute('x')).toBe('100');
        expect(selected[0].getAttribute('y')).toBe('200');
        expect(
            shadow.querySelectorAll('rect[data-outline="hover"]').length,
        ).toBe(1);
        host.session.setHover(desk);
        await settle(fixture);
        expect(
            shadow.querySelectorAll('rect[data-outline="hover"]').length,
        ).toBe(0);
    });

    it('clears the selection on Escape and keeps the key from the host', async () => {
        host.session.select([anchor(host.session.doc, 'plant-1')]);
        const event = key(viewport, { key: 'Escape' });
        expect(event.defaultPrevented).toBe(true);
        expect(host.session.selection()).toEqual([]);
        const unhandled = key(viewport, { key: 'q' });
        expect(unhandled.defaultPrevented).toBe(false);
    });

    it('deletes the selection on Delete, asking first for a bound id', async () => {
        const doc = host.session.doc;
        host.session.select([anchor(doc, 'plant-1')]);
        key(viewport, { key: 'Delete' });
        await settle(fixture);
        expect(doc.byId('plant-1')).toBeNull();
        expect(host.notifier.confirms.length).toBe(0);

        host.session.select([anchor(doc, 'table-01.001')]);
        key(viewport, { key: 'Backspace' });
        await settle(fixture);
        expect(host.notifier.confirms.length).toBe(1);
        expect(host.notifier.confirms[0].message).toContain('Desk 1');
        expect(doc.byId('table-01.001')).toBeNull();
    });

    it('undoes and redoes from the keyboard and keeps the swapped root mounted', async () => {
        const doc = host.session.doc;
        const shadow = viewport.shadowRoot as ShadowRoot;
        host.session.select([anchor(doc, 'plant-1')]);
        key(viewport, { key: 'Delete' });
        await settle(fixture);
        expect(doc.byId('plant-1')).toBeNull();
        key(viewport, { key: 'z', metaKey: true });
        await settle(fixture);
        expect(doc.byId('plant-1')).not.toBeNull();
        expect(shadow.querySelector('.map-wrapper > svg')).toBe(doc.root);
        key(viewport, { key: 'z', metaKey: true, shiftKey: true });
        await settle(fixture);
        expect(doc.byId('plant-1')).toBeNull();
        expect(shadow.querySelector('.map-wrapper > svg')).toBe(doc.root);
    });

    it('nudges the selection with the arrow keys', async () => {
        const doc = host.session.doc;
        host.session.select([anchor(doc, 'plant-1')]);
        key(viewport, { key: 'ArrowRight', shiftKey: true });
        key(viewport, { key: 'ArrowDown' });
        expect(doc.byId('plant-1')?.getAttribute('transform')).toBe(
            'translate(0 1) translate(10 0)',
        );
        expect(host.session.history.length).toBe(2);
    });

    it('shows the properties of one element and applies edits through ops', async () => {
        const doc = host.session.doc;
        host.session.select([anchor(doc, 'table-01.002')]);
        await settle(fixture);
        const strip: HTMLElement = fixture.nativeElement.querySelector(
            'map-editor-properties',
        );
        expect(strip.querySelector('code')?.textContent).toBe('rect');
        const fill_text =
            strip.querySelectorAll<HTMLInputElement>('input.text.short')[0];
        expect(fill_text.value).toBe('');
        expect(fill_text.placeholder).toBe('#dde');
        expect(strip.textContent).toContain('Set by a stylesheet rule');
        fill_text.value = 'red';
        fill_text.dispatchEvent(new Event('change', { bubbles: true }));
        await settle(fixture);
        expect(doc.byId('table-01.002')?.getAttribute('fill')).toBe('red');
        expect(strip.textContent).toContain('Changed');
        (strip.querySelector('button.link') as HTMLButtonElement).click();
        await settle(fixture);
        expect(doc.byId('table-01.002')?.getAttribute('fill')).toBeNull();
        expect(strip.textContent).not.toContain('Changed');
    });

    it('reflects dirty state in the toolbar and emits save', async () => {
        const toolbar: HTMLElement =
            fixture.nativeElement.querySelector('.toolbar');
        const save = toolbar.querySelector(
            'button.action.primary',
        ) as HTMLButtonElement;
        expect(save.disabled).toBe(true);
        expect(toolbar.textContent).toContain('No changes');
        host.session.select([anchor(host.session.doc, 'plant-2')]);
        key(viewport, { key: 'Delete' });
        await settle(fixture);
        expect(toolbar.textContent).toContain('Unsaved changes');
        expect(save.disabled).toBe(false);
        save.click();
        expect(host.saves).toBe(1);
    });
});
