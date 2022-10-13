import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SurveyCreatorService } from './survey-creator.service';
import { Question } from './survey-types';

@Injectable({
    providedIn: 'root',
})
export class QuestionCreatorService {
    placeholder_choice: string = 'Type a choice here...';

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    public addOption(question: Question) {
        const found_question = this._findQuestion(question);
        if (found_question) {
            found_question.choices.push(this.placeholder_choice);
        } else {
            question.choices.push(this.placeholder_choice);
            return question;
        }
    }

    public deleteOption(question: Question) {
        let found_question = this._findQuestion(question);
        if (found_question?.choices?.length > 1) {
            found_question.choices.pop();
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
