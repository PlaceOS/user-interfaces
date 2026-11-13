import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ControlStateService } from '../../app/control-state.service';

import { CustomTooltipData } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { PowerTooltipComponent } from '../../app/ui/power-tooltip.component';

describe('PowerTooltipComponent', () => {
    let spectator: Spectator<PowerTooltipComponent>;
    const createComponent = createComponentFactory({
        component: PowerTooltipComponent,
        providers: [
            MockProvider(ControlStateService, {
                powerOff: vi.fn(),
            }),
            MockProvider(CustomTooltipData, { close: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should power off with unlink set when confirmed', () => {
        spectator.click('button:not(.inverse)');
        expect(
            spectator.inject(ControlStateService).powerOff,
        ).toHaveBeenCalledWith(true);
    });

    it('should close without powering off when cancelled', () => {
        spectator.click('button.inverse');
        expect(spectator.inject(CustomTooltipData).close).toHaveBeenCalled();
        expect(
            spectator.inject(ControlStateService).powerOff,
        ).not.toHaveBeenCalled();
    });
});
