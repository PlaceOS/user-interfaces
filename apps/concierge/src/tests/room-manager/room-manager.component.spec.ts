import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { RoomListComponent } from '../../app/room-manager/room-list.component';
import { RoomManagerComponent } from '../../app/room-manager/room-manager.component';
import { RoomManagerTopbarComponent } from '../../app/room-manager/room-manager-topbar.component';

describe('RoomManagerComponent', () => {
    let spectator: Spectator<RoomManagerComponent>;

    const createComponent = createComponentFactory({
        component: RoomManagerComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
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
