import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Router } from '@angular/router';
import { MockComponent, MockProvider } from 'ng-mocks';
import { Subject } from 'rxjs';

import { EmailTemplatesComponent } from '../../app/email-templates/email-templates.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('EmailTemplatesComponent', () => {
    let spectator: Spectator<EmailTemplatesComponent>;
    const router_events = new Subject<any>();
    let router_url: string;

    const createComponent = createComponentFactory({
        component: EmailTemplatesComponent,
        shallow: true,
        detectChanges: false,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
        ],
        providers: [
            MockProvider(Router, {
                events: router_events,
                get url() {
                    return router_url;
                },
            } as any),
        ],
    });

    beforeEach(() => {
        router_url = '/email-templates/manage/template-1?ref=list';
        spectator = createComponent();
    });

    it('should derive the last path segment from the router url', () => {
        router_events.next({});
        expect(spectator.component.path()).toBe('template-1');
    });

    it('should strip query parameters from the current path', () => {
        router_url = '/email-templates/manage?foo=bar';
        router_events.next({});
        expect(spectator.component.path()).toBe('manage');
    });
});
