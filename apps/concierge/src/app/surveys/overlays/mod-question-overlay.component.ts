import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { generateNewQuestion, Question, QuestionComponent } from "@placeos/survey-suite";


@Component({
    selector: 'mod-question-overlay',
    styles:[],
    template:`
    
        <header class="flex items-center justify-between px-2 w-full">
            <h2 (click)="verbose()" class="px-2">{{isEdit ? 'Update' : 'Add'}} Question</h2>
            <button mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="flex flex-col p-4 min-w-[40rem] bg-gray-100">
            <placeos-question #questionElement [value]="question"></placeos-question>
        </main>
        <div class="flex flex-row justify-end space-x-2 px-4 py-2" mat-dialog-actions>
            <button mat-button [disabled]="!questionElement.valid" (click)="done()">{{isEdit ? 'Update' : 'Add to bank'}}</button>
        </div>
    `
})
export class ModQuestionOverlayComponent implements OnInit{

    @ViewChild('questionElement') questionElement: QuestionComponent;

    isEdit:boolean = false;
    question:Question;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Question,
        private _dialog_ref: MatDialogRef<ModQuestionOverlayComponent>
    ){
        this.isEdit = !!this._data;
        this.question = this._data || generateNewQuestion();
        this.questionElement
    }

    ngOnInit(): void {
        
    }

    verbose(){
        console.log("is valid", this.questionElement)
    }

    public done(){
        console.log("question data", this.question)
    }
}