import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { OrganisationService } from '@placeos/common';

// `requestSpacesForZone` runs for real; only the ts-client query beneath it is
// stubbed so the real Space mapping/state logic is exercised.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { AvailableRoomsStateModalComponent } from '../lib/available-rooms-state-modal.component';

describe('AvailableRoomsStateModalComponent', () => {
    let spectator: Spectator<AvailableRoomsStateModalComponent>;

    const spaces = [
        { id: 'space-1', name: 'Room 1' },
        { id: 'space-2', name: 'Room 2', display_name: 'Second Room' },
    ] as any[];
    const dialog_data = { type: 'meeting', disabled_rooms: ['space-2'] };

    const createComponent = createComponentFactory({
        component: AvailableRoomsStateModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: dialog_data },
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
            {
                provide: OrganisationService,
                useValue: { building: { id: 'bld-1' } },
            },
        ],
    });

    beforeEach(() => {
        vi.mocked(ts_client.querySystems).mockReturnValue(
            Promise.resolve({ data: spaces, total: spaces.length }) as any,
        );
        dialog_data.disabled_rooms = ['space-2'];
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render a row for each room with its state', () => {
        const rows = spectator.queryAll('tbody tr');
        expect(rows).toHaveLength(2);
        expect(rows[0]).toContainText('Room 1');
        expect(rows[1]).toContainText('Second Room');
        expect(rows[0].querySelector('.bg-success')).toBeTruthy();
        expect(rows[1].querySelector('.bg-error')).toBeTruthy();
    });

    it('should toggle selection of individual rooms', async () => {
        await spectator.component.toggleRoom('space-1');
        expect(spectator.component.selected()).toEqual(['space-1']);
        await spectator.component.toggleRoom('space-2');
        expect(spectator.component.selected()).toEqual([
            'space-1',
            'space-2',
        ]);
        await spectator.component.toggleRoom('space-1');
        expect(spectator.component.selected()).toEqual(['space-2']);
    });

    it('should toggle selection of all rooms', async () => {
        await spectator.component.toggleRoom('*');
        expect(spectator.component.selected()).toEqual([
            'space-1',
            'space-2',
        ]);
        await spectator.component.toggleRoom('*');
        expect(spectator.component.selected()).toEqual([]);
    });

    it('should emit updated disabled list when enabling selected rooms', async () => {
        const spy = vi.fn();
        spectator.component.change.subscribe(spy);
        await spectator.component.toggleRoom('space-2');
        await spectator.component.enableSelected();
        expect(spy).toHaveBeenCalledWith([]);
        expect(spectator.component.disabled_rooms()).toEqual([]);
        spectator.detectChanges();
        expect('mat-spinner').toExist();
    });

    it('should emit updated disabled list when disabling selected rooms', async () => {
        const spy = vi.fn();
        spectator.component.change.subscribe(spy);
        await spectator.component.toggleRoom('space-1');
        await spectator.component.toggleRoom('space-2');
        await spectator.component.disableSelected();
        expect(spy).toHaveBeenCalledWith(['space-2', 'space-1']);
        expect(spectator.component.disabled_rooms()).toEqual([
            'space-2',
            'space-1',
        ]);
    });
});
