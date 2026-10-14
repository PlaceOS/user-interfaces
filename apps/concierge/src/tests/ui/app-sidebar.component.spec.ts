import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('ApplicationSidebarComponent', () => {
    let spectator: Spectator<ApplicationSidebarComponent>;
    let app_settings: Record<string, unknown>;
    const createComponent = createComponentFactory({
        component: ApplicationSidebarComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            provideRouter([]),
            MockProvider(SettingsService, {
                get: ((name: string) =>
                    app_settings[name]) as SettingsService['get'],
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                waitUntilInitialised: () => Promise.resolve(),
            }),
        ],
    });

    /** IDs of the shown items. A group shows as `group:child,child` */
    const shown = () =>
        spectator.component
            .links()
            .map((item) =>
                'children' in item
                    ? `${item.id}:${item.children.map((_) => _.id)}`
                    : item.id,
            );

    const setGroups = (groups: string[]) =>
        setCurrentUser(new StaffUser({ id: 'user-1', groups }));

    beforeEach(() => {
        app_settings = { 'app.features': ['events'] };
        setGroups([]);
        spectator = createComponent();
    });

    afterEach(() => {
        setGroups([]);
        spectator.component.collapsed.set({});
    });

    it('should toggle the collapsed state of a group', () => {
        expect(spectator.component.collapsed()['reports']).toBeFalsy();
        spectator.component.toggleGroup('reports');
        expect(spectator.component.collapsed()['reports']).toBe(true);
        spectator.component.toggleGroup('reports');
        expect(spectator.component.collapsed()['reports']).toBe(false);
    });

    it('should keep the collapsed state for the next sidebar', () => {
        spectator.component.toggleGroup('reports');
        expect(createComponent().component.collapsed()['reports']).toBe(true);
    });

    it('should show only the links of the enabled features', () => {
        app_settings['app.features'] = ['events', 'desks', 'desk-report'];
        expect(shown()).toEqual([
            'bookings:desks',
            'events',
            'reports:desk-report',
        ]);
    });

    it('should show one link when two of its features are enabled', () => {
        app_settings['app.features'] = ['parking', 'parking-bookings'];
        expect(shown()).toEqual(['bookings:parking']);
    });

    it('should show the management group only to admin users', () => {
        app_settings['app.features'] = ['zones'];
        expect(shown()).toEqual([]);
        setGroups(['placeos_support']);
        expect(shown()).toEqual(['facilities:zones']);
    });

    it('should limit a feature to its groups', () => {
        app_settings['app.feature_groups'] = { events: ['event-team'] };
        expect(shown()).toEqual([]);
        setGroups(['event-team']);
        expect(shown()).toEqual(['events']);
    });

    it('should list custom reports without a feature', () => {
        app_settings['app.custom_reports'] = [{ id: 'kpi', name: 'KPI' }];
        const reports = spectator.component.links()[1];
        expect('children' in reports && reports.children).toEqual([
            {
                id: 'custom-kpi',
                name: 'KPI',
                route: ['/reports', 'kpi'],
                icon: 'insert_chart',
            },
        ]);
    });

    describe('with translations loaded after render', () => {
        const translations: Record<string, string> = {};
        beforeAll(() =>
            ngMocks.defaultMock(TranslatePipe, () => ({
                transform: (key: string) => translations[key] || key,
            })),
        );
        afterAll(() => ngMocks.defaultMock(TranslatePipe, undefined));

        it('should update link names', () => {
            const key = 'APP.CONCIERGE.MENU_EVENTS';
            spectator.detectChanges();
            expect(spectator.element.textContent).toContain(key);
            translations[key] = 'Events';
            spectator.detectChanges();
            expect(spectator.element.textContent).toContain('Events');
            expect(spectator.element.textContent).not.toContain(key);
        });
    });
});
