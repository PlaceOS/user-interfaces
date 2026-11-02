import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { NewSurveyService } from '../../app/surveys/new-survey.service';
import { QuestionModalComponent } from '../../app/surveys/question-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

const { SurveyQuestion } = ts_client;

describe('NewSurveyService', () => {
    let spectator: SpectatorService<NewSurveyService>;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: NewSurveyService,
        providers: [MockProvider(MatDialog, { open: vi.fn() })],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(ts_client.removeQuestion).mockResolvedValue(
            undefined as never,
        );
        dialog_open = vi.fn(() => ({ afterClosed: () => of(true) }));
        spectator = createService({
            providers: [MockProvider(MatDialog, { open: dialog_open })],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
    });

    it('should open the question modal when editing a question', () => {
        const question = new SurveyQuestion({ id: 3, title: 'Q' });

        spectator.service.editQuestion(question);

        expect(dialog_open).toHaveBeenCalledWith(QuestionModalComponent, {
            data: question,
        });
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
