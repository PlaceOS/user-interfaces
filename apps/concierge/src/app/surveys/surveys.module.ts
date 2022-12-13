import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Route } from '@angular/router';
import { ComponentsModule } from '@placeos/components';
import { LibRoutingModule } from '@placeos/survey-creator';
import { SurveyModule } from 'survey-angular-ui';

import { BuildingListComponent } from './building-list.component';
import { AddBuildingModalComponent } from './add-building-modal.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: BuildingListComponent,
    },
];

@NgModule({
    declarations: [BuildingListComponent, AddBuildingModalComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTabsModule,
        MatChipsModule,
        DragDropModule,
        MatButtonModule,
        MatSelectModule,
        MatSlideToggleModule,
        ComponentsModule,
        RouterModule,
        MatTableModule,
        MatMenuModule,
        LibRoutingModule,
        SurveyModule,
    ],
})
export class SurveysModule {}
