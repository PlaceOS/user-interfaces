import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { SidebarComponent } from '../../app/ui/sidebar.component';
import { VisitorListingsComponent } from '../../app/visitors/visitor-listings.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';
import { VisitorsTopbarComponent } from '../../app/visitors/visitors-topbar.component';
import { VisitorsComponent } from '../../app/visitors/visitors.component';

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
            MockComponent(SidebarComponent),
            MockComponent(VisitorsTopbarComponent),
            MockComponent(VisitorListingsComponent),
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
