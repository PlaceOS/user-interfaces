import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import {
    JoystickComponent,
    JoystickPan,
    JoystickTilt
} from '../../app/ui/joystick.component';

describe('JoystickComponent', () => {
    let spectator: Spectator<JoystickComponent>;
    const createComponent = createComponentFactory({
        component: JoystickComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        spectator = createComponent();
        const el = spectator.query('[joystick]');
        (el as any).getBoundingClientRect = jest.fn(() => ({
            top: 0,
            left: 0,
            bottom: 192,
            right: 192,
            height: 192,
            width: 192,
        }));
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for panning', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        spectator.dispatchMouseEvent('[joystick]', 'mousedown', 0, 96);
        expect(spectator.component.pan).toBe(JoystickPan.Left);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, 0%)');
        spectator.dispatchMouseEvent(document, 'mousemove', 192, 96);
        expect(spectator.component.pan).toBe(JoystickPan.Right);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, 0%)');
        spectator.dispatchMouseEvent(document, 'mouseup');
        expect(spectator.component.pan).toBe(JoystickPan.Stop);
    });

    it('should allow for tilting', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        spectator.dispatchMouseEvent('[joystick]', 'mousedown', 96, 0);
        expect(spectator.component.tilt).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(0%, -50%)');
        spectator.dispatchMouseEvent(document, 'mousemove', 96, 192);
        expect(spectator.component.tilt).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(0%, 50%)');
        spectator.dispatchMouseEvent(document, 'mouseup');
        expect(spectator.component.tilt).toBe(JoystickTilt.Stop);
    });

    it('should allow for panning and titling', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        spectator.dispatchMouseEvent('[joystick]', 'mousedown', 0, 0);
        expect(spectator.component.pan).toBe(JoystickPan.Left);
        expect(spectator.component.tilt).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, -50%)');
        spectator.dispatchMouseEvent(document, 'mousemove', 192, 0);
        expect(spectator.component.pan).toBe(JoystickPan.Right);
        expect(spectator.component.tilt).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, -50%)');
        spectator.dispatchMouseEvent(document, 'mousemove', 0, 192);
        expect(spectator.component.pan).toBe(JoystickPan.Left);
        expect(spectator.component.tilt).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, 50%)');
        spectator.dispatchMouseEvent(document, 'mousemove', 192, 192);
        expect(spectator.component.pan).toBe(JoystickPan.Right);
        expect(spectator.component.tilt).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, 50%)');
        spectator.dispatchMouseEvent(document, 'mouseup');
        expect(spectator.component.pan).toBe(JoystickPan.Stop);
        expect(spectator.component.tilt).toBe(JoystickTilt.Stop);
    });
});
