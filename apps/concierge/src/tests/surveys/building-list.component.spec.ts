import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { BuildingListComponent } from '../../app/surveys/building-list.component';
import { SurveyService } from '../../app/surveys/survey.service';

describe('BuildingListComponent', () => {
    let spectator: Spectator<BuildingListComponent>;
    const building_list = signal<any[]>([]);
    const survey_list = signal<any[]>([]);
    const answer_list = signal<any[]>([]);

    const createComponent = createComponentFactory({
        component: BuildingListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(OrganisationService, { building_list } as any),
            MockProvider(SurveyService, {
                survey_list,
                answer_list,
            } as any),
        ],
    });

    beforeEach(() => {
        building_list.set([{ id: 'bld-1' }, { id: 'bld-2' }]);
        survey_list.set([]);
        answer_list.set([]);
        spectator = createComponent();
    });

    it('should count live, draft and answered surveys per building', () => {
        survey_list.set([
            { id: 's1', building_id: 'bld-1', trigger: 'RESERVED' },
            { id: 's2', building_id: 'bld-1', trigger: 'NONE' },
            { id: 's3', building_id: 'bld-2', trigger: 'CHECKEDIN' },
        ]);
        answer_list.set([
            { id: 'a1', survey_id: 's1' },
            { id: 'a2', survey_id: 's1' },
            { id: 'a3', survey_id: 's3' },
        ]);

        const stats = spectator.component.bld_stats();
        expect(stats['bld-1']).toEqual({ live: 1, drafts: 1, answers: 2 });
        expect(stats['bld-2']).toEqual({ live: 1, drafts: 0, answers: 1 });
    });

    it('should report zero counts for buildings without surveys', () => {
        const stats = spectator.component.bld_stats();
        expect(stats['bld-1']).toEqual({ live: 0, drafts: 0, answers: 0 });
        expect(stats['bld-2']).toEqual({ live: 0, drafts: 0, answers: 0 });
    });
});
