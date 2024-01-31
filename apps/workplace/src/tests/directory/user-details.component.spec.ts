import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { SafePipe, UserAvatarComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { DirectoryUserListItemComponent } from '../../app/directory/user-details.component';

describe('DirectoryUserListItemComponent', () => {
    let spectator: SpectatorRouting<DirectoryUserListItemComponent>;
    const createComponent = createRoutingFactory({
        component: DirectoryUserListItemComponent,
        providers: [{ provide: SettingsService, useValue: { get: jest.fn() } }],
        declarations: [MockComponent(UserAvatarComponent), SafePipe],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow user to locate person', () => {
        expect('a[btn][locate]').not.toExist();
        spectator.setInput({ user: { name: 'User 1', phone: '1234' } as any });
        expect('a[btn][locate]').toExist();
    });

    it('should allow user call person', () => {
        expect('a[btn][call]').not.toExist();
        spectator.setInput({ user: { name: 'User 1', phone: '1234' } as any });
        expect('a[btn][call]').toExist();
    });
});
