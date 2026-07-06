import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { signal } from '@angular/core';

import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { SimpleTableComponent } from '@placeos/components';
import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';

describe('CateringReportItemsComponent', () => {
    let spectator: Spectator<CateringReportItemsComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportItemsComponent,
        declarations: [MockComponent(SimpleTableComponent)],
        providers: [
            MockProvider(CateringReportStateService, {
                catering_items: signal({}),
                downloadOrders: vi.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
