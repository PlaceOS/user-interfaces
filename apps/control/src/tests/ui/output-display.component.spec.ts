import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';

import {
    ControlStateService,
    RoomInput,
    RoomOutput,
} from '../../app/control-state.service';
import { OutputDisplayComponent } from '../../app/ui/output-display.component';

describe('OutputDisplayComponent', () => {
    let spectator: Spectator<OutputDisplayComponent>;
    const available_inputs = signal<Partial<RoomInput>[]>([]);
    const state = {
        available_inputs,
        setMute: vi.fn(),
        switchSource: vi.fn(),
        setVolume: vi.fn(),
    };
    const createComponent = createComponentFactory({
        component: OutputDisplayComponent,
        declarations: [
            mockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        providers: [{ provide: ControlStateService, useValue: state }],
        imports: [MatSliderModule, FormsModule],
    });

    const show = (item: Partial<RoomOutput>) => {
        spectator.setInput('item', item as RoomOutput);
        spectator.detectChanges();
    };

    beforeEach(() => {
        vi.clearAllMocks();
        available_inputs.set([
            { id: 'in-1', ref: 'hdmi-1', name: 'Lectern PC', type: 'PC' },
            { id: 'in-2', name: 'Wall Plate', type: 'Display' },
        ]);
        spectator = createComponent();
    });

    it('should show the routed source found by ID or reference', () => {
        show({ id: 'out-1', name: 'Left', source: 'hdmi-1' });
        expect('[view]').toContainText('Lectern PC');
        expect('[view] icon').toHaveText('desktop_windows');
        show({ id: 'out-1', name: 'Left', source: 'in-2' });
        expect('[view]').toContainText('Wall Plate');
        expect('[view] icon').toHaveText('desktop_windows');
    });

    it('should ask for a source when nothing is routed', () => {
        show({ id: 'out-1', name: 'Left', source: '' });
        expect('[view]').toHaveClass('opacity-60');
        expect('[view] icon').toHaveText('add_to_queue');
    });

    it('should switch the source and toggle mute for its own output', () => {
        show({ id: 'out-1', name: 'Left', mute: false });
        spectator.click('[view]');
        expect(state.switchSource).toHaveBeenCalledWith('out-1');
        spectator.click('button[icon]');
        expect(state.setMute).toHaveBeenCalledWith(true, 'out-1');
    });
});
