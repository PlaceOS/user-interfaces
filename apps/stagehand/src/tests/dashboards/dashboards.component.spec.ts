import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { DashboardsComponent } from '../../app/dashboards/dashboards.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('DashboardsComponent', () => {
    let spectator: Spectator<DashboardsComponent>;
    let dashboard: ReturnType<typeof signal<any>>;

    const create_component = createComponentFactory({
        component: DashboardsComponent,
        shallow: true,
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(IconComponent),
        ],
        providers: [provideRouter([]), MockProvider(DashboardsService)],
    });

    beforeEach(() => {
        dashboard = signal<any>({ id: 'dash-1', name: 'Front Desk' });
        spectator = create_component({
            providers: [
                MockProvider(DashboardsService, {
                    dashboard: dashboard as any,
                }),
            ],
        });
    });

    it('should hide the back navigation on the dashboard listing page', () => {
        spectator.component.page.set('dashboards');
        spectator.detectChanges();

        expect(
            spectator.query('a[aria-label="Back to dashboards"]'),
        ).toBeFalsy();
    });

    it('should show the back navigation on the alerts page', () => {
        spectator.component.page.set('alerts');
        spectator.detectChanges();

        expect(
            spectator.query('a[aria-label="Back to dashboards"]'),
        ).toBeTruthy();
    });

    it('should show the back navigation on the view page', () => {
        spectator.component.page.set('view');
        spectator.detectChanges();

        expect(
            spectator.query('a[aria-label="Back to dashboards"]'),
        ).toBeTruthy();
    });

    it('should hide the add action while viewing a dashboard', () => {
        spectator.component.page.set('view');
        spectator.detectChanges();

        expect(spectator.query('a[btn]')).toBeFalsy();
    });

    it('should show the add action on the listing and alerts pages', () => {
        spectator.component.page.set('dashboards');
        spectator.detectChanges();
        expect(spectator.query('a[btn]')).toBeTruthy();

        spectator.component.page.set('alerts');
        spectator.detectChanges();
        expect(spectator.query('a[btn]')).toBeTruthy();
    });

    it('should route the add action to dashboard creation on the listing page', () => {
        spectator.component.page.set('dashboards');

        expect(spectator.component.new_route()).toEqual([
            '/dashboards',
            'manage',
        ]);
    });

    it('should route the add action to alert creation for the active dashboard', () => {
        spectator.component.page.set('alerts');

        expect(spectator.component.new_route()).toEqual([
            '/dashboards',
            'dash-1',
            'alerts',
            'manage',
        ]);
    });

    it('should render the active dashboard name beside the alerts header', () => {
        spectator.component.page.set('alerts');
        spectator.detectChanges();

        expect(spectator.element.textContent).toContain('Front Desk');
    });
});
