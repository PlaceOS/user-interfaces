import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '@placeos/common';
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
    const createComponent = createComponentFactory({
        component: VisitorsComponent,
        providers: [
            MockProvider(VisitorsStateService, {
                loading: new BehaviorSubject(false),
                poll: jest.fn(),
                startPolling: jest.fn(),
                stopPolling: jest.fn(),
            }),
            MockProvider(ActivatedRoute),
            MockProvider(SettingsService, { get: jest.fn() }),
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
        spectator = createComponent();
        const service = spectator.inject(VisitorsStateService) as any;
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
});
