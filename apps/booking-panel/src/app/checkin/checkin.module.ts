import { NgModule } from '@angular/core';

import { CheckinTimetableComponent } from './checkin-timetable.component';
import { CheckinViewComponent } from './checkin-view.component';

const COMPONENTS = [CheckinViewComponent, CheckinTimetableComponent];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class AppCheckinModule {}
