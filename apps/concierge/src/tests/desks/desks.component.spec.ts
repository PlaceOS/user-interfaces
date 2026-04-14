import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService, SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { BehaviorSubject } from 'rxjs';
import { DesksStateService } from '../../app/desks/desks-state.service';
import { DesksTopbarComponent } from '../../app/desks/desks-topbar.component';
import { DesksComponent } from '../../app/desks/desks.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('DesksComponent', () => {
    let spectator: SpectatorRouting<DesksComponent>;
    let active_building: BehaviorSubject<any>;
    let active_region: BehaviorSubject<any>;
    let current_building: any;
    let filters_signal: ReturnType<typeof signal<any>>;
    const organisation_service: any = {
        buildings: [
            { id: 'bld-1', parent_id: 'region-1' },
            { id: 'bld-2', parent_id: 'region-1' },
        ],
        levelsForBuilding: jest.fn((building) =>
            building?.id === 'bld-2'
                ? [{ id: 'level-b' }]
                : [{ id: 'level-a' }],
        ),
        levelsForRegion: jest.fn(() => [{ id: 'level-a' }, { id: 'level-b' }]),
        levelWithID: jest.fn(),
        active_building: undefined,
        active_region: undefined,
        get building() {
            return current_building;
        },
        set building(value) {
            current_building = value;
        },
    };
    const createComponent = createRoutingFactory({
        component: DesksComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(DesksTopbarComponent),
            MockComponent(IconComponent),
            MockComponent(SearchbarComponent),
        ],
        providers: [
            MockProvider(DesksStateService, {
                refresh: jest.fn(),
                filters: signal({}),
                loading: signal(false),
                setFilters: jest.fn(),
                rejectAllDesks: jest.fn(),
                editDesk: jest.fn(),
                addDesks: jest.fn(),
            } as any),
            MockProvider(OrganisationService, organisation_service),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            MockModule(MatProgressBarModule),
            MockModule(MatTabsModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        current_building = { id: 'bld-1', parent_id: 'region-1' };
        active_building = new BehaviorSubject(current_building);
        active_region = new BehaviorSubject({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        filters_signal = signal({ zones: ['level-a'] });
        spectator = createComponent({
            providers: [
                MockProvider(DesksStateService, {
                    refresh: jest.fn(),
                    filters: filters_signal,
                    loading: signal(false),
                    setFilters: jest.fn((filters) =>
                        filters_signal.set({
                            ...filters_signal(),
                            ...filters,
                        }),
                    ),
                    rejectAllDesks: jest.fn(),
                    editDesk: jest.fn(),
                    addDesks: jest.fn(),
                } as any),
                MockProvider(SettingsService, {
                    get: ((name: string) =>
                        name === 'app.use_region' ? false : undefined) as any,
                } as any),
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should clear stale zones when the active building changes', () => {
        // Events view defaults to "all levels" (empty selection). When the
        // building changes, zones that don't belong to the new building must
        // be dropped so the user isn't left with a stale selection.
        const update_zones = jest.spyOn(spectator.component, 'updateZones');
        update_zones.mockClear();

        current_building = { id: 'bld-2', parent_id: 'region-1' };
        active_building.next(current_building);

        expect(update_zones).toHaveBeenCalledWith([]);
    });

    it.todo('should handle routing events');
});
