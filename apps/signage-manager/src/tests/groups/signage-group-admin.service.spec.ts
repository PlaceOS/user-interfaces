import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
    user_groups_loaded,
} from '@placeos/common';
import {
    addGroupUser,
    currentGroups,
    get,
    PlaceCurrentGroup,
    PlaceGroup,
    PlaceGroupUser,
    queryGroups,
    queryGroupUsers,
    queryGroupZones,
    showGroup,
    showGroupFeatures,
    updateGroup,
    updateGroupUser,
} from '@placeos/ts-client';

import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageContextService } from '../../app/signage-context.service';

vi.mock('@placeos/ts-client', { spy: true });

const MANAGE = 1 << 6;

type TestGroup = { id: string; parent_id?: string; permissions: number };

describe('SignageGroupAdminService', () => {
    function createService() {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(),
                        signal: (_name: string, value?: unknown) =>
                            signal(value),
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: { initialised: signal(true), organisation: {} },
                },
                { provide: MatDialog, useValue: { open: vi.fn() } },
            ],
        });
        return TestBed.inject(SignageGroupAdminService);
    }

    /** Give the user the signage groups in `groups` */
    function withGroups(groups: TestGroup[]) {
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'signage_groups',
            {
                value: () =>
                    groups.map(({ permissions, ...group }) => ({
                        group,
                        permissions,
                    })),
            },
        );
    }

    function withSysAdmin(sys_admin: boolean) {
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'is_sys_admin',
            { value: () => sys_admin },
        );
    }

    function make(groups: TestGroup[], sys_admin = false) {
        const service = createService();
        withSysAdmin(sys_admin);
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'can_manage_all_groups',
            { value: () => sys_admin },
        );
        withGroups(groups);
        return service;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(updateGroup).mockResolvedValue(new PlaceGroup());
    });

    it('does not let a group manager move the group out of its parent', async () => {
        const service = make([
            { id: 'parent', permissions: 0 },
            { id: 'group', parent_id: 'parent', permissions: MANAGE },
            { id: 'other', permissions: MANAGE },
        ]);
        const group = { id: 'group', parent_id: 'parent' };

        expect(service.canChangeGroupParent(group, 'other')).toBe(false);
        expect(service.canChangeGroupParent(group, '')).toBe(false);
        expect(service.canChangeGroupParent(group, 'parent')).toBe(true);
        await expect(
            service.saveSignageGroup(group, { parent_id: '' }),
        ).resolves.toBeNull();
        expect(updateGroup).not.toHaveBeenCalled();
    });

    it('lets managers of the old and new parent move a group', () => {
        const service = make([
            { id: 'parent', permissions: MANAGE },
            { id: 'group', parent_id: 'parent', permissions: MANAGE },
            { id: 'other', permissions: MANAGE },
        ]);

        const group = { id: 'group', parent_id: 'parent' };
        expect(service.canChangeGroupParent(group, 'other')).toBe(true);
        // Only system admins can move a group to the top level
        expect(service.canChangeGroupParent(group, '')).toBe(false);
    });

    it('never moves a group under one of its children', () => {
        const service = make(
            [
                { id: 'group', permissions: MANAGE },
                { id: 'child', parent_id: 'group', permissions: MANAGE },
                { id: 'grandchild', parent_id: 'child', permissions: MANAGE },
            ],
            true,
        );

        expect(
            service.canChangeGroupParent({ id: 'group' }, 'grandchild'),
        ).toBe(false);
        expect(service.canChangeGroupParent({ id: 'child' }, '')).toBe(true);
    });

    it('limits saved features to what the parent group allows', async () => {
        const service = make([{ id: 'parent', permissions: MANAGE }]);
        vi.mocked(showGroupFeatures).mockResolvedValue({
            signage: { features: ['templates'] },
        });

        await service.saveGroupFeatures(
            new PlaceGroup({ id: 'child', parent_id: 'parent' }),
            { features: ['templates', 'ai-generation'] },
        );

        expect(showGroupFeatures).toHaveBeenCalledWith('parent', {
            subsystem: 'signage',
        });
        expect(updateGroup).toHaveBeenCalledWith('child', {
            features: { signage: { features: ['templates'] } },
        });
    });

    it('saves the features as they are when the backend has no features route', async () => {
        const service = make([{ id: 'parent', permissions: MANAGE }]);
        vi.mocked(showGroupFeatures).mockRejectedValue({ status: 404 });

        await service.saveGroupFeatures(
            new PlaceGroup({ id: 'child', parent_id: 'parent' }),
            { features: ['templates'] },
        );

        expect(updateGroup).toHaveBeenCalledWith('child', {
            features: { signage: { features: ['templates'] } },
        });
    });

    it('shows no users or zones read for another group', () => {
        const service = make([]);
        const users = service['_managed_group_users'];
        service.managed_group_id.set('group-2');

        users.set({
            group_id: 'group-1',
            items: [new PlaceGroupUser({ user_id: 'user-1' })],
            failed: false,
        });
        expect(service.managed_group_users()).toEqual([]);
        expect(service.managed_group_users_loading()).toBe(true);

        users.set({ group_id: 'group-2', items: [], failed: true });
        expect(service.managed_group_users_loading()).toBe(false);
        expect(service.managed_group_users_failed()).toBe(true);
    });

    describe('group feature flags', () => {
        it('lets managers of a parent group edit the features', () => {
            const service = createService();
            withSysAdmin(false);
            withGroups([
                { id: 'root', permissions: MANAGE },
                { id: 'child', parent_id: 'root', permissions: MANAGE },
            ]);

            expect(
                service.canEditGroupFeatures({
                    id: 'child',
                    parent_id: 'root',
                } as any),
            ).toBe(true);
        });

        it('stops members of a group from editing its own features', () => {
            const service = createService();
            withSysAdmin(false);
            withGroups([
                { id: 'root', permissions: 0 },
                { id: 'child', parent_id: 'root', permissions: MANAGE },
            ]);

            expect(
                service.canEditGroupFeatures({
                    id: 'child',
                    parent_id: 'root',
                } as any),
            ).toBe(false);
            expect(service.canEditGroupFeatures({ id: 'root' } as any)).toBe(
                false,
            );
        });

        it('lets system admins edit the features of a root group', () => {
            const service = createService();
            withSysAdmin(true);

            expect(service.canEditGroupFeatures({ id: 'root' } as any)).toBe(
                true,
            );
        });

        it('saves the signage lists and keeps other subsystems', async () => {
            const service = createService();
            withSysAdmin(true);
            vi.mocked(updateGroup).mockResolvedValue({} as any);

            await service.saveGroupFeatures(
                {
                    id: 'group-1',
                    features: {
                        events: { enabled: true },
                        signage: { features: ['templates'] },
                    },
                } as any,
                { features: ['ai-generation'] },
            );

            expect(updateGroup).toHaveBeenCalledWith('group-1', {
                features: {
                    events: { enabled: true },
                    signage: { features: ['ai-generation'] },
                },
            });
        });
    });

    describe('group access', () => {
        function withManage(allowed: boolean) {
            Object.defineProperty(
                TestBed.inject(SignageContextService),
                'canManageSignageGroup',
                { value: () => allowed },
            );
        }

        it('adds a user without permissions so the group defaults apply', async () => {
            const service = createService();
            withManage(true);
            service.managed_group_id.set('group-1');
            vi.mocked(addGroupUser).mockResolvedValue({} as any);

            await service.addManagedGroupUser({ id: 'user-1' } as any);

            expect(addGroupUser).toHaveBeenCalledWith({
                group_id: 'group-1',
                user_id: 'user-1',
            });
        });

        it('reads the access fields of a group with decoded names', async () => {
            const service = createService();
            vi.mocked(showGroup).mockResolvedValue(
                new PlaceGroup({
                    id: 'group-1',
                    default_permissions: 5,
                    ad_group_mappings: { 'ad-1': ['Sales &amp; Marketing', 1] },
                }),
            );

            await expect(service.loadGroupAccess('group-1')).resolves.toEqual({
                default_permissions: 5,
                ad_group_mappings: { 'ad-1': ['Sales & Marketing', 1] },
            });
            expect(showGroup).toHaveBeenCalledWith('group-1');
        });

        it('saves the defaults and mappings of a managed group', async () => {
            const service = createService();
            withManage(true);
            const access = {
                default_permissions: 1,
                ad_group_mappings: { 'ad-1': ['Staff', 3] as [string, number] },
            };
            vi.mocked(updateGroup).mockResolvedValue(
                new PlaceGroup({ id: 'group-1', ...access }),
            );

            const result = await service.saveGroupAccess(
                { id: 'group-1' } as any,
                access,
            );

            expect(updateGroup).toHaveBeenCalledWith('group-1', access);
            expect(result).toEqual(access);
        });

        it('does not save access for a group the user cannot manage', async () => {
            const service = createService();
            withManage(false);

            const result = await service.saveGroupAccess(
                { id: 'group-1' } as any,
                { default_permissions: 1, ad_group_mappings: {} },
            );

            expect(result).toBeNull();
            expect(updateGroup).not.toHaveBeenCalled();
        });

        it('saves only the edited group fields, so access settings stay', async () => {
            const service = createService();
            withManage(true);
            vi.mocked(updateGroup).mockResolvedValue(new PlaceGroup());

            await service.saveSignageGroup(
                new PlaceGroup({ id: 'group-1', subsystems: ['events'] }),
                { name: 'Renamed' },
            );

            expect(updateGroup).toHaveBeenCalledWith('group-1', {
                name: 'Renamed',
                subsystems: ['events', 'signage'],
            });
        });

        it('searches directory groups through the staff API', async () => {
            const service = createService();
            vi.mocked(get).mockResolvedValue([
                { id: 'ad-1', name: 'Staff' },
                { name: 'No ID' },
            ] as any);

            const groups = await service.searchDirectoryGroups(' staff team ');

            expect(get).toHaveBeenCalledWith(
                '/api/staff/v1/groups?q=staff%20team',
            );
            expect(groups).toEqual([{ id: 'ad-1', name: 'Staff' }]);
        });
    });

    /** Real context and admin service, with only the API mocked */
    describe('with the real group context', () => {
        const READ = 1 << 0;
        const pending = () => new Promise<never>(() => undefined);

        function manager(id: string) {
            return {
                group: new PlaceGroup({
                    id,
                    name: id,
                    subsystems: ['signage'],
                }),
                permissions: MANAGE,
            } as PlaceCurrentGroup;
        }

        function member(user_id: string, group_id: string) {
            return new PlaceGroupUser({ user_id, group_id, permissions: READ });
        }

        function page<T>(data: T[], next: () => unknown = () => null) {
            return { data, total: data.length, next } as never;
        }

        /** Run effects and timers past the 300 ms group debounce */
        async function settle() {
            for (let i = 0; i < 5; i++) {
                TestBed.tick();
                await vi.advanceTimersByTimeAsync(100);
            }
        }

        beforeEach(() => {
            vi.useFakeTimers({ shouldAdvanceTime: true });
            localStorage.clear();
            setCurrentUser(new StaffUser({ id: 'me', email: 'me@place.tech' }));
            user_groups_loaded.set(true);
            vi.mocked(currentGroups).mockResolvedValue([
                manager('a'),
                manager('b'),
            ]);
            vi.mocked(showGroupFeatures).mockResolvedValue({});
            vi.mocked(queryGroupUsers).mockImplementation((options) =>
                page([member('user-1', options?.group_id || '')]),
            );
            vi.mocked(queryGroupZones).mockReturnValue(page([]));
        });

        afterEach(() => {
            vi.useRealTimers();
            TestBed.resetTestingModule();
        });

        it('opens the first group, then lets the user clear the selection', async () => {
            const service = createService();
            await settle();
            expect(service.managed_group_id()).toBe('a');

            // The back button on mobile
            service.managed_group_id.set('');
            await settle();

            expect(service.managed_group_id()).toBe('');
        });

        it('keeps the selected group and its users while a save reloads them', async () => {
            const service = createService();
            await settle();
            service.managed_group_id.set('b');
            await settle();
            const [row] = service.managed_group_users();
            expect(row.group_id).toBe('b');

            vi.mocked(updateGroupUser).mockResolvedValue(row);
            vi.mocked(currentGroups).mockReturnValue(pending());
            vi.mocked(queryGroupUsers).mockReturnValue(pending() as never);
            await service.updateManagedGroupUser(row, READ | MANAGE);
            await settle();

            expect(service.managed_group_id()).toBe('b');
            expect(service.manageable_signage_groups().length).toBe(2);
            expect(service.managed_group_users()).toEqual([row]);
            expect(service.managed_group_users_loading()).toBe(false);
        });

        it('clears the selection when the selected group is gone', async () => {
            const service = createService();
            await settle();
            service.managed_group_id.set('b');
            await settle();

            vi.mocked(currentGroups).mockResolvedValue([manager('a')]);
            TestBed.inject(SignageContextService).reloadSignageGroups();
            await settle();

            expect(service.managed_group_id()).toBe('');
        });

        it('reports a failed save without a rejected promise', async () => {
            const service = createService();
            await settle();
            vi.mocked(updateGroupUser).mockRejectedValue(new Error('down'));

            await expect(
                service.updateManagedGroupUser(member('user-1', 'a'), READ),
            ).resolves.toBeUndefined();
        });

        it('keeps the groups and the selection when a reload fails', async () => {
            const service = createService();
            await settle();
            service.managed_group_id.set('b');
            await settle();
            const [row] = service.managed_group_users();

            vi.mocked(updateGroupUser).mockResolvedValue(row);
            vi.mocked(currentGroups).mockRejectedValue(new Error('down'));
            await service.updateManagedGroupUser(row, READ | MANAGE);
            await settle();

            expect(service.manageable_signage_groups_failed()).toBe(true);
            expect(service.manageable_signage_groups().length).toBe(2);
            expect(service.managed_group_id()).toBe('b');
            const context = TestBed.inject(SignageContextService);
            expect(context.signage_groups_failed()).toBe(true);
            expect(context.signage_groups().length).toBe(2);
        });

        it('reads the group index once for admins', async () => {
            setCurrentUser(
                new StaffUser({
                    id: 'me',
                    email: 'me@place.tech',
                    groups: ['placeos_admin'],
                }),
            );
            vi.mocked(queryGroups).mockReturnValue(
                page([new PlaceGroup({ id: 'a', subsystems: ['signage'] })]),
            );
            const service = createService();
            await settle();

            expect(service.manageable_signage_groups().length).toBe(1);
            expect(queryGroups).toHaveBeenCalledTimes(1);
        });

        it('opens the first group again for a new user', async () => {
            const service = createService();
            await settle();
            service.managed_group_id.set('');
            await settle();

            vi.mocked(currentGroups).mockResolvedValue([manager('c')]);
            setCurrentUser(
                new StaffUser({ id: 'other', email: 'other@place.tech' }),
            );
            await settle();

            expect(
                service.manageable_signage_groups().map(({ id }) => id),
            ).toEqual(['c']);
            expect(service.managed_group_id()).toBe('c');
        });

        it('keeps the users on screen when their reload fails', async () => {
            const service = createService();
            await settle();
            service.managed_group_id.set('b');
            await settle();
            const [row] = service.managed_group_users();

            vi.mocked(updateGroupUser).mockResolvedValue(row);
            vi.mocked(queryGroupUsers).mockRejectedValue(new Error('down'));
            await service.updateManagedGroupUser(row, READ | MANAGE);
            await settle();

            expect(service.managed_group_users()).toEqual([row]);
            expect(service.managed_group_users_failed()).toBe(true);
        });

        it('reads every page of the group users', async () => {
            vi.mocked(queryGroupUsers).mockReturnValue(
                page([member('user-1', 'a')], () =>
                    page([member('user-2', 'a')]),
                ),
            );
            const service = createService();
            await settle();

            expect(
                service.managed_group_users().map(({ user_id }) => user_id),
            ).toEqual(['user-1', 'user-2']);
        });
    });
});
