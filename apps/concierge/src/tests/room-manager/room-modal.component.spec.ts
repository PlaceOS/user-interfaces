import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { RoomModalComponent } from '../../app/room-manager/room-modal.component';

jest.mock('@placeos/ts-client');

describe('RoomModalComponent', () => {
    let spectator: Spectator<RoomModalComponent>;
    let dialog_data: { room: any };

    const createComponent = createComponentFactory({
        component: RoomModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(MatDialogRef, { close: jest.fn() } as any),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                building: { id: 'bld-1', parent_id: 'region-1' },
                active_levels: signal([{ id: 'lvl-1' }]),
                levelWithID: jest.fn(),
            } as any),
            MockProvider(MatDialog, {} as any),
        ],
    });

    const build = (room: any) => {
        dialog_data = { room };
        return createComponent({ detectChanges: false });
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (ts_client_mod.showMetadata as jest.Mock).mockResolvedValue({
            details: {},
        });
    });

    it('should flag a room without an id as new', () => {
        spectator = build({});
        expect(spectator.component.is_new).toBe(true);
    });

    it('should flag a room with an id as existing', () => {
        spectator = build({ id: 'sys-1', name: 'Boardroom' });
        expect(spectator.component.is_new).toBe(false);
    });

    it('should append a trimmed feature and clear the input', () => {
        spectator = build({ id: 'sys-1', name: 'Boardroom' });
        const input = { value: 'Whiteboard' } as HTMLInputElement;
        spectator.component.addFeature({
            input,
            value: '  Whiteboard  ',
        } as any);
        expect(spectator.component.feature_list).toContain('Whiteboard');
        expect(input.value).toBe('');
    });

    it('should not append blank features', () => {
        spectator = build({ id: 'sys-1', name: 'Boardroom' });
        const before = spectator.component.feature_list.length;
        spectator.component.addFeature({ input: null, value: '   ' } as any);
        expect(spectator.component.feature_list.length).toBe(before);
    });

    it('should remove an existing feature from the list', () => {
        spectator = build({ id: 'sys-1', name: 'Boardroom' });
        spectator.component.addFeature({ input: null, value: 'AV' } as any);
        spectator.component.addFeature({ input: null, value: 'TV' } as any);
        spectator.component.removeFeature('AV');
        expect(spectator.component.feature_list).toEqual(['TV']);
    });

    it('should expose the feature separator key codes', () => {
        spectator = build({ id: 'sys-1' });
        expect(spectator.component.separators).toEqual([ENTER, COMMA, SPACE]);
    });
});
