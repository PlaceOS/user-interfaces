import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QuestionType } from '../types';
import { BaseQuestionComponent } from './base-question.component';

@Component({
    selector: 'selection',
    styles: [
        `
            .item-textbox {
                padding: 0.25rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        @if (question) {
            <div class="flex w-full flex-col">
                @if (!preview) {
                    <div class="mb-4 flex w-full flex-col pl-2">
                        @for (
                            item of question.choices;
                            track item;
                            let i = $index
                        ) {
                            <div
                                class="flex w-full flex-row items-center space-x-3 pb-3"
                            >
                                <span>{{ i + 1 }}. </span>
                                <mat-form-field
                                    class="w-full"
                                    appearance="outline"
                                    [subscriptSizing]="'dynamic'"
                                >
                                    <input
                                        matInput
                                        type="text"
                                        [(ngModel)]="item.text"
                                        name="item{{ i }}"
                                    />
                                </mat-form-field>
                                <button
                                    matSuffix
                                    icon-button
                                    (click)="deleteOption(i)"
                                >
                                    <icon> delete_outline </icon>
                                </button>
                            </div>
                        }
                    </div>
                    <button mat-stroked-button (click)="addOption()">
                        <div class="text-gray-800 flex flex-row items-center">
                            <icon>add_circle</icon>
                            <span>Add option</span>
                        </div>
                    </button>
                } @else {
                    @if (isDropDown) {
                        <mat-form-field>
                            <mat-select>
                                @for (item of question.choices; track item) {
                                    <mat-option [value]="item.value">{{
                                        item.text
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    } @else {
                        <div class="flex w-full flex-col pl-2">
                            @for (
                                item of question.choices;
                                track item;
                                let i = $index
                            ) {
                                <div
                                    class="flex w-full flex-row items-center space-x-3 pb-3"
                                >
                                    <input
                                        [type]="multiple ? 'checkbox' : 'radio'"
                                        name="options"
                                    />
                                    <span>{{ item.text }}</span>
                                </div>
                            }
                        </div>
                    }
                }
            </div>
        }
    `,
    imports: [MatFormFieldModule, MatSelectModule],
})
export class SelectionComponent
    extends BaseQuestionComponent
    implements OnInit
{
    public get isDropDown() {
        return this.question?.type === QuestionType.Drop_Down;
    }
    public get multiple() {
        return this.question?.type === QuestionType.Check_Box;
    }

    public ngOnInit() {
        if (!this.question?.choices) {
            this.question.choices = [];
        }
    }

    public addOption() {
        this.question.choices.push({ text: '' });
    }

    public deleteOption(index: number) {
        this.question.choices.splice(index, 1);
    }
}
