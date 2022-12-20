import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Question } from "../types";

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
            <div class="flex flex-col w-full mb-4 pl-2">
                <div 
                    *ngFor="let item of question.options; let i = index;" 
                    class="flex flex-row w-full items-center space-x-3 pb-3">
                        <span>{{i+1}}. </span>
                        <mat-form-field class="h-12 w-full" appearance="fill">
                            <input matInput type="text" [(ngModel)]="item.text" name="item{{i}}"/>
                        </mat-form-field>
                        <button matSuffix mat-icon-button (click)="deleteOption(i)">
                            <mat-icon>
                                delete_outline
                            </mat-icon>
                        </button>
                        
                </div>
            </div>

            <button class="w-24" 
                mat-stroked-button (click)="addOption()">
                <div class="flex flex-row items-center text-gray-800">
                    <mat-icon>add_circle</mat-icon>
                    <span>Add option</span>
                </div>
            </button>
        </div>
    </ng-container>
    `
})

export class SelectionComponent implements OnInit{

    @Input() question: Question;
    @Input() isEdit: boolean = true;

    ngOnInit(){
        if(!this.question.options){
            this.question.options = [];
        }
    }

    addOption(){
        this.question.options.push({text:''});
    }

    deleteOption(index: number){
        console.log("delete option index", index);
        this.question.options.splice(index,1);
    }
}