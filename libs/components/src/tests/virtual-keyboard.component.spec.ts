import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/vitest';
import { VirtualKeyboardComponent } from '../lib/virtual-keyboard.component';

describe('VirtualKeyboardComponent', () => {
    let spectator: SpectatorDirective<VirtualKeyboardComponent>;
    const createDirective = createDirectiveFactory({
        directive: VirtualKeyboardComponent,
        imports: [PortalModule, OverlayModule],
    });

    beforeEach(
        () =>
            (spectator = createDirective(
                '<input keyboard [keyset]="keyset" />',
                { hostProps: { keyset: undefined } },
            )),
    );

    afterEach(() => (VirtualKeyboardComponent.enabled = false));

    it('should create component', () => {
        expect(spectator.directive).toBeTruthy();
    });

    it('show keyboard on input focus', async () => {
        vi.useFakeTimers();
        const input = spectator.query('input');
        const open_spy = vi.spyOn(spectator.directive, 'open');
        const close_spy = vi.spyOn(spectator.directive, 'close');
        spectator.focus(input);
        spectator.detectChanges();
        expect(open_spy).not.toHaveBeenCalled();
        spectator.blur(input);
        VirtualKeyboardComponent.enabled = true;
        spectator.focus(input);
        spectator.detectChanges();
        expect(open_spy).toHaveBeenCalled();
        spectator.blur(input);
        await vi.advanceTimersByTimeAsync(500);
        expect(close_spy).toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should update input value on key presses', async () => {
        vi.useFakeTimers();
        VirtualKeyboardComponent.enabled = true;
        const input = spectator.query('input');
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toHaveValue('');
        spectator.directive.handleKeyPress('a');
        await vi.advanceTimersByTimeAsync(100);
        expect(input).toHaveValue('a');
        vi.useRealTimers();
    });

    it('should keep input field focused', async () => {
        vi.useFakeTimers();
        VirtualKeyboardComponent.enabled = true;
        const input: HTMLInputElement = spectator.query('input');
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toBeFocused();
        spectator.directive.handleKeyPress('q');
        await vi.advanceTimersByTimeAsync(100);
        expect(input).toBeFocused();
        vi.useRealTimers();
    });

    it('should allow customising the displayed keys', () => {
        VirtualKeyboardComponent.enabled = true;
        expect(spectator.directive.keyset().flat()).toHaveLength(44);
        expect(spectator.directive.keyset()).toHaveLength(5);
        spectator.setHostInput({
            keyset: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']],
        });
        spectator.detectChanges();
        expect(spectator.directive.keyset().flat()).toHaveLength(10);
        expect(spectator.directive.keyset()).toHaveLength(4);
    });

    it('should prevent native onscreen keyboard when enabled', () => {
        const input: HTMLInputElement = spectator.query('input');
        expect(input).not.toHaveAttribute('readonly');
        expect(input).not.toHaveAttribute('inputmode');
        VirtualKeyboardComponent.enabled = true;
        expect(input).toHaveAttribute('readonly');
        expect(input).toHaveAttribute('inputmode', 'none');
        expect(input.readOnly).toBe(true);
        VirtualKeyboardComponent.enabled = false;
        expect(input).not.toHaveAttribute('readonly');
        expect(input).not.toHaveAttribute('inputmode');
        expect(input.readOnly).toBe(false);
    });

    it('should restore original native keyboard attributes when disabled', () => {
        const input: HTMLInputElement = spectator.query('input');
        input.readOnly = true;
        input.setAttribute('readonly', '');
        input.setAttribute('inputmode', 'email');
        VirtualKeyboardComponent.enabled = true;
        expect(input).toHaveAttribute('readonly');
        expect(input).toHaveAttribute('inputmode', 'none');
        VirtualKeyboardComponent.enabled = false;
        expect(input).toHaveAttribute('readonly');
        expect(input).toHaveAttribute('inputmode', 'email');
        expect(input.readOnly).toBe(true);
    });

    it('should position keyboard below inputs with more space below', () => {
        VirtualKeyboardComponent.enabled = true;
        const input: HTMLInputElement = spectator.query('input');
        vi.spyOn(input, 'getBoundingClientRect').mockReturnValue({
            top: 100,
            bottom: 120,
            height: 20,
            left: 0,
            right: 100,
            width: 100,
            x: 0,
            y: 100,
            toJSON: () => ({}),
        });
        Object.defineProperty(window, 'innerHeight', {
            configurable: true,
            value: 1000,
        });
        spectator.focus(input);
        spectator.detectChanges();
        expect((spectator.directive as any)._position).toBe('bottom');
    });

    it('should position keyboard above inputs with more space above', () => {
        VirtualKeyboardComponent.enabled = true;
        const input: HTMLInputElement = spectator.query('input');
        vi.spyOn(input, 'getBoundingClientRect').mockReturnValue({
            top: 880,
            bottom: 900,
            height: 20,
            left: 0,
            right: 100,
            width: 100,
            x: 0,
            y: 880,
            toJSON: () => ({}),
        });
        Object.defineProperty(window, 'innerHeight', {
            configurable: true,
            value: 1000,
        });
        spectator.focus(input);
        spectator.detectChanges();
        expect((spectator.directive as any)._position).toBe('top');
    });

    it('should handle special keys', async () => {
        vi.useFakeTimers();
        VirtualKeyboardComponent.enabled = true;
        const input: HTMLInputElement = spectator.query('input');
        input.value = 'Testing';
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toHaveValue('Testing');
        spectator.directive.handleKeyPress('{backspace}');
        await vi.advanceTimersByTimeAsync(100);
        expect(input).toHaveValue('Testin');
        spectator.directive.handleKeyPress('{space}');
        await vi.advanceTimersByTimeAsync(100);
        expect(input).toHaveValue('Testin ');
        expect(spectator.directive.keyset().flat()).not.toContain('A');
        spectator.directive.handleKeyPress('{caps}');
        await vi.advanceTimersByTimeAsync(100);
        expect(input).toHaveValue('Testin ');
        expect(spectator.directive.keyset().flat()).toContain('A');
        spectator.directive.handleKeyPress('{caps}');
        await vi.advanceTimersByTimeAsync(100);
        expect(input).toHaveValue('Testin ');
        expect(spectator.directive.keyset().flat()).not.toContain('A');
        vi.useRealTimers();
    });
});
