import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { mockComponent, mockDirective } from '@placeos/common/tests';

import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { MicrophoneTooltipComponent } from '../../app/ui/microphone-tooltip.component';

describe('MicrophoneTooltipComponent', () => {
    let spectator: Spectator<MicrophoneTooltipComponent>;
    const createComponent = createComponentFactory({
        component: MicrophoneTooltipComponent,
        declarations: [
            mockDirective(BindingDirective),
            mockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    mic_list: signal([]),
                    microphones: signal([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ],
        imports: [MatSliderModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list microphones available', async () => {
        spectator.detectChanges();
        expect('p').toContainText('');
        const service = spectator.inject(ControlStateService);
        (service as any).mic_list.set([
            { id: 'mic1', name: 'Microphone 1' },
            { id: 'mic2', name: 'Microphone 2' },
        ]);
        spectator.detectChanges();
        expect('p').not.toExist();
        expect(spectator.element).toContainText('Microphone 1');
        expect(`[name="mic1"]`).toExist();
        expect(`[name="mic1"] button[mute]`).toExist();
        expect(`[name="mic1"] mat-slider`).toExist();
    });
});
