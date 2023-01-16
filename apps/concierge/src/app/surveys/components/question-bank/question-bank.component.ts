import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { Question } from "@placeos/survey-suite";
import { shareReplay } from "rxjs/operators";
import { QuestionBankService } from "./question-bank.service";

@Component({
    selector: 'question-bank',
    styles: [`
        :host{
            height: 100%;
        }
    `],
    templateUrl: './question-bank.component.html',
})
export class QuestionBankComponent {

    loading$ = this.service.loading$.pipe(shareReplay(1));
    questions$ = this.service.questions$.pipe(shareReplay(1));
    onDrop = (event: CdkDragDrop<Question[]>) => this.service.onDrop(event);
    onAddQuestion = () => this.service.modQuestionOverlay();
    onDeleteQuestion = (q:Question) => this.service.confirmDeleteQuestion(q);

    constructor(
        private service: QuestionBankService
    ){}

}