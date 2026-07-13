import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { NewSurveyWidgetComponent } from '../../app/surveys/new-survey-widget.component';

describe('NewSurveyWidgetComponent', () => {
    let spectator: Spectator<NewSurveyWidgetComponent>;
    const createComponent = createComponentFactory({
        component: NewSurveyWidgetComponent,
        detectChanges: false,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should classify comment/text questions as table widgets', () => {
        spectator.setInput('response', {
            question: { type: 'comment' } as any,
            answers: [],
        });
        expect(spectator.component.is_table()).toBe(true);
        expect(spectator.component.is_selection()).toBe(false);
    });

    it('should classify choice questions as selection widgets with percentages', () => {
        spectator.setInput('response', {
            question: {
                type: 'radiogroup',
                choices: [{ text: 'Yes' }, { text: 'No' }],
            } as any,
            answers: [
                { id: 1, answer_json: 'Yes' },
                { id: 2, answer_json: 'Yes' },
                { id: 3, answer_json: 'No' },
            ] as any,
        });

        expect(spectator.component.is_selection()).toBe(true);
        const items = spectator.component.selection_items();
        expect(items.map((_) => _.name)).toEqual(['Yes', 'No']);
        expect(Math.round(items[0].percentage)).toBe(67);
        expect(Math.round(items[1].percentage)).toBe(33);
    });

    it('should count array answers as matching a choice', () => {
        spectator.setInput('response', {
            question: {
                type: 'checkbox',
                choices: [{ text: 'A' }, { text: 'B' }],
            } as any,
            answers: [{ id: 1, answer_json: ['A', 'B'] }] as any,
        });

        const items = spectator.component.selection_items();
        expect(items[0].percentage).toBe(100);
        expect(items[1].percentage).toBe(100);
    });

    it('should compute the average rating and progress for rating questions', () => {
        spectator.setInput('response', {
            question: { type: 'rating', max_rating: 10 } as any,
            answers: [
                { id: 1, answer_json: 5 },
                { id: 2, answer_json: 10 },
            ] as any,
        });

        expect(spectator.component.average_rating()).toBe(7.5);
        expect(spectator.component.progress()).toBeCloseTo(0.75);
        expect(spectator.component.max_rate()).toBe(10);
    });
});
