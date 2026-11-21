import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PaymentConfig, PaymentsService } from '@placeos/payments';
import { MockComponent, MockProvider } from 'ng-mocks';

import { PaymentsComponent } from '../../app/payments/payments.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('PaymentsComponent', () => {
    let spectator: SpectatorRouting<PaymentsComponent>;
    const config = signal<PaymentConfig | null>(null);
    const privileged = signal(true);

    const createComponent = createRoutingFactory({
        component: PaymentsComponent,
        imports: [NoopAnimationsModule],
        stubsEnabled: false,
        overrideComponents: [
            [
                PaymentsComponent,
                {
                    remove: { imports: [ApplicationSidebarComponent] },
                    add: {
                        imports: [MockComponent(ApplicationSidebarComponent)],
                    },
                },
            ],
        ],
        providers: [
            MockProvider(PaymentsService, {
                is_enabled: signal(true),
                config,
                config_error: signal(''),
                privileged,
                hasCapability: (capability) =>
                    !!config()?.capabilities.includes(capability),
            }),
        ],
        detectChanges: false,
    });

    function render(capabilities: PaymentConfig['capabilities']) {
        config.set({
            provider: 'stripe',
            currency: 'AUD',
            privileged: privileged(),
            capabilities,
        });
        spectator = createComponent();
        spectator.detectChanges();
    }

    const links = () =>
        spectator
            .queryAll('a[mat-tab-link]')
            .map((a) => a.getAttribute('href'));

    beforeEach(() => privileged.set(true));

    it('hides the invoices page without the invoices capability', () => {
        render([]);
        expect(links()).toEqual(['/payments/list', '/payments/products']);
    });

    it('shows the invoices page with the invoices capability', () => {
        render(['invoices']);
        expect(links()).toEqual([
            '/payments/list',
            '/payments/invoices',
            '/payments/products',
        ]);
    });

    it('shows the no access message to a user who is not privileged', () => {
        privileged.set(false);
        render(['invoices']);

        expect(spectator.query('main icon')?.textContent?.trim()).toBe('lock');
        expect(spectator.query('nav')).toBeFalsy();
        expect(spectator.query('router-outlet')).toBeFalsy();
    });
});
