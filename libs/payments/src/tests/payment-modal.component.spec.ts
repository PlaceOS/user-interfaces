import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { CardInputFieldComponent } from '../lib/card-input-field.component';
import { PaymentModalComponent } from '../lib/payment-modal.component';

describe('PaymentModalComponent', () => {
    let spectator: Spectator<PaymentModalComponent>;
    const createComponent = createComponentFactory({
        component: PaymentModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {}),
            MockProvider(OrganisationService, {}),
        ],
        declarations: [MockComponent(CardInputFieldComponent)],
        imports: [FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
