import { NgModule, Type } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedBookingsModule } from '@placeos/bookings';
import { SharedEventsModule } from '@placeos/events';
import { ComponentsModule } from '@placeos/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS: Type<any>[] = [NotFoundComponent];

const MATERIAL_MODULES: any[] = [
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    MatBadgeModule,
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
