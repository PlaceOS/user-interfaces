import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    SiteAttendanceReportChartCanvasComponent,
    SiteAttendanceReportChartComponent,
    SiteAttendanceReportChartModalComponent,
} from 'apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component';
import * as chart_mod from 'chart.js';
import { MockProvider } from 'ng-mocks';

vi.mock('chart.js');

describe('SiteAttendanceReportChartCanvasComponent', () => {
    let spectator: Spectator<SiteAttendanceReportChartCanvasComponent>;

    const createComponent = createComponentFactory({
        component: SiteAttendanceReportChartCanvasComponent,
    });

    beforeEach(() => {
        vi.useFakeTimers();
        (chart_mod.Chart as unknown as any).mockClear();
        spectator = createComponent();
        spectator.detectChanges();
    });

    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
    });

    it('should build the daily attendance chart datasets', () => {
        spectator.setInput('daily_attendance', [
            {
                date: '2026-04-06',
                events: 2,
                desks: 3,
                parking: 2,
                visitors: 1,
                total: 4,
            },
            {
                date: '2026-04-07',
                events: 1,
                desks: 2,
                parking: 0,
                visitors: 0,
                total: 3,
            },
        ]);

        (chart_mod.Chart as unknown as any).mockClear();
        spectator.component.updateChart();
        vi.runAllTimers();

        const [, config] = (chart_mod.Chart as unknown as any).mock.calls[0];
        expect(config.type).toBe('line');
        expect(config.data.labels).toEqual(['06 Apr', '07 Apr']);
        expect(config.data.datasets.map((_) => _.label)).toEqual([
            'Rooms',
            'Desk bookings',
            'Visitors',
            'Total attendance',
        ]);
        expect(config.data.datasets.map((_) => _.data)).toEqual([
            [2, 1],
            [3, 2],
            [1, 0],
            [4, 3],
        ]);
    });

    it('should include parking when enabled', () => {
        spectator.setInput('show_parking', true);
        spectator.setInput('daily_attendance', [
            {
                date: '2026-04-06',
                events: 2,
                desks: 3,
                parking: 2,
                visitors: 1,
                total: 5,
            },
        ]);

        (chart_mod.Chart as unknown as any).mockClear();
        spectator.component.updateChart();
        vi.runAllTimers();

        const [, config] = (chart_mod.Chart as unknown as any).mock.calls[0];
        expect(config.data.datasets.map((_) => _.label)).toEqual([
            'Rooms',
            'Desk bookings',
            'Parking',
            'Visitors',
            'Total attendance',
        ]);
        expect(config.data.datasets.map((_) => _.data)).toEqual([
            [2],
            [3],
            [2],
            [1],
            [5],
        ]);
    });
});

describe('SiteAttendanceReportChartComponent', () => {
    let spectator: Spectator<SiteAttendanceReportChartComponent>;
    let dialog_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: SiteAttendanceReportChartComponent,
        shallow: true,
        providers: [MockProvider(MatDialog, { open: vi.fn() } as any)],
    });

    beforeEach(() => {
        dialog_open = vi.fn();
        spectator = createComponent({
            providers: [MockProvider(MatDialog, { open: dialog_open } as any)],
        });
        spectator.detectChanges();
    });

    it('should open the chart modal with the daily rows', () => {
        const daily_attendance = [
            {
                date: '2026-04-06',
                events: 2,
                desks: 3,
                parking: 2,
                visitors: 1,
                total: 4,
            },
            {
                date: '2026-04-07',
                events: 1,
                desks: 2,
                parking: 0,
                visitors: 0,
                total: 3,
            },
        ];
        spectator.setInput('daily_attendance', daily_attendance);

        spectator.component.openModal();

        expect(dialog_open).toHaveBeenCalledWith(
            SiteAttendanceReportChartModalComponent,
            {
                data: {
                    daily_attendance,
                    show_parking: false,
                },
                panelClass: 'fullscreen-dialog',
                width: '100vw',
                height: '100vh',
            },
        );
    });
});
