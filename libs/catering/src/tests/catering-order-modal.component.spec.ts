import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';

import { CateringOrderModalComponent } from '../lib/catering-order-modal.component';
import { CateringOrder } from '../lib/catering-order.class';
import { BehaviorSubject } from 'rxjs';
import { CateringItem } from '../lib/catering-item.class';
import { OrganisationService } from '@placeos/organisation';

describe('CateringOrderModalComponent', () => {
    let spectator: Spectator<CateringOrderModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CounterComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                order: new CateringOrder(),
                menu: new BehaviorSubject([
                    new CateringItem({ id: '1', name: 'Coffee' }),
                ]),
                loading: new BehaviorSubject(false),
                getCateringConfig: jest.fn(async () => []),
                selectOptions: jest.fn(async () => []),
            }),
            MockProvider(OrganisationService, {}),
        ],
        imports: [
            MatTabsModule,
            MatProgressSpinnerModule,
            MatBadgeModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow adding items to order', async () => {
        spectator.component.loading = '';
        spectator.detectChanges();
        expect('mat-tab-group').toExist();
        expect('[item]').toExist();
        spectator.component.updateItemQuantity(
            new CateringItem({ id: '1', name: 'Coffee' }),
            2
        );
        spectator.detectChanges();
        expect(
            spectator.component.order.items.find((_) => _.id === '1')
        ).toBeTruthy();
        expect(spectator.component.order.items[0].quantity).toBe(2);
        spectator.click('button[confirm]');
        spectator.detectChanges();
        expect('mat-tab-group').not.toExist();
    });

    it('should allow confirming order contents', () => {
        spectator.component.loading = '';
        spectator.detectChanges();
        spectator.component.updateItemQuantity(
            new CateringItem({ id: '1', name: 'Coffee' }),
            2
        );
        spectator.detectChanges();
        spectator.click('button[confirm]');
        spectator.detectChanges();
        expect('[item]').toExist();
        expect('[item]').toContainText('Coffee');
    });

    it('should allow submitting order', (done) => {
        const spy = jest.spyOn(spectator.component, 'saveOrder');
        spectator.component.loading = '';
        spectator.detectChanges();
        spectator.component.event.subscribe((e) => {
            expect(e.reason).toBe('done');
            expect(e.metadata.order).toBeInstanceOf(CateringOrder);
            done();
        });
        spectator.component.updateItemQuantity(
            new CateringItem({ id: '1', name: 'Coffee' }),
            2
        );
        spectator.detectChanges();
        spectator.click('button[confirm]');
        spectator.detectChanges();
        spectator.click('button[save]');
        expect(spectator.component.saveOrder).toHaveBeenCalled();
    });
});
