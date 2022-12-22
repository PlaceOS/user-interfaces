import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedEventsModule } from '@placeos/events';

import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';

import { GlobalSearchComponent } from './global-search.component';
import { TopbarComponent } from './topbar.component';
import { BookingFormModalComponent } from './booking-form-modal.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { TopMenuComponent } from './top-menu.component';
import { FooterMenuComponent } from './footer-menu.component';
import { UserControlsComponent } from './user-controls.component';
import { BuildingSelectComponent } from './building-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { SupportTicketModalComponent } from './support-ticket-modal.component';
import { SharedBookingsModule } from '@placeos/bookings';
import { SharedSpacesModule } from '@placeos/spaces';
import { PaymentsModule } from '@placeos/payments';
import { LanguageSelectComponent } from './language-tooltip.component';
import { RegionSelectComponent } from './region-select.component';

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
    RegionSelectComponent,
    HelpTooltipComponent,
    AccessibilityTooltipComponent,
    SupportTicketModalComponent,
    LanguageSelectComponent
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
        SharedEventsModule,
        SharedBookingsModule,
        SharedSpacesModule,
        PaymentsModule,
        ...MATERIAL_MODULES,
    ],
    exports: [
        ...COMPONENTS,
        ComponentsModule,
        FormFieldsModule,
        SharedEventsModule,
        SharedBookingsModule,
        SharedSpacesModule,
        PaymentsModule,
        ...MATERIAL_MODULES,
    ],
})
export class SharedComponentModule {}
