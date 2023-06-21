import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { VisitorListingsComponent } from '../../app/visitors/visitor-listings.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';
import { VisitorsComponent } from '../../app/visitors/visitors.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { VisitorsTopbarComponent } from '../../app/visitors/visitors-topbar.component';

describe('VisitorsComponent', () => {
    let spectator: Spectator<VisitorsComponent>;
    const createComponent = createComponentFactory({
        component: VisitorsComponent,
        providers: [
            {
                provide: VisitorsStateService,
                useValue: {
                    loading: new BehaviorSubject(false),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(VisitorListingsComponent),
            MockComponent(VisitorsTopbarComponent),
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
