
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedUIModule } from 'src/app/ui/ui.module';

import { ConfirmModalComponent } from 'src/app/ui/confirm-modal/confirm-modal.component';
import { EmbeddedControlModalComponent } from './embedded-control-modal/embedded-control-modal.component';
import { BookingModalComponent } from './booking-modal/booking-modal.component';

const OVERLAYS: Type<any>[] = [
    ConfirmModalComponent,
    EmbeddedControlModalComponent,
    BookingModalComponent
];

@NgModule({
    declarations: [
        ...OVERLAYS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUIModule,
        MatDialogModule
    ],
    exports: [
        ...OVERLAYS
    ]
})
export class SharedOverlaysModule {}
