import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@user-interfaces/components';
import { MockComponent } from 'ng-mocks';
import { JoystickComponent } from '../../app/ui/joystick.component';

describe('JoystickComponent', () => {
    let spectator: Spectator<JoystickComponent>;
    const createComponent = createComponentFactory({
        component: JoystickComponent,
        declarations: [MockComponent(IconComponent)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
