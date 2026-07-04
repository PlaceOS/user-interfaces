import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
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

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the survey outlet', () => {
        expect(spectator.query('survey-outlet')).toBeTruthy();
    });

    it('should navigate to the not-found route when the outlet reports a miss', () => {
        const navigate = jest.spyOn(spectator.router, 'navigate');

        spectator.component.notFound();

        expect(navigate).toHaveBeenCalledWith(['/not-found']);
    });

    it('should navigate to not-found when the outlet emits not_found', () => {
        const navigate = jest.spyOn(spectator.router, 'navigate');
        const outlet = spectator.query(SurveyOutletComponent);

        outlet.not_found.emit();

        expect(navigate).toHaveBeenCalledWith(['/not-found']);
    });
});
