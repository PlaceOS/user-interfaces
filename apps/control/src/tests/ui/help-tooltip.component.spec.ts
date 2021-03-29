import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipData } from '@user-interfaces/components';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { HelpTooltipComponent } from '../../app/ui/help-tooltip.component';

describe('HelpTooltipComponent', () => {
    let spectator: Spectator<HelpTooltipComponent>;
    const createComponent = createComponentFactory({
        component: HelpTooltipComponent,
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
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
