import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

import { UIModule } from '../ui/ui.module';

import { SharedCateringModule } from '@placeos/catering';
import { CateringTopbarComponent } from './catering-topbar.component';
import { CateringComponent } from './catering.component';

const ROUTES: Route[] = [
    { path: '', component: CateringComponent },
    { path: ':view', component: CateringComponent },
];

@NgModule({
    declarations: [CateringComponent, CateringTopbarComponent],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        MatTabsModule,
        MatChipsModule,
        SharedCateringModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class CateringModule {}
