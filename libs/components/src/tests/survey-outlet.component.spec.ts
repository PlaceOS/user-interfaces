import { signal } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { SurveyOutletComponent } from '../lib/survey-outlet.component';

const SURVEY = {
    id: 12,
    title: 'Workplace Feedback',
    pages: [
        { title: 'First Page', question_order: [1, 2] },
        { title: 'Second Page', question_order: [3] },
    ],
} as any;

const QUESTIONS = {
    1: { id: 1, type: 'rating', title: 'Rate us', required: true, max_rating: 5 },
    2: { id: 2, type: 'text', title: 'Any comments?' },
    3: {
        id: 3,
        type: 'checkbox',
        title: 'Pick options',
        choices: [{ text: 'A' }, { text: 'B' }],
    },
};

describe('SurveyOutletComponent', () => {
    let spectator: Spectator<SurveyOutletComponent>;
    const createComponent = createComponentFactory({
        component: SurveyOutletComponent,
        providers: [
            provideNoopAnimations(),
            {
                provide: ActivatedRoute,
                useValue: { paramMap: of(convertToParamMap({})) },
            },
            {
                provide: SettingsService,
                useValue: {
                    theme_signal: signal('light'),
                    signal: vi.fn(() => signal(null)),
                },
            },
        ],
    });

    async function settle() {
        for (let i = 0; i < 10; i++) await Promise.resolve();
        spectator.detectChanges();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.showSurvey).mockResolvedValue(SURVEY);
        vi.mocked(ts_client.showQuestion).mockImplementation(
            (id) => Promise.resolve({ ...QUESTIONS[+id] }) as any,
        );
        vi.mocked(ts_client.addAnswer).mockResolvedValue([] as any);
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should load the survey from the route id parameter', async () => {
        spectator = createComponent({
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of(convertToParamMap({ id: '12' })),
                    },
                },
            ],
        });
        await settle();
        expect(ts_client.showSurvey).toHaveBeenCalledWith('12');
        expect('header h2').toContainText('Workplace Feedback');
        expect('main[page] h3').toContainText('First Page');
    });

    it('should load questions and build the form when a survey is set', async () => {
        spectator = createComponent();
        spectator.setInput({ survey: SURVEY });
        await settle();
        expect(ts_client.showQuestion).toHaveBeenCalledTimes(3);
        const form = spectator.component.form();
        expect(Object.keys(form.controls)).toEqual(['1', '2', '3']);
        // Rating questions generate their option list from max_rating
        expect(spectator.component.questions[1].options).toEqual([
            1, 2, 3, 4, 5,
        ]);
        expect(spectator.queryAll('[btn-grp] button')).toHaveLength(5);
    });

    it('should allow moving between survey pages', async () => {
        spectator = createComponent();
        spectator.setInput({ survey: SURVEY });
        await settle();
        expect('main[page] h3').toContainText('First Page');
        spectator.component.nextPage();
        spectator.detectChanges();
        expect(spectator.component.active_page()).toBe(1);
        expect('main[page] h3').toContainText('Second Page');
        spectator.component.previousPage();
        spectator.detectChanges();
        expect('main[page] h3').toContainText('First Page');
    });

    it('should update the form when answers are selected', async () => {
        spectator = createComponent();
        spectator.setInput({ survey: SURVEY });
        await settle();
        // Rating buttons patch the rating question value
        spectator.click(spectator.queryAll('[btn-grp] button')[3]);
        expect(spectator.component.form().value['1']).toBe(4);
        // Checkbox options toggle in and out of the answer list
        spectator.component.toggleOption('3', 'A', true);
        expect(spectator.component.form().value['3']).toEqual(['A']);
        spectator.component.toggleOption('3', 'B', true);
        expect(spectator.component.form().value['3']).toEqual(['A', 'B']);
        spectator.component.toggleOption('3', 'A', false);
        expect(spectator.component.form().value['3']).toEqual(['B']);
    });

    it('should submit answers for the survey questions', async () => {
        spectator = createComponent();
        spectator.setInput({ survey: SURVEY });
        await settle();
        spectator.component.setRating('1', 5);
        await spectator.component.submitSurvey();
        expect(ts_client.addAnswer).toHaveBeenCalledWith([
            {
                survey_id: 12,
                question_id: 1,
                type: 'rating',
                answer_json: 5,
            },
            { survey_id: 12, question_id: 2, type: 'text', answer_json: '' },
            {
                survey_id: 12,
                question_id: 3,
                type: 'checkbox',
                answer_json: [],
            },
        ]);
        expect(spectator.component.success()).toBe(true);
        spectator.detectChanges();
        expect('main[loading]').toExist();
    });

    it('should not submit while required questions are unanswered', async () => {
        spectator = createComponent();
        spectator.setInput({ survey: SURVEY });
        await settle();
        await spectator.component.submitSurvey();
        expect(ts_client.addAnswer).not.toHaveBeenCalled();
        expect(spectator.component.success()).toBe(false);
    });

    it('should emit not_found when the survey fails to load', async () => {
        vi.mocked(ts_client.showSurvey).mockRejectedValue(
            new Error('404'),
        );
        spectator = createComponent();
        const emitted = vi.fn();
        spectator.component.not_found.subscribe(emitted);
        spectator.setInput({ survey_id: 'missing' });
        await settle();
        expect(emitted).toHaveBeenCalledWith(true);
    });
});
