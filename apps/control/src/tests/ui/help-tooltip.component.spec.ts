import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipData, SanitizePipe } from '@placeos/components';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { HelpTooltipComponent } from '../../app/ui/help-tooltip.component';
import { MockPipe } from 'ng-mocks';

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
