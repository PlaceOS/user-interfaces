import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { MockPipe } from 'ng-mocks';
import { HelpTooltipComponent } from '../../app/ui/help-tooltip.component';

describe('HelpTooltipComponent', () => {
    let spectator: Spectator<HelpTooltipComponent>;
    const createComponent = createComponentFactory({
        component: HelpTooltipComponent,
        declarations: [MockPipe(SanitizePipe)],
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
