import { Data } from 'chartist';
import { QuestionType, UISurveyAnswer } from '../types';

export interface SelectionStats {
    name: string;
    count: number;
    percentage: number;
}

export function parseSelectionAnswers(
    data: UISurveyAnswer[],
    choices?: string[]
): SelectionStats[] {
    if (!data?.length) return [];
    const type = data[0].type;
    const total = data.length;
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
    const stats = Object.keys(map)
        .map((key) => ({
            name: key,
            count: map[key],
            percentage: Math.round((map[key] / total) * 1000) / 10,
        }))
        .sort((a, b) =>
            a.percentage < b.percentage
                ? 1
                : a.percentage > b.percentage
                ? -1
                : 0
        );
    return stats;
}

export function calcSelectionAnswers() {}

export function parseRatingAnswers(data: UISurveyAnswer[], rateMax: number) {
    const list = data.reduce(
        (acc, curr) => (acc.push(curr.answer_json), acc),
        []
    );
    let arr = Array.from({ length: rateMax }, (_, i) => 0);
    list.forEach((e) => {
        arr[e-1] += 1;
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
