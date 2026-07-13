import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { signal } from '@angular/core';
import { MockProvider } from 'ng-mocks';
import { timer } from 'rxjs';

import { Router } from '@angular/router';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { RoomBookingsComponent } from '../../app/day-view/room-bookings.component';

describe('RoomBookingsComponent', () => {
    let spectator: SpectatorRouting<RoomBookingsComponent>;
    const zones = signal<string[]>([]);
    const active_levels = signal<any[]>([]);
    const createComponent = createRoutingFactory({
        component: RoomBookingsComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                active_region: signal({ id: 'reg-1' }),
                active_levels,
                levelsForBuilding: vi.fn(() => active_levels()),
                levelsForRegion: vi.fn(() => active_levels()),
                levelWithID: vi.fn(),
                buildings: [{ id: 'bld-1', parent_id: 'reg-1' }],
                binding: vi.fn(),
            } as any),
            MockProvider(EventsStateService, {
                zones,
                period: signal('day'),
                date: signal(Date.now()),
                options: signal({}),
                filtered: signal([]),
                spaces: signal([]),
                loading: signal(false),
                filters: {},
                setZones: vi.fn((zone_ids: string[]) => zones.set(zone_ids)),
                setPeriod: vi.fn(),
                setFilters: vi.fn(),
                setUIOptions: vi.fn(),
                newBooking: vi.fn(),
                getDate: vi.fn(() => Date.now()),
            } as any),
            MockProvider(SettingsService, {
                get: ((_: string) => false) as any,
            } as any),
        ],
        imports: [
            FormsModule,
            MatSelectModule,
            MatMenuModule,
            MatCheckboxModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => {
        zones.set([]);
        active_levels.set([]);
        spectator = createComponent();
        spectator.component.view.set('list');
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should clear zone_ids query params when no levels are selected', () => {
        const router = spectator.inject(Router);
        vi.spyOn(router, 'navigate');
        spectator.component.updateZones([]);
        expect(
            spectator.inject(EventsStateService).setZones,
        ).toHaveBeenCalledWith([]);
        expect(router.navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { zone_ids: null },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('should not auto-select the first level when none are selected', async () => {
        active_levels.set([{ id: 'lvl-1', parent_id: 'bld-1' }]);
        await timer(350).toPromise();
        expect(
            spectator.inject(EventsStateService).setZones,
        ).toHaveBeenLastCalledWith([]);
    });
});
