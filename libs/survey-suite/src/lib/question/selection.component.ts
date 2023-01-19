import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Question, QuestionType } from "../types";
import { BaseQuestionComponent } from "./base-question.component";

@Component({
    selector: 'selection',
    styles: [`
        .item-textbox{
            padding: 0.25rem;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

    <ng-container *ngIf="question">
        <div class="flex flex-col w-full">
            <ng-container *ngIf="!preview;else previewState;">
                <div class="flex flex-col w-full mb-4 pl-2">
                    
                        <div 
                            *ngFor="let item of question.choices; let i = index;" 
                            class="flex flex-row w-full items-center space-x-3 pb-3">
                                
                                    <span>{{i+1}}. </span>
                                    <mat-form-field 
                                        class="w-full" 
                                        appearance="outline"
                                        [subscriptSizing]="'dynamic'">
                                        <input matInput type="text" [(ngModel)]="item.text" name="item{{i}}"/>
                                    </mat-form-field>
                                    <button matSuffix mat-icon-button (click)="deleteOption(i)">
                                        <mat-icon>
                                            delete_outline
                                        </mat-icon>
                                    </button>
                        </div>
                    
                </div>
                <button  
                    mat-stroked-button 
                    (click)="addOption()">
                    <div class="flex flex-row items-center text-gray-800">
                        <mat-icon>add_circle</mat-icon>
                        <span>Add option</span>
                    </div>
                </button>

            </ng-container>

            <ng-template #previewState>
                <mat-form-field *ngIf="isDropDown; else inputType;">
                    <mat-select>
                        <mat-option *ngFor="let item of question.choices" [value]="item.value">{{item.text}}</mat-option>
                    </mat-select>
                </mat-form-field>
            </ng-template>
            <ng-template #inputType>
                <div class="flex flex-col w-full pl-2">
                    <div 
                        *ngFor="let item of question.choices; let i = index;" 
                        class="flex flex-row w-full items-center space-x-3 pb-3">
                            <input [type]="multiple ? 'checkbox' : 'radio'" name="options">
                            <span>{{item.text}}</span>
                    </div>
                </div>
            </ng-template>
        </div>
    </ng-container>
    `
})

export class SelectionComponent extends BaseQuestionComponent implements OnInit{


    public get isDropDown(){
        return this.question?.type === QuestionType.Drop_Down;
    }
    public get multiple(){
        return this.question?.type === QuestionType.Check_Box;
    }

    ngOnInit(){
        if(!this.question?.choices){
            this.question.choices = [];
        }
    }

    addOption(){
        this.question.choices.push({text:''});
    }

    deleteOption(index: number){
        this.question.choices.splice(index,1);
    }
}