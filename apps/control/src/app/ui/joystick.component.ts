import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { Point } from '@placeos/svg-viewer';
import { AsyncHandler } from '@placeos/common';

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
            class="relative h-48 w-48 rounded-full bg-base-300 text-white"
        >
            <div class="absolute inset-0 flex text-5xl items-center">
                <app-icon style="transform: translateX(-.5rem)">
                    chevron_left
                </app-icon>
            </div>
            <div
                class="absolute inset-0 flex text-5xl items-center justify-end"
            >
                <app-icon style="transform: translateX(.5rem)"
                    >chevron_right</app-icon
                >
            </div>
            <div class="absolute inset-0 flex text-5xl justify-center">
                <app-icon style="transform: translateY(-.5rem)"
                    >expand_less</app-icon
                >
            </div>
            <div
                class="absolute inset-0 flex text-5xl items-end justify-center"
            >
                <app-icon style="transform: translateY(.5rem)"
                    >expand_more</app-icon
                >
            </div>
            <div
                class="absolute top-12 left-12 right-12 bottom-12 bg-base-100 rounded-full flex items-center justify-center"
            >
                <div
                    thumb
                    [style.transform]="thumb_transform"
                    class="bg-neutral h-12 w-12 rounded-full"
                ></div>
            </div>
        </div>
    `,
    styles: [``],
})
export class JoystickComponent extends AsyncHandler {
    @Input() public pan: JoystickPan;
    @Input() public tilt: JoystickTilt;

    @Output() public panChange = new EventEmitter<JoystickPan>();
    @Output() public tiltChange = new EventEmitter<JoystickTilt>();

    @ViewChild('panning_control', { static: true })
    private _panning_el: ElementRef<HTMLDivElement>;

    private _box: ClientRect;

    constructor(private _renderer: Renderer2) {
        super();
    }

    public get thumb_transform() {
        return `translate(${
            this.pan === JoystickPan.Stop
                ? '0'
                : this.pan === JoystickPan.Left
                ? '-50'
                : '50'
        }%, ${
            this.tilt === JoystickTilt.Stop
                ? '0'
                : this.tilt === JoystickTilt.Up
                ? '-50'
                : '50'
        }%)`;
    }

    public startPan(event: MouseEvent | TouchEvent) {
        const move_event =
            event instanceof MouseEvent ? 'mousemove' : 'touchmove';
        const end_event = event instanceof MouseEvent ? 'mouseup' : 'touchend';
        this._box = this._panning_el.nativeElement.getBoundingClientRect();
        this.subscription(
            'on_move',
            this._renderer.listen('window', move_event, (e) =>
                this.handlePan(e)
            )
        );
        this.subscription(
            'on_end',
            this._renderer.listen('window', end_event, (_) => {
                this.unsub('on_move');
                this.unsub('on_end');
                this.tilt = JoystickTilt.Stop;
                this.pan = JoystickPan.Stop;
                this.tiltChange.emit(this.tilt);
                this.panChange.emit(this.pan);
            })
        );
        this.handlePan(event);
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
        const { tilt, pan } = this;
        this.tilt =
            angle >= 150 || angle <= -150 || (angle > -30 && angle < 30)
                ? JoystickTilt.Stop
                : angle > 0
                ? JoystickTilt.Down
                : JoystickTilt.Up;
        this.pan =
            (angle >= 60 && angle <= 120) || (angle <= -60 && angle >= -120)
                ? JoystickPan.Stop
                : angle > 90 || angle < -90
                ? JoystickPan.Left
                : JoystickPan.Right;
        if (tilt !== this.tilt) this.tiltChange.emit(this.tilt);
        if (pan !== this.pan) this.panChange.emit(this.pan);
    }
}
