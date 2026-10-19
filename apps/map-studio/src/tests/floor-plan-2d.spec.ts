import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Floorplan, MapObject } from '../app/data/types';
import { FloorPlan2dComponent } from '../app/kiosk/floor-plan-2d.component';

const object = (
    id: string,
    object_type: MapObject['object_type'],
    imported = false,
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
    metadata: imported ? { source: 'svg-import' } : null,
    group_id: null,
    z_index: 0,
    locked: false,
    visible: true,
});

describe('FloorPlan2dComponent draw order', () => {
    it('keeps imported targets above zones and below drawn shapes of their kind', () => {
        // jsdom has no ResizeObserver; the component only uses it for sizing
        vi.stubGlobal(
            'ResizeObserver',
            class {
                public observe() {}
                public disconnect() {}
            },
        );
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(FloorPlan2dComponent);
        fixture.componentRef.setInput('floorplan', {
            id: 'fp',
            svg_source: '<svg/>',
        } as Floorplan);
        fixture.componentRef.setInput('objects', [
            object('drawn-desk', 'desk'),
            object('imported-desk', 'desk', true),
            object('drawn-room', 'room'),
            object('imported-room', 'room', true),
            object('zone', 'zone'),
        ]);
        fixture.componentRef.setInput('availability', {});

        const order = fixture.componentInstance
            .drawOrder()
            .map(({ object, target }) => `${object.id}${target ? '*' : ''}`);
        expect(order).toEqual([
            'zone',
            'imported-room*',
            'drawn-room',
            'imported-desk*',
            'drawn-desk',
        ]);
    });
});
