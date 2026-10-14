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
    const theme = signal<'light' | 'dark'>('light');
    const logo_dark = signal<unknown>('dark-logo.png');
    const logo_light = signal<unknown>('light-logo.png');
    const createComponent = createComponentFactory({
        component: ApplicationSidebarComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            provideRouter([]),
            MockProvider(SettingsService, {
                get: ((name: string) =>
                    app_settings[name]) as SettingsService['get'],
                theme_signal: theme,
                signal: ((name: string) =>
                    name === 'app.logo_dark'
                        ? logo_dark
                        : logo_light) as SettingsService['signal'],
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
        theme.set('light');
        logo_dark.set('dark-logo.png');
        logo_light.set('light-logo.png');
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

    it('should show the logo for the current theme', () => {
        expect(spectator.component.logo_src()).toBe('light-logo.png');
        theme.set('dark');
        expect(spectator.component.logo_src()).toBe('dark-logo.png');
    });

    it('should resolve the logo from an object or an empty value', () => {
        logo_light.set({ src: 'nested-logo.png' });
        expect(spectator.component.logo_src()).toBe('nested-logo.png');
        logo_light.set(null);
        expect(spectator.component.logo_src()).toBe('');
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
