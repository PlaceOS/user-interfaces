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

    // `spectator.dispatchMouseEvent` builds events with the deprecated
    // `initMouseEvent`, which fails jsdom's realm check under the zoneless
    // unit-test builder. Dispatch a native MouseEvent instead.
    const mouse = (
        target: string | Document,
        type: string,
        x = 0,
        y = 0,
    ) => {
        const el =
            typeof target === 'string' ? spectator.query(target) : target;
        el.dispatchEvent(
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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for panning', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        mouse('[joystick]', 'mousedown', 0, 96);
        expect(spectator.component.pan()).toBe(JoystickPan.Left);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, 0%)');
        mouse(document, 'mousemove', 192, 96);
        expect(spectator.component.pan()).toBe(JoystickPan.Right);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, 0%)');
        mouse(document, 'mouseup');
        expect(spectator.component.pan()).toBe(JoystickPan.Stop);
    });

    it('should allow for tilting', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        mouse('[joystick]', 'mousedown', 96, 0);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(0%, -50%)');
        mouse(document, 'mousemove', 96, 192);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(0%, 50%)');
        mouse(document, 'mouseup');
        expect(spectator.component.tilt()).toBe(JoystickTilt.Stop);
    });

    it('should allow for panning and titling', () => {
        expect('[joystick]').toExist();
        const thumb: HTMLDivElement = spectator.query('[thumb]');
        mouse('[joystick]', 'mousedown', 0, 0);
        expect(spectator.component.pan()).toBe(JoystickPan.Left);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, -50%)');
        mouse(document, 'mousemove', 192, 0);
        expect(spectator.component.pan()).toBe(JoystickPan.Right);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Up);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, -50%)');
        mouse(document, 'mousemove', 0, 192);
        expect(spectator.component.pan()).toBe(JoystickPan.Left);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(-50%, 50%)');
        mouse(document, 'mousemove', 192, 192);
        expect(spectator.component.pan()).toBe(JoystickPan.Right);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Down);
        spectator.detectChanges();
        expect(thumb.style.transform).toBe('translate(50%, 50%)');
        mouse(document, 'mouseup');
        expect(spectator.component.pan()).toBe(JoystickPan.Stop);
        expect(spectator.component.tilt()).toBe(JoystickTilt.Stop);
    });
});
