import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { RoomListComponent } from '../../app/room-manager/room-list.component';
import { RoomManagerTopbarComponent } from '../../app/room-manager/room-manager-topbar.component';
import { RoomManagerComponent } from '../../app/room-manager/room-manager.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('RoomManagerComponent', () => {
    let spectator: Spectator<RoomManagerComponent>;

    const createComponent = createComponentFactory({
        component: RoomManagerComponent,
        declarations: [
            MockComponent(ApplicationSidebarComponent),
            MockComponent(RoomManagerTopbarComponent),
            MockComponent(RoomListComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should render the room manager topbar and list panels', () => {
        expect(spectator.query('room-manager-topbar')).toBeTruthy();
        expect(spectator.query('room-list')).toBeTruthy();
    });
});
