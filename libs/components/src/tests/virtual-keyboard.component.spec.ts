import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { fakeAsync } from '@angular/core/testing';
import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/jest';
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
                { hostProps: { keyset: undefined } }
            ))
    );

    afterEach(() => (VirtualKeyboardComponent.enabled = false));

    it('should create component', () => {
        expect(spectator.directive).toBeTruthy();
    });

    it('show keyboard on input focus', fakeAsync(() => {
        expect('[keyboard-view]').not.toExist();
        const input = spectator.query('input');
        spectator.focus(input);
        spectator.detectChanges();
        expect('[keyboard-view]').not.toExist();
        spectator.blur(input);
        VirtualKeyboardComponent.enabled = true;
        spectator.focus(input);
        spectator.detectChanges();
        expect('[keyboard-view]').toExist();
        spectator.blur(input);
        spectator.tick(320);
        expect('[keyboard-view]').not.toExist();
    }));

    it('should update input value on key presses', fakeAsync(() => {
        VirtualKeyboardComponent.enabled = true;
        const input = spectator.query('input');
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toHaveValue('');
        spectator.click('[key="a"]');
        spectator.tick(100);
        expect(input).toHaveValue('a');
    }));

    it('should keep input field focused', fakeAsync(() => {
        VirtualKeyboardComponent.enabled = true;
        const input: HTMLInputElement = spectator.query('input');
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toBeFocused();
        spectator.click('[key="q"]');
        spectator.tick(100);
        expect(input).toBeFocused();
    }));

    it('should allow customising the displayed keys', () => {
        VirtualKeyboardComponent.enabled = true;
        spectator.focus(spectator.query('input'));
        spectator.detectChanges();
        expect('[key]').toHaveLength(39);
        expect('[row]').toHaveLength(5);
        spectator.setHostInput({
            keyset: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']],
        });
        spectator.detectChanges();
        expect('[key]').toHaveLength(10);
        expect('[row]').toHaveLength(4);
    });

    it('should handle special keys', fakeAsync(() => {
        VirtualKeyboardComponent.enabled = true;
        const input: HTMLInputElement = spectator.query('input');
        input.value = 'Testing';
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toHaveValue('Testing');
        spectator.click(document.querySelector('[key="{backspace}"]'));
        spectator.tick(100);
        expect(input).toHaveValue('Testin');
        spectator.click(document.querySelector('[key="{space}"]'));
        spectator.tick(100);
        expect(input).toHaveValue('Testin ');
        expect('[key="A"]').not.toExist();
        spectator.click(document.querySelector('[key="{caps}"]'));
        spectator.tick(100);
        expect(input).toHaveValue('Testin ');
        expect('[key="A"]').toExist();
    }));
});
