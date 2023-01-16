import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SurveyCreatorService } from './survey-creator.service';
import { Question, QuestionType } from '@placeos/survey-suite';

@Injectable({
    providedIn: 'root',
})
export class QuestionCreatorService {
    //Store of selected question type
    private _selected_tag: BehaviorSubject<string> =
        new BehaviorSubject<string>(QuestionType.Rating);

    get selected_tag() {
        return this._selected_tag.getValue();
    }

    set selected_tag(type) {
        this._selected_tag.next(type);
    }

    placeholder_choice: string = 'Type a choice here...';

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    public addOption(question: Question) {
        const found_question = this._findQuestion(question);
        if (found_question) {
            found_question.choices.push({text: this.placeholder_choice});
            return found_question;
        } else {
            question.choices.push({text: this.placeholder_choice});
            return question;
        }
    }

    public deleteOption(question: Question) {
        let found_question = this._findQuestion(question);
        if (found_question?.choices?.length > 1) {
            found_question.choices.pop();
            return found_question;
        } else {
            question.choices.pop();
            return question;
        }
    }

    private _findQuestion(question) {
        return this.surveyCreatorService.question_bank.find(
            (item) => item.title === question.title
        );
    }
}
