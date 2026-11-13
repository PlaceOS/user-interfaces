import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { Building, BuildingLevel, OrganisationService } from '@placeos/common';

import { StaffStateService } from '../../app/staff/staff-state.service';
import { StaffTopbarComponent } from '../../app/staff/staff-topbar.component';

describe('StaffTopbarComponent', () => {
    let spectator: SpectatorRouting<StaffTopbarComponent>;
    let org: Record<string, unknown>;
    const other_building = new Building({ id: 'bld-2' });

    const createComponent = createRoutingFactory({
        component: StaffTopbarComponent,
        detectChanges: false,
        overrideComponents: [
            [StaffTopbarComponent, { set: { template: '', imports: [] } }],
        ],
    });

    /** Start the topbar with the URL's query params already applied. */
    const setup = async (zone_ids: string) => {
        org = {
            active_levels: signal([]),
            waitUntilInitialised: vi.fn(async () => undefined),
            levelWithID: vi.fn((ids: string[]) =>
                ids.includes('lvl-2')
                    ? new BuildingLevel({ id: 'lvl-2', parent_id: 'bld-2' })
                    : null,
            ),
            buildings: [new Building({ id: 'bld-1' }), other_building],
            building: null,
        };
        spectator = createComponent({
            queryParams: { zone_ids },
            providers: [
                { provide: OrganisationService, useValue: org },
                {
                    provide: StaffStateService,
                    useValue: {
                        filters: signal({}),
                        setFilters: vi.fn(),
                        setSearchString: vi.fn(),
                    },
                },
            ],
        });
        // Runs ngOnInit, which reads the query params once the org is ready
        spectator.detectChanges();
        for (let i = 0; i < 3; i++) await Promise.resolve();
    };

    it('should select the levels in the URL and switch to their building', async () => {
        await setup('lvl-2');

        expect(spectator.component.zones()).toEqual(['lvl-2']);
        expect(org.building).toBe(other_building);
    });

    it('should ignore levels in the URL that are not known', async () => {
        await setup('lvl-gone');

        expect(spectator.component.zones()).toEqual([]);
        expect(org.building).toBeNull();
    });
});
