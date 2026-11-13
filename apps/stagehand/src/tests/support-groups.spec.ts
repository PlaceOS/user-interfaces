import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { setCurrentUser, StaffUser, user_groups_loaded } from '@placeos/common';
import {
    currentGroups,
    PlaceCurrentGroup,
    PlaceGroup,
    queryGroups,
    queryZones,
    showZone,
} from '@placeos/ts-client';

import { stringToTopic } from '../app/dashboards/broker-alerts';
import {
    groupHierarchy,
    groupScope,
    inGroupScope,
    queryAll,
    scopeZoneFilters,
    topicZoneIds,
    zoneAncestors,
} from '../app/support-groups';
import { supportGroupsGuard } from '../app/support-groups.guard';
import { SupportGroupsService } from '../app/support-groups.service';

vi.mock('@placeos/ts-client', { spy: true });

const STORAGE_KEY = 'PlaceOS.STAGEHAND:selected-group:v1';

const zone = (id: string, parent_id = '', tags: string[] = []) =>
    ({ id, parent_id, tags, name: id }) as any;
const page = (data: unknown[]) =>
    Promise.resolve({ data, total: data.length, next: () => null }) as any;

function supportGroup(id: string, parent_id = '') {
    return new PlaceGroup({
        id,
        name: id,
        parent_id,
        subsystems: ['support'],
    } as any);
}

function membership(id: string) {
    return { group: supportGroup(id), permissions: 1 } as PlaceCurrentGroup;
}

function signIn(user: Record<string, unknown> = {}) {
    setCurrentUser(
        new StaffUser({ id: 'user-1', email: 'user@place.tech', ...user }),
    );
}

const org = zone('org-1', '', ['org']);
const region = zone('rgn-1', 'org-1', ['region']);
const building = zone('bld-1', 'rgn-1', ['building']);
const level = zone('lvl-1', 'bld-1', ['level']);
const level_2 = zone('lvl-2', 'bld-1', ['level']);
const area = zone('area-1', 'lvl-1', ['area']);
const other_building = zone('bld-2', 'rgn-1', ['building']);
const other_level = zone('lvl-9', 'bld-2', ['level']);

describe('support group scope', () => {
    it('reads the zones of a status topic, skipping empty slots', () => {
        expect(
            topicZoneIds(
                'placeos/org-1/state/_/bld-1/lvl-1/_/sys-1/drv/Display/1/connected',
            ),
        ).toEqual(['org-1', 'bld-1', 'lvl-1']);
    });

    it('reads each zone of a topic into its own slot', () => {
        expect(
            stringToTopic(
                'placeos/org-1/state/rgn-1/bld-1/lvl-1/area-1/sys-1/drv/Display/2/connected',
            ),
        ).toEqual({
            region_id: 'rgn-1',
            building_id: 'bld-1',
            level_id: 'lvl-1',
            area_id: 'area-1',
            system_id: 'sys-1',
            driver_id: 'drv',
            module_name: 'Display',
            module_index: '2',
            state_key: 'connected',
        });
    });

    it('is in a group when in a zone it can see and none it is denied', () => {
        const scope = groupScope([building, level], [building, level_2]);
        expect(inGroupScope(['org-1', 'bld-1', 'lvl-1'], scope)).toBe(true);
        expect(inGroupScope(['org-1', 'bld-1', 'lvl-2'], scope)).toBe(false);
        expect(inGroupScope(['org-1', 'bld-2'], scope)).toBe(false);
        expect(inGroupScope(['org-1', 'bld-2'], null)).toBe(true);
    });

    it('listens once on a granted zone, not again on zones under it', () => {
        const scope = groupScope(
            [building, level, area, other_level],
            [building, area, other_level],
            [region, other_building],
        );
        expect(scopeZoneFilters(scope)).toEqual([
            { building: 'bld-1' },
            { level: 'lvl-9' },
        ]);
    });

    it('listens org wide for a group granted the org', () => {
        expect(scopeZoneFilters(groupScope([org, building], [org]))).toEqual([
            {},
        ]);
    });

    it('narrows a picked zone to the granted zones under it', () => {
        const scope = groupScope(
            [building, level, other_level],
            [building, other_level],
            [region, other_building],
        );
        expect(scopeZoneFilters(scope, 'rgn-1')).toEqual([
            { building: 'bld-1' },
            { level: 'lvl-9' },
        ]);
        expect(scopeZoneFilters(scope, 'bld-2')).toEqual([{ level: 'lvl-9' }]);
        expect(scopeZoneFilters(scope, 'lvl-1')).toEqual([{ level: 'lvl-1' }]);
    });

    it('skips granted zones with no topic slot', () => {
        const custom = zone('zone-custom', 'org-1', ['custom']);
        expect(scopeZoneFilters(groupScope([custom], [custom]))).toEqual([]);
    });

    it('stops at a loop in the zone parents', () => {
        const zones = new Map([
            ['a', zone('a', 'b')],
            ['b', zone('b', 'c')],
            ['c', zone('c', 'a')],
        ]);
        expect(zoneAncestors('a', zones)).toEqual(['b', 'c']);
    });
});

