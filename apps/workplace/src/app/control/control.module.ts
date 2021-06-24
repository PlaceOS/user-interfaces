import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { ControlComponent } from './control.component';
import { ControlSpaceListComponent } from './space-list.component';
import { ControlSpaceListItemComponent } from './list-item.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../components/shared.module';

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
