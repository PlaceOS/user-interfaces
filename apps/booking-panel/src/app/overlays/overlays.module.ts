import { NgModule, Type } from '@angular/core';

import { BookingModalComponent } from './booking-modal.component';
import { EmbeddedControlModalComponent } from './embedded-control-modal.component';

const OVERLAYS: Type<any>[] = [
    EmbeddedControlModalComponent,
    BookingModalComponent,
];

@NgModule({
    declarations: [],
    imports: [...OVERLAYS],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
