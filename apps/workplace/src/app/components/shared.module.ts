import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';

import { MatSnackBarModule } from '@angular/material/snack-bar';
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

import { GlobalSearchComponent } from './global-search.component';
import { TopbarComponent } from './topbar.component';
import { BookingFormModalComponent } from './booking-form-modal.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { FormFieldsModule } from '@placeos/form-fields';
import { TopMenuComponent } from './top-menu.component';
import { FooterMenuComponent } from './footer-menu.component';
import { UserControlsComponent } from './user-controls.component';
import { BuildingSelectComponent } from './building-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EventCardComponent } from './event-card.component';
import { BookingCardComponent } from './booking-card.component';

const COMPONENTS: Type<any>[] = [
    TopbarComponent,
    GlobalSearchComponent,
    BookingFormModalComponent,
    VerticalTimelineComponent,
    EventTimelineComponent,
    TopMenuComponent,
    FooterMenuComponent,
    UserControlsComponent,
    BuildingSelectComponent,
    HelpTooltipComponent,
    AccessibilityTooltipComponent,
    EventCardComponent,
    BookingCardComponent
];

const MATERIAL_MODULES: any[] = [
    MatButtonModule,
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
    MatExpansionModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule
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
        ...MATERIAL_MODULES,
    ],
    exports: [
        ...COMPONENTS,
        ComponentsModule,
        FormFieldsModule,
        ...MATERIAL_MODULES,
    ],
})
export class SharedComponentModule {}
