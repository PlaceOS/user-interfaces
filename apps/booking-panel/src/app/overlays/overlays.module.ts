import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BookingModalComponent } from './booking-modal.component';
import { EmbeddedControlModalComponent } from './embedded-control-modal.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';

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
    ],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
