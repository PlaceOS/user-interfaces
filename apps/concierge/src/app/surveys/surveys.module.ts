import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
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

import { BuildingListComponent } from './pages/building-list.component';
import { SurveyListComponent } from './pages/survey-list.component';
import { DesignPreviewContainerComponent } from './pages/design-preview-container.component';

import { BuildingListItemComponent } from './components/building-list-item.component';
import { AddBuildingModalComponent } from './components/add-building-modal.component';
import { AddQuestionBankComponent } from './components/add-question-bank.component';
import { EditQuestionBankComponent } from './components/edit-question-bank.component';
import { SearchBarComponent } from './components/search-bar.component';
import { InputTitleComponent } from './components/input-title.component';
import { QuestionContainerComponent } from './components/question-container.component';
import { ButtonBorderlessComponent } from './components/button-borderless.component';

const routes: Route[] = [
    { path: '', component: BuildingListComponent },
    { path: 'survey-list/:id', component: SurveyListComponent },
    { path: 'create', component: DesignPreviewContainerComponent },
];

const COMPONENTS = [
    AddBuildingModalComponent,
    BuildingListComponent,
    SurveyListComponent,
    BuildingListItemComponent,
    AddQuestionBankComponent,
    EditQuestionBankComponent,
    DesignPreviewContainerComponent,
    SearchBarComponent,
    InputTitleComponent,
    QuestionContainerComponent,
    ButtonBorderlessComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
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
        UIModule,
    ],
})
export class SurveysModule {}
