export enum QuestionType {
    text = 'Text',
    checkbox = 'Checkbox',
    dropdown = 'Dropdown',
    rating = 'Rating',
    comment = 'Comment',
}
export interface Question {
    selected?: boolean;
    type: QuestionType;
    name: string;
    title: string;
    choices?: string[];
    rateValues?: number[];
    tags: string[];
}

export enum Tag {
    desk = 'Desk',
    room = 'Room',
    parking = 'Parking',
}
