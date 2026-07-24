import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetItemListComponent } from '../../app/asset-manager/asset-item-list.component';

const loading = signal(false);
const options_signal = signal<any>({ view: 'grid', search: '' });
const categories = signal<any[]>([]);
const product_mapping = signal<any>({ _count: 0 });

describe('AssetItemListComponent', () => {
    let spectator: SpectatorRouting<AssetItemListComponent>;

    const createComponent = createRoutingFactory({
        component: AssetItemListComponent,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                loading,
                options: options_signal,
                categories,
                product_mapping,
            } as any),
        ],
    });

    beforeEach(() => {
        loading.set(false);
        options_signal.set({ view: 'grid', search: '' });
        categories.set([]);
        product_mapping.set({ _count: 0 });
    });

    it('should render products grouped under their category heading', () => {
        categories.set([{ id: 'cat-1', name: 'Furniture' }]);
        product_mapping.set({
            _count: 1,
            'cat-1': [{ id: 'a1', name: 'Office Chair', images: [] }],
        });
        spectator = createComponent();

        expect(spectator.query('h2')).toHaveText('Furniture');
        expect(spectator.fixture.nativeElement.textContent).toContain(
            'Office Chair',
        );
    });

    it('should show an empty state when there are no products', () => {
        spectator = createComponent();

        expect(spectator.fixture.nativeElement.textContent).toContain(
            'No assets available',
        );
    });

    it('should expose the base route from the state service', () => {
        spectator = createComponent();
        expect(spectator.component.base_route).toBe('/book/assets');
    });
});
