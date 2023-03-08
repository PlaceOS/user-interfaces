import { Question, QuestionType, UISurveyObj, UISurveyPage } from "./types";
import { Survey, SurveyQuestion } from '@placeos/ts-client';

export function generateNewQuestion(): Question{
    return {
        title: '',
        name: '',
        tags: [],
        type: QuestionType.Single_Line_Text,
        isRequired: false,
        deleted:false
    };
}

export function generateNewSurvey(){
    return {
        title:'New Survey Title',
        description: '',
        pages:[
            {
                title:'',
                elements:[]
            }
        ]
    } as UISurveyObj;
}

export function translateToSurveyPage(pages: UISurveyPage[]){
    if(!pages) return [];
    let surveyPages = [];
    pages.forEach(p => {
        const { title, description } = p;
        const question_order = (p.elements || []).map(e => e.id);
        surveyPages.push({title,description,question_order})
    })
    return surveyPages;
}

export function translateToUISurveyObj(survey: Survey, questions: Question[]){
    const {id, title, description, trigger, zone_id, building_id, pages} = survey;
    let questSet = new Map();
    questions.forEach(e => questSet.set(e.id, e));

    let transPages:UISurveyPage[] = [];
    pages.forEach(p => {
        const {title, description, question_order} = p;
        let elements = [];
        question_order.forEach(q => elements.push(questSet.get(q)));
        transPages.push({title,description, elements});
    })

    return { id, title, description, trigger, zone_id, building_id, pages: transPages} as UISurveyObj

}

export function translateToSurveyQuestion(q: Question) {
    const { id, title, description, type, isRequired, options, tags, rateMax, choices } = q;
    return {
        id,
        title,
        description,
        type,
        options,
        choices,
        tags,
        required: isRequired,
        max_rating: rateMax
    } as Partial<SurveyQuestion>;
}

export function translateToQuestion(q: SurveyQuestion) {
    return {
        id: q.id,
        title: q.title,
        description: q.description,
        name: `${q.id}`,
        type: q.type,
        rateMax: q.max_rating,
        choices: q.choices || [],
        isRequired: q.required || false,
        tags: q.tags || [],
        deleted: q.deleted || false
    } as Question;
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

export function getEnumMap<T>(targetEnum: T) {
    let emap = {};
    filterStringEnumItems(targetEnum).forEach(
        (e) => (emap[e[1]] = underToSpace(e[0]))
    );
    return emap;
}

export function filterStringEnumItems<T>(targetEnum: T) {
    return Object.entries(targetEnum).filter((e) => isNaN(Number(e[0])));
}

export function makeHTMLId(length: number){
    let result           = '';
    const characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}