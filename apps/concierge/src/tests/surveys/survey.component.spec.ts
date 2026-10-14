import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { SurveyComponent } from '../../app/surveys/survey.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('SurveyComponent', () => {
    let spectator: Spectator<SurveyComponent>;
    const createComponent = createComponentFactory({
        component: SurveyComponent,
        declarations: [MockComponent(ApplicationSidebarComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should render the shell with a router outlet', () => {
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('app-sidebar')).toBeTruthy();
    });
});
