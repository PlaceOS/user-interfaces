import { Component, signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { ReportPageComponent } from 'apps/concierge/src/app/reports/report-page.component';

@Component({
    selector: 'test-report-body',
    template: `
        <report-page
            header="APP.CONCIERGE.REPORTS_DESKS_HEADER"
            [loading]="loading()"
            [has_data]="has_data()"
        >
            <ng-template><p class="report-body">Body</p></ng-template>
        </report-page>
    `,
    imports: [ReportPageComponent],
})
class TestReportBodyComponent {
    public readonly loading = signal(false);
    public readonly has_data = signal(false);
}

describe('ReportPageComponent', () => {
    let spectator: Spectator<TestReportBodyComponent>;
    const createComponent = createComponentFactory(TestReportBodyComponent);

    beforeEach(() => (spectator = createComponent()));

    it('should show the spinner and no body while loading', () => {
        spectator.component.loading.set(true);
        spectator.component.has_data.set(true);
        spectator.detectChanges();
        expect(spectator.query('mat-spinner')).toBeTruthy();
        expect(spectator.query('.report-body')).toBeFalsy();
    });

    it('should show the empty message when there is no data', () => {
        expect(spectator.query('.screen-only')).toBeTruthy();
        expect(spectator.query('.report-body')).toBeFalsy();
    });

    it('should render the body when loaded with data', () => {
        spectator.component.has_data.set(true);
        spectator.detectChanges();
        expect(spectator.query('.report-body')).toBeTruthy();
        expect(spectator.query('.screen-only')).toBeFalsy();
        expect(spectator.query('mat-spinner')).toBeFalsy();
    });
});
