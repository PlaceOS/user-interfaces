import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { PaymentModalComponent } from '../lib/payment-modal.component';

describe('PaymentModalComponent', () => {
    let spectator: Spectator<PaymentModalComponent>;
    const createComponent = createComponentFactory({
        component: PaymentModalComponent,
        providers: [],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
