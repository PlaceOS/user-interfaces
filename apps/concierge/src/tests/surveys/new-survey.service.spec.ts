import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { NewSurveyService } from '../../app/surveys/new-survey.service';
import { QuestionModalComponent } from '../../app/surveys/question-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

const { Survey, SurveyQuestion } = ts_client;

/** Fake dialog ref shaped for `openConfirmModal` driven via MatDialog. */
const makeConfirmRef = (reason: string) => ({
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason }),
    close: vi.fn(),
});

describe('NewSurveyService', () => {
    let spectator: SpectatorService<NewSurveyService>;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: NewSurveyService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                buildings: [{ id: 'bld-1', name: 'HQ' }] as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(ts_client.removeSurvey).mockResolvedValue(undefined as never);
        vi.mocked(ts_client.removeQuestion).mockResolvedValue(
            undefined as never,
        );
        dialog_open = vi.fn(() => ({ afterClosed: () => of(true) }));
        spectator = createService({
            providers: [MockProvider(MatDialog, { open: dialog_open } as any)],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        dialog_open.mockReturnValue(makeConfirmRef('done'));

        await spectator.service.removeSurvey(new Survey({ id: 8 }));

        expect(ts_client.removeSurvey).toHaveBeenCalledWith('8');
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should not remove a survey when confirmation is cancelled', async () => {
        dialog_open.mockReturnValue(makeConfirmRef('cancel'));

        await spectator.service.removeSurvey(new Survey({ id: 8 }));

        expect(ts_client.removeSurvey).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should remove a question without confirmation when requested', async () => {
        await spectator.service.removeQuestion(
            new SurveyQuestion({ id: 5 }),
            false,
        );

        expect(ts_client.removeQuestion).toHaveBeenCalledWith('5');
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });
});
