import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ControlComponent } from './control.component';

const ROUTES: Route[] = [{ path: '', component: ControlComponent }];

@NgModule({
    declarations: [],
    imports: [ControlComponent, RouterModule.forChild(ROUTES)],
})
export class ControlModule {}
