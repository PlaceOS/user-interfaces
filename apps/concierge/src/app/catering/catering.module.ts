import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

import { UIModule } from '../ui/ui.module';

import { CateringComponent } from './catering.component';
import { CateringTopbarComponent } from './catering-topbar.component';
import { SharedCateringModule } from '@placeos/catering';
import { NewCateringComponent } from './new-catering.component';

const ROUTES: Route[] = [
    { path: '', component: CateringComponent },
    { path: 'new', component: NewCateringComponent },
    { path: ':view', component: CateringComponent },
    { path: 'new/:view', component: NewCateringComponent },
];

@NgModule({
    declarations: [
        CateringComponent,
        NewCateringComponent,
        CateringTopbarComponent,
    ],
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
