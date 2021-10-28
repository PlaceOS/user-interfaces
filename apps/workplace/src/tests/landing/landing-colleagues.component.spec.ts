import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { UserAvatarComponent } from "@placeos/components";
import { MockComponent } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { LandingColleaguesComponent } from "../../app/landing/landing-colleagues.component";
import { LandingStateService } from "../../app/landing/landing-state.service";

describe('LandingColleaguesComponent', () => {
    let spectator: Spectator<LandingColleaguesComponent>;
    const createComponent = createComponentFactory({
        component: LandingColleaguesComponent,
        declarations: [
            MockComponent(UserAvatarComponent),
        ],
        providers: [
            { provide: LandingStateService, useValue: {
                contacts: new BehaviorSubject([]),
                search_results: new BehaviorSubject([]),
                addContact: jest.fn(),
                removeContact: jest.fn(),
                setOptions: jest.fn()
            } }
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    })
});