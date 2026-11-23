import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import { SurveyQuestion, surveys_questions } from '@placeos/ts-client/staff';
import { NewSurveyService } from '../../app/surveys/new-survey.service';
import { QuestionModalComponent } from '../../app/surveys/question-modal.component';

vi.mock('@placeos/ts-client/staff', { spy: true });

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
        vi.mocked(surveys_questions.destroy).mockResolvedValue(mockReply(''));
        dialog_open = vi.fn(() => ({ afterClosed: () => of(true) }));
        spectator = createService({
            providers: [MockProvider(MatDialog, { open: dialog_open })],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
    });

    it('should open the question modal when editing a question', () => {
        const question = mockData(SurveyQuestion, { id: 3, title: 'Q' });

        spectator.service.editQuestion(question);

        expect(dialog_open).toHaveBeenCalledWith(QuestionModalComponent, {
            data: question,
        });
    });

    it('should remove a question after confirmation and notify', async () => {
        dialog_open.mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of({ reason: 'done' }),
            close: vi.fn(),
        });

        await spectator.service.removeQuestion({ id: 5 });

        expect(surveys_questions.destroy).toHaveBeenCalledWith({ id: 5 });
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });
});
