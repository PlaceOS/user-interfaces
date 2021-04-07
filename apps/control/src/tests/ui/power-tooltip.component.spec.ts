import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipData } from '@placeos/components';
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

    it('should allow shutting down', () => {
        expect('button:not(.inverse)').toExist();
        spectator.click('button:not(.inverse)');
        expect(spectator.inject(ControlStateService).powerOff).toBeCalled();
    });

    it('should allow cancelling', () => {
        expect('button.inverse').toExist();
        spectator.click('button.inverse');
        expect(spectator.inject(CustomTooltipData).close).toBeCalled();
    });
});
