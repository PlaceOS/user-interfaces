import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import { RoomListComponent } from '../../app/room-manager/room-list.component';
import { RoomManagementService } from '../../app/room-manager/room-management.service';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifySuccess: jest.fn(),
    };
});

describe('RoomListComponent', () => {
    let spectator: Spectator<RoomListComponent>;
    let manager: any;
    let clipboard: any;

    const createComponent = createComponentFactory({
        component: RoomListComponent,
        providers: [
            MockProvider(RoomManagementService, {
                filtered_rooms: signal([]),
                editRoom: jest.fn(),
                setRoomAlert: jest.fn(),
                viewBookingHistory: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                signal: jest.fn(() => signal('')),
            } as any),
            MockProvider(Clipboard, { copy: jest.fn(() => true) }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent({ detectChanges: false });
        manager = spectator.inject(RoomManagementService);
        clipboard = spectator.inject(Clipboard);
    });

    it('should delegate room row actions to the management service', () => {
        const room = { id: 'sys-1' };
        spectator.component.editRoom(room);
        spectator.component.setRoomAlert(room);
        spectator.component.viewBookingHistory(room);
        expect(manager.editRoom).toHaveBeenCalledWith(room);
        expect(manager.setRoomAlert).toHaveBeenCalledWith(room);
        expect(manager.viewBookingHistory).toHaveBeenCalledWith(room);
    });

    it('should notify when copying a room id succeeds', () => {
        spectator.component.copyToClipboard('sys-1');
        expect(clipboard.copy).toHaveBeenCalledWith('sys-1');
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should not notify when copying a room id fails', () => {
        (clipboard.copy as jest.Mock).mockReturnValue(false);
        spectator.component.copyToClipboard('sys-1');
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });
});
