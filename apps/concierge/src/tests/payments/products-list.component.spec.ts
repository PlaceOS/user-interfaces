import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    PaymentDriverMethod,
    PaymentProduct,
    PaymentsService,
    ProductQuery,
} from '@placeos/payments';
import { MockProvider } from 'ng-mocks';

import { ProductsListComponent } from '../../app/payments/products-list.component';

function product(id: string, active: boolean): PaymentProduct {
    return {
        id,
        name: `Product ${id}`,
        description: '',
        active,
        resource_type: 'desk',
        resource_ids: [],
        zone_ids: [],
        unit: 'day',
        unit_amount: 2000,
        currency: 'AUD',
        created_at: 1_800_000_000,
        updated_at: 1_800_000_000,
    };
}

describe('ProductsListComponent', () => {
    let spectator: Spectator<ProductsListComponent>;
    const products = [product('desk-day', true), product('old-desk', false)];
    const call =
        vi.fn<
            (
                method: PaymentDriverMethod,
                ...args: unknown[]
            ) => Promise<unknown>
        >();

    const createComponent = createComponentFactory({
        component: ProductsListComponent,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(PaymentsService, {
                call: call as unknown as PaymentsService['call'],
            }),
            MockProvider(MatDialog),
        ],
        detectChanges: false,
    });

    async function settle() {
        await new Promise((resolve) => setTimeout(resolve));
        spectator.detectChanges();
    }

    const rows = () => spectator.queryAll('[role="row"]').slice(1);

    beforeEach(async () => {
        call.mockReset();
        // Like a driver: archived products only with `include_inactive`
        call.mockImplementation(async (method, ...args) => {
            if (method !== 'list_products') return args[0];
            const query = args[0] as ProductQuery;
            return products.filter((p) => p.active || query.include_inactive);
        });
        spectator = createComponent();
        spectator.detectChanges();
        await settle();
    });

    it('lists archived products only with the include inactive toggle', async () => {
        expect(call).toHaveBeenLastCalledWith('list_products', {
            include_inactive: false,
        });
        expect(rows().length).toBe(1);

        spectator.click('mat-checkbox input');
        await settle();

        expect(call).toHaveBeenLastCalledWith('list_products', {
            include_inactive: true,
        });
        expect(rows().length).toBe(2);
    });

    it('archives a product with active false, then reloads the list', async () => {
        call.mockClear();
        // Edit, then archive, in the row of the active product
        const archive = rows()[0].querySelectorAll('button')[1];
        expect(archive.textContent?.trim()).toBe('archive');

        spectator.click(archive);
        await settle();

        expect(call.mock.calls.map(([m]) => m)).toEqual([
            'save_product',
            'list_products',
        ]);
        expect(call).toHaveBeenCalledWith('save_product', {
            ...products[0],
            active: false,
        });
    });
});
