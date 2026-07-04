import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import * as components_mod from '@placeos/components';
import * as common_mod from '@placeos/common';
import { SurveyService } from '../../app/surveys/survey.service';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        querySurveys: jest.fn(() => Promise.resolve([])),
        queryAnswers: jest.fn(() => Promise.resolve([])),
        queryQuestions: jest.fn(() => Promise.resolve([])),
        showSurvey: jest.fn(),
        removeSurvey: jest.fn(() => Promise.resolve()),
        removeQuestion: jest.fn(() => Promise.resolve()),
    };
});

jest.mock('@placeos/components', () => {
    const actual = jest.requireActual('@placeos/components');
    return {
        ...actual,
        openConfirmModal: jest.fn(),
    };
});

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifySuccess: jest.fn(),
    };
});

const { Survey, SurveyQuestion } = jest.requireActual('@placeos/ts-client');

describe('SurveyService', () => {
    let spectator: SpectatorService<SurveyService>;
    let building_list: ReturnType<typeof signal<any[] | null>>;

    const createService = createServiceFactory({
        service: SurveyService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(OrganisationService, {
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
                building_list: null as any,
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        building_list = signal<any[] | null>(null);
        const org: any = {
            waitUntilInitialised: jest.fn(() => Promise.resolve()),
            building_list,
        };
        spectator = createService({
            providers: [MockProvider(OrganisationService, org)],
        });
    });

    it('should filter surveys and answers by the active building', () => {
        spectator.service.survey_list.set([
            new Survey({ id: 1, building_id: 'bld-1' }),
            new Survey({ id: 2, building_id: 'bld-2' }),
        ]);
        spectator.service.answer_list.set([
            { id: 10, survey_id: 1 } as any,
            { id: 11, survey_id: 2 } as any,
        ]);
        spectator.service.setBuilding('bld-1');

        expect(spectator.service.building_surveys().map((s) => s.id)).toEqual([
            1,
        ]);
        expect(spectator.service.building_answers().map((a) => a.id)).toEqual([
            10,
        ]);
    });

    it('should list only questions referenced by the active survey pages', () => {
        spectator.service.question_list.set([
            new SurveyQuestion({ id: 1, title: 'One' }),
            new SurveyQuestion({ id: 2, title: 'Two' }),
            new SurveyQuestion({ id: 3, title: 'Three' }),
        ]);
        spectator.service.survey.set(
            new Survey({
                id: 5,
                pages: [{ title: '', question_order: [1, 3] }],
            } as any),
        );

        expect(spectator.service.survey_questions().map((q) => q.id)).toEqual([
            1, 3,
        ]);
    });

    it('should filter questions by type and search text', () => {
        spectator.service.question_list.set([
            new SurveyQuestion({ id: 1, title: 'Coffee rating', type: 'rating' }),
            new SurveyQuestion({ id: 2, title: 'Tea comment', type: 'comment' }),
            new SurveyQuestion({ id: 3, title: 'Coffee comment', type: 'comment' }),
        ]);

        spectator.service.question_filters.set({ type: 'comment' });
        expect(spectator.service.filtered_questions().map((q) => q.id)).toEqual([
            2, 3,
        ]);

        spectator.service.question_filters.set({ search_text: 'coffee' });
        expect(spectator.service.filtered_questions().map((q) => q.id)).toEqual([
            1, 3,
        ]);
    });

    it('should load the active survey and set its building', async () => {
        (ts_client.showSurvey as jest.Mock).mockResolvedValue(
            new Survey({ id: 9, building_id: 'bld-9' }),
        );

        await spectator.service.setSurvey('9');

        expect(ts_client.showSurvey).toHaveBeenCalledWith('9');
        expect(spectator.service.survey().id).toBe(9);
        expect(spectator.service.building()).toBe('bld-9');
        expect(spectator.service.loading()).toBe('');
    });

    it('should remove a survey after confirmation and notify', async () => {
        const close = jest.fn();
        const loading = jest.fn();
        (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'done',
            loading,
            close,
        });

        await spectator.service.removeSurvey(new Survey({ id: 7 }));

        expect(ts_client.removeSurvey).toHaveBeenCalledWith('7');
        expect(close).toHaveBeenCalled();
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should not remove a survey when confirmation is cancelled', async () => {
        (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'cancel',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeSurvey(new Survey({ id: 7 }));

        expect(ts_client.removeSurvey).not.toHaveBeenCalled();
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });

    it('should remove a question without confirmation when requested', async () => {
        await spectator.service.removeQuestion(
            new SurveyQuestion({ id: 4 }),
            false,
        );

        expect(ts_client.removeQuestion).toHaveBeenCalledWith('4');
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });
});
