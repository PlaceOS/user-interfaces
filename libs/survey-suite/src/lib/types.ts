import { getEnumMap, getEnumOptions } from './helper';

export enum TriggerEnum {
    None = 'NONE',
    Reserved = 'RESERVED',
    Checked_In = 'CHECKEDIN',
    Checked_Out = 'CHECKEDOUT',
    // No_Show = 'NOSHOW',
    Rejected = 'REJECTED',
    Cancelled = 'CANCELLED',
    // Ended = 'ENDED'
    Visitor = 'VISITOR',
}

export enum QuestionType {
    Single_Line_Text = 'text',
    Comment_Box = 'comment',
    Radio_Group = 'radiogroup',
    Drop_Down = 'dropdown',
    Check_Box = 'checkbox',
    Rating = 'rating',
}

/** Enum Options key-value pair */
export const QuestionTypeOptions = getEnumOptions(QuestionType);
export const TriggerOptions = getEnumOptions(TriggerEnum);

/** Enum Map */
export const QuestionTypeEnumMap = getEnumMap(QuestionType);
export const TriggerEnumMap = getEnumMap(TriggerEnum);

export interface UISurveyStats {
    answer_count: number;
}
export interface UISurveyResponse {
    question: Question;
    answers: UISurveyAnswer[];
}
export interface UISurveyAnswer {
    id: number;
    question_id: number;
    survey_id: number;
    type: string;
    answer_json: any;
}

export interface UISurveyObj {
    id: number;
    title: string;
    description?: string;
    trigger: TriggerEnum;
    zone_id: string;
    building_id: string;
    pages: UISurveyPage[];
}

export interface UISurveyPage {
    title: string;
    description?: string;
    elements: Question[];
}

export interface Question {
    id?: number;
    selected?: boolean;
    type: QuestionType;
    name?: string;
    title: string;
    description?: string;
    choices?: any[];
    tags?: string[];
    isRequired?: boolean;
    options?: any;
    rateMax?: number;
    deleted: boolean;
}

export interface Choice {
    text: string;
    value?: string;
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
    /** Type of event that triggers survey being sent */
    public readonly type: string;
    /** Building that survey is associated with */
    public readonly building_name: string;
    /** Level that survey is associated with */
    public readonly level?: string;
    /** Date of survey creation */
    public readonly date_created: string;
    /** Link to survey for user completion */
    public readonly link: string;
    /** Survey options in Survey List component */
    public readonly options: string[];

    constructor(data: any = {}) {
        this.id = data.id || '';
        this.title = data.title || '';
        this.description = data.description || '';
        this.question_order = data.question_order || 0;
        this.type = data.survey_type || '';
        this.building_name = data.name || '';
        this.date_created = '';
        this.link = data.link || '';
        this.options = ['open'];
    }
}
