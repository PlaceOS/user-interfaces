import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipData } from '@user-interfaces/components';
import { ControlStateService } from '../../app/control-state.service';

import { PowerTooltipComponent } from '../../app/ui/power-tooltip.component';

describe('PowerTooltipComponent', () => {
    let spectator: Spectator<PowerTooltipComponent>;
    const createComponent = createComponentFactory({
        component: PowerTooltipComponent,
        declarations: [],
        providers: [
            {
                provide: ControlStateService,
                useValue: { powerOff: jest.fn() },
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
