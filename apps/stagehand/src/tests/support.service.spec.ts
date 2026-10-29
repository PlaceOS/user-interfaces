import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { GroupScope, groupScope } from '../app/support-groups';
import { SupportGroupsService } from '../app/support-groups.service';
import { SupportService } from '../app/support.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Flush the chained awaits inside `_loadSpaces` */
const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
};

const zone = (id: string, parent_id = '', tags: string[] = []) =>
    ({ id, parent_id, tags, name: id }) as any;

describe('SupportService', () => {
    let spectator: SpectatorService<SupportService>;
    const group_id = signal('');
    const scope = signal<GroupScope | null>(null);
    const scope_ready = signal(true);

    const createService = createServiceFactory({
        service: SupportService,
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                waitUntilInitialised: () => Promise.resolve(),
            }),
            MockProvider(SupportGroupsService, {
                group_id,
                scope,
                scope_ready,
            } as any),
        ],
    });

    const create = async () => {
        spectator = createService();
        TestBed.tick();
        await flush();
    };

    beforeEach(() => {
        vi.clearAllMocks();
        group_id.set('');
        scope.set(null);
        scope_ready.set(true);
    });

    it('should query systems scoped to the active organisation zone', async () => {
        (ts_client.querySystems as any).mockReturnValue(Promise.resolve({ data: [] }),
        );
        await create();
        expect(ts_client.querySystems).toHaveBeenCalledWith({
            zone_id: 'org-1',
            limit: 5000,
        });
    });

    it('should keep only systems that expose a support surface', async () => {
        (ts_client.querySystems as any).mockReturnValue(Promise.resolve({
                data: [
                    { id: 'support', support_url: 'http://x' },
                    { id: 'camera', camera_url: 'http://cam' },
                    { id: 'timetable', timetable_url: 'http://tt' },
                    { id: 'snapshot', camera_snapshot_urls: ['http://snap'] },
                    { id: 'plain', name: 'Nothing supportable' },
                ],
            }),
        );
        await create();
        const ids = spectator.service.space_list().map((s) => s.id);
        expect(ids).toEqual(['support', 'camera', 'timetable', 'snapshot']);
        expect(ids).not.toContain('plain');
    });

    it('should normalise camera snapshot urls, dropping empty entries', async () => {
        (ts_client.querySystems as any).mockReturnValue(Promise.resolve({
                data: [
                    {
                        id: 'snapshot',
                        camera_snapshot_urls: ['http://one', '', 'http://two'],
                    },
                ],
            }),
        );
        await create();
        expect(spectator.service.space_list()[0].camera_snapshot_urls).toEqual([
            'http://one',
            'http://two',
        ]);
    });

    it('should leave the space list empty when the query fails', async () => {
        (ts_client.querySystems as any).mockReturnValue(
            Promise.reject(new Error('boom')),
        );
        await create();
        expect(spectator.service.space_list()).toEqual([]);
    });

    describe('support groups', () => {
        const building = zone('bld-1', 'org-1', ['building']);
        const level = zone('lvl-1', 'bld-1', ['level']);
        const denied = zone('lvl-2', 'bld-1', ['level']);

        beforeEach(() => {
            group_id.set('group-1');
            // granted the building, denied its second level
            scope.set(groupScope([building, level], [building, denied]));
        });

        it("queries the selected group's systems", async () => {
            (ts_client.querySystems as any).mockResolvedValue({ data: [] });
            await create();
            expect(ts_client.querySystems).toHaveBeenCalledWith({
                group_id: 'group-1',
                limit: 5000,
            });
        });

        it('leaves out systems in a zone the group is denied', async () => {
            (ts_client.querySystems as any).mockResolvedValue({
                data: [
                    {
                        id: 'in',
                        zones: ['org-1', 'bld-1', 'lvl-1'],
                        support_url: 'x',
                    },
                    {
                        id: 'denied',
                        zones: ['org-1', 'bld-1', 'lvl-2'],
                        support_url: 'x',
                    },
                    { id: 'other', zones: ['org-1', 'bld-9'], support_url: 'x' },
                ],
            });
            await create();
            expect(spectator.service.space_list().map((s) => s.id)).toEqual([
                'in',
            ]);
        });

        it('waits for the group to load, then loads again on a switch', async () => {
            scope_ready.set(false);
            (ts_client.querySystems as any).mockResolvedValue({ data: [] });
            await create();
            expect(ts_client.querySystems).not.toHaveBeenCalled();
            expect(spectator.service.loading()).toBe(true);

            scope_ready.set(true);
            TestBed.tick();
            await flush();
            expect(ts_client.querySystems).toHaveBeenCalledTimes(1);
            expect(spectator.service.loading()).toBe(false);

            // the next group's zones are loading
            scope_ready.set(false);
            TestBed.tick();
            expect(spectator.service.loading()).toBe(true);

            group_id.set('group-2');
            scope.set(groupScope([level], [level]));
            scope_ready.set(true);
            TestBed.tick();
            await flush();
            expect(ts_client.querySystems).toHaveBeenLastCalledWith({
                group_id: 'group-2',
                limit: 5000,
            });
        });

        it("drops the previous group's systems that arrive after a switch", async () => {
            let resolve_old: (_: unknown) => void;
            (ts_client.querySystems as any).mockReturnValue(
                new Promise((resolve) => (resolve_old = resolve)),
            );
            await create();

            // switch group before the first request finishes
            scope_ready.set(false);
            TestBed.tick();
            resolve_old({ data: [{ id: 'old', support_url: 'x' }] });
            await flush();

            expect(spectator.service.space_list()).toEqual([]);
            expect(spectator.service.loading()).toBe(true);
        });

        it('queries nothing for a user in no group', async () => {
            group_id.set('');
            scope.set(groupScope([], []));
            await create();
            expect(ts_client.querySystems).not.toHaveBeenCalled();
            expect(spectator.service.space_list()).toEqual([]);
            expect(spectator.service.loading()).toBe(false);
        });
    });
});
