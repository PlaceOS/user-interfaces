import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MultiLineTextComponent } from './question/multi-line-text.component';
import { QuestionComponent } from './question/question.component';
import { RatingsComponent } from './question/rating.component';
import { SelectionComponent } from './question/selection.component';
import { SingleLineTextComponent } from './question/single-line-text.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSliderModule
    ],
    declarations: [
        QuestionComponent,
        SingleLineTextComponent,
        SelectionComponent,
        MultiLineTextComponent,
        RatingsComponent,
    ],
    exports: [QuestionComponent],
})
export class SurveySuiteModule {}
