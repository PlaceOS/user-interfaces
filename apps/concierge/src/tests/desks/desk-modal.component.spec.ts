import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { NEVER } from 'rxjs';

import {
    DeskModalComponent,
    DeskModalData,
} from '../../app/desks/desk-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

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

    it('should keep the stored assignee when the staff lookup fails', async () => {
        vi.mocked(ts_client.get).mockRejectedValue('offline');
        dialog_data = {
            desk: {
                id: 'desk-5',
                name: 'Desk 5',
                map_id: 'map-5',
                assigned_to: 'jane@example.com',
                assigned_name: 'Jane',
            },
        };
        spectator = build();
        await spectator.component.ngOnInit();
        const emit = vi.spyOn(spectator.component.event, 'emit');
        spectator.component.model.update((m) => ({ ...m, name: 'Renamed' }));

        spectator.component.postForm();

        const metadata = emit.mock.calls[0][0].metadata as any;
        expect(metadata.assigned_to).toBe('jane@example.com');
    });

    it('should open the map picker on the desk level', () => {
        dialog_data = {
            desk: { id: 'desk-5', name: 'D', map_id: 'm' },
            zone_id: 'level-1',
        };
        spectator = build();
        // The component imports its own MatDialog, so spy on that instance.
        const open = vi
            .spyOn((spectator.component as any)._dialog as MatDialog, 'open')
            .mockReturnValue({ afterClosed: () => NEVER } as any);

        spectator.component.selectItemfromMap();

        expect(open.mock.calls[0][1]).toEqual(
            expect.objectContaining({
                data: expect.objectContaining({ level_id: 'level-1' }),
            }),
        );
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
