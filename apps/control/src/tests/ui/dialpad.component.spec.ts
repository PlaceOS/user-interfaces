import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { DialpadComponent } from '../../app/ui/dialpad.component';

describe('DialpadComponent', () => {
    let spectator: Spectator<DialpadComponent>;
    const createComponent = createComponentFactory({
        component: DialpadComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render all twelve dialpad digits', () => {
        const buttons = spectator.queryAll('button[digit]');
        // 12 digits + 1 backspace button (shown by default)
        expect(buttons).toHaveLength(13);
        const digit_buttons = buttons.slice(0, 12);
        expect(digit_buttons.map((b) => b.textContent?.trim())).toEqual([
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '*',
            '0',
            '#',
        ]);
    });

    it('should emit the pressed digit when a digit is clicked', () => {
        let emitted: string | undefined;
        spectator.component.pressed.subscribe((v) => (emitted = v));
        spectator.click(spectator.queryAll('button[digit]')[0]);
        expect(emitted).toBe('1');
    });

    it('should emit a backspace character when the backspace button is clicked', () => {
        const spy = vi.fn();
        spectator.component.pressed.subscribe(spy);
        const buttons = spectator.queryAll('button[digit]');
        spectator.click(buttons[buttons.length - 1]);
        expect(spy).toHaveBeenCalledTimes(1);
        // The template emits a literal backspace control character (0x08)
        expect(spy).toHaveBeenCalledWith('\b');
    });

    it('should hide the backspace button when backspace is false', () => {
        spectator.setInput({ backspace: false });
        expect(spectator.queryAll('button[digit]')).toHaveLength(12);
    });

    it('should toggle absolute positioning of backspace based on inline', () => {
        const backspace = () => {
            const buttons = spectator.queryAll('button[digit]');
            return buttons[buttons.length - 1];
        };
        expect(backspace()).toHaveClass('absolute');
        spectator.setInput({ inline: true });
        expect(backspace()).not.toHaveClass('absolute');
    });
});
