import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Building, OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { POIListComponent } from '../../app/poi-manager/poi-list.component';
import { POIManagerComponent } from '../../app/poi-manager/poi-manager.component';
import { POIManagementService } from '../../app/poi-manager/poi-management.service';

describe('POIManagerComponent', () => {
    let spectator: Spectator<POIManagerComponent>;
    let state: any;
    let org: any;
    let settings_map: Record<string, any>;
    let current_building: Building;

    const createComponent = createComponentFactory({
        component: POIManagerComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(POIListComponent),
        ],
        providers: [
            MockProvider(POIManagementService, {
                editPointOfInterest: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
        ],
    });

    beforeEach(() => {
        current_building = { id: 'bld-1' } as Building;
        settings_map = { 'app.use_region': false };
        org = {
            active_buildings: signal([{ id: 'bld-1' }]),
            get building() {
                return current_building;
            },
            set building(value: Building) {
                current_building = value;
            },
        };
        spectator = createComponent({
            detectChanges: false,
            providers: [MockProvider(OrganisationService, org)],
        });
        state = spectator.inject(POIManagementService);
    });

    it('should open a new point of interest modal', () => {
        spectator.component.new();
        expect(state.editPointOfInterest).toHaveBeenCalledWith();
    });

    it('should proxy building selection through the organisation service', () => {
        expect(spectator.component.building).toEqual({ id: 'bld-1' });
        const next = { id: 'bld-2' } as Building;
        spectator.component.building = next;
        expect(current_building).toBe(next);
    });

    it('should reflect the use_region setting', () => {
        expect(spectator.component.use_region).toBe(false);
        settings_map['app.use_region'] = true;
        expect(spectator.component.use_region).toBe(true);
    });
});
