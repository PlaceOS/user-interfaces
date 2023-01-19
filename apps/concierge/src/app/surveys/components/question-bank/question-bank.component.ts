import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { Question, QuestionTypeEnumMap, QuestionTypeOptions } from "@placeos/survey-suite";
import { shareReplay } from "rxjs/operators";
import { QuestionBankService, QuestionFilter } from "../../services/question-bank.service";

@Component({
    selector: 'question-bank',
    styles: [`
        :host{
            height: 100%;
        }
    `],
    templateUrl: './question-bank.component.html'
})
export class QuestionBankComponent {

    loading$ = this.service.loading$.pipe(shareReplay(1));
    questions$ = this.service.filteredQuestions$.pipe(shareReplay(1));
    filters$ = this.service.filter$.pipe(shareReplay(1));
    onDrop = (event: CdkDragDrop<Question[]>) => this.service.onDrop(event);
    onAddQuestion = () => this.service.modQuestionOverlay();
    onDeleteQuestion = (q:Question) => this.service.confirmDeleteQuestion(q);
    setFilter = (filter: Partial<QuestionFilter>) => this.service.setFilter(filter);
    
    public typeOptions = QuestionTypeOptions;
    public typeMap = QuestionTypeEnumMap;

    constructor(
        private service: QuestionBankService
    ){
    }

}