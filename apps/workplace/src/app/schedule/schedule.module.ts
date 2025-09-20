import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

const ROUTES: Route[] = [
    { path: '', component: ScheduleComponent },
    { path: '**', redirectTo: '' },
];

const COMPONENTS = [ScheduleComponent];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS, RouterModule.forChild(ROUTES)],
})
export class AppScheduleModule {}
