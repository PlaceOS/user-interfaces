import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';

import { CateringReportOverallComponent } from 'apps/concierge/src/app/reports/catering/catering-report-overall.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';

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
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        (spectator.inject(CateringReportStateService).stats as any).next({
            order_count: 32,
            unique_items: 60,
            item_count: 120,
            total_cost: 1200_00,
            avg_cost: 3000,
        });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });
});
