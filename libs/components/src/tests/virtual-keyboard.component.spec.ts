import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { fakeAsync } from '@angular/core/testing';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { VirtualKeyboardComponent } from '../lib/virtual-keyboard.component';

describe('VirtualKeyboardComponent', () => {
    let spectator: SpectatorHost<VirtualKeyboardComponent>;
    const createHost = createHostFactory({
        component: VirtualKeyboardComponent,
        imports: [PortalModule, OverlayModule],
    });

    afterEach(() => (VirtualKeyboardComponent.enabled = false));

    it('should create component', () => {
        spectator = createHost('<input keyboard />');
        expect(spectator.component).toBeTruthy();
    });

    it('show keyboard on input focus', fakeAsync(() => {
        spectator = createHost('<input keyboard />');
        expect(document.querySelector('div[keyboard]')).not.toExist();
        spectator.focus(spectator.hostElement.querySelector('input'));
        spectator.detectChanges();
        expect(document.querySelector('div[keyboard]')).not.toExist();
        VirtualKeyboardComponent.enabled = true;
        spectator.detectChanges();
        spectator.focus(document.querySelector('input'));
        spectator.tick(320);
        spectator.detectChanges();
        expect(document.querySelector('div[keyboard]')).toExist();
        spectator.blur(document.querySelector('input'));
        spectator.tick(320);
        spectator.detectChanges();
        expect(document.querySelector('div[keyboard]')).not.toExist();
    }));

    it('should update input value on key presses', fakeAsync(() => {
        spectator = createHost('<input keyboard />');
        VirtualKeyboardComponent.enabled = true;
        const input = spectator.hostElement.querySelector('input');
        spectator.focus(input);
        spectator.detectChanges();
        expect(input).toHaveValue('');
        spectator.click(document.querySelector('[key="a"]'));
        spectator.tick(100);
        expect(input).toHaveValue('a');
    }));

    it('should keep input field focused', fakeAsync(() => {
        spectator = createHost('<input keyboard />');
        VirtualKeyboardComponent.enabled = true;
        const input = spectator.hostElement.querySelector('input');
        input.focus();
        spectator.detectChanges();
        expect(input).toBeFocused();
        spectator.click(document.querySelector('[key="q"]'));
        spectator.tick(100);
        expect(input).toBeFocused();
    }));

    it('should allow customising the displayed keys', () => {
        spectator = createHost('<input keyboard />');
        VirtualKeyboardComponent.enabled = true;
        spectator.focus(spectator.hostElement.querySelector('input'));
        spectator.detectChanges();
        expect('[key]').toHaveLength(39);
        expect('[row]').toHaveLength(5);
        spectator.setInput({
            keyset: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']],
        });
        spectator.detectChanges();
        expect('[key]').toHaveLength(10);
        expect('[row]').toHaveLength(4);
    });

    it('should handle special keys', fakeAsync(() => {
        spectator = createHost('<input keyboard />');
        VirtualKeyboardComponent.enabled = true;
        const input = spectator.hostElement.querySelector('input');
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
