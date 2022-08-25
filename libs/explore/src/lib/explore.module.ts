import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@placeos/components';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';

import { ExploreMapControlComponent } from './explore-map-control.component';
import { ExploreMapViewComponent } from './explore-map-view.component';
import { ExploreSearchComponent } from './explore-search.component';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';
import { ExploreZoomControlComponent } from './explore-zoom-control.component';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';
import { ExploreBookingModalComponent } from './explore-booking-modal.component';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import { SetDatetimeModalComponent } from './set-datetime-modal.component';
import { ExploreBookQrComponent } from './explore-book-qr.component';

const COMPONENTS: Type<any>[] = [
    ExploreMapControlComponent,
    ExploreMapViewComponent,
    ExploreSearchComponent,
    ExploreSpaceInfoComponent,
    ExploreDeviceInfoComponent,
    ExploreDeskInfoComponent,
    ExploreZoomControlComponent,
    ExploreBookingModalComponent,
    SetDatetimeModalComponent,
    ExploreBookQrComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        OverlayModule,
        PortalModule,
        FormFieldsModule
    ],
    exports: [...COMPONENTS],
})
export class SharedExploreModule {}
