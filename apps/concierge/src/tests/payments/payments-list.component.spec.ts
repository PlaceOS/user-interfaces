import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { LocaleService, setTranslationService } from '@placeos/common';
import {
    Payment,
    PaymentDetailsModalComponent,
    PaymentDriverMethod,
    PaymentPage,
    PaymentsService,
} from '@placeos/payments';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { PaymentsListComponent } from '../../app/payments/payments-list.component';

const NOW = 1_800_000_000_000;
const DAY = 24 * 60 * 60;

function payment(id: string): Payment {
    return {
        id,
        status: 'succeeded',
        amount: 1000,
        amount_refunded: 0,
        currency: 'AUD',
        description: `Booking ${id}`,
        items: [],
        user_id: 'user-1',
        user_email: 'jo@example.com',
        user_name: 'Jo',
        created_at: NOW / 1000,
        updated_at: NOW / 1000,
    };
}

describe('PaymentsListComponent', () => {
    let spectator: Spectator<PaymentsListComponent>;
    const call =
        vi.fn<
            (
                method: PaymentDriverMethod,
                ...args: unknown[]
            ) => Promise<unknown>
        >();
    const open = vi.fn(() => ({ afterClosed: () => of(undefined) }));

    const createComponent = createComponentFactory({
        component: PaymentsListComponent,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(PaymentsService, {
                call: call as unknown as PaymentsService['call'],
            }),
            MockProvider(MatDialog, {
                open: open as unknown as MatDialog['open'],
            }),
        ],
        detectChanges: false,
    });

    const page = (
        items: Payment[],
        next_cursor?: string,
    ): PaymentPage<Payment> => ({ items, next_cursor });

    /** Settle the pending driver promises, then render */
    async function settle() {
        await new Promise((resolve) => setTimeout(resolve));
        spectator.detectChanges();
    }

    beforeAll(() => {
        // `i18n` returns the bare key without a service. Show the arguments
        // too, so that the error text of the driver is visible
        setTranslationService({
            get: (key: string, args: Record<string, unknown>) =>
                `${key} ${args['error'] ?? ''}`.trim(),
        } as unknown as LocaleService);
    });

    beforeEach(() => {
        vi.spyOn(Date, 'now').mockReturnValue(NOW);
        call.mockReset();
        open.mockClear();
        call.mockResolvedValue(page([payment('pay-1')]));
        spectator = createComponent();
    });

    afterEach(() => vi.restoreAllMocks());

    it('sends the user, status and period filters to list_payments', async () => {
        spectator.detectChanges();
        await settle();
        expect(call).toHaveBeenLastCalledWith('list_payments', {
            user_email: undefined,
            status: undefined,
            period_start: NOW / 1000 - 30 * DAY,
            limit: 50,
            cursor: undefined,
        });

        spectator.component.user_email.set('  jo@example.com ');
        spectator.component.status.set('refunded');
        spectator.component.period.set(0);
        spectator.component.reload();
        await settle();

        expect(call).toHaveBeenLastCalledWith('list_payments', {
            user_email: 'jo@example.com',
            status: 'refunded',
            period_start: undefined,
            limit: 50,
            cursor: undefined,
        });
    });

    it('loads the next page with the cursor and appends it', async () => {
        call.mockResolvedValueOnce(page([payment('pay-1')], 'cursor-2'));
        call.mockResolvedValueOnce(page([payment('pay-2')]));
        spectator.detectChanges();
        await settle();

        spectator.click('button.inverse');
        await settle();

        expect(call).toHaveBeenLastCalledWith(
            'list_payments',
            expect.objectContaining({ cursor: 'cursor-2' }),
        );
        expect(spectator.component.payments().map((_) => _.id)).toEqual([
            'pay-1',
            'pay-2',
        ]);
        expect(spectator.query('button.inverse')).toBeFalsy();
    });

    it('shows the error of the driver when the list fails to load', async () => {
        call.mockRejectedValueOnce('Driver offline');
        spectator.detectChanges();
        await settle();

        expect(spectator.element.textContent).toContain(
            'PAYMENTS.LOAD_ERROR Driver offline',
        );
        expect(spectator.query('[role="table"]')).toBeFalsy();
    });

    it('opens the details of a payment from its row', async () => {
        spectator.detectChanges();
        await settle();

        spectator.click('[role="row"] [role="cell"] button');

        expect(open).toHaveBeenCalledWith(PaymentDetailsModalComponent, {
            data: { payment: payment('pay-1') },
        });
    });
});
