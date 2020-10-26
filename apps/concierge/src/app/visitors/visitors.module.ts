import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { VisitorsComponent } from './visitors.component';

const ROUTES: Route[] = [{ path: '', component: VisitorsComponent }];

@NgModule({
    declarations: [
        VisitorsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class VisitorsModule {}
