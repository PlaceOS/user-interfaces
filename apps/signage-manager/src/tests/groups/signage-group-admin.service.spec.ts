import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import {
    PlaceGroup,
    PlaceGroupUser,
    showGroupFeatures,
    updateGroup,
} from '@placeos/ts-client';

import { SignageService } from '../../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

const MANAGE = 1 << 6;

describe('SignageService group admin', () => {
    function make(
        groups: { id: string; parent_id?: string; permissions: number }[],
        sys_admin = false,
    ) {
        TestBed.configureTestingModule({
            providers: [
                SignageService,
                { provide: UploadsService, useValue: {} },
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
        const service = TestBed.inject(SignageService);
        Object.defineProperty(service, 'is_sys_admin', {
            value: () => sys_admin,
        });
        Object.defineProperty(service, 'can_manage_all_groups', {
            value: () => sys_admin,
        });
        Object.defineProperty(service, 'signage_groups', {
            value: () =>
                groups.map(({ permissions, ...group }) => ({
                    group,
                    permissions,
                })),
        });
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

    it('shows no users or zones read for another group', () => {
        const service = make([]);
        const users = service['_managed_group_users'];
        service.managed_group_id.set('group-2');

        users.value.set({
            group_id: 'group-1',
            items: [new PlaceGroupUser({ user_id: 'user-1' })],
            failed: false,
        });
        expect(service.managed_group_users()).toEqual([]);
        expect(service.managed_group_users_loading()).toBe(true);

        users.value.set({ group_id: 'group-2', items: [], failed: true });
        expect(service.managed_group_users_loading()).toBe(false);
        expect(service.managed_group_users_failed()).toBe(true);
    });
});
