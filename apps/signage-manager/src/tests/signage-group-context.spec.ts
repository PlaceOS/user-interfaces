import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
    UploadsService,
    user_groups_loaded,
} from '@placeos/common';
import {
    currentGroups,
    PlaceCurrentGroup,
    PlaceGroup,
    queryGroups,
    querySignageMedia,
    querySignagePlaylists,
    querySignagePlugins,
    querySignageTemplates,
    querySystems,
    queryZones,
    showGroupFeatures,
} from '@placeos/ts-client';

import { SignageMediaService } from '../app/media/signage-media.service';
import { SignagePlaylistService } from '../app/playlists/signage-playlist.service';
import { SignageContextService } from '../app/signage-context.service';
import { SignagePluginService } from '../app/signage-plugin.service';

vi.mock('@placeos/ts-client', { spy: true });

const STORAGE_KEY = 'PlaceOS.SIGNAGE:selected-group:v1';
const READ = 1 << 0;
const UPDATE = 1 << 2;
const EMPTY_PAGE = { data: [], total: 0, next: () => null };

function signageGroup(id: string) {
    return new PlaceGroup({ id, name: id, subsystems: ['signage'] });
}

function membership(id: string, permissions = READ | UPDATE) {
    return { group: signageGroup(id), permissions } as PlaceCurrentGroup;
}

function signIn(groups: string[] = []) {
    setCurrentUser(
        new StaffUser({ id: 'user-1', email: 'user@place.tech', groups }),
    );
}

/** Group ID of every media list query, `''` for an org-wide query */
function mediaQueryGroups() {
    return vi
        .mocked(querySignageMedia)
        .mock.calls.map(([options]) => options?.group_id || '');
}

