import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckinTimetableComponent } from './checkin-timetable.component';
import { CheckinViewComponent } from './checkin-view.component';

import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';

const COMPONENTS = [CheckinViewComponent, CheckinTimetableComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, IconComponent, TranslatePipe, SafePipe],
    exports: [...COMPONENTS],
})
export class AppCheckinModule {}
