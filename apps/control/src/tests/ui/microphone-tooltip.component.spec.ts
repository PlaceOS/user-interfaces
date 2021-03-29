
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@user-interfaces/components';
import { MockComponent, MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { MicrophoneTooltipComponent } from '../../app/ui/microphone-tooltip.component';

describe('MicrophoneTooltipComponent', () => {
    let spectator: Spectator<MicrophoneTooltipComponent>;
    const createComponent = createComponentFactory({
        component: MicrophoneTooltipComponent,
        declarations: [MockDirective(BindingDirective), MockComponent(IconComponent)],
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
        imports: [MatSliderModule, FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
