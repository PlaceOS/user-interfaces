import { Pipe, PipeTransform } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { showQuestion, SurveyQuestion } from '@placeos/ts-client';

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
            this.subscription(
                id,
                showQuestion(id).subscribe(
                    (question) => (QUESTION_MAP[id] = question),
                ),
            );
        }
        return QUESTION_MAP[id];
    }
}
