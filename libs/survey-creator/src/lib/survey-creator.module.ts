import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SurveyCreatorComponent } from './survey-creator.component';

const COMPONENTS: Type<any>[] = [SurveyCreatorComponent];

@NgModule({
    declarations: [SurveyCreatorComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
    ],

    exports: [SurveyCreatorComponent],
})
export class SurveyCreatorModule {}
