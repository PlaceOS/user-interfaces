import * as ts_client from '@placeos/ts-client';
import {
    QuestionPipe,
    updateQuestionMap,
} from '../../app/surveys/question.pipe';

vi.mock('@placeos/ts-client', { spy: true });

const { SurveyQuestion } = ts_client;

describe('QuestionPipe', () => {
    let pipe: QuestionPipe;

    beforeEach(() => {
        vi.clearAllMocks();
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
        (ts_client.showQuestion as any).mockReturnValue(
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
