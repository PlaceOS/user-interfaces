import { NgModule } from '@angular/core';

import { CardInputFieldComponent } from './card-input-field.component';
import { PaymentModalComponent } from './payment-modal.component';

const STANDALONE_COMPONENTS = [CardInputFieldComponent, PaymentModalComponent];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class PaymentsModule {}
