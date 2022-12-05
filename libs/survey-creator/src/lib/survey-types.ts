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

export class Survey {
    /** Unique Identifier of the object */
    public readonly id: string;
    /** Survey title entered by user */
    public readonly title: string;
    /** Survey description */
    public readonly description: string;
    /** Survey description */
    public readonly question_order: number;

    constructor(data: any = {}) {
        this.id = data.id || '';
        this.title = data.title || '';
        (this.description = data.description || ''),
            (this.question_order = data.question_order || 0);
    }
}
