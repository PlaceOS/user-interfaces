import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    BaseClass,
    notifyError,
    notifySuccess,
    openConfirmModal
} from '@placeos/common';
import { Question, translateToQuestion, translateToSurveyQuestion } from '@placeos/survey-suite';
import {
    addQuestion,
    queryQuestions,
    removeQuestion,
    SurveyQuestion
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, filter, finalize, first, map, tap } from 'rxjs/operators';
import { ModQuestionOverlayComponent } from '../overlays/mod-question-overlay.component';

export interface QuestionFilter{
    search: string;
    type: string;
}

@Injectable()
export class QuestionBankService extends BaseClass {

    private readonly _questions = new BehaviorSubject<Question[]>([]);
    readonly questions$ = this._questions.asObservable();
    private get questions() {
        return this._questions.getValue();
    }
    private set questions(value: Question[]) {
        this._questions.next(value);
    }

    private readonly _withdrawnQuestions = new BehaviorSubject<Question[]>([]);
    public readonly withdrawnQuestions$ = this._withdrawnQuestions.asObservable();
    private set withdrawnQuestions(value: Question[]){ this._withdrawnQuestions.next(value)};
    private get withdrawnQuestions(){ return this._withdrawnQuestions.getValue(); }

    private readonly _loading = new BehaviorSubject<string>('');
    readonly loading$ = this._loading.asObservable();
    private get loading() {
        return this._loading.getValue();
    }
    private set loading(value: string) {
        this._loading.next(value);
    }

    private readonly _filter = new BehaviorSubject<QuestionFilter>({search:'', type:''});
    readonly filter$ = this._filter.asObservable();

    public filteredQuestions$ = combineLatest([
        this.questions$,
        this.withdrawnQuestions$,
        this.filter$
    ]).pipe(
        map(([questions, active, filter]) => {
            if(!questions) return [];
            const activeIds = active.map(e => e.id);
            const {search, type} = filter;
            return questions
                .filter(e => !activeIds.includes(e.id))
                .filter(e => type?.length ? e.type === type : true)
                .filter(e => e.title.includes(search))
        }),
        tap(q => this.filteredQuestion = q)
    )
    private filteredQuestion = [];

    constructor(
        private _dialog: MatDialog
        ) {
        super();
        this.loadQuestions();
    }

    public setFilter(filter: Partial<QuestionFilter>){
        this._filter.next({
            ...this._filter.getValue(),
            ...filter});
    }

    public getQuestion(index:number){
        return this.filteredQuestion[index];
    }

    public withdrawFilteredQuestion(index: number) {
        const q = this.filteredQuestion[index];
        this.withdrawnQuestions = [...this.withdrawnQuestions,q];
        return q;
    }

    public setWithdrawnQuestions(list: Question[]){
        this.withdrawnQuestions = [...list];
    }

    public depositQuestions(list: Question[]) {
        let withdrawn = [...this.withdrawnQuestions];
        list.forEach(q => {
            const idx = withdrawn.findIndex(e => e.id === q.id);
            if(idx > -1) withdrawn.splice(idx,1);
        })
        this.withdrawnQuestions = withdrawn;
    }

    public onDrop(event: CdkDragDrop<Question[]>) {
        const { container, previousContainer, previousIndex, currentIndex } =
            event;
        if (container !== previousContainer) {
            //Dropped from survey
            const q = previousContainer.data.splice(previousIndex, 1);
            this.depositQuestions(q);
        }
    }

    public async confirmDeleteQuestion(q: Question) {
        if (!q) return;
        const details = await openConfirmModal(
            {
                title: 'Confirm delete question',
                content: `Are you sure you want to delete this question? \n 
                            <pre>'${q.title}'</pre> \n
                            Note: This action is irreversible.`,
                icon: { class: 'material-icons', content: 'delete' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        details.close();
        this.deleteQuestion(q);
    }

    public modQuestionOverlay(question?: Question) {
        const ref = this._dialog.open(ModQuestionOverlayComponent, {
            data: question,
        });

        this.subscription(
            'mod dialog',
            ref
                .afterClosed()
                .pipe(filter((result) => !!result))
                .subscribe((result) => {
                    this.saveQuestion(result);
                })
        );
    }

    private async deleteQuestion(question: Question) {
        this.loading = 'Deleting question from bank...';
        const res = await removeQuestion(`${question.id}`)
            .pipe(
                first(),
                tap(() => this.removeQuestionFromStore(question)),
                catchError((err) =>
                    this.handleError('Error deleting question', null)
                ),
                finalize(() => (this.loading = ''))
            )
            .toPromise();
    }

    private async loadQuestions() {
        this.loading = 'Loading questions';
        const q = (await queryQuestions()
            .pipe(
                first(),
                map(
                    (res: SurveyQuestion[]) =>
                        res?.map((e) => translateToQuestion(e)) || []
                ),
                catchError((err) =>
                    this.handleError('Error loading questions', [])
                ),
                finalize(() => (this.loading = ''))
            )
            .toPromise()) as Question[];
        this.questions = q;
    }

    private async saveQuestion(question: Question) {
        this.loading = 'Saving question to bank...';
        const res: Question = (await addQuestion(translateToSurveyQuestion(question))
            .pipe(
                first(),
                map((res) => translateToQuestion(res)),
                catchError((err) =>
                    this.handleError('Error adding question', null)
                ),
                finalize(() => (this.loading = ''))
            )
            .toPromise()) as Question;
        if (res) {
            notifySuccess('Successfully added question to bank');
            this.addQuestionToStore(res);
        }
    }

    private handleError(msg: string, defaultReturn: any) {
        notifyError(msg);
        return defaultReturn;
    }

    private removeQuestionFromStore(q: Question) {
        let qs = [...this.questions];
        let idx = qs.findIndex((e) => e.id === q.id);
        if (idx > -1) qs.splice(idx, 1);
        this.questions = qs;
    }

    private addQuestionToStore(q: Question) {
        let qs = [...this.questions];
        qs.push(q);
        this.questions = qs;
    }


}
