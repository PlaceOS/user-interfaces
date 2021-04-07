
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
} from '@placeos/components';
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

    it('should list light presets', () => {
        spectator.detectChanges();
        expect('p').toContainText('No presets available');
        spectator.component.light = { states: ['One', 'Two', 'Three'], state: 'One' } as any;
        spectator.detectChanges();
        expect('p').not.toExist();
        expect('button[state]').toExist();
        expect('button[state].inverse').toContainText('One');
        spectator.component.light.state = 'Two';
        spectator.detectChanges();
        expect('button[state].inverse').not.toContainText('One');
        expect('button[state].inverse').toContainText('Two');
    })
});
