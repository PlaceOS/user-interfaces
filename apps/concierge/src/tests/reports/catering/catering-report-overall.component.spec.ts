import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';

import { CateringReportOverallComponent } from 'apps/concierge/src/app/reports/catering/catering-report-overall.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { OrganisationService } from '@placeos/organisation';

describe('CateringReportOverallComponent', () => {
    let spectator: Spectator<CateringReportOverallComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportOverallComponent,
        declarations: [],
        providers: [
            {
                provide: CateringReportStateService,
                useValue: {
                    stats: new BehaviorSubject({}),
                },
            },
            { provide: Router, useValue: {} },
            MockProvider(OrganisationService, {}),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show order count', () => {
        const stats: any = spectator.inject(CateringReportStateService).stats;
        expect('[count]').toContainText('0');
        stats.next({ order_count: 32 });
        spectator.detectChanges();
        expect('[count]').toContainText('32');
    });

    it('should show unique number of items', () => {
        const stats: any = spectator.inject(CateringReportStateService).stats;
        expect('[unique]').toContainText('0');
        stats.next({ unique_items: 32 });
        spectator.detectChanges();
        expect('[unique]').toContainText('32');
    });

    it('should show number of items ordered', () => {
        const stats: any = spectator.inject(CateringReportStateService).stats;
        expect('[items]').toContainText('0');
        stats.next({ item_count: 32 });
        spectator.detectChanges();
        expect('[items]').toContainText('32');
    });

    it('should show total cost', () => {
        const stats: any = spectator.inject(CateringReportStateService).stats;
        expect('[total]').toContainText('$0');
        stats.next({ total_cost: 3200 });
        spectator.detectChanges();
        expect('[total]').toContainText('$32');
    });

    it('should show order count', () => {
        const stats: any = spectator.inject(CateringReportStateService).stats;
        expect('[average]').toContainText('$0');
        stats.next({ avg_cost: 3200 });
        spectator.detectChanges();
        expect('[average]').toContainText('$32');
    });
});
