import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '@placeos/components';
import { FormFieldsModule } from '@placeos/form-fields';
import { EmbeddedControlModalComponent } from './embedded-control-modal.component';
import { BookingModalComponent } from './booking-modal.component';

const OVERLAYS: Type<any>[] = [
    EmbeddedControlModalComponent,
    BookingModalComponent,
];

@NgModule({
    declarations: [...OVERLAYS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        FormFieldsModule,
        MatDialogModule,
    ],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
