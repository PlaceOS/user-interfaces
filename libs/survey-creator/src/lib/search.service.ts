import { Injectable } from '@angular/core';
import { Question, Tag } from './survey-types';
import { SurveyCreatorService } from './survey-creator.service';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    question_bank: Question[] = this.surveyCreatorService.question_bank;
    tags: any = [
        {
            name: Tag.desk,
            icon: 'desk',
            apply: false,
        },
        { name: Tag.room, icon: 'meeting_room', apply: false },
        { name: Tag.parking, icon: 'directions_car', apply: false },
    ];

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    searchTags(tag: string) {
        const found_tag = this.tags.find((item) => item.name == tag);
        found_tag.apply = !found_tag.apply;
        console.log(this.tags, 'tags to search for');
    }
}
