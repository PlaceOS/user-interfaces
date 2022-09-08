export enum QuestionType {
    text = 'text',
    checkbox = 'checkbox',
    dropdown = 'dropdown',
    rating = 'rating',
}
export interface Question {
    type: QuestionType;
    name: string;
    title: string;
    choices?: Answer[];
}

export interface Answer {
    type: QuestionType;
    name: string;
    value: any;
}
