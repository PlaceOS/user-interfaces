import { Data } from 'chartist';
import { QuestionType, UISurveyAnswer } from '../types';

export function parseSelectionAnswers(
    data: UISurveyAnswer[],
    choices?: string[]
): Data<any> {
    if (!data?.length) return { labels: [], series: [] };
    const type = data[0].type;
    let map = {};
    let list =
        type === QuestionType.Check_Box
            ? data.reduce((acc, curr) => acc.concat(curr.answer_json), [])
            : data.reduce((acc, curr) => (acc.push(curr.answer_json), acc), []);

    list.forEach((e) => {
        if (!map[e]) {
            map[e] = 1;
            return;
        }
        map[e] += 1;
    });
    if (choices?.length) {
        choices.forEach((e) => {
            if (!map[e]) map[e] = 0;
        });
    }
    return {
        labels: Object.keys(map),
        series: Object.values(map),
    };
}

export function parseRatingAnswers(data: UISurveyAnswer[], rateMax: number) {
    const list = data.reduce(
        (acc, curr) => (acc.push(curr.answer_json), acc),
        []
    );
    let arr = Array.from({ length: rateMax }, (_, i) => 0);
    list.forEach((e) => {
        arr[e] += 1;
    });
    const total = list.length;
    arr.forEach((e, i) => (arr[i] = Math.round((e / total) * 1000) / 10));
    return arr;
}

export function parseRatingStats(data: UISurveyAnswer[], rateMax: number) {
    const list = data.reduce(
        (acc, curr) => (acc.push(curr.answer_json), acc),
        []
    );
    const sum = list.reduce((acc, curr) => acc + curr);
    const average = Math.round((sum / list.length) * 10) / 10;
    const percentage = Math.round((average / rateMax) * 1000) / 10;
    return { average, percentage, total: list.length };
}
