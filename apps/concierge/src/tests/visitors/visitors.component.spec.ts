import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';
import { GuestListingComponent } from '../../app/visitors/guest-listing.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';
import { VisitorsTopbarComponent } from '../../app/visitors/visitors-topbar.component';
import { VisitorsComponent } from '../../app/visitors/visitors.component';

describe('VisitorsComponent', () => {
    let spectator: Spectator<VisitorsComponent>;
    let query_params: URLSearchParams;
    const createComponent = createComponentFactory({
        component: VisitorsComponent,
        providers: [
            MockProvider(VisitorsStateService, {
                loading: signal(false),
                filters: signal({}),
                poll: jest.fn(),
                setFilters: jest.fn(),
                setSearchString: jest.fn(),
                startPolling: jest.fn(),
                stopPolling: jest.fn(),
            }),
            MockProvider(ActivatedRoute as any, {
                snapshot: {
                    queryParamMap: {
                        get: (key: string) => query_params.get(key),
                    },
                },
            }),
            MockProvider(Router as any, { navigate: jest.fn() }),
            MockProvider(OrganisationService as any, {
                active_building: signal({}),
                active_region: signal({}),
                levelsForBuilding: jest.fn(() => []),
                levelsForRegion: jest.fn(() => []),
            }),
            MockProvider(SettingsService as any, { get: jest.fn() }),
        ],
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(GuestListingComponent),
            MockComponent(VisitorsTopbarComponent),
            MockComponent(SearchbarComponent),
            MockComponent(DateOptionsComponent),
        ],
        imports: [
            MatProgressBarModule,
            MockModule(MatTabsModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        query_params = new URLSearchParams();
        spectator = createComponent();
        const service = spectator.inject(VisitorsStateService) as any;
        service.setFilters.mockClear();
        service.poll.mockClear();
        service.startPolling.mockClear();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should refresh visitors when the view is initialised', () => {
        const service = spectator.inject(VisitorsStateService) as any;
        spectator.component.ngOnInit();
        expect(service.poll).toHaveBeenCalledTimes(1);
        expect(service.startPolling).toHaveBeenCalledTimes(1);
    });

    it('should reset the visitor list to today when the route has no date', () => {
        const now = new Date('2026-06-15T12:00:00').valueOf();
        const service = spectator.inject(VisitorsStateService) as any;
        const date_now = jest.spyOn(Date, 'now').mockReturnValue(now);

        spectator.component.ngOnInit();

        expect(service.setFilters).toHaveBeenCalledWith({ date: now });
        date_now.mockRestore();
    });

    it('should restore the visitor list date from the route', () => {
        query_params.set('date', '2026-06-15');
        spectator = createComponent();
        const service = spectator.inject(VisitorsStateService) as any;
        service.setFilters.mockClear();

        spectator.component.ngOnInit();

        expect(service.setFilters).toHaveBeenCalledWith({
            date: new Date('2026-06-15T00:00:00').valueOf(),
        });
    });
});
