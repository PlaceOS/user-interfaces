
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
} from '@placeos/components';
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

    it('should list blinds presets', () => {
        spectator.detectChanges();
        expect('p').toContainText('No presets available');
        spectator.component.blind = { states: ['One', 'Two', 'Three'], state: 'One' } as any;
        spectator.detectChanges();
        expect('p').not.toExist();
        expect('button[state]').toExist();
        expect('button[state].inverse').toContainText('One');
        spectator.component.blind.state = 'Two';
        spectator.detectChanges();
        expect('button[state].inverse').not.toContainText('One');
        expect('button[state].inverse').toContainText('Two');
    })
});
