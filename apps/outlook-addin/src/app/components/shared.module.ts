import { NgModule, Type } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBookingsModule } from '@placeos/bookings';
import { ComponentsModule } from '@placeos/components';
import { SharedEventsModule } from '@placeos/events';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS: Type<any>[] = [NotFoundComponent];

const MATERIAL_MODULES: any[] = [
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTooltipModule,
    MatRadioModule,
    MatSliderModule,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        BrowserAnimationsModule,
        SharedBookingsModule,
        SharedEventsModule,
        ComponentsModule,
    ],
    exports: [
        ...COMPONENTS,
        ...MATERIAL_MODULES,
        SharedBookingsModule,
        SharedEventsModule,
        ComponentsModule,
    ],
})
export class SharedComponentModule {}
