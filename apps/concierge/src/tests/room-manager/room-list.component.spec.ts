import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { RoomListComponent } from '../../app/room-manager/room-list.component';
import { RoomManagementService } from '../../app/room-manager/room-management.service';

describe('RoomListComponent', () => {
    let spectator: Spectator<RoomListComponent>;
    let manager: any;
    let clipboard: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: RoomListComponent,
        providers: [
            MockProvider(RoomManagementService, {
                filtered_rooms: signal([]),
                editRoom: vi.fn(),
                setRoomAlert: vi.fn(),
                viewBookingHistory: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                signal: vi.fn(() => signal('')),
            } as any),
            MockProvider(Clipboard, { copy: vi.fn(() => true) }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = createComponent({ detectChanges: false });
        manager = spectator.inject(RoomManagementService);
        clipboard = spectator.inject(Clipboard);
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should not notify when copying a room id fails', () => {
        (clipboard.copy as any).mockReturnValue(false);
        spectator.component.copyToClipboard('sys-1');
        expect(notify_open).not.toHaveBeenCalled();
    });
});
