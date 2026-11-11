import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SurveyOutletComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { SurveyComponent } from '../app/survey.component';

describe('SurveyComponent', () => {
    let spectator: SpectatorRouting<SurveyComponent>;

    const create_component = createRoutingFactory({
        component: SurveyComponent,
        declarations: [MockComponent(SurveyOutletComponent)],
        stubsEnabled: false,
    });

    beforeEach(() => {
        spectator = create_component();
    });

    it('should navigate to not-found when the outlet emits not_found', () => {
        const navigate = vi.spyOn(spectator.router, 'navigate');

        spectator.query(SurveyOutletComponent).not_found.emit(true);

        expect(navigate).toHaveBeenCalledWith(['/not-found']);
    });
});
