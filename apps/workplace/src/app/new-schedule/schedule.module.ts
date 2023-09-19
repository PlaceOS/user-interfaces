import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SharedComponentModule } from '../components/shared.module';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleFiltersComponent } from './schedule-filters.component';
import { ScheduleSidebarComponent } from './schedule-sidebar.component';
import { ScheduleComponent } from './schedule.component';
import { ScheduleMobileCalendarComponent } from './schedule-mobile-calendar.component';

const ROUTES: Route[] = [
    { path: '', component: ScheduleComponent },
    { path: '**', redirectTo: '' },
];

const COMPONENTS = [
    ScheduleComponent,
    ScheduleSidebarComponent,
    ScheduleFiltersComponent,
    ScheduleFilterCardComponent,
    ScheduleMobileCalendarComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        SharedComponentModule,
        FormsModule,
        MatBottomSheetModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppScheduleModule {}
