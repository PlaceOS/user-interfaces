import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    Invoice,
    InvoiceStatus,
    PaymentDriverMethod,
    PaymentPage,
    PaymentsService,
} from '@placeos/payments';
import { MockProvider } from 'ng-mocks';

import { InvoicesListComponent } from '../../app/payments/invoices-list.component';

function invoice(id: string, status: InvoiceStatus): Invoice {
    return {
        id,
        number: status === 'requested' ? '' : `INV-${id}`,
        status,
        user_email: 'jo@example.com',
        user_name: 'Jo',
        amount: 1000,
        currency: 'AUD',
        items: [],
        memo: '',
        created_at: 1_800_000_000,
    };
}

/** Promise that the test resolves by hand */
function deferred<T>() {
    let resolve!: (value: T) => void;
    const promise = new Promise<T>((done) => (resolve = done));
    return { promise, resolve };
}

describe('InvoicesListComponent', () => {
    let spectator: Spectator<InvoicesListComponent>;
    const call =
        vi.fn<
            (
                method: PaymentDriverMethod,
                ...args: unknown[]
            ) => Promise<unknown>
        >();

    const createComponent = createComponentFactory({
        component: InvoicesListComponent,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(PaymentsService, {
                call: call as unknown as PaymentsService['call'],
            }),
            MockProvider(MatDialog),
        ],
        detectChanges: false,
    });

    const page = (items: Invoice[]): PaymentPage<Invoice> => ({ items });

    async function settle() {
        await new Promise((resolve) => setTimeout(resolve));
        spectator.detectChanges();
    }

    const sendButton = () =>
        spectator.query<HTMLButtonElement>('button[name="send-inv-1"]');

    beforeEach(async () => {
        call.mockReset();
        call.mockResolvedValue(page([invoice('inv-1', 'requested')]));
        spectator = createComponent();
        spectator.detectChanges();
        await settle();
    });

    it('sends an invoice once on a double click and updates its row', async () => {
        const send = deferred<Invoice>();
        call.mockReturnValueOnce(send.promise);
        const [item] = spectator.component.invoices();

        spectator.click('button[name="send-inv-1"]');
        spectator.component.send(item);
        spectator.detectChanges();

        expect(sendButton()?.disabled).toBe(true);
        send.resolve(invoice('inv-1', 'open'));
        await settle();

        const sends = call.mock.calls.filter(([m]) => m === 'send_invoice');
        expect(sends).toEqual([['send_invoice', 'inv-1', null]]);
        expect(spectator.component.invoices()[0].status).toBe('open');
        expect(sendButton()).toBeFalsy();
    });

    it('keeps a sent invoice sent when an older list response arrives', async () => {
        const stale = deferred<PaymentPage<Invoice>>();
        call.mockReturnValueOnce(stale.promise);
        // The list request starts before the send completes
        spectator.component.reload();
        call.mockResolvedValueOnce(invoice('inv-1', 'open'));
        await spectator.component.send(spectator.component.invoices()[0]);

        stale.resolve(page([invoice('inv-1', 'requested')]));
        await settle();

        expect(spectator.component.invoices()[0].status).toBe('open');
        expect(sendButton()).toBeFalsy();
    });
});
