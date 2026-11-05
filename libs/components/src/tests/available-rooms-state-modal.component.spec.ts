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
    ] as unknown[];
    const dialog_data = { type: 'meeting', disabled_rooms: ['space-2'] };
    const org = { building: { id: 'bld-1' } };

    const createComponent = createComponentFactory({
        component: AvailableRoomsStateModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: dialog_data },
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
            { provide: OrganisationService, useValue: org },
        ],
    });

    const roomsLoaded = () =>
        vi.waitFor(() => {
            expect(spectator.component.rooms()).toHaveLength(2);
        });

    beforeEach(() => {
        vi.mocked(ts_client.querySystems).mockReturnValue(
            Promise.resolve({ data: spaces, total: spaces.length }) as any,
        );
        dialog_data.disabled_rooms = ['space-2'];
        org.building = { id: 'bld-1' };
        spectator = createComponent();
    });

    it('should render a row for each room with its state', async () => {
        await roomsLoaded();
        spectator.detectChanges();

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
        expect(spectator.component.selected()).toEqual(['space-1', 'space-2']);
        await spectator.component.toggleRoom('space-1');
        expect(spectator.component.selected()).toEqual(['space-2']);
    });

    it('should toggle selection of all rooms', async () => {
        await roomsLoaded();
        await spectator.component.toggleRoom('*');
        expect(spectator.component.selected()).toEqual(['space-1', 'space-2']);
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

    it('should select a room from its checkbox, such as with the keyboard', async () => {
        await roomsLoaded();
        spectator.detectChanges();
        const input = spectator.query<HTMLInputElement>(
            'tbody tr input[type="checkbox"]',
        );
        input.click();
        spectator.detectChanges();
        expect(spectator.component.selected()).toEqual(['space-1']);
    });

    it('should only allow enable and disable while rooms are selected', async () => {
        await roomsLoaded();
        spectator.detectChanges();
        const buttons = spectator.queryAll<HTMLButtonElement>('footer button');
        expect(buttons.every((button) => button.disabled)).toBe(true);
        await spectator.component.toggleRoom('space-1');
        spectator.detectChanges();
        expect(buttons.some((button) => button.disabled)).toBe(false);
    });

    it('should show an error with a retry when the rooms fail to load', async () => {
        vi.mocked(ts_client.querySystems).mockRejectedValueOnce(
            new Error('Network error'),
        );
        // The room list of a building loads once, so use a new building
        org.building = { id: 'bld-error' };
        spectator = createComponent();
        await vi.waitFor(() => {
            spectator.detectChanges();
            expect('load-error').toExist();
        });
        expect('table').not.toExist();

        spectator.click('load-error button');
        // Retry leaves the page, so focus moves to the title
        expect(document.activeElement).toBe(spectator.query('h2'));
        await vi.waitFor(() => {
            spectator.detectChanges();
            expect(spectator.component.rooms()).toHaveLength(2);
        });
        expect('load-error').not.toExist();
        expect('tbody tr').toHaveLength(2);
    });
});
