import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    linkedSignal,
    output,
    Renderer2,
    viewChild,
} from '@angular/core';
import { AsyncHandler, Point } from '@placeos/common';
import { IconComponent } from '@placeos/components';

/**
 * Grab point details from mouse or touch event
 * @param event Event to grab details from
 */
export function eventToPoint(event: MouseEvent | TouchEvent): Point {
    if (!event) {
        return { x: -1, y: -1 };
    }
    if (event instanceof MouseEvent) {
        return { x: event.clientX, y: event.clientY };
    }
    return event.touches && event.touches.length > 0
        ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
        : { x: -1, y: -1 };
}

export enum JoystickTilt {
    Down = 'down',
    Up = 'up',
    Stop = 'stop',
}

export enum JoystickPan {
    Left = 'left',
    Right = 'right',
    Stop = 'stop',
}

@Component({
    selector: 'joystick',
    template: `
        <div
            #panning_control
            joystick
            (mousedown)="startPan($event)"
            (touchstart)="startPan($event)"
            (contextmenu)="$event.preventDefault()"
            (click)="stopPan()"
            class="bg-base-300 relative h-48 w-48 rounded-full text-white"
        >
            <div class="absolute inset-0 flex items-center text-5xl">
                <icon style="transform: translateX(-.5rem)">
                    chevron_left
                </icon>
            </div>
            <div
                class="absolute inset-0 flex items-center justify-end text-5xl"
            >
                <icon style="transform: translateX(.5rem)">chevron_right</icon>
            </div>
            <div class="absolute inset-0 flex justify-center text-5xl">
                <icon style="transform: translateY(-.5rem)">expand_less</icon>
            </div>
            <div
                class="absolute inset-0 flex items-end justify-center text-5xl"
            >
                <icon style="transform: translateY(.5rem)">expand_more</icon>
            </div>
            <div
                class="bg-base-100 absolute top-12 right-12 bottom-12 left-12 flex items-center justify-center rounded-full"
            >
                <div
                    thumb
                    [style.transform]="thumb_transform()"
                    class="bg-neutral h-12 w-12 rounded-full"
                ></div>
            </div>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IconComponent],
})
export class JoystickComponent extends AsyncHandler {
    private _renderer = inject(Renderer2);

    public readonly panInput = input<JoystickPan>(JoystickPan.Stop, {
        alias: 'pan',
    });
    public readonly pan = linkedSignal(this.panInput);
    public readonly tiltInput = input<JoystickTilt>(JoystickTilt.Stop, {
        alias: 'tilt',
    });
    public readonly tilt = linkedSignal(this.tiltInput);

    public readonly panChange = output<JoystickPan>();
    public readonly tiltChange = output<JoystickTilt>();

    private readonly _panning_el =
        viewChild<ElementRef<HTMLDivElement>>('panning_control');

    private _box: ClientRect;

    public readonly thumb_transform = computed(() => {
        const pan = this.pan();
        const tilt = this.tilt();
        return `translate(${
            pan === JoystickPan.Stop
                ? '0'
                : pan === JoystickPan.Left
                  ? '-50'
                  : '50'
        }%, ${
            tilt === JoystickTilt.Stop
                ? '0'
                : tilt === JoystickTilt.Up
                  ? '-50'
                  : '50'
        }%)`;
    });

    public startPan(event: MouseEvent | TouchEvent) {
        const move_event =
            event instanceof MouseEvent ? 'mousemove' : 'touchmove';
        const end_event = event instanceof MouseEvent ? 'mouseup' : 'touchend';
        this._box = this._panning_el().nativeElement.getBoundingClientRect();
        this.handlePan(event);
        this.subscription(
            'on_move',
            this._renderer.listen('window', move_event, (e) =>
                this.handlePan(e),
            ),
        );
        this.subscription(
            'on_end',
            this._renderer.listen('window', end_event, (_) => {
                this.unsub('on_move');
                this.unsub('on_end');
                this.tilt.set(JoystickTilt.Stop);
                this.pan.set(JoystickPan.Stop);
                this.tiltChange.emit(this.tilt());
                this.panChange.emit(this.pan());
            }),
        );
    }

    public handlePan(event: MouseEvent | TouchEvent) {
        const point = eventToPoint(event);
        const box_point = {
            y: this._box.top + this._box.height / 2,
            x: this._box.left + this._box.width / 2,
        };
        const angle =
            (Math.atan2(point.y - box_point.y, point.x - box_point.x) * 180) /
            Math.PI;
        const { tilt: tiltInput, pan: panInput } = this;
        const tilt = tiltInput();
        const pan = panInput();
        this.tilt.set(
            angle >= 150 || angle <= -150 || (angle > -30 && angle < 30)
                ? JoystickTilt.Stop
                : angle > 0
                  ? JoystickTilt.Down
                  : JoystickTilt.Up,
        );
        this.pan.set(
            (angle >= 60 && angle <= 120) || (angle <= -60 && angle >= -120)
                ? JoystickPan.Stop
                : angle > 90 || angle < -90
                  ? JoystickPan.Left
                  : JoystickPan.Right,
        );
        const tiltValue = this.tilt();
        if (tilt !== tiltValue) this.tiltChange.emit(tiltValue);
        const panValue = this.pan();
        if (pan !== panValue) this.panChange.emit(panValue);
    }

    public stopPan() {
        this.tilt.set(JoystickTilt.Stop);
        this.pan.set(JoystickPan.Stop);
        this.tiltChange.emit(this.tilt());
        this.panChange.emit(this.pan());
    }
}
