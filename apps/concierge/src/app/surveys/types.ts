enum TriggerEnum {
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