describe('groupHierarchy', () => {
    it('lists a group and its parents, root first', () => {
        const groups = [
            supportGroup('child', 'parent'),
            supportGroup('parent', 'root'),
            supportGroup('root'),
        ];
        expect(
            groupHierarchy(groups[0], groups).map((group) => group.id),
        ).toEqual(['root', 'parent', 'child']);
    });

    it('stops at a loop in the group parents', () => {
        const groups = [supportGroup('a', 'b'), supportGroup('b', 'a')];
        expect(
            groupHierarchy(groups[0], groups).map((group) => group.id),
        ).toEqual(['b', 'a']);
    });
});

describe('queryAll', () => {
    const pages = (count: number) => {
        let fetched = 0;
        const next = (): any => {
            fetched++;
            return Promise.resolve({
                data: [fetched],
                next: fetched < count ? next : undefined,
            });
        };
        return { first: next(), fetched: () => fetched };
    };

    it('collects every page', async () => {
        const { first } = pages(3);
        expect(await queryAll(first)).toEqual([1, 2, 3]);
    });

    it('stops at the most pages it may fetch', async () => {
        const { first, fetched } = pages(100);
        expect(await queryAll(first, 4)).toEqual([1, 2, 3, 4]);
        expect(fetched()).toBe(4);
    });

    it('stops at an empty page', async () => {
        const next = vi.fn();
        const first = Promise.resolve({ data: [], next }) as any;
        expect(await queryAll(first)).toEqual([]);
        expect(next).not.toHaveBeenCalled();
    });
});

