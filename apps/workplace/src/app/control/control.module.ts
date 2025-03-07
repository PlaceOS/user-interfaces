import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../components/shared.module';
import { ControlComponent } from './control.component';
import { ControlSpaceListItemComponent } from './list-item.component';
import { ControlSpaceListComponent } from './space-list.component';

const ROUTES: Route[] = [{ path: '', component: ControlComponent }];

@NgModule({
    declarations: [
        ControlComponent,
        ControlSpaceListComponent,
        ControlSpaceListItemComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedComponentModule,
    ],
})
export class ControlModule {}
