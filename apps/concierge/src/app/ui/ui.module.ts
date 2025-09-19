import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DateOptionsComponent } from './date-options.component';
import { SearchbarComponent } from './searchbar.component';
import { ViewEventDetailsComponent } from './view-event-details.component';

import { AppSettingsModalComponent } from './app-settings-modal.component';
import { BookingPanelSettingsModalComponent } from './app-settings/booking-panel-settings-modal.component';
import { ConciergeSettingsFormModalComponent } from './app-settings/concierge-settings-form-modal.component';
import { VisitorKioskSettingsFormModalComponent } from './app-settings/visitor-kiosk-settings-form-modal.component';
import { WorkplaceSettingsFormModalComponent } from './app-settings/workplace-settings-form-modal.component';
import { ApplicationSidebarComponent } from './app-sidebar.component';
import { ApplicationTopbarComponent } from './app-topbar.component';
import { BookingRulesModalComponent } from './booking-rules-modal.component';
import { SelectMapItemModalComponent } from './select-map-item-modal.component';

const STANDALONE_COMPONENTS = [
    AppSettingsModalComponent,
    SearchbarComponent,
    ViewEventDetailsComponent,
    BookingRulesModalComponent,

    BookingPanelSettingsModalComponent,
    WorkplaceSettingsFormModalComponent,
    ConciergeSettingsFormModalComponent,
    VisitorKioskSettingsFormModalComponent,
    SelectMapItemModalComponent,

    ApplicationTopbarComponent,
    ApplicationSidebarComponent,
    DateOptionsComponent,
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([]), ...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class UIModule {}
