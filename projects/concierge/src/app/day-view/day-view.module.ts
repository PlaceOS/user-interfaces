import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
})
export class DayViewModule {}
