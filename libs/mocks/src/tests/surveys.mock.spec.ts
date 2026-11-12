import {
    registerMockEndpoint,
    SurveyAnswer,
    SurveyQuestion,
} from '@placeos/ts-client';

import {
    MOCK_ANSWERS,
    MOCK_QUESTIONS,
    registerMockSurveys,
} from '../lib/api/surveys.mock';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

const API = '/api/staff/v1/surveys';

describe('registerMockSurveys', () => {
    const questionIds = (query_params: Record<string, string> = {}) =>
        endpoint<SurveyQuestion[]>(
            'GET',
            `${API}/questions`,
        )({
            query_params,
        }).map((q) => q.id);

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockSurveys();
    });

    // Write requests save the surveys to the mock session
    afterEach(() => localStorage.clear());

    it('should list the questions on the pages of a survey', () => {
        expect(questionIds({ survey_id: '1' })).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should hide a deleted question, but keep it for old answers', () => {
        const { id } = endpoint<SurveyQuestion>(
            'POST',
            `${API}/questions`,
        )({
            body: { title: 'Temporary', type: 'text', tags: [] },
        });
        expect(questionIds()).toContain(id);

        endpoint(
            'DELETE',
            `${API}/questions/:id`,
        )({
            route_params: { id: `${id}` },
        });

        expect(questionIds()).not.toContain(id);
        expect(() =>
            endpoint(
                'GET',
                `${API}/questions/:id`,
            )({
                route_params: { id: `${id}` },
            }),
        ).toThrow();
        expect(MOCK_QUESTIONS.find((q) => q.id === id)).toMatchObject({
            deleted: true,
        });
    });

    it('should give submitted answers new IDs, and return one or a list', () => {
        const submit = (body: unknown) =>
            endpoint<SurveyAnswer | SurveyAnswer[]>(
                'POST',
                `${API}/answers`,
            )({
                body,
            });
        const answer = { survey_id: 1, question_id: 1, type: 'text' };
        const last = Math.max(...MOCK_ANSWERS.map((a) => a.id));

        expect(submit(answer)).toMatchObject({ ...answer, id: last + 1 });
        expect(submit([answer, answer])).toEqual([
            expect.objectContaining({ id: last + 2 }),
            expect.objectContaining({ id: last + 3 }),
        ]);
    });

    it('should raise a 404 for an unknown survey', () => {
        expect(() =>
            endpoint('GET', `${API}/:id`)({ route_params: { id: '999' } }),
        ).toThrow(expect.objectContaining({ status: 404 }));
    });
});
