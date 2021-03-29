
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
} from '@user-interfaces/components';
import { MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { BlindsTooltipComponent } from '../../app/ui/blinds-tooltip.component';

describe('BlindsTooltipComponent', () => {
    let spectator: Spectator<BlindsTooltipComponent>;
    const createComponent = createComponentFactory({
        component: BlindsTooltipComponent,
        declarations: [MockDirective(BindingDirective)],
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
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
