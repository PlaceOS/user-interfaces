import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { UserAvatarComponent } from "@placeos/components";
import { User } from "@placeos/users";
import { MockComponent } from "ng-mocks";
import { AttendeeListComponent } from "../lib/attendee-list.component";

describe('AttendeeListComponent', () => {
    let spectator: Spectator<AttendeeListComponent>;
    const createComponent = createComponentFactory({
        component: AttendeeListComponent,
        providers: [],
        declarations: [,
            MockComponent(UserAvatarComponent)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should show attendees', () => {
        expect('[attendee]').not.toExist();
        spectator.setInput({ list: [new User()] });
        spectator.detectChanges();
        expect('[attendee]').toExist();
        spectator.setInput({ list: [new User(), new User()] });
        spectator.detectChanges();
        expect('[attendee]').toHaveLength(2);
    });

    it('should allow closing the component', (done) => {
        expect('button[close]').toExist();
        spectator.component.close.subscribe(() => done());
        spectator.click('button[close]');
    });
});