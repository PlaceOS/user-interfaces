import { signal } from '@angular/core';
import { OrganisationService } from '@placeos/common';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import {
    assignedDeskBuilding,
    hasAssignedDesk,
    loadDeskResources,
    loadMetadataResources,
    loadParkingResources,
} from '../lib/booking-resource.loaders';

const desksIn = (zone: string, assigned_to = '') => [
    {
        zone: { id: zone },
        metadata: { desks: { details: [{ id: `${zone}-desk`, assigned_to }] } },
    },
];

describe('booking resource loaders', () => {
    const org = {
        building: { id: 'bld-1' },
        buildings: [{ id: 'bld-1' }, { id: 'bld-2' }],
        building_list: signal([{ id: 'bld-1' }, { id: 'bld-2' }]),
        levels: [],
    } as unknown as OrganisationService;

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.listChildMetadata).mockImplementation(
            async (id: string) =>
                (id === 'bld-2'
                    ? desksIn('lvl-2', 'Me@Example.com')
                    : desksIn('lvl-1')) as any,
        );
    });

    it('should share the metadata request of a resource list and an assignment scan', async () => {
        const [desks, home] = await Promise.all([
            loadMetadataResources(org, 'desks', false),
            assignedDeskBuilding(org, 'me@example.com', false),
        ]);

        expect(desks.map((desk) => desk.id)).toEqual(['lvl-1-desk']);
        expect(home).toBe('bld-2');
        // One request for each building, not one for each caller
        expect(ts_client.listChildMetadata).toHaveBeenCalledTimes(2);
    });

    it('should share an in-flight assignment scan between callers', async () => {
        const [home, has_desk] = await Promise.all([
            assignedDeskBuilding(org, 'me@example.com', false),
            hasAssignedDesk(org, 'me@example.com', false),
        ]);

        expect(home).toBe('bld-2');
        expect(has_desk).toBe(true);
        expect(ts_client.listChildMetadata).toHaveBeenCalledTimes(2);
        expect(await hasAssignedDesk(org, 'other@example.com', false)).toBe(
            false,
        );
    });

    it('should load the metadata of every building in the region', async () => {
        vi.mocked(ts_client.listChildMetadata).mockImplementation(
            async (id: string) =>
                [
                    {
                        zone: { id: `${id}-lvl` },
                        metadata: {
                            desks: { details: [{ map_id: `${id}-m` }] },
                        },
                    },
                    // A level without the metadata adds nothing
                    { zone: { id: `${id}-empty` }, metadata: {} },
                ] as never,
        );
        const region_org = {
            building: { id: 'bld-1', parent_id: 'reg-1' },
            buildings: [
                { id: 'bld-1', parent_id: 'reg-1' },
                { id: 'bld-2', parent_id: 'reg-1' },
                { id: 'bld-3', parent_id: 'reg-2' },
            ],
        } as unknown as OrganisationService;

        const desks = await loadMetadataResources(region_org, 'desks', true);

        expect(desks.map((desk) => [desk.id, desk.zone.id])).toEqual([
            ['bld-1-m', 'bld-1-lvl'],
            ['bld-2-m', 'bld-2-lvl'],
        ]);
        expect(ts_client.listChildMetadata).toHaveBeenCalledTimes(2);
    });

    it('should query parking spaces on the parking levels only', async () => {
        const page = (data: object[]) =>
            Promise.resolve({
                data,
                total: data.length,
                next: () => null,
            }) as never;
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            page([{ id: 'cat-p', name: '_PARKING_', hidden: true }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            page([{ id: 'type-p', name: '_PARKING_SPACES_' }]),
        );
        vi.mocked(ts_client.queryAssets).mockImplementation((query) =>
            page(
                query.zone_id === 'lvl-p'
                    ? [
                          {
                              map_id: 'bay-1',
                              zone_id: 'lvl-p',
                              place_groups: ['staff'],
                          },
                      ]
                    : [],
            ),
        );
        const parking_org = {
            levelsForBuilding: () => [
                { id: 'lvl-p', tags: ['parking'] },
                { id: 'lvl-o', tags: [] },
            ],
            levelWithID: ([id]: string[]) => ({ id }),
        } as unknown as OrganisationService;

        const spaces = await loadParkingResources(parking_org, false);

        expect(spaces).toEqual([
            expect.objectContaining({
                id: 'bay-1',
                groups: ['staff'],
                zone: { id: 'lvl-p' },
            }),
        ]);
        expect(
            vi
                .mocked(ts_client.queryAssets)
                .mock.calls.map(([query]) => query.zone_id),
        ).toEqual(['lvl-p']);
    });

    describe('desk assets', () => {
        const page = (data: any[]) =>
            Promise.resolve({ data, total: data.length, next: () => null });
        const asset_org = {
            ...org,
            levelWithID: vi.fn(([id]: string[]) => ({
                id,
                parent_id: 'bld-1',
            })),
        } as unknown as OrganisationService;

        beforeEach(() => {
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                page([{ id: 'cat-1', name: '_DESKS_' }]) as any,
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                page([{ id: 'type-1', name: '_DESKS_' }]) as any,
            );
            vi.mocked(ts_client.queryAssets).mockImplementation(
                (query: any) =>
                    page(
                        query.zones === 'bld-2'
                            ? [
                                  {
                                      id: 'asset-2',
                                      zone_id: 'lvl-2',
                                      identifier: 'Desk 2',
                                      assigned_to: 'Me@Example.com',
                                  },
                              ]
                            : query.zones === 'bld-1'
                              ? [
                                    {
                                        id: 'asset-1',
                                        zone_id: 'lvl-1',
                                        identifier: 'Desk 1',
                                    },
                                ]
                              : [],
                    ) as any,
            );
        });

        it('should load the desks of the building with one query', async () => {
            const desks = await loadDeskResources(asset_org, false);

            expect(desks.map((desk) => desk.id)).toEqual(['asset-1']);
            expect(ts_client.queryAssets).toHaveBeenCalledTimes(1);
            expect(ts_client.queryAssets).toHaveBeenCalledWith(
                expect.objectContaining({ zones: 'bld-1', type_id: 'type-1' }),
            );
        });

        it('should find the building of an assigned desk asset by building query', async () => {
            expect(
                await assignedDeskBuilding(asset_org, 'me@example.com', true),
            ).toBe('bld-2');
            expect(
                vi
                    .mocked(ts_client.queryAssets)
                    .mock.calls.map(([query]: any[]) => query.zones)
                    .sort(),
            ).toEqual(['bld-1', 'bld-2']);
        });
    });
});
