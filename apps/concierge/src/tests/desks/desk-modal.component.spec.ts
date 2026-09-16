import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import {
    DeskModalComponent,
    DeskModalData,
} from '../../app/desks/desk-modal.component';

describe('DeskModalComponent', () => {
    let spectator: Spectator<DeskModalComponent>;
    let dialog_data: DeskModalData;
    let dialog_ref: { close: any; disableClose: boolean };

    const createComponent = createComponentFactory({
        component: DeskModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                building: { id: 'bld-1', parent_id: 'region-1' },
            } as any),
            MockProvider(MatDialog, { open: vi.fn() } as any),
        ],
    });

    beforeEach(() => {
        dialog_ref = { close: vi.fn(), disableClose: false };
        dialog_data = {
            desk: undefined,
            levels: [
                {
                    id: 'level-1',
                    name: 'Level 1',
                    display_name: 'First Floor',
                },
            ],
            zone_id: 'level-1',
        };
        (createComponent as any).__ref = dialog_ref;
    });

    function build() {
        return createComponent({
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
        });
    }

    it('should generate a desk id when none is supplied', () => {
        spectator = build();
        expect(spectator.component.model().id).toMatch(/^desk-/);
    });

    it('should initialise a new desk with the default level', () => {
        spectator = build();

        expect(spectator.component.is_new).toBe(true);
        expect(spectator.component.model().zone_id).toBe('level-1');
    });

    it('should hydrate the model from an existing desk', () => {
        dialog_data = {
            desk: {
                id: 'desk-5',
                name: 'Window Desk',
                map_id: 'map-5',
                bookable: true,
                notes: 'note',
            },
        };
        spectator = build();

        expect(spectator.component.id).toBe('desk-5');
        expect(spectator.component.model().name).toBe('Window Desk');
        expect(spectator.component.model().bookable).toBe(true);
    });

    it('should clear the assigned user fields', () => {
        dialog_data = { desk: { id: 'desk-5', name: 'D', map_id: 'm' } };
        spectator = build();
        spectator.component.model.update((m) => ({
            ...m,
            assigned_user: { email: 'a@x.com', name: 'A' } as any,
            assigned_to: 'a@x.com',
            assigned_name: 'A',
        }));

        spectator.component.clearUser();

        expect(spectator.component.model().assigned_user).toBeNull();
        expect(spectator.component.model().assigned_to).toBe('');
    });

    it('should close without emitting when nothing changed', () => {
        dialog_data = {
            desk: {
                id: 'desk-5',
                name: 'Desk 5',
                map_id: 'map-5',
                bookable: false,
                notes: '',
                groups: [],
                features: [],
                security: '',
            },
        };
        spectator = build();
        const emit = vi.spyOn(spectator.component.event, 'emit');

        spectator.component.postForm();

        expect(emit).not.toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should emit a done event when the desk has changes', () => {
        dialog_data = {
            desk: {
                id: 'desk-5',
                name: 'Desk 5',
                map_id: 'map-5',
                bookable: false,
                notes: '',
                groups: [],
                features: [],
                security: '',
            },
        };
        spectator = build();
        const emit = vi.spyOn(spectator.component.event, 'emit');
        spectator.component.model.update((m) => ({ ...m, name: 'Renamed' }));

        spectator.component.postForm();

        expect(emit).toHaveBeenCalledWith(
            expect.objectContaining({ reason: 'done' }),
        );
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
