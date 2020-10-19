import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HelpComponent } from './help.component';
import { SharedContentModule } from '../ui/shared.module';
import { HelpOptionListComponent } from './option-list/option-list.component';

const ROUTES: Route[] = [
    { path: '', component: HelpComponent }
];

@NgModule({
    declarations: [HelpComponent, HelpOptionListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class HelpModule {}
