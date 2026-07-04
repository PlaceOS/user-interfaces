import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SurveyResponsesComponent } from '../../app/surveys/survey-responses.component';
import { NewSurveyService } from '../../app/surveys/new-survey.service';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        queryAnswers: jest.fn(() => Promise.resolve([])),
    };
});

const { Survey } = jest.requireActual('@placeos/ts-client');

describe('SurveyResponsesComponent', () => {
    let spectator: Spectator<SurveyResponsesComponent>;
    const setSurvey = jest.fn();
    const survey = signal<any>(null);
    const survey_questions = signal<any[]>([]);
    let param_map: any;

    const createComponent = createComponentFactory({
        component: SurveyResponsesComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(NewSurveyService, {
                survey,
                survey_questions,
                setSurvey,
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => 1),
            } as any),
            MockProvider(ActivatedRoute, {
                get paramMap() {
                    return param_map;
                },
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        survey.set(null);
        survey_questions.set([]);
        param_map = of(convertToParamMap({ id: 'survey-1' }));
        spectator = createComponent();
    });

    it('should set the active survey from the route params', () => {
        spectator.component.ngOnInit();
        expect(setSurvey).toHaveBeenCalledWith('survey-1');
    });

    it('should group responses by survey page in question order', () => {
        survey.set(
            new Survey({
                id: 1,
                pages: [{ title: 'Page One', question_order: [1, 2] }],
            } as any),
        );
        survey_questions.set([
            { id: 1, title: 'Q1' },
            { id: 2, title: 'Q2' },
        ]);

        const pages = spectator.component.paged_responses();
        expect(pages).toHaveLength(1);
        expect(pages[0].title).toBe('Page One');
        expect(pages[0].responses.map((r: any) => r.question.id)).toEqual([
            1, 2,
        ]);
    });

    it('should return no pages when there is no active survey', () => {
        survey.set(null);
        expect(spectator.component.paged_responses()).toEqual([]);
    });

    it('should merge start and end dates into the options', () => {
        spectator.component.setStartDate(1000);
        spectator.component.setEndDate(2000);
        expect(spectator.component.options()).toEqual({
            start: 1000,
            end: 2000,
        });
    });

    it('should expose the configured week start', () => {
        expect(spectator.component.week_start).toBe(1);
    });
});
