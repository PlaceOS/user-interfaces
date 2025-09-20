import { Pipe, PipeTransform } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { showQuestion, SurveyQuestion } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

const QUESTION_MAP: Record<string, SurveyQuestion> = {};

export function updateQuestionMap(list: SurveyQuestion[]) {
    list.forEach((question) => (QUESTION_MAP[question.id] = question));
}

@Pipe({
    name: 'question',
})
export class QuestionPipe extends AsyncHandler implements PipeTransform {
    transform(id: string): SurveyQuestion | undefined {
        if (!QUESTION_MAP[id]) {
            lastValueFrom(showQuestion(id)).then(
                (question) => (QUESTION_MAP[id] = question),
            );
        }
        return QUESTION_MAP[id];
    }
}
