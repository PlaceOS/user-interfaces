import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceZone } from '@placeos/ts-client';
import {
    ZoneEditModalComponent,
    ZoneEditModalData,
} from '../../app/zones/zone-edit-modal.component';

describe('ZoneEditModalComponent', () => {
    const roots = signal<PlaceZone[]>([]);
    const zones = signal<PlaceZone[]>([]);
    const on_save = vi.fn();
    const dialog_ref = { close: vi.fn(), disableClose: false };

    async function make(zone = new PlaceZone({}), default_parent_id = '') {
        const data: ZoneEditModalData = {
            zone,
            default_parent_id,
            roots,
            zones,
            load_children: vi.fn().mockResolvedValue([]),
            query_zones: vi.fn().mockReturnValue(null),
            onSave: on_save,
        };
        await TestBed.configureTestingModule({
            imports: [ZoneEditModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(ZoneEditModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(ZoneEditModalComponent)
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
        on_save.mockResolvedValue(new PlaceZone({ id: 'zone-new' }));
    });

    it('creates a zone under the supplied default parent', async () => {
        const component = await make(new PlaceZone({}), 'building');
        component.model.update((model) => ({
            ...model,
            display_name: 'Reception',
            description: 'Reception displays',
        }));

        await component.saveZone();

        expect(on_save).toHaveBeenCalledWith(
            expect.objectContaining({ id: '' }),
            {
                display_name: 'Reception',
                description: 'Reception displays',
                parent_id: 'building',
            },
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'zone-new' }),
        );
    });

    it('updates the parent selected from the accessible zone tree', async () => {
        const component = await make(new PlaceZone({}), 'org');

        component.selectParent(new PlaceZone({ id: 'building' }));

        expect(component.model().parent_id).toBe('building');
    });

    it('does not save without a name and parent zone', async () => {
        const component = await make();

        await component.saveZone();

        expect(on_save).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('seeds edits from the existing zone', async () => {
        const component = await make(
            new PlaceZone({
                id: 'zone-1',
                display_name: 'Lobby',
                description: 'Ground floor',
                parent_id: 'building',
                tags: ['signage'],
            }),
        );

        expect(component.model()).toEqual({
            display_name: 'Lobby',
            description: 'Ground floor',
            parent_id: 'building',
        });
        expect(component.selected_parent()?.id).toBe('building');
    });
});
