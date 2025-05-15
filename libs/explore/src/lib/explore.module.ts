import { NgModule } from '@angular/core';

import { ExploreBookQrComponent } from './explore-book-qr.component';
import { ExploreBookingModalComponent } from './explore-booking-modal.component';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';
import { ExploreLockerBankInfoComponent } from './explore-locker-bank-info.component';
import { ExploreLockerBankModalComponent } from './explore-locker-bank-modal.component';
import { ExploreMapControlComponent } from './explore-map-control.component';
import { ExploreMapViewComponent } from './explore-map-view.component';
import { ExploreParkingInfoComponent } from './explore-parking-info.component';
import { ExploreSearchComponent } from './explore-search.component';
import { ExploreSensorInfoComponent } from './explore-sensor-info.component';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';
import { ExploreZoomControlComponent } from './explore-zoom-control.component';
import { SetDatetimeModalComponent } from './set-datetime-modal.component';

const STANDALONE_COMPONENTS = [
    ExploreMapControlComponent,
    ExploreMapViewComponent,
    ExploreSearchComponent,
    ExploreSpaceInfoComponent,
    ExploreDeviceInfoComponent,
    ExploreDeskInfoComponent,
    ExploreZoomControlComponent,
    ExploreBookingModalComponent,
    SetDatetimeModalComponent,
    ExploreBookQrComponent,
    ExploreSensorInfoComponent,
    ExploreLockerBankInfoComponent,
    ExploreLockerBankModalComponent,
    ExploreParkingInfoComponent,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedExploreModule {}
