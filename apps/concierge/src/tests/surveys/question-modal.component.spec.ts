import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import { SurveyQuestion, surveys_questions } from '@placeos/ts-client/staff';
import { QuestionModalComponent } from '../../app/surveys/question-modal.component';
import { QuestionComponent } from '../../app/surveys/question.component';
import { questionDraft } from '../../app/surveys/types';

vi.mock('@placeos/ts-client/staff', { spy: true });

describe('QuestionModalComponent', () => {
    let spectator: Spectator<QuestionModalComponent>;
    let dialog_data: unknown;
    let notify_open: ReturnType<typeof vi.fn>;
    const dialog_close = vi.fn();

    const createComponent = createComponentFactory({
        component: QuestionModalComponent,
        detectChanges: false,
        declarations: [MockComponent(QuestionComponent)],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(MatDialogRef, { close: dialog_close }),
        ],
    });

    function setQuestionEl(valid: boolean, question: unknown) {
        Object.defineProperty(spectator.component, 'question_el', {
            value: signal({ valid: () => valid, question: () => question }),
        });
    }

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(surveys_questions.create).mockResolvedValue(
            mockReply(mockData(SurveyQuestion, {})),
        );
        vi.mocked(surveys_questions.update).mockResolvedValue(
            mockReply(mockData(SurveyQuestion, {})),
        );
        dialog_data = null;
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
    });

    it('should treat existing questions as edits', () => {
        dialog_data = mockData(SurveyQuestion, { id: 5, title: 'Existing' });
        spectator = createComponent();
        spectator.component.ngOnInit();

        expect(spectator.component.is_edit()).toBe(true);
        expect(spectator.component.question().title).toBe('Existing');
    });

    it('should treat new questions as additions', () => {
        dialog_data = null;
        spectator = createComponent();
        spectator.component.ngOnInit();

        expect(spectator.component.is_edit()).toBe(false);
        expect(spectator.component.question()).toBeDefined();
    });

    it('should add a new question to the bank on save', async () => {
        dialog_data = null;
        spectator = createComponent();
        spectator.component.ngOnInit();
        const question = questionDraft({ title: 'New Q', type: 'text' });
        setQuestionEl(true, question);

        await spectator.component.save();

        expect(surveys_questions.create).toHaveBeenCalledWith({
            body: question,
        });
        expect(surveys_questions.update).not.toHaveBeenCalled();
        expect(dialog_close).toHaveBeenCalledWith(true);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should update an existing question on save', async () => {
        dialog_data = mockData(SurveyQuestion, { id: 9, title: 'Old' });
        spectator = createComponent();
        spectator.component.ngOnInit();
        const question = questionDraft({ id: 9, title: 'Updated' });
        setQuestionEl(true, question);

        await spectator.component.save();

        expect(surveys_questions.update).toHaveBeenCalledWith({
            id: 9,
            body: question,
        });
        expect(surveys_questions.create).not.toHaveBeenCalled();
        expect(dialog_close).toHaveBeenCalledWith(true);
    });

    it('should not save when the question is invalid', async () => {
        dialog_data = null;
        spectator = createComponent();
        spectator.component.ngOnInit();
        setQuestionEl(false, {});

        await spectator.component.save();

        expect(surveys_questions.create).not.toHaveBeenCalled();
        expect(dialog_close).not.toHaveBeenCalled();
    });
});
