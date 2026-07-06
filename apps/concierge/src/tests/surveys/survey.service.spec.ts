import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { SurveyService } from '../../app/surveys/survey.service';

vi.mock('@placeos/ts-client', { spy: true });

const { Survey, SurveyQuestion } = ts_client;

/** Fake dialog ref shaped for `openConfirmModal` driven via MatDialog. */
const makeConfirmRef = (reason: string) => ({
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason }),
    close: vi.fn(),
});

describe('SurveyService', () => {
    let spectator: SpectatorService<SurveyService>;
    let building_list: ReturnType<typeof signal<any[] | null>>;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: SurveyService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                waitUntilInitialised: vi.fn(() => Promise.resolve()),
                building_list: null as any,
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
        building_list = signal<any[] | null>(null);
        const org: any = {
            waitUntilInitialised: vi.fn(() => Promise.resolve()),
            building_list,
        };
        spectator = createService({
            providers: [
                MockProvider(OrganisationService, org),
                MockProvider(MatDialog, { open: dialog_open } as any),
            ],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        (ts_client.showSurvey as any).mockResolvedValue(
            new Survey({ id: 9, building_id: 'bld-9' }),
        );

        await spectator.service.setSurvey('9');

        expect(ts_client.showSurvey).toHaveBeenCalledWith('9');
        expect(spectator.service.survey().id).toBe(9);
        expect(spectator.service.building()).toBe('bld-9');
        expect(spectator.service.loading()).toBe('');
    });

    it('should remove a survey after confirmation and notify', async () => {
        const ref = makeConfirmRef('done');
        dialog_open.mockReturnValue(ref);

        await spectator.service.removeSurvey(new Survey({ id: 7 }));

        expect(ts_client.removeSurvey).toHaveBeenCalledWith('7');
        expect(ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should not remove a survey when confirmation is cancelled', async () => {
        dialog_open.mockReturnValue(makeConfirmRef('cancel'));

        await spectator.service.removeSurvey(new Survey({ id: 7 }));

        expect(ts_client.removeSurvey).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should remove a question without confirmation when requested', async () => {
        await spectator.service.removeQuestion(
            new SurveyQuestion({ id: 4 }),
            false,
        );

        expect(ts_client.removeQuestion).toHaveBeenCalledWith('4');
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });
});
