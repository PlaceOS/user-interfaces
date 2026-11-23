import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { NewSurveyService } from '../../app/surveys/new-survey.service';
import { SurveyResponsesComponent } from '../../app/surveys/survey-responses.component';

vi.mock('@placeos/ts-client/staff', { spy: true });

import { TestBed } from '@angular/core/testing';
import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import {
    Survey,
    SurveyAnswer,
    surveys_answers,
} from '@placeos/ts-client/staff';
import { captureDownloads } from '../reports/download-capture.helper';

describe('SurveyResponsesComponent', () => {
    let spectator: Spectator<SurveyResponsesComponent>;
    const setSurvey = vi.fn();
    const survey = signal<unknown>(null);
    const survey_questions = signal<unknown[]>([]);
    let param_map: any;

    const createComponent = createComponentFactory({
        component: SurveyResponsesComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(NewSurveyService, {
                survey,
                survey_questions,
                questions: survey_questions,
                questions_ready: signal(true),
                setSurvey,
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => 1),
            } as any),
            MockProvider(ActivatedRoute, {
                get paramMap() {
                    return param_map;
                },
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
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
            mockData(Survey, {
                id: 1,
                pages: [{ title: 'Page One', question_order: [1, 2] }],
            }),
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

    it('should download the answers with their questions as a CSV file', async () => {
        const downloads = captureDownloads();
        try {
            vi.mocked(surveys_answers.query).mockResolvedValueOnce(
                mockReply([
                    mockData(SurveyAnswer, {
                        id: 7,
                        question_id: 1,
                        type: 'text',
                        answer_json: 'Great, thanks',
                    }),
                    mockData(SurveyAnswer, {
                        id: 8,
                        question_id: 1,
                        type: '+cmd',
                        answer_json: '=HYPERLINK("x")',
                    }),
                ]),
            );
            survey.set(mockData(Survey, { id: 3, pages: [] }));
            survey_questions.set([{ id: 1, title: 'How was it?' }]);
            await vi.waitFor(() => {
                TestBed.tick();
                expect(spectator.component.answers()).toHaveLength(2);
            });

            spectator.component.downloadResponses();

            expect(downloads.filename).toBe('survey-3-responses.csv');
            const [header, ...rows] = (await downloads.text())
                .replace('\uFEFF', '')
                .split('\r\n');
            expect(header).toBe('question,question_id,type,answer');
            // A formula is kept as text
            expect(rows).toEqual([
                'How was it?,1,text,"Great, thanks"',
                `How was it?,1,'+cmd,"'=HYPERLINK(""x"")"`,
            ]);
        } finally {
            downloads.restore();
        }
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
