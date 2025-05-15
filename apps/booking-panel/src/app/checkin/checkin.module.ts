import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckinTimetableComponent } from './checkin-timetable.component';
import { CheckinViewComponent } from './checkin-view.component';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

const COMPONENTS = [CheckinViewComponent, CheckinTimetableComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, IconComponent, TranslatePipe, SafePipe],
    exports: [...COMPONENTS],
})
export class AppCheckinModule {}
