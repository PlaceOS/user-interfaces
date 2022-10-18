import { Injectable } from '@angular/core';
import { Question, Tag } from './survey-types';
import { SurveyCreatorService } from './survey-creator.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    selected_tags: string[] = [];
    private _question_bank: BehaviorSubject<Question[]> = new BehaviorSubject<
        Question[]
    >([]);
    question_bank$: Observable<Question[]> = this._question_bank.asObservable();

    get question_bank() {
        return this._question_bank.getValue();
    }

    set question_bank(questions: Question[]) {
        this._question_bank.next(questions);
    }

    tags: any = [
        {
            name: Tag.desk,
            icon: 'desk',
            apply: false,
        },
        { name: Tag.room, icon: 'meeting_room', apply: false },
        { name: Tag.parking, icon: 'directions_car', apply: false },
    ];

    constructor(public surveyCreatorService: SurveyCreatorService) {
        this.question_bank = this.surveyCreatorService.question_bank;
    }

    searchTags(tag: string) {
        const tag_index = this.tags.findIndex((item) => item.name == tag);
        this.tags[tag_index].apply = !this.tags[tag_index].apply;
        this.selected_tags = this.tags
            .filter((tag) => {
                return tag.apply === true;
            })
            .map((tag) => {
                return tag.name;
            });
        this.question_bank = this.surveyCreatorService.question_bank.filter(
            (question) => {
                if (this._checkQuestionTags(question, this.selected_tags))
                    return question;
            }
        );
    }

    private _checkQuestionTags(question: Question, tags): boolean {
        let count: number = 0;
        tags.forEach((tag) => {
            if (question.tags.includes(tag)) count++;
        });
        return count === this.selected_tags.length ? true : false;
    }
}
