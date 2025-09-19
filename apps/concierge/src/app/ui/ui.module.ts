import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
import { MatTooltipModule } from '@angular/material/tooltip';

import { AssetsModule } from 'libs/assets/src/lib/assets.module';
import { ComponentsModule } from 'libs/components/src/lib/components.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { DateOptionsComponent } from './date-options.component';
import { SearchbarComponent } from './searchbar.component';
import { ViewEventDetailsComponent } from './view-event-details.component';

import { SpacePipe } from '@placeos/events';
import { AppSettingsModalComponent } from './app-settings-modal.component';
import { BookingPanelSettingsModalComponent } from './app-settings/booking-panel-settings-modal.component';
import { ConciergeSettingsFormModalComponent } from './app-settings/concierge-settings-form-modal.component';
import { UploadButtonComponent } from './app-settings/upload-button.component';
import { VisitorKioskSettingsFormModalComponent } from './app-settings/visitor-kiosk-settings-form-modal.component';
import { WorkplaceSettingsFormModalComponent } from './app-settings/workplace-settings-form-modal.component';
import { ApplicationSidebarComponent } from './app-sidebar.component';
import { ApplicationTopbarComponent } from './app-topbar.component';
import { BookingRulesModalComponent } from './booking-rules-modal.component';
import { SelectMapItemModalComponent } from './select-map-item-modal.component';

const COMPONENTS: Type<any>[] = [
    AppSettingsModalComponent,
    SearchbarComponent,
    ViewEventDetailsComponent,
    BookingRulesModalComponent,

    BookingPanelSettingsModalComponent,
    WorkplaceSettingsFormModalComponent,
    ConciergeSettingsFormModalComponent,
    VisitorKioskSettingsFormModalComponent,
    SelectMapItemModalComponent,
];

const MAT_MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatRadioModule,
];

const ANGULAR_MODULES: any[] = [FormsModule, ReactiveFormsModule];

const STANDALONE_COMPONENTS = [
    ApplicationTopbarComponent,
    ApplicationSidebarComponent,
    DateOptionsComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ...ANGULAR_MODULES,
        ...MAT_MODULES,
        ComponentsModule,
        FormFieldsModule,
        AssetsModule,
        RouterModule.forChild([]),
        UploadButtonComponent,
        SpacePipe,
        ...STANDALONE_COMPONENTS,
    ],
    exports: [
        ...COMPONENTS,
        ...MAT_MODULES,
        ...ANGULAR_MODULES,
        ...STANDALONE_COMPONENTS,
        FormFieldsModule,
        ComponentsModule,
        AssetsModule,
        UploadButtonComponent,
        SpacePipe,
    ],
})
export class UIModule {}
