import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import * as components_mod from '@placeos/components';
import * as common_mod from '@placeos/common';
import { NewSurveyService } from '../../app/surveys/new-survey.service';
import { QuestionModalComponent } from '../../app/surveys/question-modal.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        queryQuestions: jest.fn(() => Promise.resolve([])),
        showSurvey: jest.fn(() => Promise.resolve(null)),
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

describe('NewSurveyService', () => {
    let spectator: SpectatorService<NewSurveyService>;
    let dialog_open: jest.Mock;

    const createService = createServiceFactory({
        service: NewSurveyService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(OrganisationService, {
                buildings: [{ id: 'bld-1', name: 'HQ' }] as any,
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        dialog_open = jest.fn(() => ({ afterClosed: () => of(true) }));
        spectator = createService({
            providers: [MockProvider(MatDialog, { open: dialog_open } as any)],
        });
    });

    it('should resolve the active building from the organisation list', () => {
        expect(spectator.service.building).toBeUndefined();
        spectator.service.setBuilding('bld-1');
        expect(spectator.service.building).toEqual(
            expect.objectContaining({ id: 'bld-1' }),
        );
    });

    it('should open the question modal when editing a question', () => {
        const question = new SurveyQuestion({ id: 3, title: 'Q' });

        spectator.service.editQuestion(question);

        expect(dialog_open).toHaveBeenCalledWith(QuestionModalComponent, {
            data: question,
        });
    });

    it('should remove a survey after confirmation and notify', async () => {
        (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeSurvey(new Survey({ id: 8 }));

        expect(ts_client.removeSurvey).toHaveBeenCalledWith('8');
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should not remove a survey when confirmation is cancelled', async () => {
        (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'cancel',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeSurvey(new Survey({ id: 8 }));

        expect(ts_client.removeSurvey).not.toHaveBeenCalled();
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });

    it('should remove a question without confirmation when requested', async () => {
        await spectator.service.removeQuestion(
            new SurveyQuestion({ id: 5 }),
            false,
        );

        expect(ts_client.removeQuestion).toHaveBeenCalledWith('5');
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });
});
