import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SurveyListingsComponent } from '../../app/surveys/survey-listings.component';
import { SurveyService } from '../../app/surveys/survey.service';

import { Survey } from '@placeos/ts-client';

describe('SurveyListingsComponent', () => {
    let spectator: Spectator<SurveyListingsComponent>;
    const setBuilding = vi.fn();
    const removeSurvey = vi.fn(() => Promise.resolve());
    let param_map: any;

    const createComponent = createComponentFactory({
        component: SurveyListingsComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(SurveyService, {
                building: signal('bld-1'),
                building_surveys: signal([]),
                setBuilding,
                removeSurvey,
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
        param_map = of(convertToParamMap({ id: 'bld-9' }));
        spectator = createComponent();
    });

    it('should set the active building from the route params', () => {
        spectator.component.ngOnInit();
        expect(setBuilding).toHaveBeenCalledWith('bld-9');
    });

    it('should default to an empty building when no id is present', () => {
        param_map = of(convertToParamMap({}));
        spectator = createComponent();
        spectator.component.ngOnInit();
        expect(setBuilding).toHaveBeenCalledWith('');
    });

    it('should delegate survey removal to the service', async () => {
        const survey = new Survey({ id: 4 });
        await spectator.component.remove(survey);
        expect(removeSurvey).toHaveBeenCalledWith(survey);
    });
});
