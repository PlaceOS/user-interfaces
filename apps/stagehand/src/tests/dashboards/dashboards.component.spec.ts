import { Component, signal } from '@angular/core';
import { provideRouter, Router, RouterModule } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { IconComponent } from '@placeos/components';
import { DashboardsComponent } from '../../app/dashboards/dashboards.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { SidebarComponent } from '../../app/ui/sidebar.component';

@Component({ template: '' })
class EmptyPageComponent {}

describe('DashboardsComponent', () => {
    let spectator: Spectator<DashboardsComponent>;
    let dashboard: ReturnType<typeof signal<any>>;

    const create_component = createComponentFactory({
        component: DashboardsComponent,
        shallow: true,
        // mocked declarations mock every import of the component; list
        // RouterModule to keep real links
        imports: [RouterModule],
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            provideRouter([{ path: '**', component: EmptyPageComponent }]),
            MockProvider(DashboardsService),
        ],
    });

    beforeEach(() => {
        dashboard = signal<unknown>({ id: 'dash-1', name: 'Front Desk' });
        spectator = create_component({
            providers: [
                MockProvider(DashboardsService, {
                    dashboard: dashboard,
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

    it('should link the add action to dashboard creation on the listing page', () => {
        spectator.component.page.set('dashboards');
        spectator.detectChanges();

        expect(spectator.query('a[page-header][btn]')).toHaveAttribute(
            'href',
            '/dashboards/manage',
        );
    });

    it('should link the add action to alert creation for the active dashboard', () => {
        spectator.component.page.set('alerts');
        spectator.detectChanges();

        expect(spectator.query('a[page-header][btn]')).toHaveAttribute(
            'href',
            '/dashboards/dash-1/alerts/manage',
        );
    });

    it('should follow the page in the URL', async () => {
        const router = spectator.inject(Router);

        await router.navigateByUrl('/dashboards/dash-1/alerts');
        spectator.detectChanges();
        await vi.waitFor(() =>
            expect(spectator.component.page()).toBe('alerts'),
        );

        await router.navigateByUrl('/dashboards');
        spectator.detectChanges();
        await vi.waitFor(() =>
            expect(spectator.component.page()).toBe('dashboards'),
        );
    });

    it('should render the active dashboard name beside the alerts header', () => {
        spectator.component.page.set('alerts');
        spectator.detectChanges();

        expect(spectator.element.textContent).toContain('Front Desk');
    });
});
