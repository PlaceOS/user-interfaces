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
    choices?: any[];
}
