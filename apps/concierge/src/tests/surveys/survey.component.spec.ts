import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { SurveyComponent } from '../../app/surveys/survey.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('SurveyComponent', () => {
    let spectator: Spectator<SurveyComponent>;
    const createComponent = createComponentFactory({
        component: SurveyComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should render the shell with a router outlet', () => {
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('app-topbar')).toBeTruthy();
        expect(spectator.query('app-sidebar')).toBeTruthy();
    });
});
