import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent, mockDirective } from '@placeos/common/tests';

vi.mock('@placeos/ts-client', { spy: true });

import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@placeos/components';
import * as client from '@placeos/ts-client';
import { ControlStateService } from '../../app/control-state.service';
import { MicrophoneTooltipComponent } from '../../app/ui/microphone-tooltip.component';

describe('MicrophoneTooltipComponent', () => {
    let spectator: Spectator<MicrophoneTooltipComponent>;
    const mic_list = signal<unknown[]>([]);
    const microphones = signal<unknown[]>([]);
    const execute = vi.fn();
    const createComponent = createComponentFactory({
        component: MicrophoneTooltipComponent,
        declarations: [
            mockDirective(BindingDirective),
            mockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: { id: 'sys-1', mic_list, microphones },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: vi.fn() },
            },
        ],
        imports: [MatSliderModule, FormsModule],
    });

    beforeEach(() => {
        mic_list.set([]);
        microphones.set([]);
        execute.mockReset();
        vi.mocked(client.getModule).mockReturnValue({
            execute,
        } as unknown as ReturnType<typeof client.getModule>);
        spectator = createComponent();
    });

    it('should list microphones available', () => {
        expect('p').toExist();
        mic_list.set([
            { id: 'mic1', name: 'Microphone 1' },
            { id: 'mic2', name: 'Microphone 2' },
        ]);
        spectator.detectChanges();
        expect('p').not.toExist();
        expect(spectator.element).toContainText('Microphone 1');
        expect(`[name="mic1"] button[mute]`).toExist();
        expect(`[name="mic1"] mat-slider`).toExist();
    });

    it('should disable mixer controls that have no mixer ID', () => {
        microphones.set([
            { name: 'Lectern', mute_id: 'm1', level_id: 'l1' },
            { name: 'Ceiling' },
        ]);
        spectator.detectChanges();
        expect('[name="Lectern"] button[mute]').not.toBeDisabled();
        expect('[name="Lectern"] input').not.toBeDisabled();
        expect('[name="Ceiling"] button[mute]').toBeDisabled();
        expect('[name="Ceiling"] input').toBeDisabled();
    });

    it('should mute a microphone in a room when its toggle is turned off', async () => {
        microphones.set([
            {
                name: 'Lectern',
                falsy_value: 'off',
                rooms: [{ name: 'Room A', state: 'on' }],
            },
        ]);
        spectator.detectChanges();
        // ngModel writes its value after a microtask
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('settings-toggle button').toHaveAttribute(
            'aria-checked',
            'true',
        );
        spectator.click('settings-toggle button');
        expect(execute).toHaveBeenCalledWith('mic_room_selection', [
            'Lectern',
            'Room A',
            true,
        ]);
    });
});