describe('SupportGroupsService', () => {
    let service: SupportGroupsService;

    async function settle() {
        for (let i = 0; i < 5; i++) {
            TestBed.tick();
            await Promise.resolve();
            await new Promise((resolve) => setTimeout(resolve));
        }
    }

    function create() {
        service = TestBed.inject(SupportGroupsService);
    }

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        signIn();
        user_groups_loaded.set(true);
        vi.mocked(currentGroups).mockResolvedValue([
            membership('g2'),
            membership('g1'),
        ]);
        vi.mocked(queryGroups).mockReturnValue(
            page([
                supportGroup('all-2'),
                // not a support group, so admins don't see it either
                new PlaceGroup({
                    id: 'signage',
                    name: 'signage',
                    subsystems: ['signage'],
                }),
                supportGroup('all-1'),
            ]),
        );
        vi.mocked(queryZones).mockImplementation((params: any) =>
            page(params.descendants ? [building, level] : [building, level_2]),
        );
        vi.mocked(showZone).mockImplementation((id: string) =>
            Promise.resolve(id === 'rgn-1' ? region : org),
        );
    });

    afterEach(() => TestBed.resetTestingModule());

    it("loads the user's support groups and works in the first", async () => {
        create();
        await settle();
        expect(currentGroups).toHaveBeenCalledWith({ subsystem: 'support' });
        expect(service.groups().map(({ group }) => group.id)).toEqual([
            'g1',
            'g2',
        ]);
        expect(service.group_id()).toBe('g1');
        expect(localStorage.getItem(STORAGE_KEY)).toBe('g1');
    });

    it('keeps the group saved from last time', async () => {
        localStorage.setItem(STORAGE_KEY, 'g2');
        create();
        await settle();
        expect(service.group_id()).toBe('g2');
    });

    it('works in the first group when the saved one is a group the user left', async () => {
        localStorage.setItem(STORAGE_KEY, 'gone');
        create();
        await settle();
        expect(service.group_id()).toBe('g1');
        expect(localStorage.getItem(STORAGE_KEY)).toBe('g1');
    });

    it('opens on "All groups" for admins when the saved group is gone', async () => {
        signIn({ sys_admin: true });
        localStorage.setItem(STORAGE_KEY, 'gone');
        create();
        await settle();
        expect(service.group_id()).toBe('');
        expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    });

    it('loads what the group can see, and the zones above it', async () => {
        create();
        await settle();
        expect(queryZones).toHaveBeenCalledWith(
            expect.objectContaining({ group_id: 'g1', descendants: true }),
        );
        const scope = service.scope();
        expect([...scope.reachable]).toEqual(['bld-1', 'lvl-1']);
        expect([...scope.denied]).toEqual(['lvl-2']);
        expect(scope.zones.has('rgn-1')).toBe(true);
        expect(service.scope_ready()).toBe(true);
    });

    it('sees nothing while a switched-to group loads', async () => {
        create();
        await settle();
        const pending: (() => void)[] = [];
        const release = () => pending.forEach((resolve) => resolve());
        vi.mocked(queryZones).mockImplementation(
            () =>
                new Promise((resolve) =>
                    pending.push(() =>
                        resolve({
                            data: [other_level],
                            next: () => null,
                        } as any),
                    ),
                ) as any,
        );
        service.setSelectedGroup('g2');
        await settle();
        expect(service.scope().reachable.size).toBe(0);
        expect(service.scope_ready()).toBe(false);
        release();
        await settle();
        expect([...service.scope().reachable]).toEqual(['lvl-9']);
    });

    it('ignores a group the user is not in', async () => {
        create();
        await settle();
        service.setSelectedGroup('someone-elses');
        service.setSelectedGroup('');
        expect(service.group_id()).toBe('g1');
    });

    it('lets admins see every support group, or all of them at once', async () => {
        signIn({ sys_admin: true });
        create();
        await settle();
        expect(queryGroups).toHaveBeenCalledWith(
            expect.objectContaining({ subsystem: 'support' }),
        );
        expect(service.groups().map(({ group }) => group.id)).toEqual([
            'all-1',
            'all-2',
        ]);
        // "All groups" is the default, and has no limits
        expect(service.group_id()).toBe('');
        expect(service.scope()).toBeNull();

        service.setSelectedGroup('all-2');
        await settle();
        expect(service.group_id()).toBe('all-2');
        service.setSelectedGroup('');
        expect(service.scope()).toBeNull();
    });

    it('lets support users pick "All groups" too', async () => {
        signIn({ groups: ['placeos_support'] });
        create();
        await settle();
        expect(service.can_view_all()).toBe(true);
        expect(service.scope()).toBeNull();
    });

    it('keeps the saved group when the groups fail to load', async () => {
        localStorage.setItem(STORAGE_KEY, 'g2');
        vi.mocked(currentGroups).mockRejectedValue(new Error('offline'));
        create();
        await settle();
        expect(service.groups_failed()).toBe(true);
        expect(service.selected_group_id()).toBe('g2');
        expect(localStorage.getItem(STORAGE_KEY)).toBe('g2');
    });

    it("sees nothing, and is settled, when the group's zones fail to load", async () => {
        vi.mocked(queryZones).mockImplementation(
            () => Promise.reject(new Error('offline')) as any,
        );
        create();
        await settle();
        expect(service.group_id()).toBe('g1');
        expect(service.scope()?.reachable.size).toBe(0);
        expect(service.scope_ready()).toBe(true);
    });

    it('sees nothing for a user in no group', async () => {
        vi.mocked(currentGroups).mockResolvedValue([]);
        create();
        await settle();
        expect(service.group_id()).toBe('');
        expect(service.scope()?.reachable.size).toBe(0);
    });
});

describe('supportGroupsGuard', () => {
    const unauthorised = new UrlTree();
    const run = () =>
        TestBed.runInInjectionContext(
            () => supportGroupsGuard(undefined, undefined) as Promise<unknown>,
        );

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        user_groups_loaded.set(true);
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Router,
                    useValue: { parseUrl: vi.fn(() => unauthorised) },
                },
            ],
        });
        vi.mocked(queryZones).mockReturnValue(page([]));
    });

    afterEach(() => TestBed.resetTestingModule());

    it('lets in a user in a support group', async () => {
        signIn();
        vi.mocked(currentGroups).mockResolvedValue([membership('g1')]);
        expect(await run()).toBe(true);
    });

    it('lets in support users with no group', async () => {
        signIn({ support: true });
        vi.mocked(queryGroups).mockReturnValue(page([]));
        expect(await run()).toBe(true);
    });

    it('sends a user in no support group to the unauthorised page', async () => {
        signIn();
        vi.mocked(currentGroups).mockResolvedValue([]);
        expect(await run()).toBe(unauthorised);
    });

    it('lets the user in when the groups fail to load', async () => {
        signIn();
        vi.mocked(currentGroups).mockRejectedValue(new Error('offline'));
        expect(await run()).toBe(true);
    });
});
