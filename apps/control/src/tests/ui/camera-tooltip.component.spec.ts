
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@user-interfaces/components';
import { MockComponent, MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { CameraTooltipComponent } from '../../app/ui/camera-tooltip.component';
import { JoystickComponent } from '../../app/ui/joystick.component';

describe('CameraTooltipComponent', () => {
    let spectator: Spectator<CameraTooltipComponent>;
    const createComponent = createComponentFactory({
        component: CameraTooltipComponent,
        declarations: [
            MockDirective(BindingDirective),
            MockComponent(JoystickComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    blinds: new BehaviorSubject([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ],
        imports: [MatSelectModule, MatFormFieldModule, FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
