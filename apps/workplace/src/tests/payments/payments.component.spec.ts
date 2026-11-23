import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    Building,
    OrganisationService,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import {
    Payment,
    PaymentCapability,
    PaymentDriverMethod,
    PaymentsService,
} from '@placeos/payments';
import { MockComponent, MockProvider } from 'ng-mocks';

import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { PaymentsComponent } from '../../app/payments/payments.component';

const EMAIL = 'jo@example.com';

function payment(id: string): Payment {
    return {
        id,
        status: 'succeeded',
        amount: 1000,
        amount_refunded: 0,
        currency: 'AUD',
        description: `Desk booking ${id}`,
        items: [],
        user_id: 'user-1',
        user_email: EMAIL,
        user_name: 'Jo',
        created_at: 1_800_000_000,
        updated_at: 1_800_000_000,
    };
}

describe('PaymentsComponent', () => {
    let spectator: Spectator<PaymentsComponent>;
    const capabilities = signal<PaymentCapability[]>([]);
    const building = signal(new Building({ id: 'bld-1' }));
    const call =
        vi.fn<
            (
                method: PaymentDriverMethod,
                ...args: unknown[]
            ) => Promise<unknown>
        >();

    const createComponent = createComponentFactory({
        component: PaymentsComponent,
        overrideComponents: [
            [
                PaymentsComponent,
                {
                    remove: { imports: [TopbarComponent, FooterMenuComponent] },
                    add: {
                        imports: [
                            MockComponent(TopbarComponent),
                            MockComponent(FooterMenuComponent),
                        ],
                    },
                },
            ],
        ],
        providers: [
            MockProvider(PaymentsService, {
                enabled: true,
                call: call as unknown as PaymentsService['call'],
                hasCapability: (capability) =>
                    capabilities().includes(capability),
            }),
            MockProvider(OrganisationService, {
                waitUntilInitialised: async () => undefined,
                active_building: building,
            }),
            MockProvider(Router),
            MockProvider(MatDialog),
        ],
        detectChanges: false,
    });

    async function settle() {
        await new Promise((resolve) => setTimeout(resolve));
        spectator.detectChanges();
    }

    const tabs = () =>
        spectator
            .queryAll<HTMLButtonElement>('nav button')
            .map((b) => [b.name, b.getAttribute('aria-pressed')]);

    beforeEach(() => {
        setCurrentUser(new StaffUser({ id: 'user-1', email: EMAIL }));
        capabilities.set([]);
        building.set(new Building({ id: 'bld-1' }));
        call.mockReset();
        call.mockImplementation(async (method) =>
            method === 'list_payment_methods'
                ? []
                : {
                      items:
                          method === 'list_payments' ? [payment('pay-1')] : [],
                  },
        );
        spectator = createComponent();
    });

    it('hides the invoices and saved methods tabs without the capabilities', async () => {
        spectator.detectChanges();
        await settle();
        expect(tabs()).toEqual([['tab-payments', 'true']]);
    });

    it('shows a tab for each capability and marks the active tab as pressed', async () => {
        capabilities.set(['invoices', 'saved_methods']);
        spectator.detectChanges();
        expect(tabs()).toEqual([
            ['tab-payments', 'true'],
            ['tab-invoices', 'false'],
            ['tab-methods', 'false'],
        ]);

        spectator.click('button[name="tab-invoices"]');
        await settle();

        expect(tabs()).toEqual([
            ['tab-payments', 'false'],
            ['tab-invoices', 'true'],
            ['tab-methods', 'false'],
        ]);
        expect(call).toHaveBeenLastCalledWith('list_invoices', {
            user_email: EMAIL,
            limit: 20,
            cursor: undefined,
        });
    });

    it('lists the payments of the current user on the default tab', async () => {
        spectator.detectChanges();
        await settle();

        expect(call).toHaveBeenCalledWith('list_payments', {
            user_email: EMAIL,
            limit: 20,
            cursor: undefined,
        });
        expect(spectator.queryAll('main ul li').length).toBe(1);
        expect(spectator.query('main ul')?.textContent).toContain(
            'Desk booking pay-1',
        );
    });

    it('loads the payments of the new building and ignores the reply for the old one', async () => {
        let resolve_old!: (value: unknown) => void;
        call.mockReturnValueOnce(new Promise((done) => (resolve_old = done)));
        spectator.detectChanges();
        await settle();

        call.mockResolvedValueOnce({ items: [payment('pay-2')] });
        building.set(new Building({ id: 'bld-2' }));
        spectator.detectChanges();
        await settle();
        resolve_old({ items: [payment('pay-1')] });
        await settle();

        const list = spectator.query('main ul')?.textContent;
        expect(list).toContain('Desk booking pay-2');
        expect(list).not.toContain('Desk booking pay-1');
    });
});
