import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { Question, QuestionType, QuestionTypeOptions } from '../types';
import { MultiLineTextComponent } from './multi-line-text.component';
import { RatingsComponent } from './rating.component';
import { SelectionComponent } from './selection.component';
import { SingleLineTextComponent } from './single-line-text.component';

@Component({
    selector: 'placeos-question',
    styles: [],
    template: `
        <div
            #container_el
            class="flex w-full flex-col items-center justify-between px-4 py-2 pt-4"
        >
            @if (!preview) {
                <mat-form-field class="w-full" appearance="outline">
                    <input
                        matInput
                        [placeholder]="
                            'APP.CONCIERGE.SURVEY_QUESTION_ENTER' | translate
                        "
                        type="text"
                        [(ngModel)]="question.title"
                    />
                    @if (!question?.title) {
                        <mat-error class="input-error">
                            {{
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR'
                                    | translate
                            }}
                        </mat-error>
                    }
                </mat-form-field>
            } @else {
                <span class="mb-4 w-full text-xl">{{
                    question.title || 'No question'
                }}</span>
            }

            <div class="mb-4 flex w-full flex-col">
                @switch (question.type) {
                    @case (QuestionType.Comment_Box) {
                        <multi-line-text
                            [question]="question"
                            [preview]="preview"
                        ></multi-line-text>
                    }
                    @case (QuestionType.Single_Line_Text) {
                        <single-line-text
                            [question]="question"
                            [preview]="preview"
                        ></single-line-text>
                    }
                    @case (QuestionType.Check_Box) {
                        <selection
                            [value]="question"
                            [preview]="preview"
                        ></selection>
                    }
                    @case (QuestionType.Radio_Group) {
                        <selection
                            [value]="question"
                            [preview]="preview"
                        ></selection>
                    }
                    @case (QuestionType.Drop_Down) {
                        <selection
                            [value]="question"
                            [preview]="preview"
                        ></selection>
                    }
                    @case (QuestionType.Rating) {
                        <rating [value]="question" [preview]="preview"></rating>
                    }
                }
            </div>

            @if (!preview) {
                <div
                    class="flex w-full flex-row items-center justify-end space-x-4"
                >
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select [(ngModel)]="question.type">
                            @for (item of typeOptions; track item) {
                                @if (item.value[0] !== '0') {
                                    <mat-option [value]="item.value">
                                        {{ item.name }}
                                    </mat-option>
                                }
                            }
                        </mat-select>
                    </mat-form-field>
                    <settings-toggle
                        [(ngModel)]="question.isRequired"
                        [name]="'COMMON.REQUIRED' | translate"
                    ></settings-toggle>
                    <!-- <mat-slide-toggle [(ngModel)]="preview"> Preview</mat-slide-toggle> -->
                </div>
            }
        </div>
    `,
    imports: [
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        SettingsToggleComponent,
        FormsModule,
        MultiLineTextComponent,
        SingleLineTextComponent,
        SelectionComponent,
        RatingsComponent,
    ],
})
export class QuestionComponent implements AfterViewInit {
    @Input() public isCard = true;
    @Input() public preview = false;
    @Input() public set value(value: Question) {
        if (value) this.question = value;
        this.has_value = !!value;
    }

    public QuestionType = QuestionType;
    public typeOptions = QuestionTypeOptions;

    public has_value = false;
    public question: Question;

    @ViewChild('container_el', { static: true })
    private _container_el: ElementRef<HTMLDivElement>;

    public ngAfterViewInit() {
        if (this.isCard) {
            this._container_el.nativeElement.classList.add(
                'border',
                'border-base-400',
                'bg-base-100',
                'shadow',
            );
        }
    }

    public get valid() {
        if (!this.question?.title) return false;
        const q = this.question;
        let valid = true;

        switch (q.type) {
            case QuestionType.Check_Box:
            case QuestionType.Radio_Group:
            case QuestionType.Drop_Down:
                const checkop = q.choices?.map((e) => !!e?.text?.length);
                valid =
                    !!checkop?.length &&
                    checkop.reduce((acc, val) => acc && val);
                break;
            case QuestionType.Rating:
                valid = q.rateMax >= 3;
        }

        return valid;
    }
}
