import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { SurveyBuilderComponent } from '../../app/surveys/survey-builder.component';
import { NewSurveyService } from '../../app/surveys/new-survey.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SurveyBuilderComponent', () => {
    let spectator: Spectator<SurveyBuilderComponent>;
    let notify_open: ReturnType<typeof vi.fn>;
    const setQuestionFilters = vi.fn();
    const editQuestion = vi.fn();
    const removeQuestion = vi.fn();
    const service_survey = signal<any>(null);
    const filtered_questions = signal<any[]>([]);
    let param_map: any;

    const createComponent = createComponentFactory({
        component: SurveyBuilderComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(NewSurveyService, {
                survey: service_survey,
                filtered_questions,
                setSurvey: vi.fn(),
                setQuestionFilters,
                editQuestion,
                removeQuestion,
            } as any),
            MockProvider(OrganisationService, {
                building_list: signal([{ id: 'bld-1' }]),
                active_levels: signal([]),
            } as any),
            MockProvider(ActivatedRoute, {
                get paramMap() {
                    return param_map;
                },
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(ts_client.addSurvey).mockResolvedValue({} as never);
        vi.mocked(ts_client.updateSurvey).mockResolvedValue({} as never);
        service_survey.set(null);
        filtered_questions.set([]);
        param_map = of(convertToParamMap({}));
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should add a page and expose the active page value', () => {
        spectator.component.addPage();
        expect(spectator.component.model().pages).toHaveLength(2);

        spectator.component.active_page.set(1);
        spectator.component.updateActivePage({ title: 'Second' });
        expect(spectator.component.active_page_value().title).toBe('Second');
        expect(spectator.component.model().pages[0].title).toBe('');
    });

    it('should remove the active page and clamp the active index', () => {
        spectator.component.addPage();
        spectator.component.active_page.set(1);
        spectator.component.removePage();

        expect(spectator.component.model().pages).toHaveLength(1);
        expect(spectator.component.active_page()).toBe(0);
    });

    it('should remove a question from the active page order', () => {
        spectator.component.updateActivePage({ question_order: [10, 20, 30] });
        spectator.component.removePageQuestion(1);
        expect(
            spectator.component.active_page_value().question_order,
        ).toEqual([10, 30]);
    });

    it('should insert a dragged question into the page order', async () => {
        filtered_questions.set([{ id: 99 }, { id: 100 }]);
        spectator.component.updateActivePage({ question_order: [] });

        await spectator.component.drop({
            previousContainer: 'bank' as any,
            container: 'page' as any,
            previousIndex: 1,
            currentIndex: 0,
        } as any);

        expect(
            spectator.component.active_page_value().question_order,
        ).toEqual([100]);
    });

    it('should push filter changes through to the service', () => {
        spectator.component.onSearchChange('coffee');
        expect(spectator.component.search_text()).toBe('coffee');
        expect(setQuestionFilters).toHaveBeenCalledWith(
            expect.objectContaining({ search_text: 'coffee' }),
        );

        spectator.component.onTypeChange('rating');
        expect(spectator.component.selected_type()).toBe('rating');
        expect(setQuestionFilters).toHaveBeenLastCalledWith({
            type: 'rating',
            search_text: 'coffee',
        });
    });

    it('should sync the model when the active survey loads', () => {
        service_survey.set({
            id: 7,
            title: 'Loaded Survey',
            building_id: 'bld-1',
            trigger: 'RESERVED',
            pages: [{ title: 'P', question_order: [1] }],
        });
        TestBed.flushEffects();

        expect(spectator.component.model().id).toBe(7);
        expect(spectator.component.model().title).toBe('Loaded Survey');
        expect(spectator.component.model().pages[0].title).toBe('P');
    });

    it('should not save when the form is invalid', async () => {
        spectator.component.model.update((m) => ({ ...m, title: '' }));
        await spectator.component.saveSurvey();

        expect(ts_client.addSurvey).not.toHaveBeenCalled();
        expect(ts_client.updateSurvey).not.toHaveBeenCalled();
    });

    it('should add and notify when saving a valid survey without an id', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            title: 'My Survey',
        }));
        await spectator.component.saveSurvey();

        expect(ts_client.addSurvey).toHaveBeenCalled();
        expect(ts_client.updateSurvey).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should add a valid survey when the user clicks Save', async () => {
        const save_survey = vi.spyOn(spectator.component, 'saveSurvey');
        spectator.component.model.update((m) => ({
            ...m,
            title: 'My Survey',
        }));
        await spectator.fixture.whenStable();

        spectator.click('button[btn]');
        await spectator.fixture.whenStable();

        expect(save_survey).toHaveBeenCalled();
        expect(ts_client.addSurvey).toHaveBeenCalled();
    });

    it('should update the survey when the model already has an id', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            id: 12,
            title: 'My Survey',
        }));
        await spectator.component.saveSurvey();

        expect(ts_client.updateSurvey).toHaveBeenCalledWith(
            '12',
            expect.objectContaining({ id: 12 }),
        );
        expect(ts_client.addSurvey).not.toHaveBeenCalled();
    });
});
