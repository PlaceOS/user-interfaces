import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BookingModalComponent } from './booking-modal.component';
import { EmbeddedControlModalComponent } from './embedded-control-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';
import {
    DurationFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';

const OVERLAYS: Type<any>[] = [
    EmbeddedControlModalComponent,
    BookingModalComponent,
];

@NgModule({
    declarations: [...OVERLAYS],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        SafePipe,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        UserSearchFieldComponent,
        DurationFieldComponent,
        ReactiveFormsModule,
    ],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