/** Covers the selected group context: selection, permissions and flags. */
describe('SignageContextService group context', () => {
    const dialog = { open: vi.fn() };

    /** Run effects and timers past the 300 ms group debounce */
    async function settle() {
        for (let i = 0; i < 5; i++) {
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(100);
        }
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        localStorage.clear();
        signIn();
        user_groups_loaded.set(true);
        vi.mocked(currentGroups).mockResolvedValue([
            membership('g1'),
            membership('g2'),
        ]);
        vi.mocked(showGroupFeatures).mockResolvedValue({});
        for (const list of [
            querySignageMedia,
            querySignagePlaylists,
            querySignageTemplates,
            querySignagePlugins,
            querySystems,
            queryZones,
            queryGroups,
        ]) {
            vi.mocked(list).mockResolvedValue(EMPTY_PAGE as never);
        }
        TestBed.configureTestingModule({
            providers: [
                { provide: UploadsService, useValue: {} },
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(),
                        signal: (_name: string, default_value?: unknown) =>
                            signal(default_value),
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: {
                        initialised: signal(true),
                        organisation: { id: 'org-1' },
                    },
                },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    afterEach(() => {
        vi.useRealTimers();
        TestBed.resetTestingModule();
    });

    describe('switching groups', () => {
        it('does not query lists org-wide before a member has a group', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            TestBed.inject(SignageMediaService);

            await settle();

            expect(mediaQueryGroups()).toEqual(['g1']);
        });

        it('sends one set of list queries, all for the new group', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            const service = TestBed.inject(SignageContextService);
            TestBed.inject(SignageMediaService);
            TestBed.inject(SignagePlaylistService);
            await settle();
            vi.mocked(querySignageMedia).mockClear();
            vi.mocked(querySignagePlaylists).mockClear();

            service.setSelectedGroup('g2');
            await settle();

            expect(mediaQueryGroups()).toEqual(['g2']);
            expect(querySignagePlaylists).toHaveBeenCalledTimes(1);
        });
    });

    describe('startup', () => {
        it('keeps the saved group until the live user has loaded', async () => {
            localStorage.setItem(STORAGE_KEY, 'a');
            // The cached user is shown first and misses the admin role
            user_groups_loaded.set(false);
            vi.mocked(currentGroups).mockResolvedValue([]);
            vi.mocked(queryGroups).mockResolvedValue({
                data: [signageGroup('a')],
                total: 1,
                next: () => null,
            });
            const service = TestBed.inject(SignageContextService);
            await settle();

            expect(service.selected_group_id()).toBe('a');
            expect(localStorage.getItem(STORAGE_KEY)).toBe('a');

            signIn(['placeos_admin']);
            user_groups_loaded.set(true);
            await settle();

            expect(service.selected_group()?.group.id).toBe('a');
        });
    });

    describe('group list failure', () => {
        it('keeps the saved group and restores it on retry', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            vi.mocked(currentGroups).mockRejectedValueOnce(new Error('down'));
            const service = TestBed.inject(SignageContextService);
            await settle();

            expect(service.signage_groups_failed()).toBe(true);
            expect(service.selected_group_id()).toBe('g1');
            expect(localStorage.getItem(STORAGE_KEY)).toBe('g1');

            service.reloadSignageGroups();
            await settle();

            expect(service.signage_groups_failed()).toBe(false);
            expect(service.selected_group()?.group.id).toBe('g1');
        });
    });

    describe('group feature flags', () => {
        it('allows no feature or plugin when the flags fail to load', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            vi.mocked(showGroupFeatures).mockRejectedValue(new Error('down'));
            const service = TestBed.inject(SignageContextService);
            await settle();

            expect(service.features_ready()).toBe(true);
            expect(service.features()).toEqual([]);
            expect(service.group_features().available_plugins).toEqual([]);
        });

        it('keeps the global features when the backend has no flags route', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            vi.mocked(showGroupFeatures).mockRejectedValue({ status: 404 });
            const service = TestBed.inject(SignageContextService);
            await settle();

            expect(service.templates_enabled()).toBe(true);
            expect(service.group_features()).toEqual({});
        });

        it('allows nothing when the flags read is refused', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            vi.mocked(showGroupFeatures).mockRejectedValue({ status: 403 });
            const service = TestBed.inject(SignageContextService);
            await settle();

            expect(service.features()).toEqual([]);
        });

        it('does not carry the flags of the previous group', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            const service = TestBed.inject(SignageContextService);
            await settle();
            expect(service.templates_enabled()).toBe(true);
            // Flags for the next group never arrive
            vi.mocked(showGroupFeatures).mockReturnValue(new Promise(() => {}));

            service.setSelectedGroup('g2');
            TestBed.tick();

            expect(service.templates_enabled()).toBe(false);
            expect(service.features_ready()).toBe(false);
        });
    });

    describe('plugins', () => {
        const pluginQueryGroups = () =>
            vi
                .mocked(querySignagePlugins)
                .mock.calls.map(
                    ([options]) =>
                        (options as { group_id?: string })?.group_id || '',
                );

        it('does not query plugins before a member has a group', async () => {
            vi.mocked(currentGroups).mockRejectedValue(new Error('down'));
            TestBed.inject(SignagePluginService);
            await settle();

            expect(querySignagePlugins).not.toHaveBeenCalled();
        });

        it('queries the plugins of the new group after a switch', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            const service = TestBed.inject(SignageContextService);
            TestBed.inject(SignagePluginService);
            await settle();
            expect(pluginQueryGroups()).toEqual(['g1', 'g1']);

            service.changed();
            service.setSelectedGroup('g2');
            await settle();

            expect(pluginQueryGroups()).toEqual(['g1', 'g1', 'g2', 'g2']);
        });
    });

    describe('"All groups" view', () => {
        it('lets support pick "All groups" again, read only', async () => {
            signIn(['placeos_support']);
            const service = TestBed.inject(SignageContextService);
            await settle();
            expect(service.selected_group_id()).toBe('');

            service.setSelectedGroup('g1');
            service.setSelectedGroup('');

            expect(service.selected_group_id()).toBe('');
            expect(service.can_update()).toBe(false);
            expect(service.can_update_media_tags()).toBe(false);
        });

        it('offers "All groups" in the selector to support', async () => {
            signIn(['placeos_support']);
            const service = TestBed.inject(SignageContextService);
            await settle();
            dialog.open.mockReturnValue({
                afterClosed: () => ({
                    subscribe: (handler: (value: string) => void) => {
                        Promise.resolve().then(() => handler('g2'));
                        return { unsubscribe: vi.fn() };
                    },
                }),
            });

            await service.selectGroup();

            expect(dialog.open.mock.calls[0][1].data.show_all_groups).toBe(
                true,
            );
            expect(service.selected_group_id()).toBe('g2');
        });

        it('does not let a group member pick "All groups"', async () => {
            localStorage.setItem(STORAGE_KEY, 'g1');
            const service = TestBed.inject(SignageContextService);
            await settle();

            service.setSelectedGroup('');

            expect(service.selected_group_id()).toBe('g1');
        });
    });

    it('lists every page of groups for system admins', async () => {
        signIn(['placeos_admin']);
        vi.mocked(queryGroups).mockImplementation(async () => ({
            data: [signageGroup('a')],
            total: 2,
            next: async () => ({
                data: [signageGroup('b')],
                total: 2,
                next: () => null,
            }),
        }));
        const service = TestBed.inject(SignageContextService);
        await settle();

        expect(service.signage_groups().map(({ group }) => group.id)).toEqual([
            'a',
            'b',
        ]);
    });
});
