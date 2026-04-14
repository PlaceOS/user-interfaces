import { BehaviorSubject } from 'rxjs';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SiteAttendanceReportComponent } from 'apps/concierge/src/app/reports/attendance/site-attendance-report.component';
import {
    EMPTY_REPORT,
    SiteAttendanceReportService,
} from 'apps/concierge/src/app/reports/attendance/site-attendance-report.service';
import { MockProvider } from 'ng-mocks';

describe('SiteAttendanceReportComponent', () => {
    let spectator: Spectator<SiteAttendanceReportComponent>;
    let query_params: BehaviorSubject<any>;
    let report: BehaviorSubject<any>;
    let loading: BehaviorSubject<boolean>;
    let active_building: BehaviorSubject<any>;

    const createComponent = createComponentFactory({
        component: SiteAttendanceReportComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(SiteAttendanceReportService, {
                report$: new BehaviorSubject(EMPTY_REPORT),
                loading$: new BehaviorSubject(false),
                setOptions: jest.fn(),
                downloadReport: jest.fn(),
                generateReport: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                theme: 'light',
                get: jest.fn((key: string) => {
                    if (key === 'app.logo_light')
                        return { src: 'light-logo.svg' };
                    if (key === 'app.logo_dark')
                        return { src: 'dark-logo.svg' };
                    return undefined;
                }),
            } as any),
            MockProvider(OrganisationService, {
                initialised: new BehaviorSubject(true),
                active_building: new BehaviorSubject({ id: 'building-1' }),
                active_region: new BehaviorSubject({ id: 'region-1' }),
                levelsForBuilding: jest.fn(() => []),
                levelsForRegion: jest.fn(() => []),
                levelWithID: jest.fn(() => ({ parent_id: 'building-1' })),
                buildings: [{ id: 'building-1' }],
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: new BehaviorSubject(convertToParamMap({})),
                snapshot: { queryParamMap: convertToParamMap({}) },
            } as any),
        ],
    });

    beforeEach(() => {
        query_params = new BehaviorSubject(
            convertToParamMap({
                start: '100',
                end: '200',
                zone_ids: 'level-1,level-2',
            }),
        );
        report = new BehaviorSubject(EMPTY_REPORT);
        loading = new BehaviorSubject(false);
        active_building = new BehaviorSubject({ id: 'building-1' });
        spectator = createComponent({
            providers: [
                {
                    provide: SiteAttendanceReportService,
                    useValue: {
                        report$: report,
                        loading$: loading,
                        setOptions: jest.fn(),
                        downloadReport: jest.fn(),
                        generateReport: jest.fn(),
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: {
                        initialised: new BehaviorSubject(true),
                        active_building,
                        active_region: new BehaviorSubject({ id: 'region-1' }),
                        levelsForBuilding: jest.fn(() => []),
                        levelsForRegion: jest.fn(() => []),
                        levelWithID: jest.fn(() => ({
                            parent_id: 'building-1',
                        })),
                        buildings: [{ id: 'building-1' }],
                    },
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParamMap: query_params,
                        snapshot: {
                            queryParamMap: query_params.getValue(),
                            queryParams: {
                                start: '100',
                                end: '200',
                                zone_ids: 'level-1,level-2',
                            },
                        },
                    },
                },
            ],
        });
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should apply query params to report options', () => {
        expect(
            spectator.inject(SiteAttendanceReportService).setOptions,
        ).toHaveBeenCalledWith({ start: 100 });
        expect(
            spectator.inject(SiteAttendanceReportService).setOptions,
        ).toHaveBeenCalledWith({ end: 200 });
        expect(
            spectator.inject(SiteAttendanceReportService).setOptions,
        ).toHaveBeenCalledWith({ zones: ['level-1', 'level-2'] });
    });

    it('should expose report state and has_data from the service', () => {
        report.next({
            business_days: 1,
            total_attendance: 8,
            total_bookings: 6,
            active_types: 5,
            unique_people: 6,
            cards: [],
        });
        spectator.detectChanges();

        expect(spectator.component.report().total_attendance).toBe(8);
        expect(spectator.component.has_data()).toBe(true);
    });

    it('should expose loading state from the service', () => {
        loading.next(true);
        spectator.detectChanges();

        expect(spectator.component.loading()).toBe(true);
    });

    it('should delegate generate and download actions to the service', () => {
        spectator.component.generateReport();
        spectator.component.downloadReport();

        expect(
            spectator.inject(SiteAttendanceReportService).generateReport,
        ).toHaveBeenCalled();
        expect(
            spectator.inject(SiteAttendanceReportService).downloadReport,
        ).toHaveBeenCalled();
    });

    it('should select the light logo by default', () => {
        expect(spectator.component.logo()).toEqual({ src: 'light-logo.svg' });
    });

    it('should clear zones when query params do not include them', () => {
        query_params.next(convertToParamMap({ start: '100', end: '200' }));
        spectator.detectChanges();

        expect(
            spectator.inject(SiteAttendanceReportService).setOptions,
        ).toHaveBeenCalledWith({ zones: [] });
    });
});
