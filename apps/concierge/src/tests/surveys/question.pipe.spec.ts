import * as ts_client from '@placeos/ts-client';
import {
    QuestionPipe,
    updateQuestionMap,
} from '../../app/surveys/question.pipe';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        showQuestion: jest.fn(),
    };
});

const { SurveyQuestion } = jest.requireActual('@placeos/ts-client');

describe('QuestionPipe', () => {
    let pipe: QuestionPipe;

    beforeEach(() => {
        jest.clearAllMocks();
        pipe = new QuestionPipe();
    });

    it('should return cached questions without querying the API', () => {
        const question = new SurveyQuestion({ id: 100, title: 'Cached' });
        updateQuestionMap([question]);

        const result = pipe.transform('100');

        expect(result).toBe(question);
        expect(ts_client.showQuestion).not.toHaveBeenCalled();
    });

    it('should query and cache unknown questions', async () => {
        const question = new SurveyQuestion({ id: 200, title: 'Loaded' });
        let resolve_question: (q: any) => void;
        (ts_client.showQuestion as jest.Mock).mockReturnValue(
            new Promise((resolve) => (resolve_question = resolve)),
        );

        expect(pipe.transform('200')).toBeUndefined();
        expect(ts_client.showQuestion).toHaveBeenCalledWith('200');

        resolve_question(question);
        await Promise.resolve();

        expect(pipe.transform('200')).toBe(question);
        expect(ts_client.showQuestion).toHaveBeenCalledTimes(1);
    });
});
