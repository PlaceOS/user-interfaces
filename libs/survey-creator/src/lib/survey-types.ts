export enum QuestionType {
    text = 'Text',
    checkbox = 'Checkbox',
    dropdown = 'Dropdown',
    rating = 'Rating',
    comment = 'Comment',
}
export interface Question {
    type: QuestionType;
    name: string;
    title: string;
    choices?: string[];
    rateValues?: number[];
    selected?: boolean;
}
