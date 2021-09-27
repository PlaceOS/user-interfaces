import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";
import { ComponentsModule } from "@placeos/components";

import { CheckinTimetableComponent } from "./checkin-timetable.component";
import { CheckinViewComponent } from "./checkin-view.component";

const COMPONENTS = [
    CheckinViewComponent,
    CheckinTimetableComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, ComponentsModule, MatRippleModule],
    exports: [...COMPONENTS]
})
export class AppCheckinModule {}