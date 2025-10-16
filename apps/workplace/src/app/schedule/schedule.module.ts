import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

const ROUTES: Route[] = [
    { path: '', component: ScheduleComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [ScheduleComponent, RouterModule.forChild(ROUTES)],
})
export class AppScheduleModule {}
