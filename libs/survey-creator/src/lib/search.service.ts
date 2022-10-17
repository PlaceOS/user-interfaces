import { Injectable } from '@angular/core';
import { Question, Tag } from './survey-types';
import { SurveyCreatorService } from './survey-creator.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
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

    // question_bank: Question[] = this.surveyCreatorService.question_bank;
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

        let selected_tags: string[] = [];
        this.tags.map((item) => {
            if (item.apply) {
                selected_tags.push(item.name);
            }
        });
        this.question_bank = this.surveyCreatorService.question_bank.filter(
            (question) => {
                return question.tags
                    .sort()
                    .toString()
                    .includes(selected_tags.sort().toString());
            }
        );
        console.log(this.question_bank, 'filtered questions');
    }
}
