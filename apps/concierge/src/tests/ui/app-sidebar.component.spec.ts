import { Component, signal } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
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

// The test window is narrow, so start with the full sidebar and its labels
vi.hoisted(() =>
    localStorage.setItem('PLACEOS.concierge.sidebar_rail', 'false'),
);

@Component({ template: '' })
class BlankComponent {}

describe('ApplicationSidebarComponent', () => {
    let spectator: Spectator<ApplicationSidebarComponent>;
    let app_settings: Record<string, unknown>;
    const createComponent = createComponentFactory({
        component: ApplicationSidebarComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            provideRouter([
                { path: 'users/staff', component: BlankComponent },
                {
                    path: 'users/staff/emergency-contacts',
                    component: BlankComponent,
                },
            ]),
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

    /** IDs of the shown groups and links, each group as `group:link,link` */
    const shown = () =>
        spectator.component
            .groups()
            .map((group) => `${group.id}:${group.children.map((_) => _.id)}`);

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
            'other:events',
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
        expect(shown()).toEqual(['other:events']);
    });

    it('should list custom reports without a feature', () => {
        app_settings['app.custom_reports'] = [{ id: 'kpi', name: 'KPI' }];
        const reports = spectator.component.groups()[1];
        expect(reports.children).toEqual([
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

    it('should show icons only and save the choice when the rail is on', () => {
        spectator.detectChanges();
        spectator.component.toggleRail();
        spectator.detectChanges();

        expect(spectator.element).toHaveClass('rail');
        expect(
            localStorage.getItem('PLACEOS.concierge.sidebar_rail'),
        ).toBe('true');
        spectator.component.toggleRail();
    });

    it('should mark the staff link active with query params but not on its child page', async () => {
        app_settings['app.features'] = ['internal-users', 'emergency-contacts'];
        const router = spectator.inject(Router);
        const staff_link = () =>
            spectator.query('a[href="/users/staff"]') as HTMLElement;

        const visit = async (url: string) => {
            await router.navigateByUrl(url);
            spectator.detectChanges();
            // The active class updates in a microtask after navigation
            await spectator.fixture.whenStable();
            spectator.detectChanges();
        };

        await visit('/users/staff?zone_ids=lvl-1');
        expect(staff_link()).toHaveClass('active');

        await visit('/users/staff/emergency-contacts');
        expect(staff_link()).not.toHaveClass('active');
    });
});
