import { flatten, predictableRandomInt } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_BUILDINGS } from './zone.data';
import { getUnixTime } from 'date-fns';

export const SURVEY_MOCKS = registerMocks();

const MOCK_SURVEYS = new Array(20).fill(0).map(() => createMockSurvey());
const MOCK_SURVEY_QUESTIONS = new Array(20)
    .fill(0)
    .map(() => createMockSurveyQuestion());
const MOCK_SURVEY_ANSWERS = flatten(
    MOCK_SURVEYS.map((_) =>
        new Array(20).fill(0).map(() => createMockSurveyAnswer(_))
    )
);

function createMockSurvey(survey?: any) {
    const id = predictableRandomInt(999_999, 0);
    const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length, 0)];
    return {
        id,
        title: `Survey ${id}`,
        description: '',
        trigger: 'none',
        pages: [],
        zone_id: bld?.id,
        building_id: bld?.id,
        created_at: getUnixTime(Date.now()),
        updated_at: getUnixTime(Date.now()),
        ...(survey || {}),
    };
}

function createMockSurveyAnswer(survey: any) {
    const id = predictableRandomInt(999_999, 0);
    return {
        id,
        survey_id: survey.id,
        question_id: predictableRandomInt(999_999, 0),
        answer_json: predictableRandomInt(10, 0),
        type: 'rating',
        created_at: getUnixTime(Date.now()),
        updated_at: getUnixTime(Date.now()),
    };
}

function createMockSurveyQuestion() {
    const id = predictableRandomInt(999_999, 0);
    return {
        id,
        type: 'text',
        title: `Question ${id}`,
        options: {},
        required: false,
        choices: {},
        tags: [],
        deleted: false,
        created_at: getUnixTime(Date.now()),
        updated_at: getUnixTime(Date.now()),
    };
}

function registerMocks() {
    registerMockEndpoint({
        path: '/api/staff/v1/surveys',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            return request.query_params?.building_id
                ? MOCK_SURVEYS.filter(
                      (_) => _.zone_id === request.query_params.building_id
                  )
                : MOCK_SURVEYS;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/answers',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            return request.query_params?.survey_id
                ? MOCK_SURVEY_ANSWERS.filter(
                      (_) => _.survey_id === request.query_params.survey_id
                  )
                : MOCK_SURVEY_ANSWERS;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/questions',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            return request.query_params?.id
                ? MOCK_SURVEY_QUESTIONS.filter(
                      (_) => _.id === +request.query_params.id
                  )
                : MOCK_SURVEY_QUESTIONS;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            console.log('Surveys:', MOCK_SURVEYS);
            const survey = MOCK_SURVEYS.find(
                (_) => _.id === +request.route_params.id
            );
            if (!survey) throw { status: 404 };
            return survey;
        },
    });
}
