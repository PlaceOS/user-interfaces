import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';

import { CateringOrderModalComponent } from '../lib/catering-order-modal.component';
import { CateringOrder } from '../lib/catering-order.class';
import { BehaviorSubject } from 'rxjs';
import { CateringItem } from '../lib/catering-item.class';

describe('CateringOrderModalComponent', () => {
    let spectator: Spectator<CateringOrderModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CounterComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    order: new CateringOrder(),
                    menu: new BehaviorSubject([
                        new CateringItem({ id: '1', name: 'Coffee' }),
                    ]),
                    loading: new BehaviorSubject(false),
                    getCateringConfig: jest.fn(async () => []),
                    selectOptions: jest.fn(async () => []),
                },
            },
        ],
        imports: [
            MatTabsModule,
            MatProgressSpinnerModule,
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
        spectator.click('[item] button');
        expect(
            spectator.component.order.items.find((_) => _.id === '1')
        ).toBeTruthy();
        expect(spectator.component.order.items[0].quantity).toBe(1);
        spectator.click('button[confirm]');
        spectator.detectChanges();
        expect('mat-tab-group').not.toExist();
    });

    it('should allow confirming order contents', () => {
        spectator.component.loading = '';
        spectator.detectChanges();
        spectator.click('[item] button');
        spectator.click('button[confirm]');
        spectator.detectChanges();
        expect('[item]').toExist();
        expect('[item]').toContainText('Coffee');
        expect('.charge-code').toExist();
    });

    it('should allow submitting order', (done) => {
        spectator.component.loading = '';
        spectator.detectChanges();
        spectator.component.event.subscribe((e) => {
            expect(e.reason).toBe('done');
            expect(e.metadata.order).toBeInstanceOf(CateringOrder);
            done();
        });
        spectator.click('[item] button');
        spectator.click('button[confirm]');
        spectator.detectChanges();
        spectator.click('button[save]');
        spectator.typeInElement('CODE-123', '.charge-code input');
        spectator.detectChanges();
        spectator.click('button[save]');
    });
});
