import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { convertToParamMap, ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ZoneManagerComponent } from '../../app/zone-manager/zone-manager.component';
import { BuildingManagementService } from '../../app/building-manager/building-management.service';
import { LevelManagementService } from '../../app/level-manager/level-management.service';
import { RegionManagementService } from '../../app/region-manager/region-management.service';
import { WorkplaceSettingsFormModalComponent } from '../../app/ui/app-settings/workplace-settings-form-modal.component';

describe('ZoneManagerComponent', () => {
    let spectator: Spectator<ZoneManagerComponent>;
    let region_service: any;
    let building_service: any;
    let level_service: any;
    let router_navigate: any;
    let query_param_map: any;

    const createComponent = createComponentFactory({
        component: ZoneManagerComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(RegionManagementService, {}),
            MockProvider(BuildingManagementService, {}),
            MockProvider(LevelManagementService, {}),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {}),
            MockProvider(ActivatedRoute, {}),
            MockProvider(Router, {}),
        ],
    });

    beforeEach(() => {
        region_service = { editRegion: vi.fn() };
        building_service = { editBuilding: vi.fn() };
        level_service = { editLevel: vi.fn() };
        router_navigate = vi.fn();
        query_param_map = of(convertToParamMap({}));
        spectator = createComponent({
            providers: [
                { provide: RegionManagementService, useValue: region_service },
                { provide: BuildingManagementService, useValue: building_service },
                { provide: LevelManagementService, useValue: level_service },
                { provide: MatDialog, useValue: { open: vi.fn() } },
                {
                    provide: OrganisationService,
                    useValue: {
                        waitUntilInitialised: vi.fn(() => Promise.resolve()),
                        organisation: { id: 'org-1' },
                    },
                },
                {
                    provide: ActivatedRoute,
                    useValue: { get queryParamMap() { return query_param_map; } },
                },
                { provide: Router, useValue: { navigate: router_navigate } },
            ],
        });
    });

    it('should compute the add-button text for the active tab', () => {
        spectator.component.selected_tab.set(0);
        expect(spectator.component.addButtonText()).toBe('APP.CONCIERGE.REGIONS_ADD');
        spectator.component.selected_tab.set(1);
        expect(spectator.component.addButtonText()).toBe('APP.CONCIERGE.BUILDINGS_ADD');
        spectator.component.selected_tab.set(2);
        expect(spectator.component.addButtonText()).toBe('APP.CONCIERGE.LEVELS_ADD');
    });

    it('should route the add action to the service for the active tab', () => {
        spectator.component.selected_tab.set(0);
        spectator.component.addItem();
        expect(region_service.editRegion).toHaveBeenCalled();

        spectator.component.selected_tab.set(1);
        spectator.component.addItem();
        expect(building_service.editBuilding).toHaveBeenCalled();

        spectator.component.selected_tab.set(2);
        spectator.component.addItem();
        expect(level_service.editLevel).toHaveBeenCalled();
    });

    it('should update the tab and merge the tab name into the query params on change', () => {
        spectator.component.onTabChange(1);
        expect(spectator.component.selected_tab()).toBe(1);
        expect(router_navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { tab: 'buildings' },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('should select the tab from the route query param on init', async () => {
        query_param_map = of(convertToParamMap({ tab: 'levels' }));
        await spectator.component.ngOnInit();
        expect(spectator.component.selected_tab()).toBe(2);
    });

    it('should ignore unknown tab query params on init', async () => {
        spectator.component.selected_tab.set(1);
        query_param_map = of(convertToParamMap({ tab: 'not-a-tab' }));
        await spectator.component.ngOnInit();
        expect(spectator.component.selected_tab()).toBe(1);
    });

    it('should open the organisation workplace settings modal', () => {
        spectator.component.editWorkplaceSettings();
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            WorkplaceSettingsFormModalComponent,
            { data: { zone: { id: 'org-1' } } },
        );
    });
});
