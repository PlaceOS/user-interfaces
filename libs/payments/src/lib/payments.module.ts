import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { PaymentModalComponent } from './payment-modal.component';
import { CardInputFieldComponent } from './card-input-field.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const COMPONENTS = [PaymentModalComponent, CardInputFieldComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatProgressSpinnerModule,
    ],
    exports: [...COMPONENTS],
})
export class PaymentsModule {}
