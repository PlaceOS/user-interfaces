import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import * as ts_client from '@placeos/ts-client';
import { QuestionModalComponent } from '../../app/surveys/question-modal.component';
import { QuestionComponent } from '../../app/surveys/question.component';

vi.mock('@placeos/ts-client', { spy: true });

const { SurveyQuestion } = ts_client;

describe('QuestionModalComponent', () => {
    let spectator: Spectator<QuestionModalComponent>;
    let dialog_data: any;
    let notify_open: ReturnType<typeof vi.fn>;
    const dialog_close = vi.fn();

    const createComponent = createComponentFactory({
        component: QuestionModalComponent,
        detectChanges: false,
        declarations: [MockComponent(QuestionComponent)],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(MatDialogRef, { close: dialog_close } as any),
        ],
    });

    function setQuestionEl(valid: boolean, question: any) {
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
        vi.mocked(ts_client.addQuestion).mockResolvedValue(
            new SurveyQuestion({}) as never,
        );
        vi.mocked(ts_client.updateQuestion).mockResolvedValue(
            new SurveyQuestion({}) as never,
        );
        dialog_data = null;
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should treat existing questions as edits', () => {
        dialog_data = new SurveyQuestion({ id: 5, title: 'Existing' });
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
        const question = new SurveyQuestion({ title: 'New Q', type: 'text' });
        setQuestionEl(true, question);

        await spectator.component.save();

        expect(ts_client.addQuestion).toHaveBeenCalledWith(question);
        expect(ts_client.updateQuestion).not.toHaveBeenCalled();
        expect(dialog_close).toHaveBeenCalledWith(true);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should update an existing question on save', async () => {
        dialog_data = new SurveyQuestion({ id: 9, title: 'Old' });
        spectator = createComponent();
        spectator.component.ngOnInit();
        const question = new SurveyQuestion({ id: 9, title: 'Updated' });
        setQuestionEl(true, question);

        await spectator.component.save();

        expect(ts_client.updateQuestion).toHaveBeenCalledWith('9', question);
        expect(ts_client.addQuestion).not.toHaveBeenCalled();
        expect(dialog_close).toHaveBeenCalledWith(true);
    });

    it('should not save when the question is invalid', async () => {
        dialog_data = null;
        spectator = createComponent();
        spectator.component.ngOnInit();
        setQuestionEl(false, {});

        await spectator.component.save();

        expect(ts_client.addQuestion).not.toHaveBeenCalled();
        expect(dialog_close).not.toHaveBeenCalled();
    });
});
