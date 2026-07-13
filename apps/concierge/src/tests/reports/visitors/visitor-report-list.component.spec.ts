import { signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { VisitorReportListComponent } from 'apps/concierge/src/app/reports/visitors/visitor-report-list.component';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';

describe('VisitorReportListComponent', () => {
    let spectator: Spectator<VisitorReportListComponent>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let allow_international: boolean;

    const day = new Date('2026-04-06T09:00:00').valueOf();

    const createComponent = createComponentFactory({
        component: VisitorReportListComponent,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
        providers: [
            {
                provide: VisitorsReportService,
                useValue: { bookings: (bookings = signal<any[]>([])) },
            },
            {
                provide: SettingsService,
                useValue: {
                    get: vi.fn(() => allow_international),
                },
            },
        ],
    });

    beforeEach(() => {
        bookings = signal<any[]>([]);
        allow_international = false;
        spectator = createComponent({
            providers: [
                { provide: VisitorsReportService, useValue: { bookings } },
                {
                    provide: SettingsService,
                    useValue: { get: vi.fn(() => allow_international) },
                },
            ],
        });
    });

    it('should resolve visitor name through the fallback chain', () => {
        bookings.set([
            { asset_name: 'Named Visitor', date: day },
            { extension_data: { asset_name: 'Ext Visitor' }, date: day },
            { description: 'Described Visitor', date: day },
            { asset_id: 'fallback-id', date: day },
        ]);
        expect(
            spectator.component.visitor_bookings().map((b) => b.visitor_name),
        ).toEqual([
            'Named Visitor',
            'Ext Visitor',
            'Described Visitor',
            'fallback-id',
        ]);
    });

    it('should resolve the host from name then email', () => {
        bookings.set([
            { user_name: 'Host Name', user_email: 'host@x.com', date: day },
            { user_email: 'only-email@x.com', date: day },
        ]);
        const list = spectator.component.visitor_bookings();
        expect(list[0].host).toBe('Host Name');
        expect(list[1].host).toBe('only-email@x.com');
    });

    it('should drop the international column when not enabled', () => {
        allow_international = false;
        expect(spectator.component.allow_international).toBe(false);
        expect(
            spectator.component.table_metric_guide.map((i) => i.label),
        ).not.toContain('International');
    });

    it('should include the international column when enabled', () => {
        allow_international = true;
        expect(spectator.component.allow_international).toBe(true);
        expect(
            spectator.component.table_metric_guide.map((i) => i.label),
        ).toContain('International');
    });
});
