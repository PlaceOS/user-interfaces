import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService, User } from '@placeos/common';
import { IconComponent, UserAvatarComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

jest.mock('@placeos/users', () => ({
    ...jest.requireActual('@placeos/users'),
    searchStaff: jest.fn(() => Promise.resolve([])),
}));

import { searchStaff } from '@placeos/users';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { DirectoryUserListComponent } from '../../app/directory/user-list.component';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('DirectoryUserListComponent', () => {
    let spectator: SpectatorRouting<DirectoryUserListComponent>;
    const settings_get = jest.fn();
    const createComponent = createRoutingFactory({
        component: DirectoryUserListComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
        ],
        providers: [
            MockProvider(SettingsService, { get: settings_get } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        jest.clearAllMocks();
        (searchStaff as jest.Mock).mockResolvedValue([]);
        settings_get.mockReturnValue(undefined);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should default min_search_length to 3 when not configured', () => {
        settings_get.mockReturnValue(undefined);
        expect(spectator.component.min_search_length).toBe(3);
    });

    it('should honour a configured min_search_length', () => {
        settings_get.mockImplementation((key: string) =>
            key === 'app.users.min_search_length' ? 1 : undefined,
        );
        expect(spectator.component.min_search_length).toBe(1);
    });

    it('should expose show_image from settings', () => {
        settings_get.mockImplementation((key: string) =>
            key === 'app.users.show_avatars' ? true : undefined,
        );
        expect(spectator.component.show_image).toBe(true);
    });

    it('should not search below the minimum search length', async () => {
        settings_get.mockImplementation((key: string) =>
            key === 'app.users.min_search_length' ? 3 : undefined,
        );
        spectator.component.search.set('ab');

        spectator.detectChanges();
        await wait(450);

        expect(searchStaff).not.toHaveBeenCalled();
        expect(spectator.component.search_results()).toEqual([]);
    });

    it('should search staff after the debounce once the query is long enough', async () => {
        settings_get.mockImplementation((key: string) =>
            key === 'app.users.min_search_length' ? 3 : undefined,
        );
        const results = [{ name: 'Jane', email: 'jane@x.com' }] as User[];
        (searchStaff as jest.Mock).mockResolvedValue(results);

        spectator.component.search.set('jane');
        spectator.detectChanges();
        await wait(450);

        expect(searchStaff).toHaveBeenCalledWith('jane');
        expect(spectator.component.search_results()).toEqual(results);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should clear results when the search request fails', async () => {
        settings_get.mockImplementation((key: string) =>
            key === 'app.users.min_search_length' ? 3 : undefined,
        );
        (searchStaff as jest.Mock).mockRejectedValue(new Error('boom'));

        spectator.component.search.set('jane');
        spectator.detectChanges();
        await wait(450);

        expect(spectator.component.search_results()).toEqual([]);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should group and sort users by the first letter of their name', () => {
        spectator.component.search_results.set([
            { name: 'Bob', email: 'b@x.com' },
            { name: 'Alice', email: 'a@x.com' },
            { name: 'Aaron', email: 'aa@x.com' },
        ] as User[]);

        const groups = spectator.component.grouped_results();
        expect(groups['A'].map((_) => _.name)).toEqual(['Aaron', 'Alice']);
        expect(groups['B'].map((_) => _.name)).toEqual(['Bob']);
        expect(groups['C']).toEqual([]);
    });
});
