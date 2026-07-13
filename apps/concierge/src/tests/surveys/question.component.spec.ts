import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { QuestionComponent } from '../../app/surveys/question.component';
import { QuestionType } from '../../app/surveys/types';

import { SurveyQuestion } from '@placeos/ts-client';

describe('QuestionComponent', () => {
    let spectator: Spectator<QuestionComponent>;
    const createComponent = createComponentFactory({
        component: QuestionComponent,
        detectChanges: false,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should mark a titled single-line question as valid', () => {
        spectator.component.question.set(
            new SurveyQuestion({
                title: 'Name?',
                type: QuestionType.Single_Line_Text,
            }),
        );
        expect(spectator.component.valid()).toBe(true);
    });

    it('should treat an untitled question as invalid', () => {
        spectator.component.question.set(
            new SurveyQuestion({
                title: '',
                type: QuestionType.Single_Line_Text,
            }),
        );
        expect(spectator.component.valid()).toBe(false);
    });

    it('should require all choices to have text for choice questions', () => {
        spectator.component.question.set(
            new SurveyQuestion({
                title: 'Pick',
                type: QuestionType.Radio_Group,
                choices: [{ text: 'A' }, { text: '' }],
            }),
        );
        expect(spectator.component.valid()).toBe(false);

        spectator.component.question.set(
            new SurveyQuestion({
                title: 'Pick',
                type: QuestionType.Radio_Group,
                choices: [{ text: 'A' }, { text: 'B' }],
            }),
        );
        expect(spectator.component.valid()).toBe(true);
    });

    it('should require a minimum rating of three for rating questions', () => {
        spectator.component.question.set(
            new SurveyQuestion({
                title: 'Rate',
                type: QuestionType.Rating,
                max_rating: 2,
            }),
        );
        expect(spectator.component.valid()).toBe(false);
    });

    it('should add and remove options via the option helpers', () => {
        spectator.component.question.set(
            new SurveyQuestion({
                title: 'Pick',
                type: QuestionType.Check_Box,
                choices: [{ text: 'A' }],
            }),
        );

        spectator.component.addOption();
        expect(spectator.component.question().choices).toEqual([
            { text: 'A' },
            { text: '' },
        ]);

        spectator.component.deleteOption(0);
        expect(spectator.component.question().choices).toEqual([{ text: '' }]);
    });

    it('should derive rating options and type flags', () => {
        spectator.component.question.set(
            new SurveyQuestion({
                title: 'Rate',
                type: QuestionType.Drop_Down,
                max_rating: 4,
            }),
        );

        expect(spectator.component.rating_options()).toEqual([1, 2, 3, 4]);
        expect(spectator.component.is_dropdown()).toBe(true);
        expect(spectator.component.is_checkbox()).toBe(false);
        expect(spectator.component.generateArray(3)).toEqual([1, 2, 3]);
    });

    it('should default choices and max rating on init', () => {
        const question = new SurveyQuestion({ title: 'Q', type: 'text' });
        delete (question as any).choices;
        (question as any).max_rating = 0;
        spectator.component.question.set(question);

        spectator.component.ngOnInit();

        expect(spectator.component.question().choices).toEqual([]);
        expect(spectator.component.question().max_rating).toBe(3);
    });
});
