import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ControlStateService } from '../../app/control-state.service';
import { JoinRoomTooltipComponent } from '../../app/ui/join-room-tooltip.component';

describe('JoinRoomTooltipComponent', () => {
    let spectator: Spectator<JoinRoomTooltipComponent>;
    const join_modes = signal<Record<string, any>>({});
    const joined_id = signal<string>('');
    const join_fn = jest.fn();
    const createComponent = createComponentFactory({
        component: JoinRoomTooltipComponent,
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    join_modes,
                    joined_id,
                    join: join_fn,
                },
            },
        ],
    });

    beforeEach(() => {
        join_modes.set({});
        joined_id.set('');
        join_fn.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should map join_modes mapping into a list with ids', () => {
        join_modes.set({
            mode_a: { name: 'Mode A' },
            mode_b: { name: 'Mode B' },
        });
        const modes = spectator.component.modes();
        expect(modes).toHaveLength(2);
        expect(modes[0]).toEqual({ name: 'Mode A', id: 'mode_a' });
        expect(modes[1]).toEqual({ name: 'Mode B', id: 'mode_b' });
    });

    it('should render a button per join mode', () => {
        expect(spectator.queryAll('button[btn]')).toHaveLength(0);
        join_modes.set({
            mode_a: { name: 'Mode A' },
            mode_b: { name: 'Mode B' },
        });
        spectator.detectChanges();
        const buttons = spectator.queryAll('button[btn]');
        expect(buttons).toHaveLength(2);
        expect(buttons[0]).toContainText('Mode A');
        expect(buttons[1]).toContainText('Mode B');
    });

    it('should mark inactive modes with inverse class', () => {
        join_modes.set({
            mode_a: { name: 'Mode A' },
            mode_b: { name: 'Mode B' },
        });
        joined_id.set('mode_a');
        spectator.detectChanges();
        const buttons = spectator.queryAll('button[btn]');
        expect(buttons[0]).not.toHaveClass('inverse');
        expect(buttons[1]).toHaveClass('inverse');
    });

    it('should call state.join with the mode id when clicked', () => {
        join_modes.set({ mode_a: { name: 'Mode A' } });
        spectator.detectChanges();
        spectator.click('button[btn]');
        expect(join_fn).toHaveBeenCalledWith('mode_a');
    });

    it('should expose joined_id via active signal', () => {
        joined_id.set('mode_x');
        expect(spectator.component.active()).toBe('mode_x');
    });
});
