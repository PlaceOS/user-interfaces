import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Component } from '@angular/core';
import { MockComponent } from 'ng-mocks';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

import { Router } from '@angular/router';
import { ApplicationSidebarComponent } from 'apps/concierge/src/app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from 'apps/concierge/src/app/ui/app-topbar.component';
import { ReportsMenuComponent } from 'apps/concierge/src/app/reports/reports-menu.component';
import { ReportsComponent } from 'apps/concierge/src/app/reports/reports.component';

@Component({ selector: 'router-outlet', template: '' })
class StubRouterOutlet {}

describe('ReportsComponent', () => {
    let spectator: Spectator<ReportsComponent>;
    let router_events: Subject<any>;
    let current_url: string;
    const createComponent = createComponentFactory({
        component: ReportsComponent,
        overrideComponents: [
            [
                ReportsComponent,
                {
                    remove: { imports: [RouterModule] },
                    add: { imports: [StubRouterOutlet] },
                },
            ],
        ],
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(ReportsMenuComponent),
        ],
        providers: [
            {
                provide: Router,
                useValue: {
                    get events() {
                        return router_events;
                    },
                    get url() {
                        return current_url;
                    },
                },
            },
        ],
    });

    beforeEach(() => {
        router_events = new Subject();
        current_url = '/reports/desks';
        spectator = createComponent();
    });

    it('should derive the active path from the router url', () => {
        expect(spectator.component.path()).toBe('desks');
    });

    it('should recompute the path when the router emits a navigation event', () => {
        current_url = '/reports';
        router_events.next({ id: 1 });
        expect(spectator.component.path()).toBe('reports');
    });

    it('should show the reports menu only on the base reports path', () => {
        expect(spectator.query('[reports-menu]')).toBeFalsy();
        current_url = '/reports';
        router_events.next({ id: 2 });
        spectator.detectChanges();
        expect(spectator.query('[reports-menu]')).toBeTruthy();
    });
});
