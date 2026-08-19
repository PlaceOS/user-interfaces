import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';
import {
    DisplayEditModalComponent,
    DisplayEditModalData,
} from '../../app/displays/display-edit-modal.component';

describe('DisplayEditModalComponent', () => {
    const roots = signal<PlaceZone[]>([]);
    const zones = signal<PlaceZone[]>([]);
    const on_add = vi.fn();
    const on_edit = vi.fn();
    const dialog_ref = { close: vi.fn(), disableClose: false };

    async function make(
        display = new PlaceSystem({}),
        default_zone_ids: string[] = [],
    ) {
        const data: DisplayEditModalData = {
            display,
            default_zone_ids,
            roots,
            zones,
            load_children: vi.fn().mockResolvedValue([]),
            query_zones: vi.fn().mockReturnValue(null),
            onAdd: on_add,
            onEdit: on_edit,
        };
        await TestBed.configureTestingModule({
            imports: [DisplayEditModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(DisplayEditModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(DisplayEditModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        dialog_ref.disableClose = false;
        roots.set([new PlaceZone({ id: 'org', name: 'Organisation' })]);
        zones.set([
            new PlaceZone({ id: 'org', name: 'Organisation' }),
            new PlaceZone({ id: 'building', name: 'Building' }),
        ]);
        on_add.mockResolvedValue(new PlaceSystem({ id: 'display-new' }));
        on_edit.mockResolvedValue(new PlaceSystem({ id: 'display-1' }));
    });

    it('creates a display with its default zones and orientation', async () => {
        const component = await make(new PlaceSystem({}), ['org', 'building']);
        component.model.update((model) => ({
            ...model,
            name: 'Foyer',
            description: 'Main entrance',
            orientation: 'portrait',
        }));

        await component.saveDisplay();

        expect(on_add).toHaveBeenCalledWith({
            name: 'SIGNAGE Foyer',
            display_name: 'Foyer',
            description: 'Main entrance',
            orientation: 'portrait',
            signage: true,
            zones: ['org', 'building'],
        });
        expect(on_edit).not.toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'display-new' }),
        );
    });

    it('updates an existing display and preserves its zones', async () => {
        const component = await make(
            new PlaceSystem({
                id: 'display-1',
                display_name: 'Old name',
                zones: ['existing-zone'],
            }),
            ['unused-default'],
        );
        component.model.update((model) => ({ ...model, name: 'Cafe' }));

        await component.saveDisplay();

        expect(on_edit).toHaveBeenCalledWith(
            'display-1',
            expect.objectContaining({
                display_name: 'Cafe',
                zones: ['existing-zone'],
            }),
        );
        expect(on_add).not.toHaveBeenCalled();
    });

    it('adds and removes zones without duplicates', async () => {
        const component = await make(new PlaceSystem({}), ['org']);
        const building = new PlaceZone({ id: 'building', name: 'Building' });

        component.addZone(building);
        component.addZone(building);
        component.removeZone('org');

        expect(component.model().zones).toEqual(['building']);
        expect(component.selected_zones()[0].name).toBe('Building');
    });

    it('does not save without a name', async () => {
        const component = await make();

        await component.saveDisplay();

        expect(on_add).not.toHaveBeenCalled();
        expect(on_edit).not.toHaveBeenCalled();
    });
});
