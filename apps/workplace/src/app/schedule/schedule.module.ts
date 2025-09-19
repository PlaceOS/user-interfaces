import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleFiltersComponent } from './schedule-filters.component';
import { ScheduleMobileCalendarComponent } from './schedule-mobile-calendar.component';
import { ScheduleSidebarComponent } from './schedule-sidebar.component';
import { ScheduleComponent } from './schedule.component';

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
    declarations: [],
    imports: [...COMPONENTS, RouterModule.forChild(ROUTES)],
})
export class AppScheduleModule {}
