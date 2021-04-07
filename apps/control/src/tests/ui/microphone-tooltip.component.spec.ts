
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@placeos/components';
import { MockComponent, MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { MicrophoneTooltipComponent } from '../../app/ui/microphone-tooltip.component';

describe('MicrophoneTooltipComponent', () => {
    let spectator: Spectator<MicrophoneTooltipComponent>;
    const createComponent = createComponentFactory({
        component: MicrophoneTooltipComponent,
        declarations: [MockDirective(BindingDirective), MockComponent(IconComponent)],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    mic_list: new BehaviorSubject([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ],
        imports: [MatSliderModule, FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list microphones available', async () => {
        spectator.detectChanges();
        expect('p').toContainText('No microphones available');
        const service = spectator.inject(ControlStateService);
        (service as any).mic_list.next([
            { id: 'mic1', name: 'Microphone 1' },
            { id: 'mic2', name: 'Microphone 2' }
        ]);
        spectator.detectChanges();
        expect('p').not.toExist();
        expect(`label[for="mic1"]`).toContainText('Microphone 1');
        expect(`[name="mic1"]`).toExist();
        expect(`[name="mic1"] button[mute]`).toExist();
        expect(`[name="mic1"] mat-slider`).toExist();
    })
});
