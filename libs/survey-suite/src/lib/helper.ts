import { Question, QuestionType } from "./types";

export function generateNewQuestion(): Question{
    return {
        title: '',
        name: '',
        tags: [],
        type: QuestionType.Single_Line_Text,
        isRequired: false,
    };
}

export function underToSpace(str: string) {
    return str.replace(/_/g, ' ');
}

export function getEnumOptions<T>(targetEnum: T) {
    return filterStringEnumItems(targetEnum).map((e) => ({
        name: underToSpace(e[0]),
        value: e[1],
    }));
}

export function filterStringEnumItems<T>(targetEnum: T) {
    return Object.entries(targetEnum).filter((e) => isNaN(Number(e[0])));
}