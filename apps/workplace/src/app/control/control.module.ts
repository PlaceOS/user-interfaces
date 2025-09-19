import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ControlComponent } from './control.component';
import { ControlSpaceListItemComponent } from './list-item.component';
import { ControlSpaceListComponent } from './space-list.component';

const ROUTES: Route[] = [{ path: '', component: ControlComponent }];

@NgModule({
    declarations: [],
    imports: [
        ControlComponent,
        ControlSpaceListComponent,
        ControlSpaceListItemComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class ControlModule {}
