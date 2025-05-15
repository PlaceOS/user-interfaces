import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';

import { AssetsModule } from '@placeos/assets';
import { SharedBookingsModule } from '@placeos/bookings';
import { ComponentsModule } from '@placeos/components';
import { SharedEventsModule } from '@placeos/events';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedSpacesModule } from '@placeos/spaces';

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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { FooterMenuComponent } from './footer-menu.component';
import { GlobalSearchComponent } from './global-search.component';
import { TopMenuComponent } from './top-menu.component';
import { TopbarComponent } from './topbar.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

const COMPONENTS: Type<any>[] = [
    TopbarComponent,
    GlobalSearchComponent,
    VerticalTimelineComponent,
    EventTimelineComponent,
    TopMenuComponent,
    FooterMenuComponent,
];

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
    MatSlideToggleModule,
    MatSliderModule,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        FormFieldsModule,
        SharedEventsModule,
        SharedBookingsModule,
        SharedSpacesModule,
        ...MATERIAL_MODULES,
    ],
    exports: [
        ...COMPONENTS,
        ComponentsModule,
        FormFieldsModule,
        SharedEventsModule,
        SharedBookingsModule,
        SharedSpacesModule,
        AssetsModule,
        ...MATERIAL_MODULES,
    ],
})
export class SharedComponentModule {}
