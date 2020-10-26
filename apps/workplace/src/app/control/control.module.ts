import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { ControlComponent } from './control.component';
import { SharedContentModule } from '../ui/shared.module';
import { ControlSpaceListComponent } from './space-list/space-list.component';
import { ControlSpaceListItemComponent } from './space-list/item/item.component';

const ROUTES: Route[] = [
    { path: '', component: ControlComponent }
];

@NgModule({
    declarations: [ControlComponent, ControlSpaceListComponent, ControlSpaceListItemComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class ControlModule {}
