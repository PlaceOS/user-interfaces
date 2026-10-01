import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import {
    JoystickComponent,
    JoystickPan,
    JoystickTilt,
} from '../../app/ui/joystick.component';

describe('JoystickComponent', () => {
    let spectator: Spectator<JoystickComponent>;
    const createComponent = createComponentFactory({
        component: JoystickComponent,
        declarations: [MockComponent(IconComponent)],
    });

    // jsdom has no PointerEvent. A MouseEvent with a pointer event type carries
    // the clientX and clientY values that the joystick reads.
    const pointer = (type: string, x = 0, y = 0) => {
        spectator.query('[joystick]').dispatchEvent(
            new MouseEvent(type, {
                clientX: x,
                clientY: y,
                bubbles: true,
                cancelable: true,
            }),
        );
    };

    beforeEach(() => {
        spectator = createComponent();
        const el = spectator.query('[joystick]');
        (el as any).getBoundingClientRect = vi.fn(() => ({
            top: 0,
            left: 0,
            bottom: 192,
            right: 192,
            height: 192,
            width: 192,
        }));
    });

    it('should allow for panning', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        pointer('pointerdown', 0, 96);
        expect(spectator.component.pan()).toBe(JoystickPan.Left);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, 0%)');
        pointer('pointermove', 192, 96);
        expect(spectator.component.pan()).toBe(JoystickPan.Right);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, 0%)');
        pointer('pointerup');
        expect(spectator.component.pan()).toBe(JoystickPan.Stop);
    });

    it('should allow for tilting', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        pointer('pointerdown', 96, 0);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(0%, -50%)');
        pointer('pointermove', 96, 192);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(0%, 50%)');
        pointer('pointerup');
        expect(spectator.component.tilt()).toBe(JoystickTilt.Stop);
    });

    it('should allow for panning and titling', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        pointer('pointerdown', 0, 0);
        expect(spectator.component.pan()).toBe(JoystickPan.Left);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, -50%)');
        pointer('pointermove', 192, 0);
        expect(spectator.component.pan()).toBe(JoystickPan.Right);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, -50%)');
        pointer('pointermove', 0, 192);
        expect(spectator.component.pan()).toBe(JoystickPan.Left);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, 50%)');
        pointer('pointermove', 192, 192);
        expect(spectator.component.pan()).toBe(JoystickPan.Right);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, 50%)');
        pointer('pointerup');
        expect(spectator.component.pan()).toBe(JoystickPan.Stop);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Stop);
    });

    it('should stop when the pointer is cancelled', () => {
        const pan = vi.fn();
        spectator.output('panChange').subscribe(pan);
        pointer('pointerdown', 0, 96);
        expect(pan).toHaveBeenLastCalledWith(JoystickPan.Left);
        pointer('pointercancel');
        expect(pan).toHaveBeenLastCalledWith(JoystickPan.Stop);
        expect(spectator.component.pan()).toBe(JoystickPan.Stop);
    });

    it('should ignore pointer moves when no gesture is active', () => {
        pointer('pointermove', 0, 96);
        expect(spectator.component.pan()).toBe(JoystickPan.Stop);
    });

    it('should emit a stop when destroyed mid-gesture', () => {
        const tilt = vi.fn();
        spectator.output('tiltChange').subscribe(tilt);
        pointer('pointerdown', 96, 0);
        expect(tilt).toHaveBeenLastCalledWith(JoystickTilt.Up);
        spectator.fixture.destroy();
        expect(tilt).toHaveBeenLastCalledWith(JoystickTilt.Stop);
    });
});
