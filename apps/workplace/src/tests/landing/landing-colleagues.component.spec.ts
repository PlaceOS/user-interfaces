import { FormGroup, FormsModule } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent, UserAvatarComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { ExploreSpacesService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { LandingColleaguesComponent } from '../../app/landing/landing-colleagues.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('LandingColleaguesComponent', () => {
    let spectator: SpectatorRouting<LandingColleaguesComponent>;
    const createComponent = createRoutingFactory({
        component: LandingColleaguesComponent,
        declarations: [
            MockComponent(UserAvatarComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(LandingStateService, {
                contacts: new BehaviorSubject([]),
                search_results: new BehaviorSubject([]),
                addContact: jest.fn(),
                removeContact: jest.fn(),
                setOptions: jest.fn(),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(EventFormService, {
                newForm: jest.fn(),
                form: new FormGroup({}) as any,
            }),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
