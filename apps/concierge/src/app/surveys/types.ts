import type { JsonValue } from '@placeos/ts-client';
import type { Survey, SurveyQuestion } from '@placeos/ts-client/staff';

/** Upper case names of the survey triggers. The API takes them in lower case. */
enum TriggerEnum {
    None = 'NONE',
    Reserved = 'RESERVED',
    Checked_In = 'CHECKEDIN',
    Checked_Out = 'CHECKEDOUT',
    // No_Show = 'NOSHOW',
    Rejected = 'REJECTED',
    Cancelled = 'CANCELLED',
    // Ended = 'ENDED'
    Visitor = 'VISITOR_CHECKEDIN',
}

type SurveyTrigger = NonNullable<Survey['trigger']>;

const SURVEY_TRIGGERS: readonly SurveyTrigger[] = [
    'cancelled',
    'checkedin',
    'checkedout',
    'ended',
    'none',
    'noshow',
    'rejected',
    'reserved',
    'visitor_checkedin',
    'visitor_checkedout',
];

/** The API value of a trigger option, such as `RESERVED` → `reserved`. Unknown values give `none`. */
export function surveyTrigger(value: string): SurveyTrigger {
    const name = `${value || ''}`.toLowerCase();
    return SURVEY_TRIGGERS.find((trigger) => trigger === name) ?? 'none';
}

/** One option of a selection question. Stored fields other than `text` are kept. */
export type QuestionChoice = { text: string; [key: string]: JsonValue };

/** A survey question that the question form edits in place. */
export interface QuestionDraft {
    id: number;
    title: string;
    description: string;
    type: string;
    required: boolean;
    max_rating: number;
    choices: QuestionChoice[];
    tags: string[];
}

/**
 * A question for the question form, with the defaults of an empty question.
 * The API can send `{}` or `null` for `choices`, so this keeps only text
 * options. Each option is a copy with all of its fields.
 */
export function questionDraft(
    data: Partial<SurveyQuestion | QuestionDraft> = {},
): QuestionDraft {
    const choices = Array.isArray(data.choices) ? data.choices : [];
    return {
        id: data.id || 0,
        title: data.title || '',
        description: data.description || '',
        type: data.type || '',
        required: data.required || false,
        max_rating: data.max_rating || 0,
        choices: choices.flatMap((choice) =>
            typeof choice === 'object' &&
            choice !== null &&
            !Array.isArray(choice) &&
            'text' in choice
                ? [{ ...choice, text: `${choice.text ?? ''}` }]
                : [],
        ),
        tags: [...(data.tags || [])],
    };
}

export enum QuestionType {
    Single_Line_Text = 'text',
    Comment_Box = 'comment',
    Radio_Group = 'radiogroup',
    Drop_Down = 'dropdown',
    Check_Box = 'checkbox',
    Rating = 'rating',
    Empty = '0[EMPTY]',
}

export const TriggerOptions = getEnumOptions(TriggerEnum);
export const QuestionTypeOptions = getEnumOptions(QuestionType);
export const QuestionTypeMap = getEnumMap(QuestionType);

function getEnumOptions<T>(targetEnum: T) {
    return Object.entries(targetEnum)
        .filter((e) => isNaN(Number(e[0])))
        .map((e) => ({
            name: e[0].replace(/_/g, ' '),
            id: e[1],
        }));
}

function getEnumMap<T>(targetEnum: T) {
    const enum_map = {};
    Object.entries(targetEnum)
        .filter((e) => isNaN(Number(e[0])))
        .forEach((e) => (enum_map[e[1]] = e[0].replace(/_/g, ' ')));
    return enum_map;
}
