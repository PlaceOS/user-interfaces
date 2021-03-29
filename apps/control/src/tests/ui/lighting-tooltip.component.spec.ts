
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
} from '@user-interfaces/components';
import { MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { LightingTooltipComponent } from '../../app/ui/lighting-tooltip.component';

describe('LightingTooltipComponent', () => {
    let spectator: Spectator<LightingTooltipComponent>;
    const createComponent = createComponentFactory({
        component: LightingTooltipComponent,
        declarations: [MockDirective(BindingDirective)],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    lights: new BehaviorSubject([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
