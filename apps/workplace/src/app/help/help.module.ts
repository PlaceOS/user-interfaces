import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HelpComponent } from './help.component';
import { HelpOptionListComponent } from './option-list.component';
import { SharedComponentModule } from '../components/shared.module';

const ROUTES: Route[] = [{ path: '', component: HelpComponent }];

@NgModule({
    declarations: [HelpComponent, HelpOptionListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedComponentModule,
    ],
})
export class HelpModule {}
