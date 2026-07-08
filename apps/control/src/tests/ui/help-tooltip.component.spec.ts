import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ControlStateService } from '../../app/control-state.service';

import { CustomTooltipData, SanitizePipe } from '@placeos/components';
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
                    blinds: signal([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: vi.fn() },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
