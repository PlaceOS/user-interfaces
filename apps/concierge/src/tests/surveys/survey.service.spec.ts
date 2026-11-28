import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import {
    surveys as staffSurveys,
    Survey,
    SurveyAnswer,
    surveys_answers,
} from '@placeos/ts-client/staff';
import { SurveyService } from '../../app/surveys/survey.service';

vi.mock('@placeos/ts-client/staff', { spy: true });

/** Fake dialog ref shaped for `openConfirmModal` driven via MatDialog. */
const makeConfirmRef = (reason: string) => ({
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason }),
    close: vi.fn(),
});

describe('SurveyService', () => {
    let spectator: SpectatorService<SurveyService>;
    let building_list: ReturnType<typeof signal<unknown[] | null>>;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: SurveyService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                waitUntilInitialised: vi.fn(() => Promise.resolve()),
                building_list: null,
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
        vi.mocked(staffSurveys.destroy).mockResolvedValue(mockReply(''));
        dialog_open = vi.fn(() => ({ afterClosed: () => of(true) }));
        building_list = signal<unknown[] | null>(null);
        const org: unknown = {
            waitUntilInitialised: vi.fn(() => Promise.resolve()),
            building_list,
        };
        spectator = createService({
            providers: [
                MockProvider(OrganisationService, org),
                MockProvider(MatDialog, { open: dialog_open }),
            ],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
    });

    it('should filter surveys by the active building', () => {
        spectator.service.survey_list.set([
            mockData(Survey, { id: 1, building_id: 'bld-1' }),
            mockData(Survey, { id: 2, building_id: 'bld-2' }),
        ]);
        spectator.service.setBuilding('bld-1');

        expect(spectator.service.building_surveys().map((s) => s.id)).toEqual([
            1,
        ]);
    });

    it('should remove a survey after confirmation and notify', async () => {
        const ref = makeConfirmRef('done');
        dialog_open.mockReturnValue(ref);

        await spectator.service.removeSurvey(mockData(Survey, { id: 7 }));

        expect(staffSurveys.destroy).toHaveBeenCalledWith({ id: 7 });
        expect(ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should close the dialog and show the error when removal fails', async () => {
        const ref = makeConfirmRef('done');
        dialog_open.mockReturnValue(ref);
        vi.mocked(staffSurveys.destroy).mockRejectedValueOnce(
            new Error('Server down'),
        );

        await spectator.service.removeSurvey(mockData(Survey, { id: 7 }));

        expect(ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.stringContaining('Server down'),
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should not remove a survey when confirmation is cancelled', async () => {
        dialog_open.mockReturnValue(makeConfirmRef('cancel'));

        await spectator.service.removeSurvey(mockData(Survey, { id: 7 }));

        expect(staffSurveys.destroy).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should load surveys at start and answers only on request, six at a time', async () => {
        const surveys = Array.from({ length: 10 }, (_, i) =>
            mockData(Survey, { id: i, building_id: 'bld-1' }),
        );
        vi.mocked(staffSurveys.query).mockResolvedValue(mockReply(surveys));
        let active = 0;
        let max_active = 0;
        vi.mocked(surveys_answers.query).mockImplementation(
            async ({ survey_id }) => {
                max_active = Math.max(max_active, ++active);
                await new Promise((resolve) => setTimeout(resolve, 5));
                active--;
                return mockReply([
                    mockData(SurveyAnswer, { id: survey_id, survey_id }),
                ]);
            },
        );
        // The service waits 300ms after start before it loads
        building_list.set([{ id: 'bld-1' }]);

        await vi.waitFor(() =>
            expect(spectator.service.survey_list()).toHaveLength(10),
        );
        expect(surveys_answers.query).not.toHaveBeenCalled();

        await spectator.service.loadAnswers();
        await spectator.service.loadAnswers();

        expect(surveys_answers.query).toHaveBeenCalledTimes(10);
        expect(max_active).toBe(6);
        expect(spectator.service.answer_list()).toHaveLength(10);
    });
});
