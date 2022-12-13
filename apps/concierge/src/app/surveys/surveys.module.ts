import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentsModule } from '@placeos/components';

import { UIModule } from '../ui/ui.module';

import { AddBuildingModalComponent } from './components/add-building-modal.component'
import { BuildingListComponent } from './pages/building-list.component'
import { SurveyListComponent } from './pages/survey-list.component'

import { BuildingListItemComponent} from './components/building-list-item.component'

const routes: Routes = [
  { path: '', component: BuildingListComponent}
] 

const COMPONENTS = [AddBuildingModalComponent, BuildingListComponent, SurveyListComponent, BuildingListItemComponent]

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    DragDropModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    ComponentsModule,
    RouterModule,
    MatTableModule,
    MatMenuModule,
    UIModule
  ]
})
export class SurveysModule { }
